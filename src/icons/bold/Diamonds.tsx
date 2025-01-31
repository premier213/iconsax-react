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
      d="m21.77 9.798-.8-1.8-1.76-3.96c-.47-1.04-1.21-1.89-2.91-1.89H7.7c-1.7 0-2.44.85-2.91 1.89l-1.76 3.96-.8 1.8c-.46 1.05-.21 2.59.56 3.44l6.85 7.54c1.3 1.43 3.42 1.43 4.72 0l6.85-7.54c.77-.85 1.02-2.39.56-3.44"
    />
  </svg>
);
export default SvgDiamonds;
