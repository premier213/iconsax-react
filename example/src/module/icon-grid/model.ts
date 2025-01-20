export type Icon = {
	fileName: string;
	exportName: string;
	keywords: string[];
};

export const ICON_TYPES = [
	"bulk",
	"bold",
	"broken",
	"linear",
	"outline",
	"twotone",
] as const;

export type IconType = (typeof ICON_TYPES)[number];

export interface FiltersProps {
	setFiltered: (type: string, search: string) => void;
}

export interface VirtualGridProps {
	data: Icon[];
	columns: number;
}

export interface TabsDataProps {
	iconName: string;
}

export interface CodeSnippetProps {
	code: string;
	onCopy: () => void;
	isCopied: boolean;
}
