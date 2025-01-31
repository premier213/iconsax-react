import * as React from "react";
import type { SVGProps } from "react";
const SvgLifebuoy = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.97 12c0 2.49-.91 4.77-2.42 6.52-.33.38-.68.74-1.06 1.05A9.86 9.86 0 0 1 11.97 22c-2.49 0-4.77-.91-6.52-2.42-.38-.33-.73-.68-1.06-1.06A9.95 9.95 0 0 1 1.97 12c0-2.49.91-4.77 2.43-6.52.32-.38.68-.74 1.06-1.06A9.92 9.92 0 0 1 11.97 2c2.5 0 4.78.91 6.52 2.43.38.32.74.67 1.06 1.06A9.92 9.92 0 0 1 21.97 12"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m15.65 14.62 3.9 3.9c-.33.38-.68.74-1.06 1.05l-3.9-3.9c-.74.52-1.63.83-2.59.83-.98 0-1.88-.32-2.62-.85l-3.93 3.93c-.38-.33-.73-.68-1.06-1.06l3.94-3.93A4.5 4.5 0 0 1 7.5 12c0-.96.31-1.85.83-2.59L4.4 5.48c.32-.38.68-.74 1.06-1.06l3.92 3.93A4.48 4.48 0 0 1 12 7.5c.96 0 1.85.31 2.59.83l3.9-3.9c.38.32.74.67 1.06 1.06l-3.9 3.89c.53.74.85 1.64.85 2.62s-.32 1.88-.85 2.62"
    />
  </svg>
);
export default SvgLifebuoy;
