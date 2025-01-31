import * as React from "react";
import type { SVGProps } from "react";
const SvgGasStation = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.5 22V5c0-2 1.34-3 3-3h8c1.66 0 3 1 3 3v17z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M19 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75M7.89 10h5.23c1.04 0 1.89-.5 1.89-1.89V6.88C15 5.5 14.15 5 13.11 5H7.88C6.85 5 6 5.5 6 6.89v1.23C6 9.5 6.85 10 7.89 10M9.5 13.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75M22.75 10v6c0 .41-.33.75-.75.75l-4.5.01v-1.5l3.75-.01v-4.79l-1.59-.79a.745.745 0 0 1-.33-1.01c.18-.37.64-.51 1.01-.33l2 1c.25.13.41.39.41.67"
    />
  </svg>
);
export default SvgGasStation;
