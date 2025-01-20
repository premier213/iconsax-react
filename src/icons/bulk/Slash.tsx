import * as React from "react";
import type { SVGProps } from "react";
const SvgSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.53 5.53-14 14c-.02.02-.03.03-.05.04q-.57-.48-1.05-1.05A9.9 9.9 0 0 1 2 12C2 6.48 6.48 2 12 2c2.49 0 4.77.91 6.52 2.43q.57.48 1.05 1.05c-.01.02-.02.03-.04.05M22 12c0 5.52-4.48 10-10 10-1.99 0-3.84-.58-5.4-1.6L20.4 6.6A9.8 9.8 0 0 1 22 12"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08"
    />
  </svg>
);
export default SvgSlash;
