import * as React from "react";
import type { SVGProps } from "react";
const SvgBitcoinCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.38 10.75c0-.22-.24-.5-.5-.5H14.5v1h2.38c.27 0 .5-.22.5-.5M17.32 12.75H14.5v1h2.82c.37 0 .68-.23.68-.5s-.31-.5-.68-.5"
    />
    <path
      fill="currentColor"
      d="M17.85 3.398H6.15C3.86 3.398 2 5.248 2 7.538v8.92c0 2.29 1.86 4.14 4.15 4.14h11.7c2.29 0 4.15-1.85 4.15-4.14v-8.92c0-2.29-1.86-4.14-4.15-4.14m-8.6 9.35h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75m8.07 2.5h-1.06v.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.5h-2.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H13v-3.5h-.25c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.01v-.5c0-.41.34-.75.75-.75s.75.34.75.75v.5h.61c1.07 0 2 .93 2 2 0 .33-.09.64-.23.92.52.37.86.94.86 1.58 0 1.1-.98 2-2.18 2"
    />
  </svg>
);
export default SvgBitcoinCard;
