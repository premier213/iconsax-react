import * as React from "react";
import type { SVGProps } from "react";
const SvgChart1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 22h12M2 22h4M3 13v5c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V9.38c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1M12.8 5.19h-1.6c-.55 0-1 .45-1 1V18c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.19c0-.55-.45-1-1-1M21 3c0-.55-.45-1-1-1h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V7.13"
    />
  </svg>
);
export default SvgChart1;
