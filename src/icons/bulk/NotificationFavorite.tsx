import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationFavorite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M19 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fill="currentColor"
      d="M19 9.5c-2.48 0-4.5-2.02-4.5-4.5 0-.72.19-1.39.49-2H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V9.01c-.6.3-1.27.49-1.99.49"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10.9 12.36c-.57-.18-1.18-.08-1.61.26-.44-.34-1.04-.44-1.6-.26-1.23.4-1.62 1.8-1.27 2.88.53 1.64 2.26 2.49 2.88 2.49.61 0 2.37-.87 2.88-2.49.35-1.08-.05-2.48-1.28-2.88"
    />
  </svg>
);
export default SvgNotificationFavorite;
