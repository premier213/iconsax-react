import * as React from "react";
import type { SVGProps } from "react";
const SvgHierarchy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.25 8.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6M19 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
    <path
      fill="currentColor"
      d="M19.17 15.98a6.93 6.93 0 0 0-6.54-4.65h-.03l-3.53.01c-1.52.02-2.88-1.01-3.29-2.49V7.01c0-.42-.34-.76-.77-.76s-.76.34-.76.76v11.22c0 .42.34.76.76.76s.77-.34.77-.76v-6.62c.88.78 2.03 1.26 3.28 1.26h.02l3.53-.01h.02c2.29 0 4.34 1.45 5.09 3.62a.78.78 0 0 0 .98.48c.4-.14.61-.58.47-.98"
    />
  </svg>
);
export default SvgHierarchy;
