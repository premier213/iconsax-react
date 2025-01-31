import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageNotif = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 6.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5"
    />
    <path
      fill="currentColor"
      d="M20 8c-2.21 0-4-1.79-4-4 0-.73.21-1.41.56-2H7C4.24 2 2 4.23 2 6.98v6.98c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4H17c2.76 0 5-2.23 5-4.98V7.44c-.59.35-1.27.56-2 .56"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M16 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1M8 12c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1"
    />
  </svg>
);
export default SvgMessageNotif;
