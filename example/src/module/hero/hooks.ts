import { useEffect, useState } from "react";

export const useRotatingTitles = (titles: string[], interval = 2000) => {
	const [titleNumber, setTitleNumber] = useState(0);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
		}, interval);
		return () => clearTimeout(timeoutId);
	}, [titleNumber, titles, interval]);

	return titleNumber;
};
