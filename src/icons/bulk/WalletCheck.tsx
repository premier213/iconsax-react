import * as React from "react";
import type { SVGProps } from "react";
const SvgWalletCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 15c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06A3.97 3.97 0 0 0 5 23c1.46 0 2.73-.78 3.42-1.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4m1.97 3.67-2.13 1.97c-.14.13-.33.2-.51.2-.19 0-.38-.07-.53-.22l-.99-.99a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.48.48 1.6-1.48c.3-.28.78-.26 1.06.04s.26.78-.04 1.06M17.75 7.05C17.51 7.01 17.26 7 17 7H7q-.42 0-.81.06c.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26"
    />
    <path
      fill="currentColor"
      d="M22 12v5c0 3-2 5-5 5H7.63c.31-.26.58-.58.79-.94.37-.6.58-1.31.58-2.06 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V12c0-2.72 1.64-4.62 4.19-4.94Q6.58 7 7 7h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12"
      opacity={0.4}
    />
    <path fill="currentColor" d="M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3" />
  </svg>
);
export default SvgWalletCheck;
