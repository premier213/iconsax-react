import * as React from "react";
import type { SVGProps } from "react";
const SvgPasswordCheck = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M6.5 20h6V4h-6c-2.21 0-4 1.79-4 4v8c0 2.21 1.79 4 4 4M18 20h-3V4h3c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M5.75 13c-.13 0-.26-.03-.38-.08q-.18-.075-.33-.21c-.09-.1-.16-.21-.22-.33a1 1 0 0 1-.07-.38c0-.26.11-.52.29-.71l.15-.12q.09-.06.18-.09.09-.045.18-.06c.34-.07.68.04.91.27.18.19.29.45.29.71 0 .13-.03.26-.08.38q-.075.18-.21.33-.15.135-.33.21c-.12.05-.25.08-.38.08M9.25 13c-.13 0-.26-.03-.38-.08q-.18-.075-.33-.21a.99.99 0 0 1-.21-1.09c.05-.13.12-.23.21-.33.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .13-.03.26-.08.38q-.075.18-.21.33-.15.135-.33.21c-.12.05-.25.08-.38.08"
    />
  </svg>
);
export default SvgPasswordCheck;
