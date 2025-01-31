import * as React from "react";
import type { SVGProps } from "react";
const SvgRedo = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.87 19.06h-8c-3.17 0-5.75-2.58-5.75-5.75S5.7 7.56 8.87 7.56h11c.41 0 .75.34.75.75s-.34.75-.75.75h-11a4.26 4.26 0 0 0-4.25 4.25 4.26 4.26 0 0 0 4.25 4.25h8a.749.749 0 1 1 0 1.5"
    />
    <path
      fill="currentColor"
      d="M17.57 11.56c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.03-2.03-2.03-2.03a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06l-2.56 2.56c-.15.15-.34.22-.53.22"
    />
  </svg>
);
export default SvgRedo;
