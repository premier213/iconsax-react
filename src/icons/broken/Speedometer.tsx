import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeedometer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.84 19.48A9.97 9.97 0 0 1 2 12.49C2 8.8 4 5.58 6.97 3.84c.31-.18.63-.35.97-.49M19.14 19.5a9.96 9.96 0 0 0 2.86-7c0-5.52-4.48-10-10-10M8.62 18.12c0 1.86 1.51 3.38 3.38 3.38s3.38-1.51 3.38-3.38-1.51-3.38-3.38-3.38a3.38 3.38 0 0 0-3.38 3.38"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75"
    />
  </svg>
);
export default SvgSpeedometer;
