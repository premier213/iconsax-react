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
      fill="currentColor"
      d="M21.47 5v14c0 1.66-1.35 3-3 3h-4c-1.66 0-3-1.34-3-3V5c0-1.66 1.34-3 3-3h4c1.65 0 3 1.34 3 3"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17.22 6c0 .41-.34.75-.75.75h-5v-1.5h5c.41 0 .75.34.75.75M16.12 18c0 .41-.33.75-.75.75h-3.9v-1.5h3.9c.42 0 .75.34.75.75M17.22 14.01c-.01.41-.34.74-.75.74h-.01l-4.99-.05v-1.5l5 .05c.42 0 .75.34.75.76M15.03 10c0 .41-.34.75-.75.75h-2.81v-1.5h2.81c.41 0 .75.34.75.75"
    />
    <path
      fill="currentColor"
      d="M8.44 4.95v12.96c0 .45-.19 1.14-.42 1.52l-.82 1.36c-.94 1.58-2.48 1.58-3.43 0l-.81-1.36c-.24-.38-.43-1.07-.43-1.52V4.95C2.53 3.33 3.86 2 5.49 2c1.62 0 2.95 1.33 2.95 2.95"
      opacity={0.4}
    />
    <path fill="currentColor" d="M8.44 6.25H2.53v1.5h5.91z" />
  </svg>
);
export default SvgRulerpen;
