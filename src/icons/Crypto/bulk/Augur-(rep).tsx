import * as React from "react";
import type { SVGProps } from "react";
const SvgAugurRep = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path fill="currentColor" d="M24 0H0v24h24z" opacity={0.58} />
    <path
      fill="currentColor"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M15 11.75c-.27 0-.54-.15-.67-.41l-2.29-4.59h-.07l-2.29 4.59c-.18.37-.63.52-1.01.34a.763.763 0 0 1-.34-1.01l2.5-5a.76.76 0 0 1 .67-.41h1c.28 0 .54.16.67.41l2.5 5c.19.37.04.82-.34 1.01-.1.04-.22.07-.33.07M12 18.75c-.13 0-.27-.04-.39-.11l-5-3a.755.755 0 0 1-.29-.98l1-2c.19-.37.64-.52 1.01-.34.37.19.52.64.34 1.01l-.69 1.38L12 17.12l4.02-2.41-.69-1.38a.745.745 0 0 1 .34-1.01c.37-.18.82-.04 1.01.34l1 2c.18.35.05.78-.29.98l-5 3c-.12.07-.26.11-.39.11"
    />
  </svg>
);
export default SvgAugurRep;
