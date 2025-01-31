import * as React from "react";
import type { SVGProps } from "react";
const SvgBitcoinBtc = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" />
    <path
      fill="currentColor"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.49 11.61c.38-.49.62-1.11.62-1.78 0-1.55-1.36-2.92-2.92-2.92h-.88V5.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.42H10.6V5.5c0-.41-.34-.75-.75-.75s-.73.34-.73.75v1.42H7.05c-.41 0-.75.34-.75.75s.34.75.75.75h.98v7.16h-.98c-.41 0-.75.34-.75.75s.34.75.75.75h2.06v1.42c0 .41.34.75.75.75s.75-.34.75-.75v-1.42h1.21v1.42c0 .41.34.75.75.75s.75-.34.75-.75v-1.42h1.65c1.78 0 3.23-1.31 3.23-2.92 0-1.1-.7-2.06-1.71-2.55m-5.65-3.19h3.36c.8 0 1.42.76 1.42 1.42 0 .78-.64 1.42-1.42 1.42H9.53V8.42zm4.13 7.16H9.53v-2.83h5.44c.95 0 1.73.64 1.73 1.42s-.78 1.41-1.73 1.41"
    />
  </svg>
);
export default SvgBitcoinBtc;
