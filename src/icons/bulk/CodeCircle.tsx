import * as React from "react";
import type { SVGProps } from "react";
const SvgCodeCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M8 14.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0s.29.77 0 1.06L7.06 12l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22M16 14.75c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06L16.94 12l-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22M11 15.08a.745.745 0 0 1-.68-1.05l2-4.67c.16-.38.6-.56.98-.39.38.16.56.6.39.99l-2 4.67c-.12.28-.4.45-.69.45"
    />
  </svg>
);
export default SvgCodeCircle;
