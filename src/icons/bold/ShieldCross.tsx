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
      d="m18.54 4.12-5.5-2.06c-.57-.21-1.5-.21-2.07 0l-5.5 2.06c-1.06.4-1.92 1.64-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11c.65-.49 1.18-1.55 1.18-2.36v-8.1c.01-1.13-.85-2.37-1.9-2.77m-3.86 9.85c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-1.59-1.59-1.64 1.64c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1.64-1.64-1.6-1.6a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1.59 1.59 1.55-1.55c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1.55 1.55 1.59 1.59c.3.3.3.77.01 1.07"
    />
  </svg>
);
export default SvgShieldCross;
