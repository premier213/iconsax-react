import * as React from "react";
import type { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 6c-.61 0-1.17-.35-1.45-.89l-.72-1.45C15.37 2.75 14.17 2 13.15 2h-2.29c-1.03 0-2.23.75-2.69 1.66l-.72 1.45C7.17 5.65 6.61 6 6 6 3.83 6 2.11 7.83 2.25 9.99l.52 8.26C2.89 20.31 4 22 6.76 22h10.48c2.76 0 3.86-1.69 3.99-3.75l.52-8.26A3.753 3.753 0 0 0 18 6m-7.5 1.25h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75M12 18.12c-1.86 0-3.38-1.51-3.38-3.38s1.51-3.38 3.38-3.38 3.38 1.51 3.38 3.38-1.52 3.38-3.38 3.38"
    />
  </svg>
);
export default SvgCamera;
