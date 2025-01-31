import * as React from "react";
import type { SVGProps } from "react";
const SvgFlashCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75m0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75"
    />
    <path
      fill="currentColor"
      d="M9.71 17.84c-.29 0-.51-.1-.64-.2-.27-.18-.68-.64-.42-1.67l.77-3.11-.92-.23c-.93-.23-1.14-.82-1.18-1.06s-.06-.87.72-1.42l5.18-3.59c.87-.6 1.44-.38 1.71-.2s.68.64.42 1.67l-.77 3.11.92.23c.93.23 1.14.82 1.18 1.07s.06.87-.72 1.42l-5.18 3.59c-.43.29-.78.39-1.07.39m-.6-6.6 1.4.35c.4.1.65.51.55.91l-.88 3.54 4.71-3.27-1.4-.35c-.4-.1-.65-.51-.55-.91l.88-3.54z"
    />
  </svg>
);
export default SvgFlashCircle;
