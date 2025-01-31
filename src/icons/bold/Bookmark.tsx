import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 7.81v8.38C22 19.4 19.4 22 16.19 22H7.81C4.6 22 2 19.4 2 16.19V7.81c0-2.49 1.02-4.3 2.83-5.18.66-.32 1.42.18 1.42.91v8.88c0 1.19.46 2.14 1.29 2.62.84.47 1.9.37 2.98-.28l1.3-.78c.08-.04.28-.04.34-.01l1.32.79c.72.43 1.34.57 1.84.57.52 0 .92-.16 1.16-.3.81-.47 1.27-1.42 1.27-2.61V3.54c0-.73.77-1.23 1.42-.91C20.98 3.51 22 5.32 22 7.81"
    />
    <path
      fill="currentColor"
      d="M15.25 2c.55 0 1 .45 1 1v9.42c0 .64-.19 1.12-.52 1.31-.34.2-.88.1-1.48-.26l-1.32-.79c-.51-.31-1.35-.31-1.86 0l-1.32.79c-.6.36-1.14.45-1.48.26-.33-.19-.52-.67-.52-1.31V3c0-.55.45-1 1-1z"
    />
  </svg>
);
export default SvgBookmark;
