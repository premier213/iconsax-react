import * as React from "react";
import type { SVGProps } from "react";
const SvgDocumentForward = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.5 10.19h-2.89c-2.37 0-4.3-1.93-4.3-4.3V3c0-.55-.45-1-1-1H8.07C4.99 2 2.5 4 2.5 7.57v8.86C2.5 20 4.99 22 8.07 22h7.86c3.08 0 5.57-2 5.57-5.57v-5.24c0-.55-.45-1-1-1"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M15.8 2.21c-.41-.41-1.12-.13-1.12.44v3.49c0 1.46 1.24 2.67 2.75 2.67.95.01 2.27.01 3.4.01.57 0 .87-.67.47-1.07-1.44-1.45-4.02-4.06-5.5-5.54M11 17.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l.72-.72H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.19l-.72-.72a.74.74 0 0 1-.22-.53c0-.19.07-.38.22-.53.29-.29.77-.29 1.06 0l2 2c.13.13.2.3.21.46v.16q-.03.21-.18.39l-.04.04-2 2c-.14.16-.33.23-.52.23"
    />
  </svg>
);
export default SvgDocumentForward;
