import * as React from "react";
import type { SVGProps } from "react";
const SvgAudioSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.82C4.18 2 2.01 4.17 2.01 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m15.62 7.1-2.29-.76c-.58-.2-1.17-.12-1.62.2s-.7.86-.7 1.47v4.79c-.4-.22-.85-.35-1.34-.35-1.54 0-2.8 1.26-2.8 2.8s1.26 2.8 2.8 2.8 2.8-1.26 2.8-2.8V10.7c.01.01.03.01.04.02l2.29.76c.21.07.43.11.64.11.36 0 .7-.1.98-.31.45-.32.7-.86.7-1.47V9.2c0-.91-.64-1.81-1.5-2.1m-5.95 9.49c-.74 0-1.33-.6-1.33-1.33 0-.74.6-1.34 1.33-1.34.74 0 1.34.6 1.34 1.34 0 .73-.6 1.33-1.34 1.33"
    />
  </svg>
);
export default SvgAudioSquare;
