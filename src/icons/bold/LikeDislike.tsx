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
      d="M13.15 15.37c-.22-.32-.61-.5-1.06-.5H9.76c-.15 0-.3-.06-.39-.18a.56.56 0 0 1-.12-.44l.29-1.86c.12-.55-.25-1.18-.8-1.37-.52-.19-1.12.07-1.37.44L5.06 14.9v-.43c0-.84-.36-1.18-1.24-1.18h-.58c-.88.01-1.24.35-1.24 1.19v5.71c0 .84.36 1.18 1.24 1.18h.58c.84 0 1.19-.33 1.22-1.09l1.75 1.35c.25.24.78.37 1.16.37h2.21c.76 0 1.52-.57 1.7-1.27l1.4-4.25c.15-.41.11-.8-.11-1.11M21.11 2.61h-.58c-.84 0-1.19.33-1.23 1.09l-1.75-1.35c-.24-.24-.78-.37-1.16-.37h-2.21c-.76 0-1.52.57-1.7 1.27l-1.4 4.25c-.15.41-.1.8.11 1.11.22.32.61.5 1.06.5h2.33c.15 0 .3.06.39.18.1.12.14.27.12.44l-.29 1.86c-.12.55.25 1.18.8 1.37.52.19 1.12-.07 1.37-.44l2.31-3.44v.43c0 .84.36 1.18 1.24 1.18h.58c.88 0 1.24-.34 1.24-1.18V3.78c.01-.83-.35-1.17-1.23-1.17"
    />
  </svg>
);
export default SvgLikeDislike;
