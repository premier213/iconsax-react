import * as React from "react";
import type { SVGProps } from "react";
const SvgGooglePlay = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.4 12.95-4.51 2.26-3.19-3.19 3.22-3.22 4.48 2.25c.79.39.79 1.51 0 1.9"
      opacity={0.4}
    />
    <path fill="currentColor" d="m16.92 8.8-3.22 3.22-9.67-9.67z" />
    <path
      fill="currentColor"
      d="M13.7 12.02 4.12 21.6l-.57.29c-.72.35-1.55-.16-1.55-.96V3.07c0-.8.83-1.31 1.55-.96l.48.24z"
      opacity={0.4}
    />
    <path fill="currentColor" d="M16.89 15.21 4.12 21.6l9.58-9.58z" />
  </svg>
);
export default SvgGooglePlay;
