import * as React from "react";
import type { SVGProps } from "react";
const SvgSafeHome = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23 17.56v-2.19c0-.42-.31-.88-.69-1.04l-1.79-.73-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44.73.93 1.77 1.65 2.95 1.97.16.04.34.04.51 0 .99-.27 1.87-.82 2.56-1.53"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.03 11.01c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77l-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-.55-3.32"
    />
  </svg>
);
export default SvgSafeHome;
