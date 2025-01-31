import * as React from "react";
import type { SVGProps } from "react";
const SvgMusicPlaylist = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 5.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75M15 2.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
    <path
      fill="currentColor"
      d="M18 7H6c-2.2 0-4 1.8-4 4v7c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4v-7c0-2.2-1.8-4-4-4"
      opacity={0.4}
    />
    <path
      fill="currentColor"
      d="M15.37 9.89c-.3-.24-.85-.47-1.73-.24l-2.73.75c-.85.22-1.4.94-1.4 1.83v3.5c-.2-.06-.4-.1-.62-.1a2.121 2.121 0 0 0 0 4.24c1.17 0 2.12-.95 2.12-2.12v-3.34l3.52-.96v1.37c-.2-.06-.4-.1-.62-.1a2.121 2.121 0 0 0 0 4.24c1.15 0 2.09-.92 2.11-2.07 0-.02.01-.03.01-.05v-5.35c0-.9-.36-1.37-.66-1.6m-6.48 8.47c-.34 0-.62-.28-.62-.62s.28-.62.62-.62.61.27.62.61c0 .35-.28.63-.62.63m5.02-.91c-.34 0-.62-.28-.62-.62s.28-.62.62-.62.62.28.62.62-.28.62-.62.62"
    />
  </svg>
);
export default SvgMusicPlaylist;
