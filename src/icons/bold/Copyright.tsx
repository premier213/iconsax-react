import * as React from "react";
import type { SVGProps } from "react";
const SvgCopyright = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m.24 13.25c.78 0 1.55-.29 2.14-.81.31-.27.79-.24 1.06.07s.24.79-.07 1.06c-.87.77-1.98 1.19-3.13 1.19-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75c1.15 0 2.27.42 3.13 1.19.31.27.34.75.07 1.06-.28.31-.75.34-1.06.07-.59-.52-1.35-.81-2.14-.81-1.79 0-3.25 1.46-3.25 3.25s1.46 3.23 3.25 3.23"
    />
  </svg>
);
export default SvgCopyright;
