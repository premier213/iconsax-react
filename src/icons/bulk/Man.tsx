import * as React from "react";
import type { SVGProps } from "react";
const SvgMan = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 13.75A7.75 7.75 0 1 1 10.25 6c1.87 0 3.58.66 4.92 1.77h.01c.39.32.74.67 1.05 1.06A7.67 7.67 0 0 1 18 13.75"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M22.25 2.5V9c0 .41-.34.75-.75.75s-.75-.34-.75-.75V4.31l-4.52 4.52c-.31-.39-.66-.74-1.05-1.06l4.51-4.52H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.5c.1 0 .19.02.29.06.18.07.33.22.4.4.04.1.06.19.06.29"
    />
  </svg>
);
export default SvgMan;
