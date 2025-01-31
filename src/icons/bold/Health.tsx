import * as React from "react";
import type { SVGProps } from "react";
const SvgHealth = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 7.81v4.69h-4.08c-.12-.01-.38-.16-.44-.27l-1.04-1.97c-.41-.78-1.12-1.22-1.88-1.18s-1.41.55-1.74 1.38l-1.38 3.46-.2-.52c-.49-1.27-1.89-2.23-3.27-2.23L2 11.2V7.81C2 4.17 4.17 2 7.81 2h8.38C19.83 2 22 4.17 22 7.81"
    />
    <path
      fill="currentColor"
      d="M22 16.189v-2.19h-4.08c-.67 0-1.46-.48-1.77-1.07l-1.04-1.97c-.28-.53-.68-.5-.9.05l-2.3 5.81c-.25.65-.67.65-.93 0l-1.14-2.88c-.27-.7-1.11-1.27-1.86-1.27l-5.98.03v3.49c0 3.58 2.1 5.74 5.63 5.8.11.01.23.01.34.01h8c.15 0 .3 0 .44-.01 3.51-.08 5.59-2.23 5.59-5.8M2 12.7v3.31c-.02-.32-.03-.66-.03-1.01v-2.3z"
    />
  </svg>
);
export default SvgHealth;
