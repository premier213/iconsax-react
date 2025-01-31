import * as React from "react";
import type { SVGProps } from "react";
const SvgRam = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.5 9c.55 0 1-.45 1-1V7c0-3-1.53-5-5-5h-7c-3.53 0-5 2-5 5v10c0 2.314.878 4.026 2.895 4.684.301.098.594-.142.593-.46L6.98 19c0-1.66 1.35-3 3-3h4.01c1.64 0 2.99 1.34 3 2.98l.016 2.247c.002.317.296.553.596.452C19.59 21.013 20.5 19.303 20.5 17v-1.17c0-.53-.21-1.04-.59-1.42l-.82-.82c-.38-.38-.59-.89-.59-1.42V10c0-.55.45-1 1-1m-5.53-.47h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6a.749.749 0 1 1 0 1.5"
    />
    <path
      fill="currentColor"
      d="M16.01 20.97a1 1 0 0 1-1 1.01H8.994a1 1 0 0 1-1-.993L7.98 19a2 2 0 0 1 2-2h4.01c1.1 0 1.99.89 2 1.99z"
    />
  </svg>
);
export default SvgRam;
