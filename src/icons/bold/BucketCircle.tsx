import * as React from "react";
import type { SVGProps } from "react";
const SvgBucketCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-.37 14.25c-.85.85-1.71.85-2.57 0L6.5 13.68c-.44-.44-.65-.88-.64-1.33.01-.42.23-.83.64-1.24l3.6-3.6-.56-.55a.477.477 0 0 1 0-.68c.19-.19.49-.19.68 0l.55.55 4.7 4.7c.1.1.17.25.17.39a.6.6 0 0 1-.17.47zm5.01 1.61c-.83 0-1.5-.67-1.5-1.5 0-.84.99-1.95 1.19-2.17.16-.18.47-.18.64 0 .2.21 1.19 1.33 1.19 2.17-.02.83-.69 1.5-1.52 1.5"
    />
  </svg>
);
export default SvgBucketCircle;
