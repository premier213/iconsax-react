import * as React from "react";
import type { SVGProps } from "react";
const SvgFavoriteChart = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={1.5}
      d="M22 13V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.33 14.49 2.38-3.09c.34-.44.97-.52 1.41-.18l1.83 1.44c.44.34 1.07.26 1.41-.17l2.31-2.98M20.55 16.98c-.3-.05-.66-.32-.8-.6l-.28-.57c-.54-1.09-1.42-1.09-1.95 0l-.28.57c-.14.28-.49.54-.8.6l-.38.06c-1.14.19-1.41 1.03-.59 1.86l.35.35c.23.24.36.7.29 1.02l-.05.21c-.31 1.38.42 1.91 1.62 1.19l.26-.15c.31-.18.81-.18 1.12 0l.26.15c1.21.73 1.94.19 1.62-1.19l-.05-.21"
    />
  </svg>
);
export default SvgFavoriteChart;
