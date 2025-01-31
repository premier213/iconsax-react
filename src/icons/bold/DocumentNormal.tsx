import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentNormal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.71 8.12v9.41c0 2.46-2.01 4.47-4.47 4.47H7.76c-2.46 0-4.47-2.01-4.47-4.47V8.12c0-1.71.96-3.2 2.37-3.95.49-.26 1.1.09 1.1.65 0 1.59 1.3 2.89 2.89 2.89h4.7c1.59 0 2.89-1.3 2.89-2.89 0-.56.6-.91 1.1-.65 1.41.75 2.37 2.24 2.37 3.95"
    />
    <path
      fill="currentColor"
      d="M14.35 2h-4.7c-1.04 0-1.89.84-1.89 1.88v.94c0 1.04.84 1.88 1.88 1.88h4.71c1.04 0 1.88-.84 1.88-1.88v-.94C16.24 2.84 15.39 2 14.35 2"
    />
  </svg>
);
export default SvgDocumentNormal;
