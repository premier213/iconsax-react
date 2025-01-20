import * as React from "react";
import type { SVGProps } from "react";
const SvgTrello = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9.55 17.72H7.1c-.67 0-1.22-.55-1.22-1.22V7.52c0-.67.55-1.22 1.22-1.22h2.45c.67 0 1.22.55 1.22 1.22v8.98c0 .67-.55 1.22-1.22 1.22ZM17.14 13.63H14.2c-.54 0-.98-.44-.98-.98V7.26c0-.54.44-.98.98-.98h2.94c.54 0 .98.44.98.98v5.39c0 .54-.44.98-.98.98Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 12.83V15c0 5 2 7 7 7h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9"
    />
  </svg>
);
export default SvgTrello;
