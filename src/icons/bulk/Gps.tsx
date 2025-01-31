import * as React from "react";
import type { SVGProps } from "react";
const SvgGps = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M12 15.12a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24M12.75 2v2.04h-.01C12.5 4.01 12.25 4 12 4s-.5.01-.74.04h-.01V2c0-.41.34-.75.75-.75s.75.34.75.75M4 12c0 .25.01.51.04.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.04c-.03.24-.04.5-.04.75M12.75 19.96V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-2.04h.01c.24.03.49.04.74.04s.5-.01.74-.04zM22.75 12c0 .41-.34.75-.75.75h-2.04c.03-.24.04-.5.04-.75s-.01-.51-.04-.75H22c.41 0 .75.34.75.75"
    />
  </svg>
);
export default SvgGps;
