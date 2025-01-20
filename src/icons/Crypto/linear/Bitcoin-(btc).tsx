import * as React from "react";
import type { SVGProps } from "react";
const SvgBitcoinBtc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9 8.38h4.685c1.038 0 1.88.935 1.88 1.882 0 1.038-.842 1.88-1.88 1.88H9z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9 12.13h5.354c1.188 0 2.146.843 2.146 1.882s-.958 1.88-2.146 1.88H9zM12.277 15.88v1.882M9.935 15.88v1.882M12.277 6.5v1.88M9.935 6.5v1.88M10.777 8.38H7.5M10.777 15.88H7.5"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);
export default SvgBitcoinBtc;
