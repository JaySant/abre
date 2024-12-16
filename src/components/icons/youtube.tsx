import { SVGProps } from "react";

export const YoutubeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.927 2.708h6.146c1.824 0 3.293 0 4.45.155 1.2.162 2.21.507 3.012 1.31.803.802 1.148 1.813 1.31 3.013C25 8.342 25 9.811 25 11.636v1.145c0 1.824 0 3.293-.155 4.45-.162 1.2-.507 2.21-1.31 3.012-.802.803-1.812 1.148-3.013 1.31-1.156.155-2.625.155-4.449.155H9.927c-1.824 0-3.293 0-4.45-.155-1.2-.162-2.21-.507-3.013-1.31-.802-.802-1.147-1.812-1.309-3.013C1 16.074 1 14.605 1 12.781v-1.146c0-1.824 0-3.293.155-4.45.162-1.2.507-2.21 1.31-3.013.802-.802 1.813-1.147 3.013-1.309 1.156-.155 2.625-.155 4.449-.155zM5.744 4.846c-.978.131-1.496.372-1.865.74-.37.37-.61.888-.741 1.866C3.002 8.46 3 9.794 3 11.708v1c0 1.914.002 3.25.138 4.256.131.978.372 1.496.74 1.865.37.37.888.61 1.866.742 1.007.135 2.342.137 4.256.137h6c1.914 0 3.249-.002 4.256-.137.978-.132 1.496-.373 1.865-.742.37-.369.61-.887.742-1.865.135-1.007.137-2.342.137-4.256v-1c0-1.914-.002-3.249-.137-4.256-.132-.978-.373-1.496-.742-1.865-.369-.37-.887-.61-1.865-.74-1.007-.137-2.342-.139-4.256-.139h-6c-1.914 0-3.249.002-4.256.138zm4.057 2.326l8.695 5.037-8.695 5.036V7.172zm2 3.47v3.134l2.705-1.568-2.705-1.566z"
        fill="#177873"
      />
    </svg>
  );
};
