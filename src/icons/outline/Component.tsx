import * as React from "react";
import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.75c-1.17 0-2.26-.45-3.08-1.27l-6.39-6.39a4.33 4.33 0 0 1-1.27-3.08c0-1.16.45-2.26 1.27-3.08l6.39-6.39c.82-.82 1.92-1.27 3.08-1.27s2.26.45 3.08 1.27l6.39 6.39c.82.82 1.27 1.92 1.27 3.08s-.45 2.26-1.27 3.08l-6.39 6.39c-.82.82-1.91 1.27-3.08 1.27m0-20c-.77 0-1.49.3-2.02.83L3.59 9.97c-.54.54-.83 1.26-.83 2.02s.3 1.49.83 2.02l6.39 6.39c1.07 1.07 2.97 1.07 4.04 0l6.39-6.39c.54-.54.83-1.25.83-2.02s-.3-1.49-.83-2.02l-6.39-6.39c-.53-.53-1.25-.83-2.02-.83"
    />
  </svg>
);
export default SvgComponent;
