import * as React from "react";
import type { SVGProps } from "react";
const SvgProfileTick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.74 4.74 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2M17.08 14.16c-2.79-1.86-7.34-1.86-10.15 0-1.27.84-1.97 1.99-1.97 3.22s.7 2.37 1.96 3.21C8.32 21.53 10.16 22 12 22s3.68-.47 5.08-1.41c1.26-.85 1.96-1.99 1.96-3.23-.01-1.22-.7-2.37-1.96-3.2m-2.75 2.4-2.52 2.52a.62.62 0 0 1-.44.18c-.16 0-.32-.07-.44-.18l-1.26-1.26a.63.63 0 0 1 0-.88c.24-.24.64-.24.88 0l.82.82 2.08-2.08c.24-.24.64-.24.88 0 .25.24.25.64 0 .88"
    />
  </svg>
);
export default SvgProfileTick;
