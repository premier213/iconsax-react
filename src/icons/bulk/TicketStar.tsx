import * as React from "react";
import type { SVGProps } from "react";
const SvgTicketStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 9.21v5.58c0 4.1-1.25 5.35-5.35 5.35H9.91v-3.02c0-.38-.32-.7-.7-.7V7.58c.38 0 .7-.32.7-.7V3.86h6.74c4.1 0 5.35 1.25 5.35 5.35"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M18.47 11.9c.17-.16.23-.41.16-.63a.59.59 0 0 0-.5-.42l-1.28-.19a.16.16 0 0 1-.11-.08l-.57-1.16a.61.61 0 0 0-.55-.34c-.24 0-.45.13-.56.34l-.57 1.16a.13.13 0 0 1-.12.08l-1.28.19c-.23.03-.43.2-.5.42a.61.61 0 0 0 .16.63l.93.9c.04.03.05.09.04.14l-.22 1.27c-.04.23.05.47.25.6a.6.6 0 0 0 .36.12c.1 0 .2-.02.29-.07l1.15-.6c.04-.02.1-.02.14 0l1.15.6a.625.625 0 0 0 .9-.66l-.22-1.27a.18.18 0 0 1 .04-.14zM9.21 7.58v8.84c-.38 0-.7.32-.7.7v3.02H7.35c-3.95 0-5.25-1.18-5.34-4.86-.01-.19.07-.37.2-.5.13-.14.32-.21.5-.21 1.4 0 2.55-1.15 2.55-2.56S4.11 9.44 2.71 9.44c-.2 0-.37-.07-.5-.21a.68.68 0 0 1-.2-.5C2.1 5.04 3.4 3.86 7.35 3.86h1.16v3.02c0 .39.32.7.7.7"
    />
  </svg>
);
export default SvgTicketStar;
