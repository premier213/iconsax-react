import * as React from "react";
import type { SVGProps } from "react";
const SvgCelsiusCel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" />
    <path
      fill="currentColor"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 18.19c-3.41 0-6.19-2.78-6.19-6.19S8.59 5.81 12 5.81c1.35 0 2.64.43 3.72 1.24a.75.75 0 0 1-.9 1.2c-.82-.61-1.79-.94-2.82-.94-2.58 0-4.69 2.1-4.69 4.69a4.69 4.69 0 0 0 8.43 2.83.749.749 0 1 1 1.19.91A6.16 6.16 0 0 1 12 18.19"
    />
    <path
      fill="currentColor"
      d="M17.42 11.34a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34"
    />
  </svg>
);
export default SvgCelsiusCel;
