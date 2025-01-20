import { Button } from "@/components/ui/button";
import { SvgIcon } from "@/components/ui/svg-icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SaxCopyLinear } from "@meysam213/iconsax-react";
import { type TabData, tabsData } from "./model";

const TabTriggerContent = ({ tab }: { tab: TabData }) => (
	<code className="flex items-center gap-1 text-[13px] [&>svg]:h-4 [&>svg]:w-4">
		<SvgIcon {...tab.icon} /> {tab.name}
	</code>
);

const TabContentPanel = ({ tab }: { tab: TabData }) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(tab.content);
	};

	return (
		<div className="flex h-10 items-center justify-between gap-2 rounded-md border pr-1.5 pl-3">
			<code className="text-[13px]">{tab.content}</code>
			<Button
				size="icon"
				variant="secondary"
				className="h-7 w-7"
				onClick={handleCopy}
				aria-label="Copy to clipboard"
			>
				<SaxCopyLinear />
			</Button>
		</div>
	);
};

export function Install() {
	return (
		<>
			<Tabs defaultValue={tabsData[0].value} className="mx-auto max-w-sm">
				<TabsList
					className="flex justify-center"
					aria-label="Installation options"
				>
					{tabsData.map((tab) => (
						<TabsTrigger
							key={tab.value}
							value={tab.value}
							className="px-2.5 sm:px-3"
						>
							<TabTriggerContent tab={tab} />
						</TabsTrigger>
					))}
				</TabsList>

				{tabsData.map((tab) => (
					<TabsContent key={tab.value} value={tab.value}>
						<TabContentPanel tab={tab} />
					</TabsContent>
				))}
			</Tabs>
			<div className="container mx-auto">
				<div className="mt-4 text-center text-[13px]">
					<p>
						you can customize IconSax by changing the size, color, and stroke of
						the icons. like the example below:
						<br />
						<div className="mx-auto mt-8 flex h-10 max-w-md items-center justify-between gap-2 rounded-md border px-2">
							<code className="text-[13px]">
								{"<SaxActivityLinear className='w-6 h-6' style={{...}} />"}
							</code>
						</div>
					</p>
				</div>
			</div>
		</>
	);
}
