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
      d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M21 22.75H3c-.41 0-.75-.34-.75-.75V6c0-3.02 1.73-4.75 4.75-4.75h10c3.02 0 4.75 1.73 4.75 4.75v16c0 .41-.34.75-.75.75m-17.25-1.5h16.5V6c0-2.22-1.03-3.25-3.25-3.25H7C4.78 2.75 3.75 3.78 3.75 6z"
    />
    <path
      fill="currentColor"
      d="M15 22.75H9c-.41 0-.75-.34-.75-.75v-6.06c0-.93.76-1.69 1.69-1.69h4.13c.93 0 1.69.76 1.69 1.69V22a.77.77 0 0 1-.76.75m-5.25-1.5h4.5v-5.31c0-.1-.08-.19-.19-.19H9.93c-.1 0-.19.08-.19.19v5.31zM12 11.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M14.5 9.25h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgHospital;
