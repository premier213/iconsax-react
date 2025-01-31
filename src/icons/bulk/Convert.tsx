import * as React from "react";
import type { SVGProps } from "react";
const SvgConvert = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.03 12.03a9.98 9.98 0 0 1-4.7 8.48 9.95 9.95 0 0 1-5.3 1.52c-5.52 0-10-4.48-10-10a9.98 9.98 0 0 1 4.7-8.48 9.95 9.95 0 0 1 5.3-1.52c5.52 0 10 4.48 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m15.1 7.68-.01 4.55c0 .31-.19.58-.47.69-.09.04-.19.06-.28.06a.75.75 0 0 1-.53-.22l-8.19-8.2a1 1 0 0 1-.1-.12c.38-.32.78-.62 1.21-.89l6.86 6.87.01-2.74a.749.749 0 1 1 1.5 0M18.54 19.62c-.38.32-.78.62-1.21.89l-6.86-6.87-.01 2.74a.749.749 0 1 1-1.5 0l.01-4.55c0-.31.19-.58.47-.69.27-.12.6-.06.81.16l8.19 8.2c.04.04.07.08.1.12"
    />
  </svg>
);
export default SvgConvert;
