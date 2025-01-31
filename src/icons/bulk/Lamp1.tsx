import * as React from "react";
import type { SVGProps } from "react";
const SvgLamp1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.78 14.18v2.94c0 1.1-.9 2-2 2H5.22c-1.1 0-2-.9-2-2v-2.94c0-4.82 3.9-8.72 8.72-8.72h.12c4.82-.01 8.72 3.9 8.72 8.72"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.75 2.53v2.96q-.345-.03-.69-.03h-.12q-.345 0-.69.03V2.53c0-.41.34-.75.75-.75s.75.34.75.75M15.32 19.11a3.326 3.326 0 0 1-6.64 0z"
    />
  </svg>
);
export default SvgLamp1;
