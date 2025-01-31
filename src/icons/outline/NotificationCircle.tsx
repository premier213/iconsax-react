import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19 8.75c-2.07 0-3.75-1.68-3.75-3.75S16.93 1.25 19 1.25 22.75 2.93 22.75 5 21.07 8.75 19 8.75m0-6c-1.24 0-2.25 1.01-2.25 2.25S17.76 7.25 19 7.25 21.25 6.24 21.25 5 20.24 2.75 19 2.75"
    />
    <path
      fill="currentColor"
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25c.73 0 1.46.07 2.17.22.41.08.67.48.58.89-.08.41-.48.67-.88.58A9 9 0 0 0 12 2.75C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25c0-.62-.06-1.24-.18-1.84-.08-.41.18-.8.59-.88.41-.09.8.18.88.59.14.7.21 1.42.21 2.14 0 5.92-4.82 10.74-10.75 10.74"
    />
  </svg>
);
export default SvgNotificationCircle;
