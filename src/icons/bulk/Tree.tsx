import * as React from "react";
import type { SVGProps } from "react";
const SvgTree = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.17 10.06H7.83c-1.18 0-1.59-.79-.9-1.75l4.17-5.84c.49-.7 1.31-.7 1.8 0l4.17 5.84c.69.96.28 1.75-.9 1.75"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17.59 18H6.41c-1.58 0-2.12-1.05-1.19-2.33l3.99-5.61h5.58l3.99 5.61c.93 1.28.39 2.33-1.19 2.33M12.75 18v4c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4z"
    />
  </svg>
);
export default SvgTree;
