import * as React from "react";
import type { SVGProps } from "react";
const SvgCreativeCommons = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M8.99 15.62c-2 0-3.62-1.62-3.62-3.62a3.62 3.62 0 0 1 6.01-2.72c.31.27.34.75.07 1.06s-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06c-.67.58-1.52.9-2.39.9M15.99 15.62c-2 0-3.62-1.62-3.62-3.62a3.62 3.62 0 0 1 6.01-2.72c.31.27.34.75.07 1.06s-.75.34-1.06.07a2.12 2.12 0 0 0-1.4-.53 2.121 2.121 0 0 0 0 4.24c.51 0 1.01-.19 1.4-.53.31-.27.79-.24 1.06.07s.24.79-.07 1.06c-.67.58-1.52.9-2.39.9"
    />
  </svg>
);
export default SvgCreativeCommons;
