import * as React from "react";
import type { SVGProps } from "react";
const SvgAquarius = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 16.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c3.45 0 6.25-2.8 6.25-6.25S15.45 2.75 12 2.75 5.75 5.55 5.75 9c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-4.27 3.48-7.75 7.75-7.75S19.75 4.73 19.75 9s-3.48 7.75-7.75 7.75"
    />
    <path
      fill="currentColor"
      d="M12 22.75c-.41 0-.75-.34-.75-.75v-6c0-.41.34-.75.75-.75s.75.34.75.75v6c0 .41-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M15 19.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgAquarius;
