import * as React from "react";
import type { SVGProps } from "react";
const SvgBagCross = (props: SVGProps<SVGSVGElement>) => (
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
      d="M19.24 5.58h-.4L15.46 2.2a.706.706 0 0 0-.99 0c-.27.27-.27.71 0 .99l2.39 2.39H7.14l2.39-2.39c.27-.27.27-.71 0-.99a.706.706 0 0 0-.99 0L5.17 5.58h-.4c-.9 0-2.77 0-2.77 2.56 0 .97.2 1.61.62 2.03.24.25.53.38.84.45.29.07.6.08.9.08h15.28c.31 0 .6-.02.88-.08.84-.2 1.48-.8 1.48-2.48 0-2.56-1.87-2.56-2.76-2.56"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M19.66 10.7H4.36c-.29 0-.61-.01-.9-.09l1.26 7.69c.29 1.72 1.04 3.7 4.37 3.7h5.61c3.37 0 3.97-1.69 4.33-3.58l1.51-7.81c-.28.07-.58.09-.88.09m-5.74 7.19c-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-.85-.85-.88.88c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.755.755 0 0 1 0-1.06l.88-.88-.85-.85a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.85.85.82-.82c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-.82.82.85.85c.3.3.3.77 0 1.06"
    />
  </svg>
);
export default SvgBagCross;
