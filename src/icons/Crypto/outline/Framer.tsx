import * as React from "react";
import type { SVGProps } from "react";
const SvgFramer = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 16.75H5c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75h5.19L4.47 2.53A.751.751 0 0 1 5 1.25h14c.41 0 .75.34.75.75v7c0 .41-.34.75-.75.75h-5.19l5.72 5.72a.751.751 0 0 1-.53 1.28m-13.25-1.5h11.44l-5.5-5.5H5.75zm6.56-7h5.94v-5.5H6.81z"
    />
    <path
      fill="currentColor"
      d="M12 22.75c-.18 0-.35-.06-.49-.18l-7-6a.765.765 0 0 1-.22-.83c.11-.29.39-.49.7-.49h7c.41 0 .75.34.75.75v6c0 .29-.17.56-.44.68-.09.05-.19.07-.3.07m-4.97-6 4.22 3.62v-3.62z"
    />
  </svg>
);
export default SvgFramer;
