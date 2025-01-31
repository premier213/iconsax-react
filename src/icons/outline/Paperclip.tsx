import * as React from "react";
import type { SVGProps } from "react";
const SvgPaperclip = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.97 22.75c-3.72 0-6.75-3.03-6.75-6.75v-6c0-4.27 3.48-7.75 7.75-7.75s7.75 3.48 7.75 7.75v5.5a4.26 4.26 0 0 1-4.25 4.25 4.26 4.26 0 0 1-4.25-4.25V12c0-.41.34-.75.75-.75s.75.34.75.75v3.5c0 1.52 1.23 2.75 2.75 2.75s2.75-1.23 2.75-2.75V10c0-3.45-2.8-6.25-6.25-6.25S5.72 6.55 5.72 10v6c0 2.89 2.35 5.25 5.25 5.25a.749.749 0 1 1 0 1.5"
    />
  </svg>
);
export default SvgPaperclip;
