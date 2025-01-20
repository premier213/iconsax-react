import * as React from "react";
import type { SVGProps } from "react";
const SvgConvert = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M12.005 21.984c5.512 0 9.98-4.468 9.98-9.979s-4.468-9.98-9.98-9.98c-5.511 0-9.98 4.469-9.98 9.98s4.469 9.98 9.98 9.98"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m6.137 4.022 8.163 8.183.02-4.54M17.863 19.978 9.7 11.805l-.02 4.531"
    />
  </svg>
);
export default SvgConvert;
