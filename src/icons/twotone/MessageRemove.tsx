import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M22 7.43v6c0 1.5-.5 2.75-1.38 3.63-.87.87-2.12 1.37-3.62 1.37v2.13c0 .8-.89 1.28-1.55.84L11 18.43H8.88q.12-.45.12-.93c0-1.02-.39-1.96-1.03-2.67A3.94 3.94 0 0 0 5 13.5c-1.12 0-2.14.46-2.87 1.21-.09-.4-.13-.83-.13-1.28v-6c0-3 2-5 5-5h10c3 0 5 2 5 5"
      opacity={0.4}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M9 17.5q0 .48-.12.93c-.09.4-.25.79-.46 1.13A3.97 3.97 0 0 1 5 21.5a3.92 3.92 0 0 1-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.9 3.9 0 0 1 1 17.5a3.995 3.995 0 0 1 4-4c1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67M6.07 18.54l-2.12-2.11M6.05 16.46l-2.12 2.11M8.5 10.5h7"
    />
  </svg>
);
export default SvgMessageRemove;
