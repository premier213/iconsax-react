import * as React from "react";
import type { SVGProps } from "react";
const SvgMedal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.5 3.66c1.38 1.19 2.25 2.92 2.25 4.84 0 3.59-3.02 6.5-6.75 6.5s-6.75-2.91-6.75-6.5S8.27 2 12 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.52 13.52-.01 7.38c0 .9.63 1.34 1.41.97l2.68-1.27c.22-.11.59-.11.81 0l2.69 1.27c.77.36 1.41-.07 1.41-.97v-7.56"
    />
  </svg>
);
export default SvgMedal;
