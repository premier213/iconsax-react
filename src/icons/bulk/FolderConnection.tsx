import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderConnection = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.75 21c0 .41-.34.75-.75.75h-4c-.05 0-.09-.02-.14-.03a1.992 1.992 0 0 1-3.72 0c-.05.01-.09.03-.14.03H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.05 0 .09.02.14.03a2 2 0 0 1 1.14-1.14c-.01-.05-.03-.09-.03-.14v-3h1.5v3c0 .05-.02.09-.03.14a2 2 0 0 1 1.14 1.14c.05-.01.09-.03.14-.03h4c.41 0 .75.34.75.75"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M19 8.3v4.2c0 2.8-.7 3.5-3.5 3.5h-7C5.7 16 5 15.3 5 12.5v-7C5 2.7 5.7 2 8.5 2h1.05c1.05 0 1.28.31 1.68.84l1.05 1.4c.27.35.42.56 1.12.56h2.1c2.8 0 3.5.7 3.5 3.5"
    />
  </svg>
);
export default SvgFolderConnection;
