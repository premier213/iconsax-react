import * as React from "react";
import type { SVGProps } from "react";
const SvgStickynote = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.5 8.37v7.45c0 .15-.05.3-.18.43l-5.51 5.55c-.13.14-.3.2-.47.2H7.37a4.87 4.87 0 0 1-4.87-4.87V8.37A4.87 4.87 0 0 1 7.37 3.5h9.26a4.87 4.87 0 0 1 4.87 4.87"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76M15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76M14.78 12.71H7.36a.749.749 0 1 1 0-1.5h7.42a.749.749 0 1 1 0 1.5M12 16.42H7.36a.749.749 0 1 1 0-1.5H12a.749.749 0 1 1 0 1.5M21.5 15.82c0 .15-.05.3-.18.43l-5.51 5.55c-.13.14-.3.2-.47.2-.33 0-.65-.26-.65-.64v-3.5c0-1.46 1.24-2.67 2.76-2.67.95-.01 2.27-.01 3.4-.01.39 0 .65.31.65.64"
    />
  </svg>
);
export default SvgStickynote;
