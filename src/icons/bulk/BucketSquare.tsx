import * as React from "react";
import type { SVGProps } from "react";
const SvgBucketSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.66 11.93a.63.63 0 0 0-.17-.39l-4.7-4.7-.55-.55a.477.477 0 0 0-.68 0c-.19.19-.19.49 0 .68l.55.55-3.6 3.6c-.41.41-.63.83-.64 1.24-.01.44.2.88.64 1.33l2.57 2.57c.86.85 1.72.85 2.57 0l3.85-3.85c.11-.14.17-.32.16-.48M16.959 14.19c-.16-.18-.47-.18-.64 0-.2.21-1.19 1.33-1.19 2.17 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c.01-.84-.97-1.95-1.17-2.17"
    />
  </svg>
);
export default SvgBucketSquare;
