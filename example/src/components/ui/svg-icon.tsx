export interface SvgIconProps {
	title: string;
	path: string;
	viewBox: string;
}

export function SvgIcon({ title, path, viewBox }: SvgIconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={viewBox}
			width="1em"
			height="1em"
			fill="currentColor"
		>
			<title>{title}</title>
			<path d={path} />
		</svg>
	);
}
