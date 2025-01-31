import * as React from "react";
import type { SVGProps } from "react";
const SvgSecurityCard = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.49 13.379H11c-.3 0-.54.24-.54.54s.24.54.54.54h2.49c.3 0 .54-.24.54-.54s-.24-.54-.54-.54M9.438 13.379h-1.25c-.3 0-.54.24-.54.54s.24.54.54.54h1.25c.3 0 .54-.24.54-.54s-.24-.54-.54-.54"
    />
    <path
      fill="currentColor"
      d="m18.54 4.221-5.5-2.06c-.57-.21-1.5-.21-2.07 0l-5.5 2.06c-1.06.4-1.92 1.64-1.92 2.77v8.1c0 .81.53 1.88 1.18 2.36l5.5 4.11c.97.73 2.56.73 3.53 0l5.5-4.11c.65-.49 1.18-1.55 1.18-2.36v-8.1c.01-1.13-.85-2.37-1.9-2.77m-.37 9.43c-.02 2.07-.59 2.59-2.74 2.59H8.58c-2.19 0-2.74-.54-2.74-2.71v-2.33c0-.28.22-.5.5-.5h11.33c.28 0 .5.22.5.5zm0-4.54c0 .28-.22.5-.5.5H6.34c-.28 0-.5-.22-.5-.5v-.64c0-1.96.46-2.59 2.17-2.7.18 0 .37-.01.57-.01h6.85c2.19 0 2.74.54 2.74 2.71z"
    />
  </svg>
);
export default SvgSecurityCard;
