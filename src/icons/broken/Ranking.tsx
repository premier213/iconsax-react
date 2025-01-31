import * as React from "react";
import type { SVGProps } from "react";
const SvgRanking = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.06 21.91c-.31-.04-.67-.17-1.07-.41l-2.24-1.33c-.41-.24-1.07-.24-1.48 0L9.03 21.5c-1.61.95-2.58.24-2.16-1.58l.53-2.31c.1-.43-.08-1.04-.39-1.36l-1.86-1.86c-1.1-1.1-.74-2.21.79-2.46l2.39-.4c.4-.07.88-.42 1.06-.78l1.32-2.64c.72-1.43 1.89-1.43 2.6 0l1.32 2.64c.18.36.66.72 1.06.78l2.39.4c1.53.26 1.89 1.36.79 2.46l-1.86 1.86c-.31.31-.49.92-.39 1.36M6 9V2M18 9V2M12 4V2"
    />
  </svg>
);
export default SvgRanking;
