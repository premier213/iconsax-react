import * as React from "react";
import type { SVGProps } from "react";
const SvgMoney2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fill="currentColor"
      d="M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5M7 19c0-2.82-.91-3.86-3.5-3.98V8.98C6.09 8.86 7 7.82 7 5h10c0 2.82.91 3.86 3.5 3.98v6.04c-2.59.12-3.5 1.16-3.5 3.98z"
    />
  </svg>
);
export default SvgMoney2;
