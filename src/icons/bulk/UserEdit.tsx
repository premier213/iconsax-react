import * as React from "react";
import type { SVGProps } from "react";
const SvgUserEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10" />
    <path
      fill="currentColor"
      d="M12 14.5c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.43 14.74c-.9-.9-1.61-.61-2.22 0l-3.541 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.62-.6.91-1.31.01-2.21"
    />
  </svg>
);
export default SvgUserEdit;
