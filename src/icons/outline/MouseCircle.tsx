import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.37 22.77h-.02a2.23 2.23 0 0 1-2.15-1.6l-1.85-5.95c-.25-.82-.04-1.7.57-2.29.6-.59 1.47-.81 2.27-.56l5.96 1.85c.96.3 1.59 1.14 1.6 2.15.01 1-.6 1.85-1.56 2.17l-1.63.55c-.23.08-.41.25-.48.48l-.56 1.64c-.31.95-1.15 1.56-2.15 1.56m-1.86-9c-.27 0-.45.15-.53.22-.21.21-.28.5-.19.79l1.85 5.95c.16.51.6.53.74.54.14 0 .57-.04.73-.53l.56-1.64c.22-.67.76-1.2 1.43-1.43l1.63-.55c.5-.16.53-.6.53-.73s-.04-.57-.54-.73l-5.96-1.85a.9.9 0 0 0-.25-.04"
    />
    <path
      fill="currentColor"
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-5.1-4.15-9.25-9.25-9.25S2.75 6.9 2.75 12 6.9 21.25 12 21.25c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgMouseCircle;
