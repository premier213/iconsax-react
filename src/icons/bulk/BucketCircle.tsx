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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M15.66 11.93a.63.63 0 0 0-.17-.39l-4.7-4.7-.55-.55a.477.477 0 0 0-.68 0c-.19.19-.19.49 0 .68l.55.55-3.6 3.6c-.41.41-.63.83-.64 1.24-.01.44.2.88.64 1.32l2.57 2.57c.86.85 1.72.85 2.57 0l3.85-3.85a.7.7 0 0 0 .16-.47M16.959 14.19c-.16-.18-.47-.18-.64 0-.2.21-1.19 1.33-1.19 2.17 0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5c.01-.84-.97-1.95-1.17-2.17"
    />
  </svg>
);
export default SvgBucketCircle;
