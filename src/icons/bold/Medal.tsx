import * as React from "react";
import type { SVGProps } from "react";
const SvgMedal = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 15c3.728 0 6.75-2.91 6.75-6.5S15.728 2 12 2 5.25 4.91 5.25 8.5 8.272 15 12 15M15.79 15.61c.33-.17.71.08.71.45v4.85c0 .9-.63 1.34-1.41.97l-2.68-1.27c-.23-.1-.59-.1-.82 0l-2.68 1.27c-.78.36-1.41-.08-1.41-.98l.02-4.84c0-.37.39-.61.71-.45 1.13.57 2.41.89 3.77.89s2.65-.32 3.79-.89"
    />
  </svg>
);
export default SvgMedal;
