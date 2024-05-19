import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as yup from "yup";
import Button from "../../shared/button/Button";
import CheckBox from "../../shared/checkBox/CheckBox";
import Input from "../../shared/input/Input";
import styles from "./Modal.module.scss";

interface IBook {
  direction: string;
  phone: string;
  comment: string;
  policy: boolean;
}
const phoneRegExp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
const schema = yup.object().shape({
  direction: yup.string().required("Обязательное поле"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Некорректный номер телефона")
    .required("Обязательное поле"),
  policy: yup.boolean().oneOf([true], "Подтвердите согласие"),
});
const Modal: React.FC<{
  portal: Element | DocumentFragment;
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
  dir?: string;
}> = ({ portal, isOpened, setIsOpened, dir }) => {
  const [errors, setErrors] = useState<{ [key in keyof IBook]?: string }>({});
  const [formData, setFormData] = useState<IBook>({
    direction: dir || "",
    phone: "",
    comment: "",
    policy: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await schema.validateSync(formData, { abortEarly: false });
      console.log(formData);
      setIsOpened(false);
    } catch (validationErrors) {
      const newErrors: { [key in keyof IBook]?: string } = {};
      if (validationErrors instanceof yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) newErrors[error.path as keyof IBook] = error.message;
        });
        setErrors(newErrors);
      }
    }
  };
  if (!isOpened) return null;
  return ReactDOM.createPortal(
    <div
      className={styles.container}
      onClick={() => {
        setErrors({});
        setFormData({
          direction: dir || "",
          comment: "",
          phone: "",
          policy: false,
        });
        setIsOpened(false);
      }}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        <span className={styles.h}>
          ЗАПИСАТЬСЯ <br /> НА ТРЕНИРОВКУ
        </span>
        <form className={styles.form} onSubmit={handleSubmit} id="form">
          <Input
            placeholder="Направление"
            className={styles.input}
            disabled
            value={formData.direction}
            error={errors.direction}
            onChange={(e) =>
              setFormData({ ...formData, direction: e.target.value })
            }
          />
          <Input
            placeholder="Номер телефона"
            className={styles.input}
            error={errors.phone}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <Input
            placeholder="Комментарий"
            className={styles.input}
            error={errors.comment}
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
          />
          <Button variant="feedback" type="submit" className={styles.btn}>
            ОТПРАВИТЬ
          </Button>
          <CheckBox
            label="принимаю условия политики конфиденциальности"
            className={styles.policy}
            checked={formData.policy}
            isError={errors.policy === "Подтвердите согласие"}
            onChange={(e) =>
              setFormData({ ...formData, policy: e.target.checked })
            }
          />
        </form>
      </div>
    </div>,
    portal
  );
};

export default Modal;
