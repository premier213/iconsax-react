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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m-5.2 15c0 .1-.02.19-.06.29-.08.18-.22.33-.41.41a.72.72 0 0 1-.58 0 .8.8 0 0 1-.24-.16l-2.95-2.95a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.67 1.67V7c0-.41.34-.75.75-.75s.76.34.76.75zm6.25-6.52c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.67-1.67V17c0 .41-.34.75-.75.75s-.75-.34-.75-.75V7c0-.1.02-.19.06-.29.08-.18.22-.33.41-.41.18-.08.39-.08.57 0 .09.04.17.09.24.16l2.95 2.95c.29.3.29.78 0 1.07"
    />
  </svg>
);
export default SvgArrowSwap;
