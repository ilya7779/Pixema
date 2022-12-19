import { FC, SVGProps } from 'react';

// Меняем значение fill или stroke на "currentColor"

export const IconFilter: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 6L19 6M10 12H19M14 18H19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"/>
    </svg>
  );
};