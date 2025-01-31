import * as React from "react";
import type { SVGProps } from "react";
const SvgLikeShapes = (props: SVGProps<SVGSVGElement>) => (
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m9.89 14.82 1.45 1.12c.19.19.61.28.89.28H14c.56 0 1.17-.42 1.31-.98l1.12-3.42c.23-.65-.19-1.22-.89-1.22h-1.87c-.28 0-.51-.23-.47-.56l.23-1.5c.09-.42-.19-.89-.61-1.03-.37-.14-.84.05-1.03.33l-1.92 2.85"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.5 14.82v-4.58c0-.66.28-.89.94-.89h.47c.65 0 .94.23.94.89v4.58c0 .65-.28.89-.94.89h-.47c-.66 0-.94-.23-.94-.89"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.66 20.01-1.52 1.52c-.62.62-1.64.62-2.26 0l-1.52-1.52c-.26-.26-.77-.47-1.13-.47H6.08c-.88 0-1.6-.72-1.6-1.6v-2.15c0-.36-.21-.87-.47-1.13l-1.52-1.52c-.62-.62-.62-1.64 0-2.26l1.52-1.52c.26-.26.47-.77.47-1.13V6.08c0-.88.72-1.6 1.6-1.6M9.34 3.99l1.52-1.52c.62-.62 1.64-.62 2.26 0l1.52 1.52c.26.26.77.47 1.13.47h2.15c.88 0 1.6.72 1.6 1.6v2.15c0 .36.21.87.47 1.13l1.52 1.52c.62.62.62 1.64 0 2.26l-1.52 1.52c-.26.26-.47.77-.47 1.13v2.15c0 .88-.72 1.6-1.6 1.6"
    />
  </svg>
);
export default SvgLikeShapes;
