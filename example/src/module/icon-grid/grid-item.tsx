import {
	MorphingDialog,
	MorphingDialogClose,
	MorphingDialogContainer,
	MorphingDialogContent,
	MorphingDialogDescription,
	MorphingDialogSubtitle,
	MorphingDialogTitle,
	MorphingDialogTrigger,
} from "@/components/ui/morphing-dialog";
import { useCopy } from "@/lib/use-copy";
import { SaxCopyLinear, SaxCopySuccessLinear } from "@meysam213/iconsax-react";
import { useEffect, useState } from "react";
import { TabsData } from "./tabs-data";

export function GridItem({
	name,
	iconName,
}: {
	name: string;
	iconName: string;
}) {
	const [IconComponent, setIconComponent] = useState<
		((props: { className: string }) => JSX.Element) | null
	>(null);

	const [coppied, copy] = useCopy();

	useEffect(() => {
		const loadIcon = async () => {
			try {
				const iconModule = await import("@meysam213/iconsax-react");
				const icon = iconModule[iconName];
				if (icon) {
					setIconComponent(() => icon);
				} else {
					console.error(`Icon "${iconName}" not found in @meysam213/iconsax-react`);
				}
			} catch (error) {
				console.error(`Failed to load icon "${iconName}":`, error);
			}
		};

		loadIcon();
	}, [iconName]);

	return (
		<MorphingDialog
			transition={{
				type: "spring",
				bounce: 0.05,
				duration: 0.25,
			}}
		>
			<MorphingDialogTrigger
				style={{
					borderRadius: "12px",
				}}
				className="flex h-44 w-44 flex-col overflow-hidden border border-zinc-50/10 bg-zinc-900"
			>
				<div className="mx-auto mt-10 ">
					{IconComponent && <IconComponent className="h-14 w-14" />}
				</div>
				<div className="flex flex-grow flex-row items-end justify-between p-2">
					<div>
						<MorphingDialogTitle className="text-xs text-zinc-50">
							{name}
						</MorphingDialogTitle>
					</div>
					<button
						type="button"
						className="relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-50/10 bg-zinc-900 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-50 focus-visible:ring-zinc-500 active:scale-[0.98]"
						onClick={() => copy(`<${iconName} />`)}
					>
						{coppied ? (
							<SaxCopySuccessLinear className="h-5 w-5" />
						) : (
							<SaxCopyLinear className="h-5 w-5" />
						)}
					</button>
				</div>
			</MorphingDialogTrigger>
			<MorphingDialogContainer>
				<MorphingDialogContent
					style={{
						borderRadius: "24px",
					}}
					className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-50/10 bg-zinc-900 sm:w-[600px]"
				>
					<div className="mx-auto mt-10">
						{IconComponent && <IconComponent className="h-64 w-64" />}
					</div>
					<div className="p-6">
						<MorphingDialogTitle className="text-2xl text-zinc-50">
							{iconName}
						</MorphingDialogTitle>
						<MorphingDialogSubtitle className="my-4 text-zinc-400">
							{name}
						</MorphingDialogSubtitle>
						<MorphingDialogDescription
							disableLayoutAnimation
							variants={{
								initial: { opacity: 0, scale: 0.8, y: 100 },
								animate: { opacity: 1, scale: 1, y: 0 },
								exit: { opacity: 0, scale: 0.8, y: 100 },
							}}
						>
							<TabsData iconName={iconName} />
						</MorphingDialogDescription>
					</div>
					<MorphingDialogClose className="text-zinc-50" />
				</MorphingDialogContent>
			</MorphingDialogContainer>
		</MorphingDialog>
	);
}
