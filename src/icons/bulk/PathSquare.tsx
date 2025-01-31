import * as React from "react";
import type { SVGProps } from "react";
const SvgPathSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m16.66 11.25-1.62 1.02-3.3-3.29 1.03-1.63c.47-.74 1.43-.78 2.13-.08l1.85 1.85c.66.65.62 1.68-.09 2.13"
    />
    <path
      fill="currentColor"
      d="m13.58 16.62-5.07.6c-.22.03-.42.02-.61-.04-.55-.12-.94-.51-1.06-1.06-.06-.19-.07-.39-.04-.61l.59-5.07c.16-1.27.62-1.68 1.96-1.6l2.39.14 3.3 3.29.14 2.4c.13 1.34-.33 1.8-1.6 1.95"
      opacity={0.6}
    />
    <path
      fill="currentColor"
      d="M9.88 15.2 7.9 17.18c-.55-.12-.94-.51-1.06-1.06l1.97-1.98c.3-.29.77-.29 1.07 0 .29.29.29.77 0 1.06"
    />
  </svg>
);
export default SvgPathSquare;
