import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 7.52v5.88c0 .34-.33.58-.65.48l-3.93-1.22a3.02 3.02 0 0 0-3.78 3.79l1.21 3.9c.1.32-.14.65-.48.65H7.52C4.07 21 2 18.94 2 15.48V7.52C2 4.06 4.07 2 7.52 2h7.96C18.93 2 21 4.06 21 7.52"
    />
    <path
      fill="currentColor"
      d="m21.96 18.839-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03l-1.85-5.95c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
    />
  </svg>
);
export default SvgMouseSquare;
