import * as React from "react";
import type { SVGProps } from "react";
const SvgBlur = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.61 2.21a.99.99 0 0 0-1.22 0C9.49 3.66 3.88 8.39 3.91 13.9c0 4.46 3.63 8.1 8.1 8.1s8.1-3.63 8.1-8.09c.01-5.43-5.61-10.24-7.5-11.7"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M20.09 14.2a7.7 7.7 0 0 1-.27 1.79l-7.07 3.44v2.54a9.4 9.4 0 0 1-1.5 0V2.31c.05-.04.09-.07.13-.1.37-.28.87-.28 1.23 0 .04.03.09.07.14.11v5.44l3.78-1.84c.33.38.64.77.95 1.18a.4.4 0 0 1-.13.09l-4.6 2.24v3.33l6.29-3.06c.01 0 .01-.01.02-.01.22.45.41.91.56 1.39l-6.87 3.35v3.33l6.62-3.22z"
    />
  </svg>
);
export default SvgBlur;
