import * as React from "react";
import type { SVGProps } from "react";
const SvgDropbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      d="m12 6-5.56 4-3.25-2.2a.995.995 0 0 1-.02-1.64L7 3.4c.34-.24.8-.25 1.14-.02zM20.81 7.8 17.56 10 12 6l3.86-2.61c.35-.23.8-.23 1.14.02l3.83 2.76c.57.4.56 1.24-.02 1.63M12 14l-4.44 3L5 15.16l-1.84-1.32c-.56-.41-.55-1.25.02-1.64L6.43 10zM20.81 12.2c.58.39.59 1.23.02 1.64L19 15.16 16.44 17 12 14l5.56-4z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M19 15.16v2.97c0 .39-.23.74-.58.91l-6 2.77c-.27.12-.57.12-.84 0l-6-2.77c-.35-.16-.58-.52-.58-.91v-2.97L7.56 17 12 14l4.44 3z"
    />
  </svg>
);
export default SvgDropbox;
