import * as React from "react";
import type { SVGProps } from "react";
const SvgCardCoin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 15.7v.61H2v-.61c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M2 16.31v3.49c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-3.49z"
    />
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <path d="M22 14.25a.75.75 0 0 1 .75.75A7.745 7.745 0 0 1 15 22.75a.75.75 0 0 1-.643-1.136l1.05-1.75a.75.75 0 1 1 1.286.772l-.271.452A6.246 6.246 0 0 0 21.25 15a.75.75 0 0 1 .75-.75M7.578 2.912A6.246 6.246 0 0 0 2.75 9a.75.75 0 0 1-1.5 0A7.745 7.745 0 0 1 9 1.25a.75.75 0 0 1 .643 1.136l-1.05 1.75a.75.75 0 0 1-1.286-.772z" />
    </g>
    <path
      fill="currentColor"
      d="M23 6.5h-9c0 2.48 2.02 4.5 4.5 4.5A4.5 4.5 0 0 0 23 6.5"
      opacity={0.4}
    />
    <path fill="currentColor" d="M23 6.5a4.5 4.5 0 0 0-9 0z" />
  </svg>
);
export default SvgCardCoin;
