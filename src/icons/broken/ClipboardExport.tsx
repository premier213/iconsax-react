import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardExport = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M3 10c0-4.56 1.67-5.8 5-5.98M14 22H9c-5 0-6-2-6-6v-2M16 4.02c3.33.18 5 1.41 5 5.98v5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11 2h-.96c-1 0-2 0-2 2s1 2 2 2h4c2 0 2-1 2-2 0-2-1-2-2-2M15 19v-3h3M21 22l-5.96-5.96"
    />
  </svg>
);
export default SvgClipboardExport;
