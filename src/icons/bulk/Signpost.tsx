import * as React from "react";
import type { SVGProps } from "react";
const SvgSignpost = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.97 3.75v3.5c0 .97-.78 1.75-1.75 1.75H8.96c-.39 0-.78-.14-1.09-.38L5.68 6.87c-.87-.7-.87-2.04 0-2.74l2.19-1.75c.31-.24.7-.38 1.09-.38h8.26c.97 0 1.75.78 1.75 1.75M18.34 16.87l-2.18 1.75c-.31.24-.7.38-1.1.38H6.8c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.97.78-1.75 1.75-1.75h8.26c.4 0 .79.14 1.1.38l2.18 1.75c.88.7.88 2.04 0 2.74"
    />
    <path
      fill="currentColor"
      d="M12.75 9h-1.5v3h1.5zM15.75 22c0 .41-.34.75-.75.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.25V19h1.5v2.25H15c.41 0 .75.34.75.75"
      opacity={0.4}
    />
  </svg>
);
export default SvgSignpost;
