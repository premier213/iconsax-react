import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterSearch = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.75 15.41-.85-.85c.44-.67.7-1.46.7-2.32C19.6 9.9 17.7 8 15.36 8s-4.24 1.9-4.24 4.24 1.9 4.24 4.24 4.24c.86 0 1.66-.26 2.32-.7l.85.85c.17.17.39.25.61.25s.44-.08.61-.25c.33-.34.33-.89 0-1.22"
    />
    <path
      fill="currentColor"
      d="M5.41 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.31 8.46c-.5-.51-.9-1.41-.9-2.02V4.12c.01-1.21.91-2.12 2-2.12"
      opacity={0.4}
    />
  </svg>
);
export default SvgFilterSearch;
