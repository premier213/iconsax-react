import * as React from "react";
import type { SVGProps } from "react";
const SvgSend = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.5 22.75h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75M19 18.25c-.19 0-.38-.07-.53-.22l-14-14a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l14 14c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
    <path
      fill="currentColor"
      d="M5 14.52c-.41 0-.75-.34-.75-.75V3.5c0-.41.34-.75.75-.75h10.27c.41 0 .75.34.75.75s-.34.75-.75.75H5.75v9.52c0 .41-.34.75-.75.75"
    />
  </svg>
);
export default SvgSend;
