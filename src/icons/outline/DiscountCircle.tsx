import * as React from "react";
import type { SVGProps } from "react";
const SvgDiscountCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 16c-.56 0-1.01-.45-1.01-1s.45-1 1-1 1 .45 1 1-.44 1-.99 1M9.01 10C8.45 10 8 9.55 8 9s.45-1 1-1 1 .45 1 1-.44 1-.99 1M9 15.75c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l6-6c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6 6c-.15.15-.34.22-.53.22"
    />
  </svg>
);
export default SvgDiscountCircle;
