import * as React from "react";
import type { SVGProps } from "react";
const SvgUserTick = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 14c-5.01 0-9.09 3.36-9.09 7.5 0 .28.22.5.5.5h17.18c.28 0 .5-.22.5-.5 0-4.14-4.08-7.5-9.09-7.5M12 2c-1.18 0-2.26.41-3.12 1.1A4.96 4.96 0 0 0 7 7c0 .94.26 1.82.73 2.57A4.95 4.95 0 0 0 12 12c1.26 0 2.41-.46 3.29-1.25.39-.33.73-.73.99-1.18.46-.75.72-1.63.72-2.57 0-2.76-2.24-5-5-5m2.59 4.46-2.67 2.46c-.18.17-.41.25-.64.25a.93.93 0 0 1-.66-.27L9.39 7.66a.936.936 0 0 1 0-1.33c.37-.37.96-.37 1.33 0l.59.59 2.01-1.85c.38-.35.97-.33 1.32.05.35.39.33.99-.05 1.34"
    />
  </svg>
);
export default SvgUserTick;
