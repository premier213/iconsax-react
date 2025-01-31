import * as React from "react";
import type { SVGProps } from "react";
const SvgIllustrator = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81C22 4.17 19.83 2 16.19 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10.89 7.8c-.1-.29-.37-.5-.68-.51-.32-.02-.6.16-.72.44l-3.53 7.93c-.17.38 0 .82.38.99s.82 0 .99-.38l.98-2.2h3.08l.71 2.13a.75.75 0 0 0 .95.47c.39-.13.6-.56.47-.95zm-1.91 4.77 1.1-2.47.82 2.47zM16.35 9.93c-.41 0-.75.34-.75.75v5.29c0 .41.34.75.75.75s.75-.34.75-.75v-5.29c0-.42-.34-.75-.75-.75M17.27 7.65a.9.9 0 0 0-.22-.32c-.27-.28-.72-.37-1.09-.22-.12.05-.23.12-.32.22-.09.09-.16.2-.22.32-.05.12-.07.25-.07.38 0 .14.02.26.07.39a1.016 1.016 0 0 0 1.31.54c.12-.05.23-.13.32-.22.1-.09.17-.2.22-.32s.08-.25.08-.39c0-.13-.03-.26-.08-.38"
    />
  </svg>
);
export default SvgIllustrator;
