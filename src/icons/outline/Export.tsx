import * as React from "react";
import type { SVGProps } from "react";
const SvgExport = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.44 7.25c-.19 0-.38-.07-.53-.22L11.88 5 9.85 7.03c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2.56-2.56c.29-.29.77-.29 1.06 0l2.56 2.56c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22"
    />
    <path
      fill="currentColor"
      d="M11.88 14.93c-.41 0-.75-.34-.75-.75V4.01c0-.41.34-.75.75-.75s.75.34.75.75v10.17c0 .42-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M12 20.75c-5.15 0-8.75-3.6-8.75-8.75 0-.41.34-.75.75-.75s.75.34.75.75c0 4.27 2.98 7.25 7.25 7.25s7.25-2.98 7.25-7.25c0-.41.34-.75.75-.75s.75.34.75.75c0 5.15-3.6 8.75-8.75 8.75"
    />
  </svg>
);
export default SvgExport;
