import * as React from "react";
import type { SVGProps } from "react";
const SvgFrame1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.02 4.62H6.98c-1.59 0-2.23.6-2.23 2.12v11.88h5.5V6.74c-.01-1.52-.65-2.12-2.23-2.12"
    />
    <path
      fill="currentColor"
      d="M16.52 9.62h-1.04c-1.59 0-2.23.61-2.23 2.12v6.88h5.5v-6.88c0-1.51-.65-2.12-2.23-2.12"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M2.75 17.88h18.5c.41 0 .75.34.75.75s-.34.75-.75.75H2.75c-.41 0-.75-.34-.75-.76s.34-.74.75-.74"
    />
  </svg>
);
export default SvgFrame1;
