import * as React from "react";
import type { SVGProps } from "react";
const SvgBucket = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.31 11.25c.02.26-.07.53-.27.73L11.02 18c-1.33 1.33-2.67 1.33-4.01 0L3 13.99c-.68-.69-1.02-1.38-1-2.07h.07l15.12-.66z"
    />
    <path
      fill="currentColor"
      d="M17.04 10.64 9.69 3.29l-.87-.87a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.87.87L3 9.98c-.64.64-.98 1.29-1 1.94h.07l15.12-.66.12-.01a.95.95 0 0 0-.27-.61"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h13c.41 0 .75.34.75.75s-.34.75-.75.75M19.35 14.78a.7.7 0 0 0-1 0c-.31.34-1.85 2.08-1.85 3.39 0 1.3 1.05 2.35 2.35 2.35s2.35-1.05 2.35-2.35c0-1.31-1.54-3.05-1.85-3.39"
    />
  </svg>
);
export default SvgBucket;
