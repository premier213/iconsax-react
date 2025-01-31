import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.119 6.002c.58-.278 1.148.016 1.491.302l2.058 1.718.002.001a1.32 1.32 0 0 1 .044 2.023l-2.137 1.959 2.137 1.96a1.32 1.32 0 0 1-.044 2.021l-.002.002-2.057 1.718-.002.001c-.343.285-.905.569-1.48.3-.578-.27-.72-.886-.72-1.337v-2.678l-2.312 2.12a.75.75 0 1 1-1.014-1.105l3.274-3.002-3.274-3.002a.75.75 0 0 1 1.014-1.106l2.313 2.121V7.34c0-.443.134-1.063.709-1.338m.79 7.427 1.66 1.522-1.66 1.386zm0-2.848V7.673l1.66 1.386z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBluetoothCircle;
