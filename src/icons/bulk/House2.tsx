import * as React from "react";
import type { SVGProps } from "react";
const SvgHouse2 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22.75 22c0 .41-.34.75-.75.75H2a.749.749 0 1 1 0-1.5h20c.41 0 .75.33.75.75"
    />
    <path
      fill="currentColor"
      d="M21 9.98v11.27H2.95L3 9.97c0-.61.28-1.19.77-1.57l7-5.44c.72-.57 1.74-.57 2.46 0l7 5.44c.49.38.77.96.77 1.58"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M13.5 8.25h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75M15.5 11h-7c-.83 0-1.5.67-1.5 1.5V22h10v-9.5c0-.83-.67-1.5-1.5-1.5m-4.75 6.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75s.75.34.75.75z"
    />
  </svg>
);
export default SvgHouse2;
