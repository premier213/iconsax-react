import * as React from "react";
import type { SVGProps } from "react";
const SvgText = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.33 7.92c-.41 0-.75-.34-.75-.75V5.35c0-.73-.59-1.32-1.32-1.32H4.74c-.73 0-1.32.59-1.32 1.32v1.83c0 .41-.34.75-.75.75s-.75-.34-.75-.76V5.35c0-1.56 1.27-2.82 2.82-2.82h14.52c1.56 0 2.82 1.27 2.82 2.82v1.83c0 .41-.33.74-.75.74"
    />
    <path
      fill="currentColor"
      d="M12 21.47c-.41 0-.75-.34-.75-.75V4.11c0-.41.34-.75.75-.75s.75.34.75.75v16.61c0 .42-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M15.94 21.47H8.06c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7.88c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgText;
