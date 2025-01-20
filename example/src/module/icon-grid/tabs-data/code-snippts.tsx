import { CopyButton } from "@/components/ui/copy-button";
import type { CodeSnippetProps } from "../model";

export function CodeSnippet({ code, onCopy, isCopied }: CodeSnippetProps) {
	return (
		<div className="flex h-10 items-center justify-between gap-2 rounded-md border pr-1.5 pl-3">
			<code className="text-[13px]">{code}</code>
			<CopyButton onClick={onCopy} isCopied={isCopied} />
		</div>
	);
}
