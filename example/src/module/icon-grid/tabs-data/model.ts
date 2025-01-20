interface TabItem {
	name: string;
	value: string;
	content: (value: string) => string;
	import?: (value: string) => string;
}

export const tabsData: TabItem[] = [
	{
		name: "React",
		value: "react",
		content: (value: string) => `${value}`,
		import: (value: string) => `${value}`,
	},
];
