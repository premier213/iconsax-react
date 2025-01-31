import * as React from "react";
import type { SVGProps } from "react";
const SvgSimcard = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.54 6.54-3.07-3.07a5 5 0 0 0-3.54-1.46H8c-3 0-5 2-5 5v10c0 3 2 5 5 5h8c3 0 5-2 5-5v-6.93a5 5 0 0 0-1.46-3.54"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M9.5 18.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0s.29.77 0 1.06L8.56 16l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22M14.5 18.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06L15.44 16l-1.47-1.47a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22"
    />
  </svg>
);
export default SvgSimcard;
