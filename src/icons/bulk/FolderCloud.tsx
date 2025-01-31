import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderCloud = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.99 10.84c-.02-.48-.1-.95-.25-1.4a5.35 5.35 0 0 0-5.09-3.72h-2.79c-.58 0-.62-.06-.93-.47l-1.4-1.86c-.65-.87-1.16-1.4-2.79-1.4H6.41c-2.44 0-4.42 1.98-4.42 4.42v10.23c0 2.95 2.4 5.35 5.35 5.35h9.3c2.95 0 5.35-2.4 5.35-5.35v-5.58a.8.8 0 0 0 0-.22"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M15.58 19.7c-2.11.15-2.11 3.21 0 3.36h5.01c.61 0 1.19-.22 1.64-.63 1.48-1.29.69-3.89-1.26-4.13-.7-4.22-6.81-2.62-5.36 1.4"
    />
  </svg>
);
export default SvgFolderCloud;
