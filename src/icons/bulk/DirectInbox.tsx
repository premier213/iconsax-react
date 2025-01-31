import * as React from "react";
import type { SVGProps } from "react";
const SvgDirectInbox = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 4H7.81C4.17 4 2 6.17 2 9.81v6.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V9.81C22 6.17 19.83 4 16.19 4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.3 12.23h-3.48c-.98 0-1.85.54-2.29 1.42l-.84 1.66c-.2.4-.6.65-1.04.65h-3.28c-.31 0-.75-.07-1.04-.65l-.84-1.65a2.57 2.57 0 0 0-2.29-1.42H2.7c-.39 0-.7.31-.7.7v3.26C2 19.83 4.18 22 7.82 22h8.38c3.43 0 5.54-1.88 5.8-5.22v-3.85c0-.38-.31-.7-.7-.7M14.53 6.47a.754.754 0 0 0-1.06 0l-.72.72V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v5.19l-.72-.72a.755.755 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l2 2c.01.01.02.01.02.02.06.06.14.11.22.15.1.03.19.05.29.05s.19-.02.28-.06.17-.09.25-.16l2-2c.29-.29.29-.77 0-1.06"
    />
  </svg>
);
export default SvgDirectInbox;
