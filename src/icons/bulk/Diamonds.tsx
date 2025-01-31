import * as React from "react";
import type { SVGProps } from "react";
const SvgDiamonds = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.21 13.24-6.85 7.54c-1.3 1.43-3.42 1.43-4.72 0l-6.85-7.54c-.77-.85-1.02-2.39-.56-3.44l.8-1.8h17.94l.8 1.8c.46 1.05.21 2.59-.56 3.44"
    />
    <path
      fill="currentColor"
      d="M20.97 8H3.03l1.76-3.96C5.26 3 6 2.15 7.7 2.15h8.6c1.7 0 2.44.85 2.91 1.89z"
      opacity={0.4}
    />
  </svg>
);
export default SvgDiamonds;
