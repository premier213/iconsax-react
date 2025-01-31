import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeDislike = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.15 15.37c-.22-.32-.61-.5-1.06-.5H9.76c-.15 0-.3-.06-.39-.18a.56.56 0 0 1-.12-.44l.29-1.86c.12-.55-.25-1.18-.8-1.37-.52-.19-1.12.07-1.37.44l-2.39 3.55-.07.12v5.02l.09.09 1.8 1.39c.24.24.78.37 1.16.37h2.21c.76 0 1.52-.57 1.7-1.27l1.4-4.25c.14-.41.1-.8-.12-1.11"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M3.82 13.3h-.58c-.88 0-1.24.34-1.24 1.18v5.71c0 .84.36 1.18 1.24 1.18h.58c.88 0 1.24-.34 1.24-1.18v-5.71c0-.84-.36-1.18-1.24-1.18"
    />
    <path
      fill="currentColor"
      d="M11.2 8.6c.22.32.61.5 1.06.5h2.33c.15 0 .3.06.39.18.1.12.14.27.12.44l-.29 1.86c-.12.55.25 1.18.8 1.37.52.19 1.12-.07 1.37-.44l2.39-3.55.07-.12V3.82l-.09-.09-1.8-1.39c-.24-.24-.78-.37-1.16-.37h-2.21c-.76 0-1.52.57-1.7 1.27l-1.4 4.25c-.14.4-.1.8.12 1.11"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M20.53 10.67h.58c.88 0 1.24-.34 1.24-1.18V3.78c0-.84-.36-1.18-1.24-1.18h-.58c-.88 0-1.24.34-1.24 1.18v5.71c0 .84.36 1.18 1.24 1.18"
    />
  </svg>
);
export default SvgLikeDislike;
