import * as React from "react";
import type { SVGProps } from "react";
const SvgTrello = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M9.55 17.72H7.1c-.67 0-1.22-.55-1.22-1.22V7.52c0-.67.55-1.22 1.22-1.22h2.45c.67 0 1.22.55 1.22 1.22v8.98c0 .67-.55 1.22-1.22 1.22M17.14 13.63H14.2c-.54 0-.98-.44-.98-.98V7.26c0-.54.44-.98.98-.98h2.94c.54 0 .98.44.98.98v5.39c0 .54-.44.98-.98.98"
    />
  </svg>
);
export default SvgTrello;
