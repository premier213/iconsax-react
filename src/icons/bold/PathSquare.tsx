import * as React from "react";
import type { SVGProps } from "react";
const SvgPathSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37C2 19.83 4.17 22 7.81 22h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2m.47 9.25-1.62 1.02.14 2.4c.13 1.34-.33 1.8-1.6 1.95l-5.07.6c-.278.038-.373-.277-.174-.476L9.88 15.2c.29-.29.29-.77 0-1.06a.767.767 0 0 0-1.07 0l-1.535 1.543c-.198.199-.513.105-.475-.173l.59-5.07c.16-1.27.62-1.68 1.96-1.6l2.39.14 1.03-1.63c.47-.74 1.43-.78 2.13-.08l1.85 1.85c.66.65.62 1.68-.09 2.13"
    />
  </svg>
);
export default SvgPathSquare;
