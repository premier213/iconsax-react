import * as React from "react";
import type { SVGProps } from "react";
const SvgMilk = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 15v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-5.02l3.89.02c.73 0 1.45.17 2.11.5s1.38.5 2.12.5z"
    />
    <path
      fill="currentColor"
      d="M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.7 4.7 0 0 0-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V4.91c.16.06.32.09.5.09h5c.18 0 .34-.03.5-.09v1.68c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M14.5 2h-5A1.498 1.498 0 0 0 9 4.91c.16.06.32.09.5.09h5c.18 0 .34-.03.5-.09A1.498 1.498 0 0 0 14.5 2"
    />
  </svg>
);
export default SvgMilk;
