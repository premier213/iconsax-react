import { Button } from "@/components/ui/button";
import { SaxCopyLinear, SaxCopySuccessLinear } from "@meysam213/iconsax-react";

interface CopyButtonProps {
	onClick: () => void;
	isCopied: boolean;
}

export function CopyButton({ onClick, isCopied }: CopyButtonProps) {
	return (
		<Button
			size="icon"
			variant="secondary"
			className="h-7 w-7"
			onClick={onClick}
		>
			{isCopied ? (
				<SaxCopySuccessLinear className="h-5 w-5" />
			) : (
				<SaxCopyLinear className="h-5 w-5" />
			)}
		</Button>
	);
}
