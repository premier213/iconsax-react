import * as React from "react";
import type { SVGProps } from "react";
const SvgHtml5 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.12 2h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85L3.13 3.11A.993.993 0 0 1 4.12 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M11.75 18q-.105 0-.21-.03l-3.5-1a.75.75 0 0 1-.54-.72v-2c0-.41.34-.75.75-.75s.75.34.75.75v1.43l2.75.79 2.8-.8.37-3.67H8.25c-.38 0-.7-.29-.75-.67L7 6.83c-.02-.21.04-.42.19-.58A.75.75 0 0 1 7.75 6h8.5c.41 0 .75.34.75.75s-.34.75-.75.75H8.59l.33 3h6.83c.21 0 .41.09.56.25.14.16.21.37.19.58l-.5 5c-.03.31-.24.56-.54.65l-3.5 1c-.07.01-.14.02-.21.02"
    />
  </svg>
);
export default SvgHtml5;
