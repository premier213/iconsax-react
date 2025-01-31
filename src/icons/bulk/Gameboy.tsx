import * as React from "react";
import type { SVGProps } from "react";
const SvgGameboy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17 22H7c-2.2 0-4-1.8-4-4V6c0-2.2 1.8-4 4-4h10c2.2 0 4 1.8 4 4v12c0 2.2-1.8 4-4 4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75M10.86 17.08l-.65-.65.62-.62c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.62.62-.59-.59a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.59.59-.62.62c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l.62-.62.65.65c.15.15.34.22.53.22s.38-.07.53-.22c.29-.29.29-.77 0-1.06M16.51 16.33c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.45 1-1 1M14.49 18.49c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.45 1.01-1 1.01"
    />
  </svg>
);
export default SvgGameboy;
