import * as React from "react";
import type { SVGProps } from "react";
const SvgGlass = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.84 21.998H8.16c-4.19 0-5.02-2.53-3.66-5.61l1.44-3.27s3.06-.12 6.06.88 5.83-.89 5.83-.89l.19-.12 1.49 3.41c1.34 3.08.46 5.6-3.67 5.6M15.44 6.74h-.16l2.13 4.86-.41.26c-.02.01-2.28 1.46-4.53.72-2.35-.79-4.71-.93-5.87-.95l2.14-4.89h-.3c-.65 0-1.25-.26-1.68-.69s-.69-1.03-.69-1.68C6.07 3.07 7.13 2 8.44 2h7.11c.66 0 1.25.27 1.68.7.56.56.85 1.38.63 2.25-.26 1.08-1.3 1.79-2.42 1.79"
    />
  </svg>
);
export default SvgGlass;
