import * as React from "react";
import type { SVGProps } from "react";
const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 5.12c1.31 0 2.38 1.07 2.38 2.38s-1.07 2.38-2.38 2.38-2.38-1.07-2.38-2.38S10.69 7.12 12 7.12m2.47 9.97c-.14.11-.3.16-.46.16-.22 0-.44-.1-.59-.28l-1.41-1.78-1.41 1.78a.747.747 0 1 1-1.17-.93l1.19-1.51c-.32-.09-.64-.2-.94-.35a.75.75 0 0 1-.33-1.01c.18-.37.63-.52 1.01-.33 1.04.52 2.28.52 3.32 0 .36-.18.82-.04 1 .32.19.36.06.81-.3 1-.31.16-.64.27-.97.36l1.2 1.51c.23.33.18.8-.14 1.06"
    />
  </svg>
);
export default SvgIcon;
