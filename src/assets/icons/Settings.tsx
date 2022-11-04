import {FC, SVGProps} from 'react';

// Меняем значение fill или stroke на "currentColor"

export const Settings: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.2264 8.73077C19.4169 9.19491 19.8683 9.49854 20.37 9.5C21.0509 9.50549 21.6 10.0591 21.6 10.74V12.88C21.6 13.5648 21.0448 14.12 20.36 14.12C19.8583 14.1215 19.4069 14.4251 19.2164 14.8892C19.026 15.3534 19.134 15.8865 19.49 16.24C19.9676 16.7295 19.9676 17.5106 19.49 18L17.99 19.5C17.5005 19.9776 16.7195 19.9776 16.23 19.5C16.0042 19.2608 15.6889 19.1267 15.36 19.13C15.0294 19.1273 14.7114 19.2568 14.4767 19.4896C14.242 19.7225 14.11 20.0394 14.11 20.37C14.11 21.0548 13.5548 21.61 12.87 21.61H10.73C10.0452 21.61 9.49 21.0548 9.49 20.37C9.49001 20.0394 9.358 19.7225 9.12328 19.4896C8.88857 19.2568 8.5706 19.1273 8.24 19.13C7.91111 19.1267 7.59576 19.2608 7.37 19.5C6.88055 19.9776 6.09945 19.9776 5.61 19.5L4.11 18C3.63237 17.5106 3.63237 16.7295 4.11 16.24C4.46605 15.8865 4.57402 15.3534 4.38355 14.8892C4.19308 14.4251 3.7417 14.1215 3.24 14.12C2.91113 14.12 2.59573 13.9894 2.36319 13.7568C2.13064 13.5243 2 13.2089 2 12.88V10.74C2 10.0552 2.55517 9.5 3.24 9.5C3.7417 9.49854 4.19308 9.19491 4.38355 8.73077C4.57402 8.26664 4.46605 7.73346 4.11 7.38C3.63237 6.89055 3.63237 6.10945 4.11 5.62L5.61 4.12C6.09945 3.64237 6.88055 3.64237 7.37 4.12C7.59576 4.35919 7.91111 4.49331 8.24 4.49C8.57234 4.49269 8.89185 4.36186 9.12685 4.12685C9.36186 3.89185 9.49269 3.57234 9.49 3.24C9.49 2.55517 10.0452 2 10.73 2H12.88C13.5648 2 14.12 2.55517 14.12 3.24C14.1173 3.57234 14.2481 3.89185 14.4831 4.12685C14.7182 4.36186 15.0377 4.49269 15.37 4.49C15.6989 4.49331 16.0142 4.35919 16.24 4.12C16.7295 3.64237 17.5105 3.64237 18 4.12L19.5 5.62C19.9776 6.10945 19.9776 6.89055 19.5 7.38C19.144 7.73346 19.036 8.26664 19.2264 8.73077ZM8.33984 11.8101C8.33984 9.89919 9.88894 8.3501 11.7998 8.3501C12.7175 8.3501 13.5976 8.71463 14.2464 9.36351C14.8953 10.0124 15.2598 10.8924 15.2598 11.8101C15.2598 13.721 13.7107 15.2701 11.7998 15.2701C9.88894 15.2701 8.33984 13.721 8.33984 11.8101Z"
        fill="currentColor"
      />
    </svg>
  );
};