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
      d="M7.81 2h8.37C19.83 2 22 4.17 22 7.81v8.37c0 3.64-2.17 5.81-5.81 5.81H7.81C4.17 22 2 19.83 2 16.19V7.81C2 4.17 4.17 2 7.81 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10.24 6.25c-.42 0-.75.34-.75.75v8.19l-1.67-1.67a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2.95 2.95a.78.78 0 0 0 .53.22c.1 0 .19-.02.29-.06.18-.08.33-.22.41-.41.04-.09.06-.19.06-.29V7a.77.77 0 0 0-.76-.75M17.24 9.42l-2.95-2.95a.8.8 0 0 0-.24-.16.7.7 0 0 0-.57 0c-.18.08-.33.22-.41.41-.04.09-.06.18-.06.28v10c0 .41.34.75.75.75s.75-.34.75-.75V8.81l1.67 1.67c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06"
    />
  </svg>
);
export default SvgArrowSwap;
