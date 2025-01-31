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
      d="M10.25 22.25c-4.69 0-8.5-3.81-8.5-8.5s3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5m0-15.5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
    />
    <path
      fill="currentColor"
      d="M16 8.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.5-5.5c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-5.5 5.5c-.15.15-.34.22-.53.22"
    />
    <path
      fill="currentColor"
      d="M21.5 9.75c-.41 0-.75-.34-.75-.75V3.25H15c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6.5c.41 0 .75.34.75.75V9c0 .41-.34.75-.75.75"
    />
  </svg>
);
export default SvgMan;
