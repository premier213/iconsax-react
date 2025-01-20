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
      d="M19.14 19.5a9.96 9.96 0 0 0 2.86-7c0-5.52-4.48-10-10-10S2 6.98 2 12.5c0 2.72 1.08 5.18 2.84 6.99"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12 21.5a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76M15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75"
    />
  </svg>
);
export default SvgSpeedometer;
