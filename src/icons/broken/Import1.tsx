import * as React from "react";
import type { SVGProps } from "react";
const SvgImport1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m22 2-8.2 8.2M13 6.17V11h4.83M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-2M11 2H9C4 2 2 4 2 9"
    />
  </svg>
);
export default SvgImport1;
