import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldSlash = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.36 4.64 5.83 18.17l-1.1-.82c-.65-.49-1.18-1.55-1.18-2.37V6.89c0-1.13.86-2.37 1.91-2.77l5.5-2.06c.57-.21 1.51-.21 2.08 0l5.5 2.06c.29.11.57.29.82.52M20.45 6.89v8.09c0 .82-.53 1.88-1.18 2.37l-5.5 4.11c-.98.72-2.56.72-3.54 0l-2.69-2L20.42 6.58c.02.1.03.21.03.31"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08"
    />
  </svg>
);
export default SvgShieldSlash;
