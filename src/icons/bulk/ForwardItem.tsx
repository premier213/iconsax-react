import * as React from "react";
import type { SVGProps } from "react";
const SvgForwardItem = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.25 5.77V9c0 2.29-.73 3.02-3.02 3.02h-.1v-1.64c0-3.12-1.39-4.51-4.51-4.51h-1.64v-.1c0-2.29.73-3.02 3.02-3.02h3.23c2.29 0 3.02.73 3.02 3.02"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.63 10.38v3.24c0 2.28-.73 3.01-3.01 3.01h-3.24c-2.28 0-3.01-.73-3.01-3.01v-3.24c0-2.28.73-3.01 3.01-3.01h3.24c2.28 0 3.01.73 3.01 3.01"
    />
    <path
      fill="currentColor"
      d="M12.02 18.13v.1c0 2.29-.73 3.02-3.02 3.02H5.77c-2.29 0-3.02-.73-3.02-3.02V15c0-2.29.73-3.02 3.02-3.02h.1v1.64c0 3.12 1.39 4.51 4.51 4.51z"
      opacity={0.4}
    />
  </svg>
);
export default SvgForwardItem;
