import * as React from "react";
import type { SVGProps } from "react";
const SvgAlignBottom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.98 19.38h1.04c1.59 0 2.23-.6 2.23-2.12V5.38h-5.5v11.88c.01 1.52.65 2.12 2.23 2.12"
    />
    <path
      fill="currentColor"
      d="M7.48 14.38h1.04c1.59 0 2.23-.61 2.23-2.12V5.38h-5.5v6.88c.01 1.51.65 2.12 2.23 2.12"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.25 6.12H2.75c-.41 0-.75-.33-.75-.74s.34-.75.75-.75h18.5c.41 0 .75.34.75.75s-.34.74-.75.74"
    />
  </svg>
);
export default SvgAlignBottom;
