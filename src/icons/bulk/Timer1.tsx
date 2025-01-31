import * as React from "react";
import type { SVGProps } from "react";
const SvgTimer1 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22a8.67 8.67 0 1 0 0-17.34A8.67 8.67 0 0 0 12 22"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M14.89 3.45H9.11c-.4 0-.72-.32-.72-.72S8.71 2 9.11 2h5.78c.4 0 .72.32.72.72s-.32.73-.72.73"
    />
  </svg>
);
export default SvgTimer1;
