import * as React from "react";
import type { SVGProps } from "react";
const SvgTheGraphGrt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" />
    <path
      fill="currentColor"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M11.31 13.94a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76M16.51 8.31c-.55 0-1-.45-1-1s.44-1 1-1h.01c.55 0 1 .45 1 1-.01.55-.46 1-1.01 1M12.06 18.56c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3-3c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3 3c-.14.15-.34.22-.53.22"
    />
  </svg>
);
export default SvgTheGraphGrt;
