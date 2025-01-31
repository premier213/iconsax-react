import * as React from "react";
import type { SVGProps } from "react";
const SvgStatus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.24 14.74c-.33-.33-.77-.52-1.24-.52H3.92c-.61 0-1.17.31-1.49.83-.32.51-.35 1.12-.09 1.66a10.84 10.84 0 0 0 6.09 5.43c.18.06.38.1.57.1a1.764 1.764 0 0 0 1.75-1.76l.01-4.5c-.01-.47-.19-.91-.52-1.24"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M22.48 9.6C21.36 4.68 17.05 1.25 12 1.25S2.64 4.68 1.52 9.6c-.12.52 0 1.05.34 1.47s.84.66 1.38.66h17.53a1.735 1.735 0 0 0 1.71-2.13"
    />
    <path
      fill="currentColor"
      d="M21.56 15.1c-.32-.52-.88-.84-1.5-.84L15 14.25A1.74 1.74 0 0 0 13.25 16l.01 4.48a1.764 1.764 0 0 0 1.75 1.76c.19 0 .38-.03.56-.1 2.62-.92 4.84-2.89 6.07-5.38.26-.53.23-1.15-.08-1.66"
      opacity={0.4}
    />
  </svg>
);
export default SvgStatus;
