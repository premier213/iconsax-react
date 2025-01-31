import * as React from "react";
import type { SVGProps } from "react";
const SvgPaypal = (props: SVGProps<SVGSVGElement>) => (
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
      d="m6.17 6.98.41-2.47A3 3 0 0 1 9.54 2H14c2.76 0 5 2.24 5 5 0 .18-.01.35-.03.52a5.92 5.92 0 0 1-1.73 3.72A5.94 5.94 0 0 1 13 13H9.87c-.5 0-.92.37-.99.86l-.76 5.28c-.06.39-.34.71-.71.81-.09.04-.18.05-.28.05H5.18a.998.998 0 0 1-.99-1.16l1.24-7.46"
    />
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M21 11c0 1.38-.56 2.63-1.46 3.54-.91.9-2.16 1.46-3.54 1.46h-2.15a1 1 0 0 0-.99.84l-.72 4.32a1 1 0 0 1-.99.84H8.22c-.63 0-1.1-.58-.98-1.2l.17-.85c.37-.1.65-.42.71-.81l.76-5.28c.07-.49.49-.86.99-.86H13c1.66 0 3.16-.67 4.24-1.76.97-.96 1.61-2.27 1.73-3.72C20.18 8.21 21 9.51 21 11Z"
    />
  </svg>
);
export default SvgPaypal;
