import * as React from "react";
import type { SVGProps } from "react";
const SvgHouse = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M21 9.98V22H2.95L3 9.97c0-.61.28-1.19.77-1.57l7-5.44c.72-.57 1.74-.57 2.46 0L14.57 4 19 7.44l1.23.96c.49.38.77.96.77 1.58"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5M9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1M16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1M19 7.44 14.57 4h3.41c.55 0 1 .44 1 .99z"
    />
  </svg>
);
export default SvgHouse;
