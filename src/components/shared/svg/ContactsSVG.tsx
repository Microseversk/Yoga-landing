interface IContactsSVGProps {
  variant: "vk" | "wa" | "tg";
}

const ContactsSvg = ({ variant }: IContactsSVGProps) => {
  switch (variant) {
    case "vk":
      return (
        <svg
          width="35"
          height="35"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5085 15.1566C29.6583 14.6543 29.5085 14.2859 28.8006 14.2859H26.4555C25.8588 14.2859 25.5861 14.6046 25.4364 14.9546C25.4364 14.9546 24.244 17.8918 22.5544 19.7962C22.009 20.3504 21.7599 20.5254 21.4626 20.5254C21.3139 20.5254 21.0979 20.3504 21.0979 19.8481V15.1566C21.0979 14.5538 20.9258 14.2859 20.4285 14.2859H16.7434C16.3713 14.2859 16.1467 14.5646 16.1467 14.8303C16.1467 15.4007 16.9915 15.5325 17.0782 17.1399V20.627C17.0782 21.3907 16.9423 21.53 16.6429 21.53C15.8484 21.53 13.9149 18.582 12.7675 15.2073C12.544 14.5516 12.3184 14.287 11.7195 14.287H9.37546C8.70496 14.287 8.57129 14.6056 8.57129 14.9556C8.57129 15.5844 9.36583 18.6955 12.2724 22.8101C14.2101 25.6199 16.9381 27.143 19.4233 27.143C20.9129 27.143 21.0969 26.8049 21.0969 26.2216V24.0978C21.0969 23.4216 21.2391 23.2855 21.7107 23.2855C22.0572 23.2855 22.6539 23.4626 24.0451 24.8162C25.6342 26.4214 25.8973 27.142 26.7902 27.142H29.1343C29.8037 27.142 30.1384 26.8038 29.9459 26.1362C29.7353 25.4719 28.976 24.5051 27.9686 23.3611C27.4211 22.7086 26.6031 22.0064 26.3539 21.6554C26.0063 21.2027 26.1069 21.0029 26.3539 20.601C26.3539 20.601 29.2113 16.5382 29.5085 15.1566Z"
            fill="currentColor"
          />
        </svg>
      );

    case "wa":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.0859 2.90685C16.1634 1.98268 15.0658 1.24988 13.8567 0.750912C12.6476 0.251943 11.3511 -0.00327912 10.0421 3.18051e-05C4.55351 3.18051e-05 0.0854131 4.44582 0.0831946 9.91059C0.0831946 11.6571 0.541319 13.3617 1.41209 14.8653L0 20L5.27897 18.6211C6.73919 19.4122 8.37513 19.8271 10.0377 19.8278H10.0421C15.5296 19.8278 19.9977 15.382 20 9.91722C20.0037 8.61504 19.7481 7.32503 19.248 6.12175C18.7478 4.91847 18.013 3.82578 17.0859 2.90685ZM10.0421 18.1552H10.0388C8.5563 18.1554 7.10108 17.7584 5.82583 17.006L5.52412 16.8271L2.39156 17.6452L3.22684 14.6059L3.0305 14.2946C2.20165 12.9813 1.76287 11.4615 1.76483 9.91059C1.76705 5.36876 5.47974 1.67369 10.0455 1.67369C11.1328 1.67128 12.2098 1.88354 13.2142 2.29816C14.2186 2.71279 15.1304 3.32156 15.8968 4.08923C16.6673 4.85324 17.278 5.76166 17.6937 6.762C18.1093 7.76233 18.3216 8.83473 18.3183 9.91722C18.3161 14.4591 14.6034 18.1552 10.0421 18.1552ZM14.5823 11.985C14.3327 11.8602 13.1103 11.2619 12.8818 11.1791C12.6544 11.0963 12.4892 11.0554 12.3228 11.3027C12.1564 11.55 11.6794 12.1075 11.5341 12.2731C11.3888 12.4387 11.2435 12.4586 10.995 12.335C10.7465 12.2113 9.94452 11.9497 8.99388 11.1062C8.254 10.4493 7.75484 9.63901 7.60952 9.39061C7.46421 9.14221 7.59399 9.00863 7.71934 8.88498C7.83138 8.77458 7.96782 8.59573 8.09205 8.45111C8.21629 8.30649 8.25733 8.20382 8.34053 8.03822C8.42372 7.87262 8.38268 7.72799 8.31945 7.60435C8.25733 7.4796 7.75927 6.26079 7.55184 5.76509C7.35107 5.28485 7.14585 5.34889 6.99278 5.34226C6.83424 5.33581 6.67557 5.33286 6.5169 5.33343C6.39073 5.33663 6.26658 5.36574 6.15225 5.41893C6.03791 5.47213 5.93584 5.54826 5.85246 5.64255C5.62395 5.89095 4.98169 6.48931 4.98169 7.70812C4.98169 8.92693 5.87353 10.1049 5.99777 10.2705C6.12201 10.4361 7.75262 12.9366 10.2485 14.0097C10.843 14.2647 11.3067 14.4171 11.6672 14.5319C12.2629 14.7207 12.8053 14.6931 13.2346 14.6302C13.7127 14.5595 14.7066 14.0318 14.914 13.4533C15.1214 12.8748 15.1214 12.3791 15.0593 12.2753C14.9972 12.1716 14.8297 12.1086 14.5823 11.985Z"
            fill="currentColor"
          />
        </svg>
      );

    case "tg":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2213 0.541185L1.50517 7.52335C0.296111 8.01967 0.303105 8.709 1.28334 9.01639L5.83178 10.4665L16.3556 3.68045C16.8532 3.37102 17.3078 3.53748 16.9341 3.87653L8.40777 11.741H8.40577L8.40777 11.7421L8.09402 16.5337C8.55366 16.5337 8.7565 16.3182 9.0143 16.0639L11.2236 13.8683L15.819 17.3374C16.6663 17.8143 17.2748 17.5692 17.4857 16.5357L20.5023 2.00563C20.8111 0.740326 20.0297 0.167414 19.2213 0.541185Z"
            fill="currentColor"
          />
        </svg>
      );
  }
};

export default ContactsSvg;