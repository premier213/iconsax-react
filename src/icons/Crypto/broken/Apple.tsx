import * as React from "react";
import type { SVGProps } from "react";
const SvgApple = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.16 17.79c.26.58.57 1.16.93 1.72.76 1.17 1.78 2.48 3.11 2.49.55.01.92-.16 1.32-.34.46-.2.95-.43 1.81-.43.86-.01 1.35.22 1.8.43.39.18.75.34 1.29.34 1.33-.01 2.41-1.47 3.17-2.63.55-.84.75-1.26 1.17-2.2-3.08-1.17-3.58-5.56-.53-7.24-.93-1.17-2.24-1.84-3.47-1.84-.89 0-1.5.23-2.05.44-.46.18-.89.34-1.4.34-.56 0-1.05-.18-1.57-.36-.57-.2-1.16-.42-1.9-.42-1.39 0-2.86.85-3.8 2.29-.45.7-.72 1.62-.8 2.65M15.41 2c.16 1.1-.29 2.19-.88 2.95-.63.82-1.73 1.46-2.79 1.42-.19-1.06.3-2.15.9-2.88.67-.8 1.8-1.42 2.77-1.49"
    />
  </svg>
);
export default SvgApple;
