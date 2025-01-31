import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketExpired = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.85 12.94c0 .8.65 1.46 1.45 1.46.38 0 .7.31.7.69 0 3.84-1.16 5-5 5h-5.25V18.5c0-.39-.3-.71-.68-.74v-2.85c.38-.03.68-.35.68-.74V9.83c0-.39-.3-.71-.68-.74V4.93H17c3.84 0 5 1.16 5 5v.85c0 .39-.32.7-.7.7-.8 0-1.45.65-1.45 1.46"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M11.07 9.09c-.41 0-.82.33-.82.74v4.34c0 .41.34.75.75.75.02 0 .05 0 .07-.01v2.85c-.02-.01-.05-.01-.07-.01-.41 0-.75.34-.75.75v1.59H8.49c-1.88 0-2.85-1.41-3.73-3.54l-.17-.42a.7.7 0 0 1 .39-.91c.37-.14.66-.43.81-.81.16-.37.16-.78.01-1.15-.32-.77-1.2-1.14-1.98-.83-.17.08-.37.08-.54 0a.73.73 0 0 1-.38-.39l-.15-.4c-1.49-3.62-.84-5.17 2.78-6.67l2.45-1.01c.36-.15.77.02.91.38z"
    />
  </svg>
);
export default SvgTicketExpired;
