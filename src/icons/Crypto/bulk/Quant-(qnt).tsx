import * as React from "react";
import type { SVGProps } from "react";
const SvgQuantQnt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      d="M21 7v5l-4 2.78V9.23zM12 17.56V22l-9-5 4-2.23v.01z"
      opacity={0.6}
    />
    <path fill="currentColor" d="M7 9.23v5.54L3 17V7z" />
    <path fill="currentColor" d="M12 2v4.44L7 9.22v.01L3 7z" opacity={0.6} />
    <path
      fill="currentColor"
      d="M17 9.23v-.01l-5-2.78V2l9 5zM17 14.78v4.72L12 22v-4.44z"
    />
    <path
      fill="currentColor"
      d="M21 17v5l-4-2.5v-4.72zM17 9.22v5.56l-5 2.78-5-2.78V9.22l5-2.78z"
      opacity={0.4}
    />
  </svg>
);
export default SvgQuantQnt;
