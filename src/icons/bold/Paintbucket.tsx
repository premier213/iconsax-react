import * as React from "react";
import type { SVGProps } from "react";
const SvgPaintbucket = (props: SVGProps<SVGSVGElement>) => (
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
      d="m19.11 7.471-3.52-3.52c-3.16-3.15-4.82-1.99-6.82 0l-5.66 5.66c-1.15 1.15-1.78 1.89-2.01 2.71 0 .01-.01.01-.01.01v.05c-.41 1.46.67 2.7 2.02 4.05l3.53 3.51c1.26 1.27 2.28 2.06 3.41 2.06s2.1-.76 3.4-2.06l5.66-5.65c.49-.5.85-.91 1.13-1.3v-.01h.01c1.28-1.79.94-3.44-1.14-5.51m-1.03 3.9h-.01c-.3-.07-.61-.13-.92-.19-.02 0-.04-.01-.07-.01q-1.05-.195-2.13-.33h-.04c-.72-.09-1.45-.16-2.18-.2h-.08c-.64-.04-1.29-.06-1.93-.06-.78 0-1.56.04-2.33.09l-.37.03c-.58.04-1.16.1-1.73.17l-.46.06c-.58.09-1.15.18-1.72.29-.13.03-.25.05-.38.07l-.16.03c.18-.2.39-.41.62-.64l5.65-5.65c1.82-1.8 2.44-2.23 4.68 0l3.51 3.52c.54.53.9.98 1.12 1.37 0 0 0 .01.01.01.42.73-.26 1.6-1.08 1.44M20.95 16.87c-.38-.47-.71-.87-1.45-.87s-1.07.4-1.44.87c-.8.99-1.16 2.07-1.03 3.11.15 1.19 1.17 2.02 2.47 2.02s2.32-.83 2.47-2.03c.13-1.04-.22-2.11-1.02-3.1"
    />
  </svg>
);
export default SvgPaintbucket;
