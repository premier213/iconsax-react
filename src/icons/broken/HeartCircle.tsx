import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.33 17.45c-.18.06-.49.06-.67 0-1.56-.53-5.06-2.76-5.06-6.54 0-1.67 1.34-3.02 3-3.02.98 0 1.85.47 2.4 1.21.54-.73 1.42-1.21 2.4-1.21 1.66 0 3 1.35 3 3.02 0 3.78-3.5 6.01-5.07 6.54"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85"
    />
  </svg>
);
export default SvgHeartCircle;
