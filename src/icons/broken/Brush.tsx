import * as React from "react";
import type { SVGProps } from "react";
const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.98 8.32H4V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v4.32h-3.07M4 11.88c0 1.08.58 2.08 1.53 2.61l2.96 1.67c.63.35 1.02 1.02 1.02 1.74V20c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-2.1c0-.72.39-1.39 1.02-1.74l2.96-1.67c.94-.53 1.53-1.53 1.53-2.61V8.32"
    />
  </svg>
);
export default SvgBrush;
