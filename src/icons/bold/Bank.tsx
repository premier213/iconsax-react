import * as React from "react";
import type { SVGProps } from "react";
const SvgBank = (props: SVGProps<SVGSVGElement>) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 19v3H2v-3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1"
    />
    <path
      fill="currentColor"
      d="M7 11H5v7h2zM11 11H9v7h2zM15 11h-2v7h2zM19 11h-2v7h2zM23 22.75H1c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h22c.41 0 .75.34.75.75s-.34.75-.75.75M21.37 5.75l-9-3.6c-.2-.08-.54-.08-.74 0l-9 3.6c-.35.14-.63.55-.63.93V10c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V6.68c0-.38-.28-.79-.63-.93M12 8.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5"
    />
  </svg>
);
export default SvgBank;
