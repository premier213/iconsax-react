import * as React from "react";
import type { SVGProps } from "react";
const SvgMicroscope = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.04 4.52 11.83 6l3.2 4.78 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.174 6.48-4.778 3.2 2.56 3.821 4.778-3.2zM5.83 15.9l3.95-2.64-2.24-3.34-3.95 2.64c-.46.31-.58.93-.27 1.39l1.13 1.68c.3.45.92.57 1.38.27M12.05 12.2 7.56 22M12 12.2l4.44 9.8"
    />
  </svg>
);
export default SvgMicroscope;
