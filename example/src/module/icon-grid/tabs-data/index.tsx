import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopy } from "@/lib/use-copy";
import type { TabsDataProps } from "../model";
import { CodeSnippet } from "./code-snippts";
import { tabsData } from "./model";

const DEFAULT_TAB = tabsData[0].value;

export function TabsData({ iconName }: TabsDataProps) {
	const [copiedImport, copyImport] = useCopy();
	const [copiedTag, copyTag] = useCopy();

	return (
		<Tabs defaultValue={DEFAULT_TAB} className="mx-auto max-w-[600px]">
			<TabsList className="flex justify-center" id="section1">
				{tabsData.map((tab) => (
					<TabsTrigger
						key={tab.value}
						value={tab.value}
						className="px-2.5 sm:px-3"
					>
						<code className="flex items-center gap-1 text-[13px] [&>svg]:h-4 [&>svg]:w-4">
							{tab.name}
						</code>
					</TabsTrigger>
				))}
			</TabsList>

			{tabsData.map((tab) => (
				<TabsContent key={tab.value} value={tab.value}>
					<p>Import Icon:</p>
					<CodeSnippet
						code={`import { ${tab.content(iconName)} } from '@meysam213/iconsax-react'`}
						onCopy={() =>
							copyImport(
								`import { ${tab.content(iconName)} } from '@meysam213/iconsax-react'`,
							)
						}
						isCopied={copiedImport}
					/>
					<p className="mt-4">Icon Usage:</p>
					<CodeSnippet
						code={`<${tab.content(iconName)} />`}
						onCopy={() => copyTag(`<${iconName} />`)}
						isCopied={copiedTag}
					/>
				</TabsContent>
			))}
		</Tabs>
	);
}
