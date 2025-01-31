import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowUp = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.67 18.75H9.33c-1.88 0-3.31-.68-4.02-1.91s-.58-2.81.36-4.44l2.67-4.63c.94-1.62 2.24-2.52 3.66-2.52s2.72.9 3.66 2.53l2.67 4.63c.94 1.63 1.07 3.21.36 4.44-.71 1.22-2.14 1.9-4.02 1.9M12 6.75c-.86 0-1.7.63-2.36 1.78l-2.67 4.63c-.66 1.15-.79 2.19-.36 2.94s1.4 1.16 2.72 1.16h5.34c1.32 0 2.29-.41 2.72-1.16s.3-1.79-.36-2.94l-2.67-4.63c-.66-1.15-1.5-1.78-2.36-1.78"
    />
  </svg>
);
export default SvgArrowUp;
