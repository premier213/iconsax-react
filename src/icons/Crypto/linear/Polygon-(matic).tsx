import * as React from "react";
import type { SVGProps } from "react";
const SvgPolygonMatic = (props: SVGProps<SVGSVGElement>) => (
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
      d="m12 12.1-4.5 2.6L3 12.1V6.9l4.5-2.6L12 6.9v1.6M12 12.1l4.5-2.6 4.5 2.6v5.2l-4.5 2.6-4.5-2.6v-1.7"
    />
  </svg>
);
export default SvgPolygonMatic;
