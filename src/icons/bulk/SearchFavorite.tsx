import * as React from "react";
import type { SVGProps } from "react";
const SvgSearchFavorite = (props: SVGProps<SVGSVGElement>) => (
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
      d="M11 20.01a9.01 9.01 0 1 0 0-18.02 9.01 9.01 0 0 0 0 18.02"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12.77 8.29c-.63-.2-1.3-.08-1.78.29-.49-.37-1.14-.49-1.77-.29-1.36.44-1.79 1.99-1.41 3.17.58 1.81 2.49 2.75 3.18 2.75.67 0 2.62-.96 3.18-2.75.39-1.18-.04-2.73-1.4-3.17M21.99 18.95c-.33-.61-1.03-.95-1.97-.95-.71 0-1.32.29-1.68.79s-.44 1.17-.22 1.84c.43 1.3 1.18 1.59 1.59 1.64.06.01.12.01.19.01.44 0 1.12-.19 1.78-1.18.53-.77.63-1.54.31-2.15"
    />
  </svg>
);
export default SvgSearchFavorite;
