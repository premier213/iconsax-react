import * as React from "react";
import type { SVGProps } from "react";
const SvgPenTool = (props: SVGProps<SVGSVGElement>) => (
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
      d="m11.15 5.19-.78-.78c-.47-.47-.47-1.23 0-1.7l.78-.78c.47-.47 1.23-.47 1.7 0l.78.78c.47.47.47 1.23 0 1.7l-.78.78c-.47.47-1.23.47-1.7 0M19.45 9.81h1.1c.66 0 1.2.54 1.2 1.2v1.1c0 .66-.54 1.2-1.2 1.2h-1.1c-.66 0-1.2-.54-1.2-1.2v-1.1c0-.66.54-1.2 1.2-1.2M4.55 9.81h-1.1c-.66 0-1.2.54-1.2 1.2v1.1c0 .66.54 1.2 1.2 1.2h1.1c.66 0 1.2-.54 1.2-1.2v-1.1c0-.66-.54-1.2-1.2-1.2M18.54 10.1l-5.3-5.3M5.46 10.1l2.65-2.65M10.751 22.5h2.52c.96 0 1.58-.68 1.4-1.51l-.41-1.81h-4.5l-.41 1.81c-.18.78.5 1.51 1.4 1.51M14.22 12.67l-1.05-1.33c-.64-.81-1.69-.81-2.33 0l-3.05 3.87c-.77.97-.77 1.6.24 2.43l1.73 1.54M14.262 19.17l1.73-1.54c.97-.86 1.01-1.46.24-2.43M12.012 11.12v2.53"
    />
  </svg>
);
export default SvgPenTool;
