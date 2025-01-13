import { IconSvgProps } from "@/types";

export function DownloadIcon({ size = 24, width = 24, height = 24, ...props }: IconSvgProps) {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0768 15.1104L8.99713 12.7713C8.65929 12.3901 8.07498 12.3559 7.69467 12.6947C7.31344 13.0325 7.27928 13.6169 7.61805 13.9972L11.3104 18.151C11.4848 18.3486 11.7359 18.4612 11.9999 18.4612C12.2639 18.4612 12.515 18.3486 12.6894 18.151L16.3817 13.9972C16.7205 13.6169 16.6864 13.0325 16.3051 12.6947C15.9248 12.3559 15.3405 12.3901 15.0027 12.7713L12.923 15.1104V6.46116C12.923 5.95162 12.5094 5.53809 11.9999 5.53809C11.4904 5.53809 11.0768 5.95162 11.0768 6.46116V15.1104Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6231 24 24 18.6231 24 12C24 5.37692 18.6231 0 12 0C5.37692 0 0 5.37692 0 12C0 18.6231 5.37692 24 12 24ZM12 22.1538C6.396 22.1538 1.84615 17.604 1.84615 12C1.84615 6.396 6.396 1.84615 12 1.84615C17.604 1.84615 22.1538 6.396 22.1538 12C22.1538 17.604 17.604 22.1538 12 22.1538Z"
        fill="currentColor"
      />
    </svg>
  );
}
