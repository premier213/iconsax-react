import * as React from "react";
import type { SVGProps } from "react";
const SvgTextUnderline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 21.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h14c.41 0 .75.34.75.75s-.34.75-.75.75M12 17.75c-4.27 0-7.75-3.48-7.75-7.75V3c0-.41.34-.75.75-.75s.75.34.75.75v7c0 3.45 2.8 6.25 6.25 6.25s6.25-2.8 6.25-6.25V3c0-.41.34-.75.75-.75s.75.34.75.75v7c0 4.27-3.48 7.75-7.75 7.75"
    />
  </svg>
);
export default SvgTextUnderline;
