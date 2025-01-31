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
      d="M22 7.54v8.92c0 2.29-1.86 4.14-4.15 4.14H6.15C3.86 20.6 2 18.75 2 16.46V7.54C2 5.25 3.86 3.4 6.15 3.4h11.7C20.14 3.4 22 5.25 22 7.54"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M9.25 12.75h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75M18.64 11.67c.14-.28.23-.59.23-.92 0-1.07-.93-2-2-2h-.61v-.5c0-.41-.34-.75-.75-.75s-.75.34-.75.75v.5h-2.01c-.41 0-.75.34-.75.75s.34.75.75.75H13v3.5h-.25c-.41 0-.75.34-.75.75s.34.75.75.75h2.01v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5h1.06c1.2 0 2.18-.9 2.18-2 0-.65-.34-1.21-.86-1.58m-3.7-1.42h1.94c.26 0 .5.28.5.5 0 .28-.22.5-.5.5H14.5v-1zm2.38 3.5H14.5v-1h2.83c.37 0 .68.23.68.5s-.32.5-.69.5"
    />
  </svg>
);
export default SvgBitcoinCard;
