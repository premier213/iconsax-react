import * as React from "react";
import type { SVGProps } from "react";
const SvgSmsNotification = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M19.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    <path fill="currentColor" d="M19.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
    <path
      fill="currentColor"
      d="M20.72 9.31c.63-.2 1.28.29 1.28.96v5.24c0 3.5-2 5-5 5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h7.61c.65 0 1.09.6.97 1.23-.12.59-.1 1.22.08 1.87a3.98 3.98 0 0 0 2.8 2.76c.79.2 1.56.16 2.26-.06"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 12.87c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l1.18-.94c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-1.18.94c-.64.53-1.49.79-2.33.79"
    />
  </svg>
);
export default SvgSmsNotification;
