import * as React from "react";
import type { SVGProps } from "react";
const SvgFilter = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.6 4.102v2.2c0 .8-.5 1.8-1 2.3l-4.3 3.8c-.6.5-1 1.5-1 2.3v4.3c0 .6-.4 1.4-.9 1.7l-1.4.9c-1.3.8-3.1-.1-3.1-1.7v-5.3c0-.7-.4-1.6-.8-2.1l-.47-.49a.995.995 0 0 1-.12-1.22l5.12-8.22c.18-.29.5-.47.85-.47h5.12c1.1 0 2 .9 2 2M10.35 3.632 6.8 9.322c-.34.55-1.12.63-1.57.16l-.93-.98c-.5-.5-.9-1.4-.9-2v-2.3c0-1.2.9-2.1 2-2.1h4.1c.78 0 1.26.86.85 1.53"
    />
  </svg>
);
export default SvgFilter;
