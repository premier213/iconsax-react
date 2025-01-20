import * as React from "react";
import type { SVGProps } from "react";
const SvgDropbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 5 7.56 2 2 6l4.44 3zM12 5l4.44-3L22 6l-4.44 3zM12 14l-4.44 3L2 13l4.44-3 2.08 1.5 1.62 1.16zM12 14l4.44 3L22 13l-4.44-3zM5 18.77V15.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M19 15.5v3.27l-6.58 3.04c-.27.12-.57.12-.84 0l-1.9-.88"
    />
  </svg>
);
export default SvgDropbox;
