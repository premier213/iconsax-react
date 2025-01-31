import * as React from "react";
import type { SVGProps } from "react";
const SvgLocationTick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.62 8.7C19.58 4.07 15.54 2 12 2h-.01C8.46 2 4.43 4.07 3.38 8.69c-1.18 5.16 1.98 9.53 4.84 12.29A5.44 5.44 0 0 0 12 22.51c1.36 0 2.72-.51 3.77-1.53 2.86-2.76 6.02-7.12 4.85-12.28"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10.75 13.75c-.19 0-.38-.07-.53-.22l-1.5-1.5a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.97.97 3.47-3.47c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-4 4c-.15.15-.34.22-.53.22"
    />
  </svg>
);
export default SvgLocationTick;
