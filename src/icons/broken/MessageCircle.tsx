import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.25 10.18v2.63c0 .17-.01.33-.03.49-.15 1.77-1.2 2.65-3.12 2.65h-.26a.54.54 0 0 0-.42.21l-.79 1.05c-.35.47-.91.47-1.26 0l-.79-1.05a.63.63 0 0 0-.42-.21H9.9c-2.1 0-3.15-.52-3.15-3.15v-2.63c0-1.92.89-2.97 2.65-3.12.16-.02.32-.03.49-.03h4.2c2.11.02 3.16 1.07 3.16 3.16"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
    />
  </svg>
);
export default SvgMessageCircle;
