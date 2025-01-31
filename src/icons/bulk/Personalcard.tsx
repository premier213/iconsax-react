import * as React from "react";
import type { SVGProps } from "react";
const SvgPersonalcard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 3H6C3.79 3 2 4.78 2 6.97v10.06C2 19.22 3.79 21 6 21h12c2.21 0 4-1.78 4-3.97V6.97C22 4.78 20.21 3 18 3"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M19 8.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75M19 12.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75M19 16.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75M8.5 11.79a2.31 2.31 0 1 0 0-4.62 2.31 2.31 0 0 0 0 4.62M9.3 13.11a8.7 8.7 0 0 0-1.61 0c-1.68.16-3.03 1.49-3.19 3.17-.01.14.03.28.13.38s.23.17.37.17h7c.14 0 .28-.06.37-.16s.14-.24.13-.38a3.55 3.55 0 0 0-3.2-3.18"
    />
  </svg>
);
export default SvgPersonalcard;
