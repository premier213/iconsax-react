import * as React from "react";
import type { SVGProps } from "react";
const SvgAttachSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.2 17.38a2.75 2.75 0 0 1-2.75-2.74c0-.73.29-1.43.81-1.94l1.41-1.41c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.41 1.41a1.234 1.234 0 0 0 0 1.76c.49.49 1.28.49 1.77 0l2.22-2.22a3.253 3.253 0 0 0-4.6-4.6l-2.42 2.42a2.657 2.657 0 0 0 0 3.78c.29.29.29.77 0 1.06s-.77.29-1.06 0A4.15 4.15 0 0 1 6.01 13c0-1.12.43-2.17 1.22-2.96l2.42-2.42a4.76 4.76 0 0 1 6.72 0 4.76 4.76 0 0 1 0 6.72l-2.22 2.22c-.54.55-1.24.82-1.95.82"
    />
  </svg>
);
export default SvgAttachSquare;
