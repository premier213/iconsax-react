import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudNotif = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.57 11.01a5.2 5.2 0 0 0-2.9-1.77c-.25-1.15-.71-2.15-1.36-2.97-.02-.03-.04-.06-.06-.08-2.19-2.65-5.78-2.64-8.2-1.27-2.07 1.18-3.83 3.67-2.91 7.24-2.12.52-3.1 2.37-3.1 4.04 0 1.87 1.22 3.98 3.95 4.17h10.34c1.42 0 2.77-.52 3.81-1.48 2.52-2.2 2.19-5.81.43-7.88"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M21.27 8.76c0 1.02-.47 1.94-1.23 2.54a3.2 3.2 0 0 1-2.03.72c-1.79 0-3.25-1.46-3.25-3.25 0-.89.36-1.7.96-2.29v-.01c.59-.59 1.4-.96 2.29-.96 1.8 0 3.26 1.46 3.26 3.25"
    />
  </svg>
);
export default SvgCloudNotif;
