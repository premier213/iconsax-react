import * as React from "react";
import type { SVGProps } from "react";
const SvgAttachCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m4.37 12.35-2.22 2.22c-.54.54-1.24.8-1.94.8a2.75 2.75 0 0 1-2.75-2.74c0-.73.29-1.43.81-1.94l1.41-1.41c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.41 1.41a1.234 1.234 0 0 0 0 1.76c.49.49 1.28.49 1.77 0l2.22-2.22a3.253 3.253 0 0 0-4.6-4.6L8.3 11.11a2.657 2.657 0 0 0 0 3.78c.29.29.29.77 0 1.06s-.77.29-1.06 0A4.05 4.05 0 0 1 6 13.01c0-1.12.43-2.17 1.22-2.96l2.42-2.42a4.76 4.76 0 0 1 6.72 0 4.753 4.753 0 0 1 .01 6.72"
      opacity={0.93}
    />
  </svg>
);
export default SvgAttachCircle;
