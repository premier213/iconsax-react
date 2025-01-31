import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.87 9.44H2.13V6.42C2.13 3.98 4.11 2 6.55 2h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79c2.37-.01 4.39 1.55 5.08 3.71"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.99 10.84c-.02-.48-.1-.95-.25-1.4H2v7.21C2 19.6 4.4 22 7.35 22h9.3C19.6 22 22 19.6 22 16.65v-5.58c0-.07 0-.16-.01-.23m-7.65 6.94c-.15.14-.34.22-.53.22s-.38-.07-.53-.22l-1.24-1.24-1.28 1.28c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.28-1.28-1.24-1.24a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.24 1.24 1.2-1.2c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.2 1.2 1.24 1.24c.29.29.29.77 0 1.06"
    />
  </svg>
);
export default SvgFolderCross;
