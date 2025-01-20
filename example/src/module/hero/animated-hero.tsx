import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import {
	SaxArrowRightLinear,
	SaxFlash1Linear,
	SaxSearchNormalLinear,
} from "@meysam213/iconsax-react";
import { memo } from "react";
import { AnimatedTitle } from "./animated-title";
import { useRotatingTitles } from "./hooks";

const TITLES = [
	"Customizable",
	"Effortless Integration",
	"Always Growing",
] as const;

const ANIMATION_INTERVAL = 2000;

const scrollToSection = (id: string) => {
	const element = document.getElementById(id);
	element?.scrollIntoView({ behavior: "smooth" });
};

function HeroComponent() {
	const titleNumber = useRotatingTitles(
		TITLES as unknown as string[],
		ANIMATION_INTERVAL,
	);

	return (
		<div className="w-full">
			<div className="container mx-auto">
				<div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
					<div>
						<Link
							variant="secondary"
							href="https://github.com/premier213/iconsax-react"
						>
							Read our Documentation{" "}
							<span className="pl-4">
								<SaxArrowRightLinear />
							</span>
						</Link>
					</div>
					<div className="flex flex-col gap-4">
						<h1 className="max-w-2xl text-center font-regular text-5xl tracking-tighter md:text-7xl">
							<span className="text-spektr-cyan-50">Why You'll Love It</span>
							<AnimatedTitle
								titles={TITLES as unknown as string[]}
								currentIndex={titleNumber}
							/>
						</h1>
						<p className="max-w-2xl text-center text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
							Discover a world of 6 unique styles, all perfectly balanced and
							designed on a 24px grid for pixel-perfect results. With 6000 icons
							in total, Iconsax offers endless possibilities to bring your ideas
							to life.
						</p>
					</div>
					<div className="flex flex-row gap-3">
						<Button
							onClick={() => scrollToSection("section1")}
							size="lg"
							className="gap-4"
							variant="outline"
						>
							Get Started <SaxFlash1Linear className="h-5 w-5" />
						</Button>
						<Button
							onClick={() => scrollToSection("section2")}
							size="lg"
							className="gap-4"
						>
							Explore the Icons <SaxSearchNormalLinear className="h-5 w-5" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export const Hero = memo(HeroComponent);
