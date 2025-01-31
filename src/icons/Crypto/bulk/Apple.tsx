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
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.1 19.16c.59-.9.81-1.36 1.26-2.37-3.32-1.26-3.85-5.99-.57-7.8-1-1.26-2.41-1.99-3.74-1.99-.96 0-1.62.25-2.21.48-.5.19-.95.36-1.51.36-.6 0-1.13-.19-1.69-.39C10.04 7.23 9.4 7 8.6 7c-1.49 0-3.08.91-4.09 2.47-1.42 2.2-1.17 6.32 1.12 9.84.82 1.26 1.92 2.67 3.35 2.69.6.01.99-.17 1.42-.36.49-.22 1.02-.46 1.95-.46.93-.01 1.45.24 1.94.46.42.19.8.37 1.39.36 1.44-.02 2.6-1.58 3.42-2.84"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15.84 2c.16 1.1-.29 2.19-.88 2.95-.63.82-1.73 1.46-2.79 1.42-.19-1.06.3-2.15.9-2.88.67-.8 1.8-1.42 2.77-1.49"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgApple;
