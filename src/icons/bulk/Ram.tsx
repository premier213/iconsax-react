import * as React from "react";
import type { SVGProps } from "react";
const SvgRam = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.5 10v2.17c0 .53.21 1.04.59 1.42l.82.82c.38.38.59.89.59 1.42V17c0 2.85-1.38 4.8-4.49 4.98l-.02-2.99c-.01-1.1-.9-1.99-2-1.99H9.98a2 2 0 0 0-2 2l.01 2.98C4.83 21.8 3.5 19.85 3.5 17V7c0-3 1.47-5 5-5h7c3.47 0 5 2 5 5v1c0 .55-.45 1-1 1s-1 .45-1 1"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.01 21.98c-.16.01-.33.02-.51.02h-7c-.18 0-.35 0-.51-.02L7.98 19a2 2 0 0 1 2-2h4.01c1.1 0 1.99.89 2 1.99zM13.97 8.53h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6a.749.749 0 1 1 0 1.5"
    />
  </svg>
);
export default SvgRam;
