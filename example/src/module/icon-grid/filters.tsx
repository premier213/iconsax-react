"use client";

import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { type FiltersProps, ICON_TYPES } from "./model";

export function Filters({ setFiltered }: FiltersProps) {
	const [typeState, setTypeState] = useState("");
	const [search, setSearch] = useState("");

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		setFiltered(typeState, search);
	}, [typeState, search]);

	return (
		<div className="container mx-auto my-8 flex justify-center gap-4">
			<Input
				className="w-96"
				placeholder="Search icons"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Tabs defaultValue="" className="w-[400px]">
				<TabsList>
					{ICON_TYPES.map((type) => (
						<TabsTrigger
							key={type}
							value={type}
							onClick={() => setTypeState(type)}
						>
							{type.charAt(0).toUpperCase() + type.slice(1)}
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>
		</div>
	);
}
