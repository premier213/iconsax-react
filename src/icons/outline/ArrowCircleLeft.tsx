import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCircleLeft = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
    />
    <path
      fill="currentColor"
      d="M13.26 16.28c-.19 0-.38-.07-.53-.22L9.2 12.53a.754.754 0 0 1 0-1.06l3.53-3.53c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-3 3 3 3c.29.29.29.77 0 1.06a.7.7 0 0 1-.53.22"
    />
  </svg>
);
export default SvgArrowCircleLeft;
