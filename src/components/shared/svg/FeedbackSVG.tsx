const FeedbackSVG = ({
  number,
  className,
}: {
  number: number;
  className?: string;
}) => {
  switch (number) {
    case 1: {
      return (
        <svg
          className={className}
          width="81"
          height="34"
          viewBox="0 0 81 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.5705 26.5441C32.2243 26.5576 34.8285 26.6255 37.6391 26.8101C40.1266 26.9729 41.9324 27.1765 44.0098 27.4073C47.0295 27.7438 49.3079 28.0641 51.7736 28.5337C54.0465 28.9681 57.0309 29.1744 58.7852 30.3796C59.1735 30.6456 59.5102 30.9931 59.1382 31.0636C58.9237 31.1044 58.1009 31.0935 57.6935 31.0636M49.9678 15.8192C51.3907 15.4256 53.0526 15.0103 53.8401 14.7497C54.8395 14.4212 55.0893 14.3126 57.0689 13.6449C58.7933 13.0613 57.5143 13.5119 59.8117 12.76C61.6664 12.1546 62.5951 12.1981 63.0622 12.2849C64.0751 12.4749 64.3439 13.1373 64.4553 13.9761C64.5068 14.3751 64.6318 14.6302 64.4987 16.1992C64.3331 18.1672 64.4634 18.7644 64.553 19.5489C64.6942 20.7541 64.6779 20.7188 64.7513 21.4951C64.83 22.3013 64.83 23.1645 64.6291 23.816C64.4254 24.4702 64.2054 24.9995 64.0534 25.3633C63.5944 26.4599 63.4152 26.6309 63.3011 27.2634C63.2278 27.6733 63.1436 28.1836 63.3908 28.7238C63.4722 28.9029 63.7031 29.4133 64.2299 29.5625C64.4879 29.6358 65.5469 29.6385 65.68 29.6033M24.4795 31.7287C36.6018 31.3948 46.0356 32.3937 52.7023 32.3042C55.9311 32.2607 59.2984 32.4317 59.3826 31.9947C59.5265 31.2292 50.2285 28.5229 40.6262 28.3682C29.4599 28.189 26.022 27.6977 21.6499 26.9974C21.2833 26.9377 19.8984 26.5495 18.6411 27.2172C17.4897 27.828 16.523 29.2612 16.8705 30.1787C17.3621 31.4763 20.4116 31.5821 22.5325 31.1505C24.2813 30.7949 24.8054 30.195 28.4605 27.8796C32.9168 25.0565 35.1435 23.645 36.1564 23.0587C38.0953 21.9403 39.3173 21.3241 39.9609 19.8312C40.0913 19.5299 40.9141 17.6162 39.8279 16.1612C39.0648 15.1406 37.4273 14.4321 36.1999 15.1433C35.0811 15.792 34.6439 17.4261 35.1381 18.4142C35.6432 19.4267 36.4624 20.0084 40.4814 20.9476C40.9127 21.0484 41.9658 21.2495 42.9814 21.4476C43.7174 21.5915 45.4115 21.5304 46.4814 21.0663C47.068 20.8111 48.1522 20.0948 48.5611 19.5081C49.8211 17.7003 49.6881 15.7948 50.3534 15.0103C50.9997 14.2448 51.8171 14.0575 53.2292 13.463C54.8395 12.7817 55.2414 12.8713 57.9189 12.0488C60.2298 11.3403 61.6854 10.735 62.033 10.5884C63.2849 10.0645 64.6861 9.73604 65.9705 9.09543C67.2143 8.47381 68.0534 8.12636 68.8898 6.96185C69.2048 6.52211 69.2428 5.49061 69.2102 5.2816C69.1314 4.78485 68.2679 4.18495 67.9285 4.10894C67.475 4.00851 66.5137 3.74521 65.8728 4.22024C65.0092 4.86086 64.6345 5.45804 64.1484 6.69584C63.4043 8.58783 64.6372 10.3495 65.2536 12.7545C65.9189 15.3469 65.6664 15.2166 65.8836 18.2812C66.033 20.4066 66.109 21.468 66.3697 22.5266C66.6386 23.6097 66.864 24.0386 66.8558 24.9588C66.8477 25.803 66.6521 26.0337 66.1036 27.9664C65.3813 30.5045 65.4302 31.1234 65.7044 31.6364C65.7832 31.7857 65.9923 32.3449 66.644 32.4535C67.2604 32.5566 67.8633 32.5322 68.048 32.5186C70.9237 32.3422 73.0907 32.3422 77.4248 32.562C77.6148 32.5729 79.7466 32.144 79.6814 31.4572C79.6271 30.8953 78.0846 30.4909 75.7004 29.6006C73.6637 28.8405 71.6786 28.0696 70.8776 26.3296C70.5598 25.6401 70.5381 25.0348 70.5245 24.5163C70.4404 21.4327 70.3996 19.8936 70.6576 16.5141C71.217 9.18229 70.2095 9.04114 70.4404 5.6942C70.5055 4.73599 70.2747 4.16323 69.4682 3.01772C68.3412 1.4189 68.0153 1.55734 67.7655 1.42704C66.2367 0.628988 65.7642 1.16374 65.0771 1.32661C61.1287 2.27124 56.5829 3.43303 53.2998 4.47811C46.2013 6.66597 43.3255 8.00692 40.8869 9.92605C38.7091 11.6416 37.1422 13.1346 33.7206 14.5244C32.0125 15.2193 30.4456 15.6129 29.9867 15.6645C26.7742 16.0282 25.1394 15.0265 23.0865 15.9522C21.9758 16.4516 20.971 17.285 19.6811 18.8702C18.4944 20.3279 18.5922 21.0771 17.267 23.1455C16.7212 24.0006 15.7816 25.423 13.9839 26.1423C12.7375 26.6418 11.6404 26.5739 11.1652 26.5413C10.1794 26.4708 8.79447 26.3703 8.41158 25.5804C7.91735 24.5571 9.20182 22.5836 10.9316 21.9322C12.3057 21.4164 13.9486 21.7394 15.0457 22.7601C16.0477 23.6966 16.3845 25.0022 16.2949 26.0663C16.1455 27.847 14.8013 28.9274 13.8509 29.6928C12.0233 31.1614 10.0572 31.4925 9.30501 31.5821C7.14614 31.84 2.56771 31.6093 1.31041 28.6966C0.0856905 25.8627 2.68176 22.0462 5.6553 20.5396C9.20996 18.7372 13.8916 19.9316 15.8739 22.7275C16.1129 23.0668 17.0905 24.4431 17.0688 26.2753C17.0416 28.5229 15.5291 29.4947 15.8522 30.4882C16.4116 32.1956 21.7015 31.8047 24.4795 31.7287Z"
            stroke="currentColor"
          />
        </svg>
      );
    }
    case 2: {
      return (
        <svg
          className={className}
          width="75"
          height="81"
          viewBox="0 0 75 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M42.5338 38.5407C42.5962 41.8007 43.0633 45.0418 43.0633 45.0418C43.3539 47.0451 43.7367 48.8584 42.7972 49.6184C42.3681 49.9659 42.0911 49.7487 40.7415 50.1477C40.0898 50.3405 39.0416 50.6526 38.1536 51.3421C36.8229 52.3763 36.3912 53.8421 36.2282 54.3932C36.0191 55.1071 35.3837 57.2597 36.6274 59.2358C37.5426 60.6907 38.9709 61.2445 39.5466 61.4236C40.4183 61.6951 41.0701 61.6435 42.3328 61.5567C47.2507 61.2201 45.8549 61.4182 47.7069 61.2255C48.193 61.1739 50.3247 60.9486 53.6133 60.4302C53.8468 60.3922 56.5596 59.9578 59.9839 59.0376C60.9371 58.7825 62.8108 58.2559 63.5006 56.9149C63.5902 56.7385 63.7966 56.3259 63.6337 55.9866C63.3947 55.4898 62.4687 55.3595 61.8414 55.5875C60.9126 55.9296 60.5841 57.0886 60.3804 57.8433C60.1604 58.6603 59.84 60.3867 60.7796 63.8802C61.4748 66.4617 61.8142 66.1278 62.1075 67.9248C62.5284 70.5117 62.6753 70.6674 62.6753 73C62.6753 73.8342 62.6753 74.5 62.3709 75.6855C62.2626 76.1075 62.1617 76.6145 62.1753 77C62.1916 77.4859 62.3926 77.5829 62.9032 77.7403C63.506 77.9276 63.9339 77.8477 65.1753 77.6073C66.3238 77.4642 66.7439 77.3724 67.6753 77.5C68.7615 77.6466 68.7606 77.6513 70.2705 77.8055C72.1753 78 73.8387 78.2289 74.0533 77.6073C74.227 77.1024 73.3758 76.3216 72.3288 75.8158C71.6753 75.5 71.3235 75.5026 70.2705 75C68.1753 74 67.0525 73.0063 66.8869 72.6968C66.0749 71.1849 66.1591 69.7435 66.2243 69.1816C66.0152 62.7103 65.9066 58.1907 65.9582 56.3802C65.9636 56.22 65.9772 55.7857 65.8251 55.2537C65.3173 53.4702 63.4979 52.5392 62.838 52.2026C58.7348 50.1043 50.2731 51.9149 47.3783 52.6016C42.8325 53.6793 40.3559 54.2683 37.2276 55.9838C33.1515 58.2206 31.0334 59.3851 28.6681 61.6218C27.7829 62.4606 26.5636 63.7337 24.4889 64.4069C22.7917 64.9579 22.1236 64.5887 20.2418 64.738C15.237 65.1343 14.4739 68.1854 9.16227 68.7826C8.54041 68.8532 7.5764 68.9835 5.64564 69.2468C2.8106 69.6322 2.18329 69.7462 1.66462 70.3081C0.877108 71.1605 0.961304 72.3738 1.06721 73.8885C1.14868 75.0449 1.30074 77.2463 2.92464 78.4651C3.38086 78.8071 3.78004 78.9428 4.51596 79.1953C6.27021 79.7925 8.14124 79.8603 8.23085 79.5265C8.30689 79.2469 7.01969 79.0867 6.24033 77.9358C5.58588 76.9694 5.45011 75.5443 5.90904 74.5535C6.61508 73.028 8.64905 72.6941 11.351 72.2327C14.4956 71.6952 17.6131 71.0084 20.774 70.5741C27.6226 69.6322 32.7279 67.3656 34.1101 66.7277C38.9193 64.5073 42.0612 61.9448 44.3287 60.0963C46.9167 57.9871 48.2772 56.4752 49.3716 54.9225C50.1401 53.8313 50.6614 52.1836 51.2969 50.0799C52.0056 47.7373 51.8807 46.6895 52.136 44.2872C52.2935 42.8187 52.174 43.2557 52.3967 42.026C52.4646 41.6569 52.1849 43.3968 52.4944 41.4479C52.6031 40.7611 53.3878 38.7171 53.7246 37.7996C53.9174 37.2703 54.0016 36.893 53.9228 36.5727C53.8169 36.1384 53.5209 35.5629 53.1109 35.229C52.9968 35.1367 52.7741 34.8816 52.4809 34.6807C51.8345 34.2409 52.136 34.4499 50.6098 33.1633C48.0844 31.0324 47.544 29.6942 46.1862 29.7811C44.0436 29.9168 41.9526 32.5987 41.3416 36.3474C41.3715 36.665 41.4666 37.0287 41.7408 37.2106C42.3763 37.6313 43.6227 36.8468 44.1957 36.3474C45.8359 34.925 45.2059 33.0873 46.2514 28.4537C46.6723 26.5861 46.7483 27.0069 47.6445 23.6111C48.4727 20.4704 48.8882 18.9015 49.0375 17.5741C49.3607 14.7103 49.8087 10.758 48.0409 7.69069C47.8155 7.2998 47.1122 6.15158 46.914 4.50661C46.7863 3.45339 46.5908 1.45283 46.9927 1.36325C47.2969 1.29539 47.9893 2.58205 49.635 6.2303C51.0742 9.41709 51.8182 11.0051 51.8916 11.4692C52.4347 14.9818 51.8128 15.769 52.0898 19.0969C52.1251 19.5366 52.5542 20.5926 52.4401 21.9797C52.3967 22.5117 52.3342 23.2908 51.8889 24.1377C51.4653 24.9466 51.7151 24.4363 50.694 25.8614C50.5202 26.1029 49.9228 26.7951 49.8223 27.6719C49.7408 28.3804 50.0205 28.8961 50.2975 29.1106C50.7483 29.4635 52.0192 28.9016 52.7524 28.0492C54.303 26.2468 53.3498 23.288 53.2168 22.8754C52.6736 21.1898 51.6445 20.1338 50.7619 19.2272C49.3824 17.8129 48.6465 17.1506 47.5114 16.7733C46.121 16.3091 44.011 16.9796 44.1685 16.9117C44.5677 16.738 45.4611 14.7293 45.8929 14.6587C47.2534 14.4389 47.5684 19.2136 48.231 18.7549C48.6193 18.4861 48.0572 14.9519 47.7096 12.7939C47.267 10.0523 47.419 9.80797 46.9791 8.41545C46.6478 7.36495 46.2867 6.63204 45.9825 6.02671C45.3851 4.82692 44.3695 3.23352 44.0708 3.3041C43.544 3.42897 44.4048 7.38666 44.5243 8.54574C44.7198 10.4649 44.9913 11.7325 44.9886 13.9855C44.9859 15.4622 44.8691 16.3173 44.2581 16.8385C43.6526 17.3542 43.1719 17.0258 42.2676 17.4356C40.6329 18.1767 40.0789 20.218 39.8779 20.9509C39.6363 21.8358 39.2696 23.1849 39.9431 24.5991C40.66 26.1057 42.0803 26.6893 42.3328 26.787C43.8725 27.3896 44.6247 26.6404 45.1869 27.1182C46.5039 28.2528 42.417 32.4032 42.5338 38.5407Z"
            stroke="currentColor"
            stroke-width="0.75"
          />
        </svg>
      );
    }
    case 3: {
      return (
        <svg
          className={className}
          width="31"
          height="96"
          viewBox="0 0 31 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7288 71.3244C21.9651 72.2201 22.1769 73.4389 22.0927 74.8722C22.0384 75.8114 21.9053 76.015 21.7614 77.3912C21.6012 78.9167 21.6175 80.0758 21.6283 81.0395C21.6446 82.3234 21.6609 83.5151 21.8944 85.0514C22.2339 87.2855 22.6114 87.4728 22.4593 88.6671C22.367 89.3783 22.2067 90.6215 21.297 91.5852C20.8598 92.0466 20.2027 92.5 19.6052 93.5423C19.3418 94.0038 19.3337 94.1558 19.3717 94.2725C19.5971 94.9348 21.5659 95.1031 23.054 94.4381C23.4016 94.2834 24.409 93.8328 24.7729 92.8501C24.9875 92.272 24.8816 91.7806 24.811 91.3192C24.811 91.3192 24.5584 89.6769 24.8761 87.0737C24.9929 86.1237 25.0907 86.3815 25.9705 83.1595C26.3833 81.6502 26.5897 80.8956 26.701 80.2414C26.9671 78.6562 26.8639 77.8065 26.8666 75.8983C26.8721 73.3277 26.8748 72.0437 27.1328 70.7923C27.6026 68.504 27.5917 68.6968 28.6535 65.1109C28.8653 64.3943 29.6338 62.8281 29.87 61.517C30.2122 59.6331 30.31 58.3981 29.9352 56.4871C29.6827 55.1895 29.5876 54.2313 29.2889 53.6124C28.8327 52.6624 28.3195 51.6227 27.2332 50.651C26.9698 50.4148 26.4973 49.9968 25.7723 49.633C25.164 49.3263 23.665 48.5744 21.9569 49.0684C21.6799 49.1498 19.5998 49.7525 19.2359 51.5223C19.2142 51.6227 18.9752 52.8823 19.7655 53.7455C21.0391 55.1353 23.6759 54.063 23.8795 53.9789C25.3541 53.3573 26.1226 52.1955 26.6983 51.2916C27.0051 50.8138 27.6949 49.3751 27.9203 46.3159C28.1538 43.1644 28.0968 42.6243 28.2842 41.0417C28.314 40.792 28.8137 39.2067 28.982 38.786C29.775 36.78 29.9298 35.8109 29.9787 35.4689C30.2366 33.5932 30.2285 31.2262 30.2448 30.5937C30.3181 27.6539 30.2122 26.0497 29.9135 23.9623C29.9135 23.9623 28.7838 18.8048 26.9671 12.5886C26.9671 12.5886 26.128 9.71944 24.3466 5.25956C23.4912 3.12056 23.0404 1.28557 22.7471 1.34529C22.2964 1.43758 22.0574 4.74924 22.2502 6.41864C22.5924 9.3937 23.2115 10.1999 23.942 13.6826C24.5095 16.3943 24.4715 17.7271 24.5231 20.2977C26.4159 22.8113 26.2502 23.4547 26.4973 24.193C26.481 24.516 26.6684 24.9829 26.6956 26.0171C26.7091 26.5003 26.8612 28.0964 26.147 29.9504C25.593 31.3891 24.7186 32.3717 23.2577 32.8277C21.8076 33.2811 21.3649 33.015 19.8958 32.6513C18.6141 32.3337 17.5088 29.5785 17.4735 26.3021C17.4491 24.0898 17.0879 23.5985 17.7397 21.9889C18.1144 21.0605 19.3337 20.1539 21.1775 19.7847C22.9264 19.4318 24.3194 20.2787 24.6127 20.5475C27.4532 23.1479 27.1708 30.0644 24.8245 31.9645C23.2957 33.2023 22.7444 33.1752 20.4308 32.7897C20.0261 32.7219 19.054 32.369 18.6113 31.4325C17.4898 29.0492 17.6989 28.5334 17.574 27.1138C16.6752 20.447 18.6548 22.9362 18.3561 18.6582C18.1389 15.542 20.1999 12.0919 20.1999 12.0919C20.9739 7.28999 21.8727 3.62274 21.4871 3.47073C20.9983 3.278 19.035 7.81931 17.8782 10.3682C17.0526 12.1842 15.8931 15.1728 15.092 20.2516C13.946 27.4938 13.7097 31.7881 15.4721 36.723C16.3873 39.2882 16.5991 40.0835 17.574 43.1346C17.9216 44.2285 18.5434 45.051 17.5088 50.4962C16.6181 55.1733 15.9392 56.4219 15.5835 57.7602C15.1517 59.3861 18.5326 60.2602 19.4722 59.7173C20.0234 59.3997 20.2787 58.4306 20.0017 57.7276C19.3283 56.012 15.4097 55.7189 12.7023 56.2021C12.7023 56.2021 6.99691 57.22 2.22296 65.4258C1.83735 66.0882 0.992796 67.5404 1.55763 68.6696C1.62009 68.7945 1.67986 68.8786 1.72059 68.9329C2.46465 69.9563 4.07769 70.1164 5.0743 70.13C6.29901 70.1463 8.21346 69.9617 11.7763 68.5393C13.7749 67.7413 14.7525 67.1658 17.0173 66.5496C19.3717 65.909 20.0614 66.0529 20.4009 66.4166C21.1015 67.1658 20.0017 68.5176 20.8001 69.997C21.2916 70.9091 22.3425 71.5659 22.7906 71.3244C23.3065 71.0448 22.5571 69.8314 22.8558 67.6761C23.0486 66.2863 23.4668 66.0176 23.9176 63.6967C24.257 61.9459 24.1158 61.5957 23.9176 61.441C23.4505 61.0745 22.6168 61.7423 21.3975 62.1712C19.2577 62.9231 18.3045 62.106 15.426 62.1712C14.1551 62.201 12.0967 62.2472 9.98401 63.2977C7.82243 64.3726 7.4694 65.5724 4.47686 67.3422C3.4015 67.9774 2.4728 68.4009 1.88895 68.6479"
            stroke="currentColor"
          />
        </svg>
      );
    }
    case 4: {
      return (
        <svg
          className={className}
          width="72"
          height="53"
          viewBox="0 0 72 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.83261 20.1691C6.40083 19.8624 3.63911 22.9596 2.89233 24.5964C2.32206 25.8451 2.14284 26.3907 2.14284 26.3907C1.7708 27.4167 1.91744 27.3543 0.915397 28.5595C0.0654278 29.5829 -1.01808 31.673 -1.56119 33.9233C-2.09887 36.1519 -2.53879 37.9733 -3.74993 40.1585C-4.22787 41.0217 -5.25706 42.7128 -5.80561 44.9332C-5.93324 45.449 -6.0826 46.1819 -5.67255 46.7248C-5.30866 47.208 -4.46683 47.5825 -3.88027 47.1889C-3.25841 46.7709 -3.23397 45.7014 -3.61415 45.3974C-4.12468 44.9929 -5.53404 45.8236 -6.33785 46.7356C-6.75876 47.2134 -7.02761 47.5201 -6.99774 47.9164C-6.95429 48.5109 -6.16677 48.7661 -3.30457 50.0826C-0.309313 51.4615 -0.920309 51.2444 -0.295731 51.4317C1.6296 52.0071 1.7002 52.1266 2.44698 52.2487C3.90795 52.493 4.37231 52.493 5.14624 52.4252C6.0994 52.3437 6.23519 52.2786 6.2895 51.8958C6.38997 51.1982 4.69275 50.164 3.48704 49.5071C1.263 48.2965 0.896399 48.2014 -0.227842 47.3681C-0.613451 47.0831 -1.5286 46.6786 -1.50416 45.4625C-1.48786 44.6292 -1.14298 44.0456 -0.923024 43.7714C-0.317454 42.8648 0.399448 41.4533 1.49925 39.8924C3.08785 37.634 3.8835 36.5048 4.68459 35.514C6.87062 32.8131 7.6011 32.957 11.7831 29.0128C14.2895 26.6513 16.0655 24.6778 16.6928 23.9721C19.5143 20.7989 18.8897 20.9617 21.4695 18.136C22.3194 17.2049 23.164 16.0567 24.853 13.7575C25.0051 13.5485 25.9555 12.2266 25.98 10.5734C25.9881 10.1038 25.9175 9.81339 25.7139 9.64509C25.2251 9.23792 24.0655 9.6098 23.5251 10.3074C22.9603 11.0349 23.145 12.023 23.259 12.6962C23.6663 15.0849 23.5957 17.5361 23.9895 19.9248C24.7879 24.7756 24.5027 24.0209 24.7852 25.0986C25.5319 27.9379 26.352 31.046 28.8313 32.3272C29.3934 32.6177 30.8436 32.6991 33.7411 32.8565C37.4451 33.0601 39.0445 31.1926 39.4682 30.7447C40.5164 29.6426 40.7961 27.11 39.5632 26.1247C38.8164 25.5275 38.6834 25.4189 37.4396 25.313C36.3236 25.2153 34.849 26.0161 34.3548 27.0367C33.6922 28.4048 34.0099 29.5449 34.4715 30.5357C34.8463 31.3392 35.1667 31.5862 36.9916 33.6519C37.7519 34.5124 37.8144 34.6372 38.4526 35.3756C41.2876 38.6546 44.2258 41.2117 44.2258 41.2117C47.5931 44.1406 50.5123 46.0027 52.7853 47.1808C57.5891 49.6727 60.2069 50.3839 63.1017 51.1602C64.9075 51.6434 65.2877 51.7194 67.8892 52.1429C69.82 52.4577 71.137 52.2569 71.5009 51.828C71.7534 51.5321 71.4819 50.9431 70.8519 50.6852C69.3692 50.0799 68.1716 49.9061 67.6448 49.7786C66.0969 49.404 65.2035 49.3931 61.9177 48.1526C58.7975 46.9745 56.2775 45.7883 55.0392 44.9929C53.8661 44.2383 50.8871 42.235 47.8076 38.956C47.3623 38.4809 45.3528 36.3446 45.6189 36.0379C45.809 35.818 47.0093 36.7029 49.3338 38.0276C50.4825 38.6818 52.0684 39.4581 55.2401 41.0135C58.4526 42.5879 60.0168 43.3018 60.9455 43.7334C66.5368 46.3366 70.0807 45.6661 70.9659 45.601C73.0542 45.4435 66.8464 44.1895 64.2639 42.8729C61.9856 41.7111 60.6712 41.1981 59.0555 40.1368C54.8654 37.3788 49.3528 33.1334 47.8755 32.2485C43.8049 29.8163 42.8463 32.3245 43.8945 34.5477C44.7744 36.4152 47.1749 40.0716 47.8755 42.33C48.7472 45.1368 48.3725 46.0136 47.0799 47.1184C45.179 48.7416 42.7594 48.2177 42.5666 48.1797C39.9027 47.664 38.4634 45.3594 37.6569 44.0673C36.5679 42.3246 36.2801 40.7475 36.0656 39.5559C35.7424 37.7779 35.5605 36.7762 36.1307 35.9076C36.7689 34.9385 38.6752 35.1557 40.5544 33.7957C41.8416 32.8647 42.1376 32.3598 42.7648 31.3419C43.7832 29.6942 42.8653 27.0693 42.3005 26.5454C42.0181 26.2821 42.086 26.1246 40.1335 24.6453C37.5836 22.7098 36.5978 21.9118 35.2672 20.788C34.0235 19.7375 33.3609 18.2364 32.4484 16.3417C32.2801 15.9942 32.1063 15.8422 30.6236 12.2076C29.2387 8.81446 29.2305 9.66952 29.2305 8.61359C29.2305 6.52345 29.0078 4.56903 28.014 3.3068C27.4383 2.57661 25.1327 1.10808 23.3459 1.00764C21.7274 0.915351 20.1361 1.67269 19.1205 2.53318C17.445 3.95285 17.092 6.03756 15.7586 9.11034C14.4443 12.1397 13.684 14.6207 13.0594 16.7597C12.5923 18.3613 12.5244 18.6517 10.4932 26.4884C9.6079 29.9086 9.23315 33.584 8.72263 37.1237C8.61672 37.8539 8.23926 38.8284 8.89914 39.8219C9.24945 40.3485 9.23043 40.3593 11.7749 41.6569C13.5292 42.5526 13.9962 42.9218 14.5176 43.2475C15.5794 43.9099 15.9867 44.3849 15.4898 44.8165C14.9005 45.3268 12.6385 44.9359 11.5088 44.7514C10.1266 44.5233 9.73825 44.3523 7.72602 43.8881C7.17476 43.7606 5.51555 43.4674 5.07292 42.6069C5.11093 41.8306 5.15981 40.4923 5.13809 38.8257C5.04033 31.1383 3.58479 28.907 4.87197 24.7077C5.73008 21.9308 7.14218 20.3863 6.83261 20.1691Z"
            stroke="currentColor"
            stroke-width="0.75"
          />
        </svg>
      );
    }
    case 5: {
      return;
    }
  }
};

export default FeedbackSVG;
