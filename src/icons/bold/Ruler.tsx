import * as React from "react";
import type { SVGProps } from "react";
const SvgRuler = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 7c-.14 0-.25.11-.25.25V12c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.25c0-.14-.11-.25-.25-.25h-2c-.14 0-.25.11-.25.25V9.6c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.25c0-.14-.11-.25-.25-.25h-1.96c-.14 0-.25.11-.25.25l-.04 4.76c0 .41-.34.74-.75.74h-.01a.75.75 0 0 1-.74-.76l.04-4.74c0-.14-.11-.25-.25-.25H7c-.14 0-.25.11-.25.25v3.55c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7.25C5.25 7.11 5.14 7 5 7c-1.66 0-3 1.34-3 3v4c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3v-4c0-1.66-1.34-3-3-3"
    />
  </svg>
);
export default SvgRuler;
