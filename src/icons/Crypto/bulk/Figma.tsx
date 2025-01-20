import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path fill="currentColor" d="M12 6h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2z" />
    <path
      fill="currentColor"
      d="M12 10h-2c-1.1 0-2 .9-2 2s.9 2 2 2h2z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 14h-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2z"
    />
    <path
      fill="currentColor"
      d="M12 6h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M14 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"
    />
  </svg>
);
export default SvgFigma;
