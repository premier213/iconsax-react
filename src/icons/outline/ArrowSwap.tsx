import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowSwap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.01 21.25c-.19 0-.38-.07-.53-.22l-5.01-5.01a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.01 5.01c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22"
    />
    <path
      fill="currentColor"
      d="M9.01 21.25c-.41 0-.75-.34-.75-.75v-17c0-.41.34-.75.75-.75s.75.34.75.75v17c0 .41-.34.75-.75.75M20.01 9.26c-.19 0-.38-.07-.53-.22l-5.01-5.01a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.01 5.01c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
    <path
      fill="currentColor"
      d="M14.99 21.25c-.41 0-.75-.34-.75-.75v-17c0-.41.34-.75.75-.75s.75.34.75.75v17c0 .41-.33.75-.75.75"
    />
  </svg>
);
export default SvgArrowSwap;
