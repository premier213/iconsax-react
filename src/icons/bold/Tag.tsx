import * as React from "react";
import type { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.83 8.7 15.3 4.17a4.75 4.75 0 0 0-3.6-1.39l-5 .24c-2 .09-3.59 1.68-3.69 3.67l-.24 5c-.06 1.34.44 2.65 1.39 3.6l4.53 4.53a4.78 4.78 0 0 0 6.75 0l4.39-4.39a4.74 4.74 0 0 0 0-6.73M9.5 12.38a2.88 2.88 0 1 1 .002-5.762A2.88 2.88 0 0 1 9.5 12.38"
    />
  </svg>
);
export default SvgTag;
