import { useCallback, useState } from "react";

export function useCopy(): [boolean, (text: string) => void] {
	const [copied, setCopied] = useState<boolean>(false);

	const copy = useCallback((text: string) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}, []);

	return [copied, copy];
}
