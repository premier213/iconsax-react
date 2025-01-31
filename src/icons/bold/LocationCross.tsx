import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.619 8.7c-1.04-4.63-5.08-6.7-8.62-6.7h-.01c-3.53 0-7.56 2.07-8.61 6.69-1.18 5.16 1.98 9.53 4.84 12.29a5.44 5.44 0 0 0 3.78 1.53c1.36 0 2.72-.51 3.77-1.53 2.86-2.76 6.02-7.12 4.85-12.28m-6.09 4.79c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.45-1.45-1.49 1.49c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.49-1.49-1.45-1.45a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.45 1.45 1.4-1.4c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.4 1.4 1.45 1.45c.29.29.29.76 0 1.06"
    />
  </svg>
);
export default SvgLocationCross;
