import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterEdit = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.58 4.02v1.95c-.68-.5-1.46-.87-2.31-1.06-.44-.11-.91-.16-1.39-.16-3.45 0-6.25 2.8-6.25 6.25 0 1.14.31 2.26.9 3.22.5.84 1.2 1.54 1.96 2.01q.39.255.81.45v2.39c0 .61-.4 1.42-.9 1.72l-1.4.91c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.42-.9-2.02V4.12c0-1.21.9-2.12 1.99-2.12h13.18c1.09 0 1.99.91 1.99 2.02"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M17.92 6.37a4.4 4.4 0 0 0-1.04-.12c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.37.62.88 1.15 1.5 1.53.74.49 1.62.77 2.56.77 1.74 0 3.25-.93 4.07-2.3.44-.72.68-1.56.68-2.45a4.74 4.74 0 0 0-3.71-4.63m.91 4.2L16.4 13c-.09.09-.28.18-.41.2l-.93.13c-.34.05-.57-.19-.52-.52l.13-.93c.02-.13.11-.31.2-.41l2.08-2.08.35-.35c.42-.42.91-.62 1.52 0s.43 1.11.01 1.53"
    />
  </svg>
);
export default SvgFilterEdit;
