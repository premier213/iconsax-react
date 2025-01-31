import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="m10.96 2.06-5.5 2.06c-1.05.4-1.91 1.64-1.91 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11c.65-.49 1.18-1.55 1.18-2.36v-8.1c0-1.12-.86-2.37-1.91-2.76l-5.5-2.06c-.56-.22-1.5-.22-2.07-.01"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m14.68 12.91-1.59-1.59 1.55-1.55c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.55 1.55-1.59-1.59a.755.755 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.59 1.59-1.64 1.64c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.64-1.64 1.59 1.59c.15.15.34.22.53.22s.38-.07.53-.22c.29-.3.29-.77 0-1.06"
    />
  </svg>
);
export default SvgShieldCross;
