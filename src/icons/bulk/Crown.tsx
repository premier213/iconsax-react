import * as React from "react";
import type { SVGProps } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.77 18.98H7.23c-.42 0-.8-.27-.94-.66L2.13 6.67c-.33-.93.73-1.72 1.52-1.15l4 2.86c.53.38 1.29.15 1.52-.46l1.89-5.04c.32-.87 1.55-.87 1.87 0l1.89 5.04a1 1 0 0 0 1.52.46l4-2.86c.8-.57 1.85.23 1.52 1.15L17.7 18.32c-.13.39-.51.66-.93.66"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17 22H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75M14.5 14.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgCrown;
