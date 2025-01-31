import * as React from "react";
import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20 12v6c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4v-6c0-.55.45-1 1-1h1.97c.55 0 1 .45 1 1v3.14a2.014 2.014 0 0 0 2 2.01c.38 0 .76-.11 1.09-.33l.95-.62.88.59c.61.41 1.39.46 2.04.11.66-.35 1.07-1.02 1.07-1.77V12c0-.55.45-1 1-1h2c.55 0 1 .45 1 1M21.5 7v1c0 1.1-.53 2-2 2h-15c-1.53 0-2-.9-2-2V7c0-1.1.47-2 2-2h15c1.47 0 2 .9 2 2"
    />
    <path
      fill="currentColor"
      d="M11.639 5.001h-5.52a.936.936 0 0 1 .03-1.3l1.42-1.42a.96.96 0 0 1 1.35 0zM17.872 5.001h-5.52l2.72-2.72a.96.96 0 0 1 1.35 0l1.42 1.42c.36.36.37.93.03 1.3M13.971 11c.55 0 1 .45 1 1v3.13c0 .8-.89 1.28-1.55.83l-.9-.6a1 1 0 0 0-1.1 0l-.94.62c-.66.44-1.54-.04-1.54-.83V12c0-.55.45-1 1-1z"
    />
  </svg>
);
export default SvgGift;
