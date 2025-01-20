import { useVirtualizer } from "@tanstack/react-virtual";
import React from "react";
import { GridItem } from "./grid-item";
import type { VirtualGridProps } from "./model";

export const VirtualGrid: React.FC<VirtualGridProps> = ({ data, columns }) => {
	const parentRef = React.useRef<HTMLDivElement>(null);
	const rowCount = Math.ceil(data?.length / columns);

	const rowVirtualizer = useVirtualizer({
		count: rowCount,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 224,
		overscan: 5,
	});

	return (
		<div
			ref={parentRef}
			className="container mx-auto mb-64 h-[700px] overflow-auto"
			id="section2"
		>
			<div
				style={{
					height: `${rowVirtualizer.getTotalSize()}px`,
					position: "relative",
				}}
			>
				{rowVirtualizer.getVirtualItems().map((virtualRow) => (
					<div
						key={virtualRow.key}
						className="absolute flex w-full justify-between gap-4"
						style={{
							height: `${virtualRow.size}px`,
							transform: `translateY(${virtualRow.start}px)`,
						}}
					>
						{Array.from({ length: columns }).map((_, colIndex) => {
							const iconIndex = virtualRow.index * columns + colIndex;
							const icon = data[iconIndex];
							return (
								icon && (
									<div key={iconIndex} className="mx-auto">
										<GridItem iconName={icon.exportName} name={icon.fileName} />
									</div>
								)
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
};
