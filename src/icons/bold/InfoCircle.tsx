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
      d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m-.75 6c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75s-.75-.34-.75-.75zm1.67 8.38c-.05.13-.12.23-.21.33q-.15.135-.33.21c-.12.05-.25.08-.38.08s-.26-.03-.38-.08q-.18-.075-.33-.21c-.09-.1-.16-.2-.21-.33A1 1 0 0 1 11 16c0-.13.03-.26.08-.38q.075-.18.21-.33.15-.135.33-.21a1 1 0 0 1 .76 0q.18.075.33.21.135.15.21.33c.05.12.08.25.08.38s-.03.26-.08.38"
    />
  </svg>
);
export default SvgInfoCircle;
