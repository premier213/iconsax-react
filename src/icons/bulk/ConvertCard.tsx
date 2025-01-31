import * as React from "react";
import type { SVGProps } from "react";
const SvgConvertCard = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M22 14.25a.75.75 0 0 1 .75.75A7.745 7.745 0 0 1 15 22.75a.75.75 0 0 1-.643-1.136l1.05-1.75a.75.75 0 1 1 1.286.772l-.271.452A6.246 6.246 0 0 0 21.25 15a.75.75 0 0 1 .75-.75M7.578 2.912A6.246 6.246 0 0 0 2.75 9a.75.75 0 0 1-1.5 0A7.745 7.745 0 0 1 9 1.25a.75.75 0 0 1 .643 1.136l-1.05 1.75a.75.75 0 0 1-1.286-.772z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 15.7v.61H2v-.61c0-1.76.44-2.2 2.22-2.2h5.56c1.78 0 2.22.44 2.22 2.2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M2 16.31v3.49c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2v-3.49z"
    />
    <path
      fill="currentColor"
      d="M22 4.2v.61H12V4.2c0-1.76.44-2.2 2.22-2.2h5.56C21.56 2 22 2.44 22 4.2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 4.81V8.3c0 1.76.44 2.2 2.22 2.2h5.56c1.78 0 2.22-.44 2.22-2.2V4.81z"
    />
  </svg>
);
export default SvgConvertCard;
