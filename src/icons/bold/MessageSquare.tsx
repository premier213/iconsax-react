import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m2.09 10.91c0 .2-.01.4-.03.59-.18 2.12-1.43 3.18-3.73 3.18h-.32c-.2 0-.39.09-.5.25l-.94 1.26c-.42.56-1.09.56-1.51 0l-.94-1.26a.73.73 0 0 0-.5-.25h-.32c-2.51 0-3.76-.62-3.76-3.76V9.76c0-2.3 1.06-3.55 3.18-3.73.17-.02.37-.03.58-.03h5.03c2.51 0 3.76 1.26 3.76 3.76z"
    />
  </svg>
);
export default SvgMessageSquare;
