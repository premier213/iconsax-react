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
      d="M12.2 17.38a2.75 2.75 0 0 1-2.75-2.74c0-.73.29-1.43.81-1.94l1.41-1.41c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.41 1.41a1.234 1.234 0 0 0 0 1.76c.49.49 1.28.49 1.77 0l2.22-2.22a3.253 3.253 0 0 0-4.6-4.6l-2.42 2.42a2.657 2.657 0 0 0 0 3.78c.29.29.29.77 0 1.06s-.77.29-1.06 0A4.15 4.15 0 0 1 6.01 13c0-1.12.43-2.17 1.22-2.96l2.42-2.42a4.76 4.76 0 0 1 6.72 0 4.76 4.76 0 0 1 0 6.72l-2.22 2.22c-.54.55-1.24.82-1.95.82"
    />
    <path
      fill="currentColor"
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
    />
  </svg>
);
export default SvgAttachCircle;
