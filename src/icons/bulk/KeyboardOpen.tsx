import * as React from "react";
import type { SVGProps } from "react";
const SvgKeyboardOpen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 22.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h10c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M18 19H6c-2.21 0-4-1.79-4-4V6c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v9c0 2.21-1.79 4-4 4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17.26 9.07h-3.68c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3.68a.749.749 0 1 1 0 1.5M10 9.32c-.55 0-1-.45-1-1s.44-1 1-1c.55 0 1 .45 1 1s-.44 1-1 1M6.85 9.32c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1s-.46 1-1.01 1M17.26 14.86H6.75c-.41 0-.76-.34-.76-.75s.33-.75.74-.75h10.53a.749.749 0 1 1 0 1.5"
    />
  </svg>
);
export default SvgKeyboardOpen;
