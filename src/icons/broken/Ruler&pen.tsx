import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerpen = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M14.47 2q-3 0-3 3v14q0 3 3 3h4q3 0 3-3V5q0-3-3-3M11.47 6h5M11.47 18h4M11.47 13.95l5 .05M11.47 10h3M2.53 9.02V4.95C2.53 3.33 3.86 2 5.49 2c1.62 0 2.95 1.33 2.95 2.95v12.96c0 .45-.19 1.13-.42 1.52l-.82 1.36c-.94 1.57-2.49 1.57-3.43 0l-.82-1.36c-.23-.39-.42-1.07-.42-1.52v-3.96M8.44 7H2.53"
    />
  </svg>
);
export default SvgRulerpen;
