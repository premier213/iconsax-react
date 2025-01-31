import * as React from "react";
import type { SVGProps } from "react";
const SvgJudge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.54 19.04c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-4.95-4.95.53-.53.53-.53 4.95 4.95c.29.29.29.77 0 1.06"
    />
    <path
      fill="currentColor"
      d="m6.47 9.28 5.8 5.8c.39.39.39 1.02 0 1.41l-.9.91c-.81.8-2.09.8-2.89 0l-4.34-4.34c-.79-.79-.79-2.08 0-2.88l.91-.91c.39-.38 1.03-.38 1.42.01"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m18.59 10.19-3.81 3.8c-.4.4-1.04.4-1.44 0L7.57 8.22c-.4-.4-.4-1.04 0-1.44l3.81-3.81c.79-.79 2.08-.79 2.88 0l4.34 4.34c.78.79.78 2.07-.01 2.88M8 21.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgJudge;
