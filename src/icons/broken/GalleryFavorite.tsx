import * as React from "react";
import type { SVGProps } from "react";
const SvgGalleryFavorite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2M2 12.98V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-4M12 2H9C4 2 2 4 2 9M16.12 5.11c-.33-1.04.06-2.33 1.14-2.68.57-.18 1.28-.03 1.68.52.38-.57 1.11-.71 1.68-.52 1.09.35 1.48 1.64 1.15 2.68-.52 1.64-2.32 2.5-2.82 2.5-.51 0-2.3-.84-2.83-2.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2.67 18.95 4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"
    />
  </svg>
);
export default SvgGalleryFavorite;
