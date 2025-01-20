import * as React from "react";
import type { SVGProps } from "react";
const SvgGemini = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 2a19.45 19.45 0 0 0 20 0M2 22a19.45 19.45 0 0 1 20 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.3 3.58.13.24a17.63 17.63 0 0 1-.1 16.59M18.67 20.41a17.68 17.68 0 0 1-.1-16.59l.13-.24"
    />
  </svg>
);
export default SvgGemini;
