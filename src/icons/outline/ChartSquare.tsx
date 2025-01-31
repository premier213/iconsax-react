import * as React from "react";
import type { SVGProps } from "react";
const SvgChartSquare = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.11 18.15H6.32c-.41 0-.75-.34-.75-.75v-5.12c0-1.04.85-1.89 1.89-1.89h2.65c.41 0 .75.34.75.75v6.25c0 .42-.34.76-.75.76m-3.04-1.5h2.29V11.9h-1.9a.39.39 0 0 0-.39.39z"
    />
    <path
      fill="currentColor"
      d="M13.89 18.15H10.1c-.41 0-.75-.34-.75-.75V7.74c0-1.04.85-1.89 1.89-1.89h1.52c1.04 0 1.89.85 1.89 1.89v9.66c-.01.41-.34.75-.76.75m-3.03-1.5h2.29V7.74a.39.39 0 0 0-.39-.39h-1.52a.39.39 0 0 0-.39.39v8.91z"
    />
    <path
      fill="currentColor"
      d="M17.68 18.15h-3.79c-.41 0-.75-.34-.75-.75v-4.55c0-.41.34-.75.75-.75h2.65c1.04 0 1.89.85 1.89 1.89v3.41c0 .41-.33.75-.75.75m-3.04-1.5h2.29v-2.66a.39.39 0 0 0-.39-.39h-1.9z"
    />
    <path
      fill="currentColor"
      d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75m-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25z"
    />
  </svg>
);
export default SvgChartSquare;
