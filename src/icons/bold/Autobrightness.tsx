import * as React from "react";
import type { SVGProps } from "react";
const SvgAutobrightness = (props: SVGProps<SVGSVGElement>) => (
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
      d="m21.56 10.738-1.35-1.58c-.25-.3-.46-.86-.46-1.26v-1.7c0-1.06-.87-1.93-1.93-1.93h-1.7c-.4 0-.97-.21-1.27-.46l-1.58-1.35c-.69-.59-1.82-.59-2.51 0l-1.6 1.35c-.3.25-.86.46-1.26.46H6.17c-1.06 0-1.93.87-1.93 1.93v1.7c0 .39-.2.95-.45 1.25l-1.35 1.59c-.58.7-.58 1.82 0 2.5l1.35 1.59c.25.29.45.86.45 1.25v1.71c0 1.06.87 1.93 1.93 1.93h1.74c.39 0 .96.21 1.26.46l1.58 1.35c.69.59 1.82.59 2.51 0l1.58-1.35c.3-.25.86-.46 1.26-.46h1.7c1.06 0 1.93-.87 1.93-1.93v-1.7c0-.4.21-.96.46-1.26l1.35-1.58c.61-.68.61-1.81.02-2.51m-6.75 5.5-.98-2.2c-.03 0-.06.02-.09.02h-3.5c-.03 0-.06-.01-.09-.02l-.98 2.2-1.37-.61 3.5-7.88h1.37l3.5 7.88z"
    />
    <path fill="currentColor" d="M10.82 12.56h2.36L12 9.91z" />
  </svg>
);
export default SvgAutobrightness;
