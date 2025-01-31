import * as React from "react";
import type { SVGProps } from "react";
const SvgArrow3 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.98 6.19 7.27 2.48a.8.8 0 0 0-.26-.17c-.01 0-.02 0-.03-.01a.8.8 0 0 0-.26-.05c-.2 0-.39.08-.53.22L2.47 6.19c-.29.29-.29.77 0 1.06s.77.29 1.06 0L5.98 4.8V21c0 .41.34.75.75.75s.75-.34.75-.75V4.81l2.44 2.44c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.76 0-1.06"
    />
    <path
      fill="currentColor"
      d="M21.53 16.75a.754.754 0 0 0-1.06 0l-2.45 2.45V3c0-.41-.34-.75-.75-.75s-.75.34-.75.75v16.19l-2.44-2.44a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l3.71 3.71c.07.07.16.13.26.17.01 0 .02 0 .03.01.08.03.17.05.26.05.2 0 .39-.08.53-.22l3.72-3.72c.29-.3.29-.77 0-1.06"
      opacity={0.4}
    />
  </svg>
);
export default SvgArrow3;
