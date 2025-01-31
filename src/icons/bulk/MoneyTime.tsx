import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyTime = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m1 3.68c0 .61-.33 1.19-.85 1.5l-.76.46c-.12.07-.25.11-.38.11-.25 0-.5-.13-.64-.36-.21-.35-.1-.82.26-1.03l.76-.46c.07-.04.12-.13.12-.21v-.93c0-.41.34-.75.75-.75s.75.34.75.75v.92z"
    />
    <path
      fill="currentColor"
      d="M22 9v6c0 3.5-2 5-5 5H8.45c.35-.59.55-1.27.55-2 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M18.5 14.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75"
    />
  </svg>
);
export default SvgMoneyTime;
