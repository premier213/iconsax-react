import * as React from "react";
import type { SVGProps } from "react";
const SvgJavaScript = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.12 2h15.77c.6 0 1.06.52.99 1.11l-1.8 16.22c-.04.4-.33.74-.72.85l-6.08 1.74c-.18.05-.37.05-.55 0l-6.08-1.74a1.01 1.01 0 0 1-.72-.85L3.13 3.11A.993.993 0 0 1 4.12 2"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M10.62 16.74q-.105 0-.21-.03l-3.12-.9a.746.746 0 0 1-.51-.93c.11-.4.53-.62.93-.51l2.16.62V7.01c0-.41.34-.75.75-.75s.75.34.75.75v8.97c0 .24-.11.46-.3.6-.13.1-.29.16-.45.16M12.9 16.75c-.34 0-.64-.23-.73-.57-.1-.4.14-.81.55-.91l3.03-.76v-1.7l-2.29.33a.74.74 0 0 1-.6-.18.77.77 0 0 1-.26-.57V7.45c0-.37.27-.69.64-.74l3.15-.45c.41-.06.79.23.85.64s-.23.79-.64.85l-2.5.35v3.43l2.29-.33c.22-.03.43.03.6.18.16.14.26.35.26.57v3.15c0 .34-.23.64-.57.73l-3.6.9c-.06.01-.12.02-.18.02"
    />
  </svg>
);
export default SvgJavaScript;
