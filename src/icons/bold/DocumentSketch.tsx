import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentSketch = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1m-8.1 5.39-1.86 1.86c-.23.23-.55.36-.89.36s-.65-.13-.89-.36L6.9 15.58c-.41-.41-.48-1.1-.15-1.58l.85-1.28c.21-.33.65-.56 1.04-.56h2.01c.39 0 .82.23 1.04.56l.86 1.28c.31.48.25 1.17-.15 1.58"
    />
    <path
      fill="currentColor"
      d="M17.43 8.81c.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67"
    />
  </svg>
);
export default SvgDocumentSketch;
