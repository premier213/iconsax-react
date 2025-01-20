import { useEffect, useState } from "react";
import type { Icon } from "./model";

export const useIconData = () => {
	const [data, setData] = useState<Icon[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		fetch("/exports.json")
			.then((response) => {
				if (!response.ok) throw new Error("Failed to fetch icons");
				return response.json();
			})
			.then((json) => {
				setData(json);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error);
				setIsLoading(false);
			});
	}, []);

	return { data, isLoading, error };
};

export const useFilteredIcons = (data: Icon[]) => {
	const [filtered, setFiltered] = useState<Icon[]>(data);

	const filterIcons = (type = "", search = "") => {
		if (!type && !search) {
			setFiltered(data);
			return;
		}

		const filtered = data.filter((icon: Icon) => {
			if (!icon?.fileName || !Array.isArray(icon?.keywords)) return false;

			const searchMatch =
				!search || icon.fileName.toLowerCase().includes(search.toLowerCase());

			const typeMatch =
				!type ||
				icon.keywords.some((keyword) =>
					keyword?.toLowerCase().includes(type.toLowerCase()),
				);

			return searchMatch && typeMatch;
		});

		setFiltered(filtered);
	};

	useEffect(() => {
		setFiltered(data);
	}, [data]);

	return { filtered, filterIcons };
};
