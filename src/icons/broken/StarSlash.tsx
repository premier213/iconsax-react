import * as React from "react";
import type { SVGProps } from "react";
const SvgStarSlash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.05 7.67c-.24-.18-.44-.41-.55-.64l-1.76-3.52c-.95-1.91-2.51-1.91-3.47 0L8.5 7.03c-.12.25-.34.48-.59.67M5.28 18.65l.57-2.47c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28M20.1 8.61c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77M22 2 2 22"
    />
  </svg>
);
export default SvgStarSlash;
