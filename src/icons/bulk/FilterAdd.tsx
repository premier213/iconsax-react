import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.41 2h13.17c1.1 0 2 .91 2 2.02v2.22c0 .81-.5 1.82-1 2.32l-4.29 3.84c-.6.51-1 1.52-1 2.32v4.34c0 .61-.4 1.41-.9 1.72L12 21.7c-1.3.81-3.09-.1-3.09-1.72v-5.35c0-.71-.4-1.62-.8-2.12L4.32 8.47c-.5-.51-.9-1.41-.9-2.02V4.13c0-1.22.9-2.13 1.99-2.13"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.88 10c-2.62 0-4.75 2.13-4.75 4.75 0 .89.25 1.73.69 2.45.82 1.38 2.33 2.3 4.06 2.3s3.24-.93 4.06-2.3c.44-.71.69-1.56.69-2.45 0-2.62-2.12-4.75-4.75-4.75m1.78 5.48h-1.03v1.07c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.07h-1.02c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.02V13c0-.41.34-.75.75-.75s.75.34.75.75v.98h1.03c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </svg>
);
export default SvgFilterAdd;
