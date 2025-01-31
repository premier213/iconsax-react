import * as React from "react";
import type { SVGProps } from "react";
const SvgCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.48 10.69 2.01 15.72c.11-1.59 1.1-3.26 3.1-3.75-.59-2.33-.09-4.52 1.43-6.11 1.73-1.81 4.49-2.53 6.87-1.79 2.19.67 3.73 2.47 4.28 4.97 1.09.25 2.06.82 2.79 1.65"
    />
    <path
      fill="currentColor"
      d="M20.17 18.74a5.66 5.66 0 0 1-3.82 1.48H5.97C3.23 20.02 2 17.91 2 16.03c0-.1 0-.2.01-.31l18.47-5.03c.57.61 1 1.36 1.26 2.22.66 2.17.06 4.4-1.57 5.83"
      opacity={0.4}
    />
  </svg>
);
export default SvgCloud;
