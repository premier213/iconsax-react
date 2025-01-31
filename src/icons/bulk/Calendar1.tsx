import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar1 = (props: SVGProps<SVGSVGElement>) => (
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
      fillRule="evenodd"
      d="M8 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2A.75.75 0 0 1 8 1.25M16 1.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      d="M21.5 8.37v8.76c0 .16-.01.32-.02.47H2.52c-.01-.15-.02-.31-.02-.47V8.37A4.87 4.87 0 0 1 7.37 3.5h9.26a4.87 4.87 0 0 1 4.87 4.87"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.48 17.6a4.876 4.876 0 0 1-4.85 4.4H7.37c-2.53 0-4.61-1.93-4.85-4.4zM13.53 11.62c.45-.31.73-.77.73-1.39 0-1.3-1.04-1.97-2.26-1.97s-2.27.67-2.27 1.97c0 .62.29 1.09.73 1.39-.61.36-.96.94-.96 1.62 0 1.24.95 2.01 2.5 2.01 1.54 0 2.5-.77 2.5-2.01 0-.68-.35-1.27-.97-1.62M12 9.5c.52 0 .9.29.9.79 0 .49-.38.8-.9.8s-.9-.31-.9-.8c0-.5.38-.79.9-.79m0 4.5c-.66 0-1.14-.33-1.14-.93s.48-.92 1.14-.92 1.14.33 1.14.92c0 .6-.48.93-1.14.93"
    />
  </svg>
);
export default SvgCalendar1;
