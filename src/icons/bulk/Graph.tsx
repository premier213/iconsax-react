import * as React from "react";
import type { SVGProps } from "react";
const SvgGraph = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.67 6.95c-.64-2.17-2.45-3.98-4.62-4.62-1.65-.48-2.79-.44-3.58.15-.95.71-1.06 1.99-1.06 2.9v2.49c0 2.46 1.12 3.71 3.32 3.71h2.87c.9 0 2.19-.11 2.9-1.06.61-.78.66-1.92.17-3.57"
    />
    <path
      fill="currentColor"
      d="M18.91 13.36c-.26-.3-.64-.47-1.03-.47H14.3c-1.76 0-3.19-1.43-3.19-3.19V6.12c0-.39-.17-.77-.47-1.03-.29-.26-.69-.38-1.07-.33-2.35.3-4.51 1.59-5.92 3.53-1.42 1.95-1.94 4.33-1.49 6.71.65 3.44 3.4 6.19 6.85 6.84.55.11 1.1.16 1.65.16 1.81 0 3.56-.56 5.05-1.65 1.94-1.41 3.23-3.57 3.53-5.92.05-.39-.07-.78-.33-1.07"
      opacity={0.4}
    />
  </svg>
);
export default SvgGraph;
