import * as React from "react";
import type { SVGProps } from "react";
const SvgGridLock = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.53 17.31v-.16c0-1.93-.98-2.9-2.9-2.9s-2.9.98-2.9 2.9v.16c-1.05.26-1.47.98-1.47 2.42v.74c0 1.85.69 2.53 2.53 2.53h3.68c1.85 0 2.53-.69 2.53-2.53v-.74c0-1.43-.42-2.16-1.47-2.42m-2.91-1.68c1.29 0 1.52.49 1.52 1.52v.05H17.1v-.05c0-1.03.23-1.52 1.52-1.52M8.39 2.17v6.45H1.93v-.68c0-3.61 2.15-5.76 5.76-5.76h.7zM21.77 7.93c0 .38-.31.68-.68.68h-5.75V2.16h.67c3.18.01 5.76 2.59 5.76 5.77M8.39 15.55v5.76c0 .38-.31.68-.68.68H7.7c-3.18 0-5.76-2.58-5.76-5.76v-.68z"
    />
    <path fill="currentColor" d="M8.4 8.61H1.94v6.94H8.4z" opacity={0.4} />
    <path fill="currentColor" d="M15.33 8.61v5.94c0 .55-.45 1-1 1H8.39V8.61z" />
    <path fill="currentColor" d="M15.33 2.17H8.39v6.45h6.94z" opacity={0.4} />
  </svg>
);
export default SvgGridLock;
