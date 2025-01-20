import * as React from "react";
import type { SVGProps } from "react";
const SvgHierarchySquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.45 14.4V8.5c0-.55-.45-1-1-1h-2.9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.05 6-1.8 1.5 1.8 1.5M7.55 10.2v4.2M7.7 9.9a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9M7.55 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6M16.45 18a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7"
    />
  </svg>
);
export default SvgHierarchySquare;
