import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveTick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.82 1.91H7.18c-2.12 0-3.86 1.74-3.86 3.86v14.09c0 1.8 1.29 2.56 2.87 1.69l4.88-2.71c.52-.29 1.36-.29 1.87 0l4.88 2.71c1.58.88 2.87.12 2.87-1.69V5.77c-.01-2.12-1.74-3.86-3.87-3.86"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M11.09 13.25c-.19 0-.38-.07-.53-.22l-1.5-1.5a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.97.97 3.47-3.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22"
    />
  </svg>
);
export default SvgArchiveTick;
