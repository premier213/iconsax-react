import * as React from "react";
import type { SVGProps } from "react";
const SvgPath2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.15 22H9.87c-1.53 0-2.67-1.24-2.38-2.57l.7-3.08h7.64l.7 3.08c.32 1.41-.75 2.57-2.38 2.57"
    />
    <path
      fill="currentColor"
      d="m18.77 13.74-2.94 2.61H8.19l-2.94-2.61c-1.71-1.4-1.71-2.48-.41-4.13l5.19-6.57c.36-.45.78-.76 1.23-.92a2.27 2.27 0 0 1 1.5 0c.45.16.87.47 1.23.92l5.19 6.57c1.3 1.65 1.24 2.67-.41 4.13"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.76 2.12v4.85c0 .41-.34.75-.75.75s-.75-.34-.75-.75V2.12a2.27 2.27 0 0 1 1.5 0"
    />
  </svg>
);
export default SvgPath2;
