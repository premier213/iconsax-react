import * as React from "react";
import type { SVGProps } from "react";
const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
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
      d="M22 22.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M21 22.75H3c-.41 0-.75-.34-.75-.75v-7c0-5.38 4.37-9.75 9.75-9.75s9.75 4.37 9.75 9.75v7c0 .41-.34.75-.75.75m-17.25-1.5h16.5V15c0-4.55-3.7-8.25-8.25-8.25S3.75 10.45 3.75 15zM12 3.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v1c0 .41-.34.75-.75.75M5 5.75c-.19 0-.38-.07-.53-.22l-1-1a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22M19 5.75c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l1-1c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-1 1c-.15.15-.34.22-.53.22"
    />
  </svg>
);
export default SvgAlarm;
