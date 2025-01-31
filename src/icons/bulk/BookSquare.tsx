import * as React from "react";
import type { SVGProps } from "react";
const SvgBookSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M11.5 8.09v9.16c0 .36-.36.6-.69.46-1.21-.52-2.79-1-3.89-1.14l-.19-.02c-.61-.08-1.11-.65-1.11-1.27v-7.7c0-.76.62-1.33 1.38-1.27 1.25.1 3.1.7 4.26 1.36.15.07.24.24.24.42M18.38 7.7v7.57c0 .62-.5 1.19-1.11 1.27l-.21.02c-1.09.15-2.66.62-3.87 1.13-.33.14-.69-.1-.69-.46V8.08a.5.5 0 0 1 .25-.44c1.16-.65 2.97-1.23 4.2-1.34h.04c.77.01 1.39.63 1.39 1.4"
    />
  </svg>
);
export default SvgBookSquare;
