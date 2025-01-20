import * as React from "react";
import type { SVGProps } from "react";
const SvgFrame1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" />
    <path
      fill="currentColor"
      d="M21.54 15c-1.28 4.06-5.07 7-9.54 7-4.46 0-8.24-2.92-9.53-6.96h.58L7 15v-3.24c0-.92 1.15-1.35 1.75-.65L12 15l3.25-3.89c.6-.7 1.75-.27 1.75.65V15z"
    />
    <path
      fill="currentColor"
      d="M22 12c0 1.05-.16 2.05-.46 3H17v-3.24c0-.92-1.15-1.35-1.75-.65L12 15l-3.25-3.89c-.6-.7-1.75-.27-1.75.65V15l-3.95.04h-.58C2.17 14.08 2 13.06 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10"
      opacity={0.4}
    />
  </svg>
);
export default SvgFrame1;
