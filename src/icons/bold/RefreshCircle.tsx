import * as React from "react";
import type { SVGProps } from "react";
const SvgRefreshCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-5.4 9.23c.17-1.19.7-2.26 1.53-3.1 2-1.99 5.15-2.1 7.29-.36v-.95c0-.41.34-.75.75-.75s.75.34.75.75v2.67c0 .41-.34.75-.75.75H13.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75a3.965 3.965 0 0 0-5.07.45c-.6.6-.98 1.38-1.11 2.25-.05.37-.37.64-.74.64-.04 0-.07 0-.11-.01a.74.74 0 0 1-.62-.84m9.27 4.64a5.45 5.45 0 0 1-3.87 1.6c-1.22 0-2.43-.43-3.43-1.24v.94c0 .41-.34.75-.75.75s-.75-.34-.75-.75V14.5c0-.41.34-.75.75-.75h2.67c.41 0 .75.34.75.75s-.34.75-.75.75h-.75c1.55 1.08 3.69.93 5.07-.45.6-.6.98-1.38 1.11-2.25.06-.41.43-.7.85-.64.41.06.69.44.64.85-.18 1.21-.71 2.28-1.54 3.11"
    />
  </svg>
);
export default SvgRefreshCircle;
