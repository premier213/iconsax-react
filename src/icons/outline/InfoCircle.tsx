import * as React from "react";
import type { SVGProps } from "react";
const SvgInfoCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
    />
    <path
      fill="currentColor"
      d="M12 13.75c-.41 0-.75-.34-.75-.75V8c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75M12 17c-.13 0-.26-.03-.38-.08q-.18-.075-.33-.21c-.09-.1-.16-.2-.21-.33A1 1 0 0 1 11 16c0-.13.03-.26.08-.38q.075-.18.21-.33.15-.135.33-.21a1 1 0 0 1 .76 0q.18.075.33.21.135.15.21.33c.05.12.08.25.08.38s-.03.26-.08.38c-.05.13-.12.23-.21.33q-.15.135-.33.21c-.12.05-.25.08-.38.08"
    />
  </svg>
);
export default SvgInfoCircle;
