import * as React from "react";
import type { SVGProps } from "react";
const SvgForbidden = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l4.1 4.1c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12V9.1c0-.68-.4-1.64-.88-2.12l-4.1-4.1C16.54 2.4 15.58 2 14.9 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M3.02 21.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L20.47 2.49c.29-.29.77-.29 1.06 0s.29.77 0 1.06L3.55 21.53a.7.7 0 0 1-.53.22"
    />
  </svg>
);
export default SvgForbidden;
