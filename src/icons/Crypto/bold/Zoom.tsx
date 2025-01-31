import * as React from "react";
import type { SVGProps } from "react";
const SvgZoom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1.63 12.29c0 .51-.41.92-.92.92l-3.68.03a2.77 2.77 0 0 1-2.79-2.77v-2.8c0-.51.41-.92.92-.92h3.69a2.77 2.77 0 0 1 2.77 2.77v2.77zm4.12-.29c0 .43-.48.69-.84.45l-1.92-1.28a.54.54 0 0 1-.24-.45V11.3c0-.18.09-.35.24-.45l1.92-1.28c.36-.24.84.02.84.45z"
    />
  </svg>
);
export default SvgZoom;
