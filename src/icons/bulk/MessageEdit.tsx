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
      fill="currentColor"
      d="M16 2H8Q2 2 2 8v13c0 .55.45 1 1 1h13q6 0 6-6V8q0-6-6-6"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.551 7.46c-1.26-1.26-2.48-1.29-3.77 0l-.79.79c-.07.07-.09.17-.07.26a5.24 5.24 0 0 0 3.58 3.58c.02.01.05.01.08.01.07 0 .14-.03.19-.08l.78-.78c.64-.64.95-1.25.95-1.87 0-.65-.31-1.27-.95-1.91M14.34 12.67c-.19-.09-.37-.18-.54-.29-.14-.08-.28-.17-.41-.27-.11-.07-.24-.17-.37-.28a.4.4 0 0 1-.11-.1c-.21-.18-.45-.42-.67-.67-.02-.01-.05-.06-.09-.12a5 5 0 0 1-.27-.35c-.08-.1-.17-.24-.25-.38-.1-.17-.2-.35-.28-.53-.09-.2-.16-.38-.23-.56l-3.77 3.77c-.25.25-.48.71-.53 1.05l-.29 2.08c-.07.44.06.85.33 1.13.23.23.55.35.9.35.08 0 .15-.01.23-.02l2.08-.29c.34-.05.8-.28 1.05-.53l3.77-3.77c-.18-.07-.36-.14-.55-.22"
    />
  </svg>
);
export default SvgMessageEdit;
