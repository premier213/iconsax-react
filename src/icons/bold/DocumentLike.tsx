import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentLike = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 2H8C4.5 2 3 4 3 7v10c0 3 1.5 5 5 5h8c3.5 0 5-2 5-5V7c0-3-1.5-5-5-5m-2.93 13.49c-.51 1.63-2.3 2.48-2.8 2.48-.49-.01-2.26-.84-2.79-2.48-.33-1.03.06-2.3 1.13-2.65.57-.18 1.27-.03 1.66.52.37-.57 1.1-.7 1.66-.52 1.08.35 1.46 1.62 1.14 2.65m5.43-6.24h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgDocumentLike;
