import * as React from "react";
import type { SVGProps } from "react";
const SvgHospital = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 21.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
    />
    <path
      fill="currentColor"
      d="M17 2H7C4 2 3 3.79 3 6v16h18V6c0-2.21-1-4-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M14.06 15H9.93c-.51 0-.94.42-.94.94V22h6v-6.06a.924.924 0 0 0-.93-.94M14.5 7.75h-1.75V6c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H9.5c-.41 0-.75.34-.75.75s.34.75.75.75h1.75V11c0 .41.34.75.75.75s.75-.34.75-.75V9.25h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75"
    />
  </svg>
);
export default SvgHospital;
