"use client";
import { Filters } from "./filters";
import { useFilteredIcons, useIconData } from "./hooks";
import { VirtualGrid } from "./virtual-grid";

export function IconGrid() {
	const { data, isLoading, error } = useIconData();
	const { filtered, filterIcons } = useFilteredIcons(data);
	const columns = 8;

	if (isLoading) return <div>Loading icons...</div>;
	if (error) return <div>Error loading icons: {error.message}</div>;

	return (
		<>
			<Filters setFiltered={filterIcons} />
			<VirtualGrid data={filtered} columns={columns} />
		</>
	);
}
