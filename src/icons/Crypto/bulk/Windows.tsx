import * as React from "react";
import type { SVGProps } from "react";
const SvgWindows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m20.8 2.24-8 1.6c-.47.09-.8.5-.8.98V10c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V3.22c0-.63-.58-1.1-1.2-.98"
      clipRule="evenodd"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m20.8 21.76-8-1.6c-.47-.09-.8-.5-.8-.98V14c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v6.78c0 .63-.58 1.1-1.2.98M8.79 4.56l-6 1.28c-.46.1-.79.51-.79.98V10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V5.53c0-.63-.59-1.11-1.21-.97"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m8.79 19.44-6-1.28c-.46-.1-.79-.51-.79-.98V14c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v4.47c0 .63-.59 1.11-1.21.97"
      clipRule="evenodd"
      opacity={0.4}
    />
  </svg>
);
export default SvgWindows;
