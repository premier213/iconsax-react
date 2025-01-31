import * as React from "react";
import type { SVGProps } from "react";
const SvgMirroringScreen = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 9V8c0-2.76 2.24-5 5-5h10c2.76 0 5 2.24 5 5v8c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5z"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M16.138 15.44c-.37 0-.69-.28-.74-.65-.43-3.38-2.89-5.84-6.27-6.27a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 4.07.52 7.04 3.49 7.57 7.57.05.41-.24.79-.65.84z"
    />
    <path
      fill="currentColor"
      d="M13.439 16.3c-.37 0-.69-.28-.74-.65-.31-2.38-2.04-4.12-4.43-4.43a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 3.08.4 5.33 2.64 5.73 5.73.05.41-.24.79-.65.84zM10.39 16.81c-.37 0-.69-.28-.74-.65-.13-1.02-.87-1.76-1.89-1.89a.753.753 0 0 1-.65-.84c.05-.41.43-.7.84-.65 1.69.22 2.97 1.5 3.19 3.19.05.41-.24.79-.65.84z"
    />
  </svg>
);
export default SvgMirroringScreen;
