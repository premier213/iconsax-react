import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m20.96 17.839-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03l-1.85-5.95c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9"
    />
    <path
      fill="currentColor"
      d="M21 11.5c0 .43-.03.86-.08 1.28-.04.3-.35.48-.64.39l-4.85-1.51a3.03 3.03 0 0 0-3.03.74c-.8.8-1.09 1.97-.75 3.05l1.5 4.83c.09.29-.1.6-.4.64-.42.05-.83.08-1.25.08-5.34 0-9.64-4.39-9.5-9.77.14-4.96 4.27-9.09 9.23-9.23C16.61 1.86 21 6.16 21 11.5"
    />
  </svg>
);
export default SvgMouseCircle;
