import * as React from "react";
import type { SVGProps } from "react";
const SvgMoneyForbidden = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.7 20.24c.01-.01.01-.02.01-.02l5.5-5.5c.01-.01.02-.01.03-.02-.64-.44-1.42-.7-2.25-.7-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.05.06.09.12.13.18M8.3 15.75c-.01.01-.01.02-.02.03l-5.5 5.5c-.01.01-.02.01-.03.02.64.44 1.41.7 2.25.7 1.46 0 2.73-.78 3.42-1.94.37-.6.58-1.31.58-2.06 0-.84-.26-1.61-.7-2.25"
    />
    <path
      fill="currentColor"
      d="M22 9v6c0 3.5-2 5-5 5H8.45c.35-.59.55-1.27.55-2 0-2.21-1.79-4-4-4-1.2 0-2.27.53-3 1.36V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M18.5 14.75c-.41 0-.75-.34-.75-.75v-4c0-.41.34-.75.75-.75s.75.34.75.75v4c0 .41-.34.75-.75.75"
    />
  </svg>
);
export default SvgMoneyForbidden;
