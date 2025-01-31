import * as React from "react";
import type { SVGProps } from "react";
const SvgBootstrap = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 3H7C5.34 3 4 4.34 4 6v.84c0 .77-.12 1.53-.37 2.26A2.785 2.785 0 0 1 1 11v2c1.19 0 2.25.76 2.63 1.9.24.73.37 1.5.37 2.26V18c0 1.66 1.34 3 3 3h10c1.66 0 3-1.34 3-3v-.84c0-.77.12-1.53.37-2.26.38-1.13 1.44-1.9 2.63-1.9v-2c-1.19 0-2.25-.76-2.63-1.9-.24-.73-.37-1.5-.37-2.26V6c0-1.66-1.34-3-3-3"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.67 16.92H9.75c-.41 0-.75-.34-.75-.75V7.84c0-.41.34-.75.75-.75h2.92c1.56 0 2.83 1.27 2.83 2.83 0 .82-.35 1.57-.92 2.08.56.52.92 1.26.92 2.08 0 1.57-1.27 2.84-2.83 2.84m-2.17-1.5h2.17a1.33 1.33 0 1 0 0-2.66H10.5zm0-4.17h2.17a1.33 1.33 0 1 0 0-2.66H10.5z"
    />
  </svg>
);
export default SvgBootstrap;
