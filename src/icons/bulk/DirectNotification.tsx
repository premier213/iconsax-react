import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectNotification = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M20.34 12.72h-3.31c-.93 0-1.76.52-2.18 1.34l-.8 1.58c-.19.38-.57.61-.99.61H9.95c-.29 0-.72-.06-.99-.62l-.79-1.57a2.43 2.43 0 0 0-2.18-1.35H2.66c-.36.01-.66.31-.66.67v3.09C2 19.94 4.07 22 7.53 22h7.96c3.26 0 5.27-1.79 5.51-4.96v-3.66c0-.36-.3-.66-.66-.66"
    />
    <path
      fill="currentColor"
      d="M19 9.5c-2.48 0-4.5-2.02-4.5-4.5 0-.72.19-1.39.49-2H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V9.01c-.6.3-1.27.49-1.99.49"
      opacity={0.4}
    />
  </svg>
);
export default SvgDirectNotification;
