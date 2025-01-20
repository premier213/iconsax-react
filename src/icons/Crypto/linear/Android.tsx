import * as React from "react";
import type { SVGProps } from "react";
const SvgAndroid = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 18v3c0 .5-.4 1-1 1s-1-.5-1-1v-3zM15 18v3c0 .5-.4 1-1 1s-1-.5-1-1v-3zM17 11v5c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2M5 11v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1M21 11v4c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1M13 18h-2M9.6 7h4.8c.9 0 1.6-.75 1.6-1.714C16 2.929 14.2 1 12 1S8 2.929 8 5.286C8 6.25 8.7 7 9.6 7"
    />
  </svg>
);
export default SvgAndroid;
