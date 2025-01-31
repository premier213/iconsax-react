import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeTag = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.58 9.57c-.19-.27-.51-.42-.89-.42h-1.95c-.13 0-.25-.05-.33-.15a.48.48 0 0 1-.1-.37l.24-1.56c.1-.46-.21-.99-.67-1.14-.43-.16-.94.06-1.14.36L9.8 9.17v-.36c0-.7-.3-.99-1.04-.99h-.49c-.74 0-1.04.29-1.04.99v4.78c0 .7.3.99 1.04.99h.49c.7 0 1-.27 1.03-.91l1.47 1.13c.2.2.65.31.97.31h1.85c.64 0 1.28-.48 1.42-1.07l1.17-3.56c.13-.32.1-.65-.09-.91"
    />
  </svg>
);
export default SvgLikeTag;
