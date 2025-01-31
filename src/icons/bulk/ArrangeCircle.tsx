import * as React from "react";
import type { SVGProps } from "react";
const SvgArrangeCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="m17.39 9.26-3.04-3.04a.8.8 0 0 0-.24-.16.7.7 0 0 0-.57 0c-.18.08-.33.22-.41.41-.04.09-.06.19-.06.29v10.31c0 .41.34.75.75.75s.75-.34.75-.75v-8.5l1.76 1.76c.15.15.34.22.53.22s.38-.07.53-.22c.29-.31.29-.78 0-1.07M10.93 6.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v8.5l-1.76-1.76a.755.755 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l3.04 3.04a.78.78 0 0 0 .53.22c.1 0 .19-.02.29-.06.18-.08.33-.22.41-.41.04-.09.06-.19.06-.29V6.75z"
    />
  </svg>
);
export default SvgArrangeCircle;
