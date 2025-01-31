import * as React from "react";
import type { SVGProps } from "react";
const SvgBluetoothRectangle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 22H9c-3 0-5-2-5-5V7c0-3 2-5 5-5h6c3 0 5 2 5 5v10c0 3-2 5-5 5"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.6 18.11c-.22 0-.39-.06-.49-.1-.22-.1-.72-.43-.72-1.34V14l-2.3 2.11c-.3.28-.78.26-1.06-.05A.746.746 0 0 1 8.08 15l3.28-3.01-3.28-3.01a.746.746 0 0 1-.05-1.06c.28-.3.76-.33 1.06-.05l2.3 2.11V7.32c0-.9.5-1.23.72-1.34.21-.1.79-.28 1.49.3L15.66 8c.3.25.48.62.49 1s-.15.76-.44 1.02l-2.13 1.95 2.13 1.95c.29.27.45.64.44 1.02s-.19.75-.49 1l-2.06 1.72c-.38.36-.73.45-1 .45m.3-4.7v2.92l1.67-1.39zm0-5.74v2.92l1.67-1.53z"
    />
  </svg>
);
export default SvgBluetoothRectangle;
