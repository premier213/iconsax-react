import * as React from "react";
import type { SVGProps } from "react";
const SvgRanking = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.67 14H4c-1.1 0-2 .9-2 2v6h6.67z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M13.33 10h-2.67c-1.1 0-2 .9-2 2v10h6.67V12a2 2 0 0 0-2-2"
    />
    <path
      fill="currentColor"
      d="M20 17h-4.67v5H22v-3c0-1.1-.9-2-2-2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M15.01 4.85c.31-.31.43-.68.33-1s-.41-.55-.85-.62l-.96-.16a.33.33 0 0 1-.15-.11l-.53-1.06c-.4-.81-1.31-.81-1.71 0l-.53 1.06c-.02.04-.11.1-.15.11l-.96.16c-.44.07-.74.3-.85.62-.1.32.02.69.33 1l.74.75c.03.03.07.15.06.19l-.21.92c-.16.68.1.99.27 1.12.17.12.54.28 1.15-.08l.9-.53c.04-.03.17-.03.21 0l.9.53c.28.17.51.22.69.22.21 0 .36-.08.45-.14.17-.12.43-.43.27-1.12l-.21-.92c-.01-.05.02-.16.06-.19z"
    />
  </svg>
);
export default SvgRanking;
