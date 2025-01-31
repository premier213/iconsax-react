import * as React from "react";
import type { SVGProps } from "react";
const SvgImport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 10.76a.86.86 0 0 0-.86-.86H2.86c-.48 0-.86.38-.86.86 0 5.89 4.11 10 10 10s10-4.12 10-10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m12.46 15.9 2.85-2.84c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.56 1.56V3.99c0-.41-.34-.75-.75-.75s-.75.34-.75.75v9.57L9.62 12a.754.754 0 0 0-1.06 0c-.15.15-.22.34-.22.53s.07.38.22.53l2.85 2.84c.29.3.76.3 1.05 0"
    />
  </svg>
);
export default SvgImport;
