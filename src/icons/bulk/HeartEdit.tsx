import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.44 3.1c-1.81 0-3.43.88-4.44 2.23A5.55 5.55 0 0 0 7.56 3.1C4.49 3.1 2 5.6 2 8.69c0 1.19.19 2.29.52 3.31 1.58 5 6.45 7.99 8.86 8.81.34.12.9.12 1.24 0 2.41-.82 7.28-3.81 8.86-8.81.33-1.02.52-2.12.52-3.31 0-3.09-2.49-5.59-5.56-5.59"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M14.84 9.16c-.9-.9-1.61-.61-2.22 0L9.08 12.7c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.62-.6.91-1.31.01-2.21"
    />
  </svg>
);
export default SvgHeartEdit;
