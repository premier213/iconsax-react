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
      d="M15.48 2H7.53C4.07 2 2.01 4.06 2.01 7.52v7.95c0 3.46 2.07 5.52 5.52 5.52h7.95c3.46 0 5.52-2.06 5.52-5.52V7.52C21 4.06 18.93 2 15.48 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m21.96 18.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L14.08 16c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
    />
  </svg>
);
export default SvgMouseSquare;
