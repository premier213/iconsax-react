import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6M12 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
    <path
      fill="currentColor"
      d="M15 1.62H9C5.81 1.62 4.62 2.81 4.62 6v12c0 3.19 1.19 4.38 4.38 4.38h6c3.19 0 4.38-1.19 4.38-4.38V6c0-3.19-1.19-4.38-4.38-4.38M12 6c.83 0 1.5.67 1.5 1.5S12.83 9 12 9s-1.5-.67-1.5-1.5S11.17 6 12 6m0 12c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3"
      opacity={0.4}
    />
  </svg>
);
export default SvgSpeaker;
