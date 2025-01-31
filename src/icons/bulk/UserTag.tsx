import * as React from "react";
import type { SVGProps } from "react";
const SvgUserTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 10.41a2.33 2.33 0 1 0 0-4.66 2.33 2.33 0 0 0 0 4.66M14.68 15.06c.81 0 1.28-.9.83-1.57-.68-1.01-2-1.69-3.51-1.69s-2.83.68-3.51 1.69c-.45.67.02 1.57.83 1.57z"
    />
  </svg>
);
export default SvgUserTag;
