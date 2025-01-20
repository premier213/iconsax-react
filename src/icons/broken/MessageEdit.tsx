import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 8q0-6-6-6H8Q2 2 2 8v13c0 .55.45 1 1 1h13q6 0 6-6v-4"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m15.51 11.74.65-.65c.04-.04.08-.08.12-.13.81-.86 1.13-1.87-.12-3.12-1.32-1.32-2.36-.89-3.25 0l-5.19 5.19c-.2.2-.39.59-.43.87l-.28 1.98c-.1.72.4 1.22 1.12 1.12l1.98-.28c.28-.04.67-.23.87-.43l1.94-1.94"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.17 8.58a4.69 4.69 0 0 0 3.25 3.25"
    />
  </svg>
);
export default SvgMessageEdit;
