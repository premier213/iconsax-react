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
      fill="currentColor"
      d="m14.84 10.899 5.66-3.79c.57-.38.72-1.16.34-1.72l-1.82-2.71c-.38-.57-1.16-.72-1.72-.34l-5.66 3.79z"
    />
    <path
      fill="currentColor"
      d="m14.52 10.422-1.76 1.18-2.67 1.79-.35.23-.16-.24-2.24-3.34-.16-.24 4.78-3.2z"
    />
    <path
      fill="currentColor"
      d="m5.64 16.02 3.95-2.64-2.24-3.34-3.95 2.64c-.46.31-.58.93-.27 1.39l1.13 1.68c.3.46.92.58 1.38.27M16.56 21.812a.9.9 0 0 1-.31.07c-.29 0-.56-.17-.69-.45l-3.73-8.24-3.78 8.25a.77.77 0 0 1-.69.44.9.9 0 0 1-.31-.07.766.766 0 0 1-.37-1l3.41-7.42 2.67-1.79 4.17 9.22c.17.37 0 .82-.37.99"
    />
  </svg>
);
export default SvgMicroscope;
