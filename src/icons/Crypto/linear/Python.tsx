import * as React from "react";
import type { SVGProps } from "react";
const SvgPython = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.6 7.6V3.9c0-.8.6-1.5 1.4-1.7q3-.45 6 0c.8.1 1.4.8 1.4 1.7v5.9c0 1.2-1 2.2-2.2 2.2H9.8c-1.2 0-2.2 1-2.2 2.2v5.9c0 .8.6 1.5 1.4 1.7q3 .45 6 0c.8-.1 1.4-.8 1.4-1.7v-3.7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.4 7.6h3.7c.8 0 1.5.6 1.7 1.4q.45 3 0 6c-.1.8-.8 1.4-1.7 1.4H12M12 7.6H3.9c-.8 0-1.5.6-1.7 1.4q-.45 3 0 6c.1.8.8 1.4 1.7 1.4h3.7M14 19.15"
    />
  </svg>
);
export default SvgPython;
