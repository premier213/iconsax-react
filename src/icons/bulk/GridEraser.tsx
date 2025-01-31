import * as React from "react";
import type { SVGProps } from "react";
const SvgGridEraser = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.39 2.17v6.45H1.93v-.68c0-3.61 2.15-5.76 5.76-5.76h.7zM21.77 7.93c0 .38-.31.68-.68.68h-5.75V2.16h.67c3.18.01 5.76 2.59 5.76 5.77M8.39 15.55v5.76c0 .38-.31.68-.68.68H7.7c-3.18 0-5.76-2.58-5.76-5.76v-.68z"
    />
    <path fill="currentColor" d="M8.4 8.61H1.94v6.94H8.4z" opacity={0.4} />
    <path
      fill="currentColor"
      d="M15.33 8.61v6.26c0 .38-.31.68-.68.68H8.39V8.61z"
    />
    <path
      fill="currentColor"
      d="M15.33 2.17H8.39v6.45h6.94zM19.8 20.7l-1.9 1.91c-.52.52-1.38.52-1.92 0l-1.58-1.59c-.52-.53-.52-1.38 0-1.92l1.91-1.89z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m22.61 17.9-2.81 2.8-3.49-3.49 2.8-2.82c.53-.52 1.39-.52 1.92 0l1.58 1.59c.52.53.52 1.4 0 1.92"
    />
  </svg>
);
export default SvgGridEraser;
