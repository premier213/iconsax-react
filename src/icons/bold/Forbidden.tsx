import * as React from "react";
import type { SVGProps } from "react";
const SvgForbidden = (props: SVGProps<SVGSVGElement>) => (
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
      d="M17.02 2.88C16.54 2.4 15.58 2 14.9 2H9.1c-.68 0-1.64.4-2.12.88l-4.1 4.1C2.4 7.46 2 8.42 2 9.1v5.8c0 .68.4 1.64.88 2.12l1.53 1.53L18.55 4.41zM21.12 6.979l-1.51-1.51-14.14 14.14 1.51 1.51c.48.48 1.44.88 2.12.88h5.8c.68 0 1.64-.4 2.12-.88l4.1-4.1c.48-.48.88-1.44.88-2.12v-5.8c0-.68-.4-1.64-.88-2.12M2.49 20.47c-.29.29-.29.77 0 1.06.15.15.34.22.53.22s.38-.07.53-.22l1.92-1.92-1.06-1.06z"
    />
    <path
      fill="currentColor"
      d="M21.53 3.55c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-1.92 1.92 1.06 1.06z"
    />
  </svg>
);
export default SvgForbidden;
