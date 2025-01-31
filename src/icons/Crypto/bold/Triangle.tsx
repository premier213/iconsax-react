import * as React from "react";
import type { SVGProps } from "react";
const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.05 2.848-8.79 8.79c-.2.2-.2.51 0 .71l8.79 8.79c.32.31.85.09.85-.35v-2.59a.47.47 0 0 0-.15-.35l-5.5-5.5c-.2-.2-.2-.51 0-.71l5.5-5.5a.5.5 0 0 0 .15-.35v-2.59a.5.5 0 0 0-.85-.35M13.75 2.848l8.79 8.79c.2.2.2.51 0 .71l-8.79 8.79a.5.5 0 0 1-.85-.35v-2.59c0-.13.05-.26.15-.35l5.5-5.5c.2-.2.2-.51 0-.71l-5.5-5.5a.5.5 0 0 1-.15-.35v-2.59a.5.5 0 0 1 .85-.35"
    />
    <path
      fill="currentColor"
      d="m10.05 9.848-1.79 1.79c-.2.2-.2.51 0 .71l1.79 1.79c.32.31.85.09.85-.35v-3.59a.5.5 0 0 0-.85-.35"
    />
  </svg>
);
export default SvgTriangle;
