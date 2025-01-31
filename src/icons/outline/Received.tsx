import * as React from "react";
import type { SVGProps } from "react";
const SvgReceived = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 18.25c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14-14c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-14 14c-.15.15-.34.22-.53.22"
    />
    <path
      fill="currentColor"
      d="M15.27 18.25H5c-.41 0-.75-.34-.75-.75V7.23c0-.41.34-.75.75-.75s.75.34.75.75v9.52h9.52c.41 0 .75.34.75.75s-.34.75-.75.75M20.5 22.75h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgReceived;
