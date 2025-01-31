import * as React from "react";
import type { SVGProps } from "react";
const SvgGridEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.33 14.67c-1.05-1.05-1.88-.71-2.6 0l-4.15 4.15c-.16.16-.31.47-.35.69L14 21.1c-.08.57.32.98.89.89l1.59-.23c.22-.03.53-.19.69-.35l4.15-4.15c.73-.71 1.06-1.54.01-2.59M8.39 2.17v6.45H1.93v-.68c0-3.61 2.15-5.76 5.76-5.76h.7zM21.77 7.93c0 .38-.31.68-.68.68h-5.75V2.16h.67c3.18.01 5.76 2.59 5.76 5.77M8.39 15.55v5.76c0 .38-.31.68-.68.68H7.7c-3.18 0-5.76-2.58-5.76-5.76v-.68z"
    />
    <path fill="currentColor" d="M8.4 8.61H1.94v6.94H8.4z" opacity={0.4} />
    <path fill="currentColor" d="M15.33 8.61v5.94c0 .55-.45 1-1 1H8.39V8.61z" />
    <path fill="currentColor" d="M15.33 2.17H8.39v6.45h6.94z" opacity={0.4} />
  </svg>
);
export default SvgGridEdit;
