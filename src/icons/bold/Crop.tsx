import * as React from "react";
import type { SVGProps } from "react";
const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.53 2c-.42 0-.75.34-.75.75v2.03H2.75a.749.749 0 1 0 0 1.5h2.78c.41 0 .75-.34.75-.75V2.75c0-.41-.34-.75-.75-.75M21.25 17.719h-2.78c-.41 0-.75.34-.75.75v2.78c0 .41.34.75.75.75s.75-.34.75-.75v-2.03h2.03c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
    />
    <path
      fill="currentColor"
      d="M16.72 18.47c0-.96.79-1.75 1.75-1.75h.69v-6.67c0-2.89-2.34-5.23-5.23-5.23H7.28v.69c0 .96-.79 1.75-1.75 1.75h-.7v6.67c0 2.89 2.34 5.23 5.23 5.23h6.67v-.69z"
    />
  </svg>
);
export default SvgCrop;
