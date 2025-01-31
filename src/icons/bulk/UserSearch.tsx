import * as React from "react";
import type { SVGProps } from "react";
const SvgUserSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
    <path
      fill="currentColor"
      d="M12 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m22.77 20.68-.76-.76c.4-.6.63-1.32.63-2.09a3.82 3.82 0 1 0-3.82 3.82c.77 0 1.49-.23 2.09-.63l.76.76c.15.15.35.23.55.23s.4-.08.55-.23c.31-.31.31-.8 0-1.1"
    />
  </svg>
);
export default SvgUserSearch;
