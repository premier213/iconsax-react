import * as React from "react";
import type { SVGProps } from "react";
const SvgShield = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.41 6.96V9.8L7.4 19.34l-2.63-1.97c-.65-.49-1.18-1.54-1.18-2.35V6.96c0-1.12.86-2.36 1.91-2.75l5.47-2.05c.57-.21 1.49-.21 2.06 0l5.47 2.05c1.05.39 1.91 1.63 1.91 2.75"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M20.41 11.17v3.85c0 .81-.53 1.86-1.18 2.35l-5.47 4.09c-.48.36-1.12.54-1.76.54s-1.28-.18-1.76-.54l-1.92-1.43z"
    />
  </svg>
);
export default SvgShield;
