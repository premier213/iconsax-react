import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08"
    />
    <path
      fill="currentColor"
      d="m21.75 9.99-.52 8.26C21.1 20.31 20 22 17.24 22H6.76c-.59 0-1.1-.08-1.54-.22L20.25 6.75c.98.73 1.59 1.92 1.5 3.24M18 6 3.48 20.52c-.45-.63-.66-1.42-.71-2.27l-.52-8.26A3.753 3.753 0 0 1 6 6c.61 0 1.17-.35 1.45-.89l.72-1.45C8.63 2.75 9.83 2 10.86 2h2.29c1.02 0 2.22.75 2.68 1.66l.72 1.45c.28.54.84.89 1.45.89"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M9.5 10.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75M12.57 11.43l-3.89 3.89a3.372 3.372 0 0 1 3.89-3.89M15.38 14.75A3.38 3.38 0 0 1 12 18.12c-.87 0-1.66-.33-2.25-.87l4.75-4.75c.55.59.88 1.38.88 2.25"
    />
  </svg>
);
export default SvgCameraSlash;
