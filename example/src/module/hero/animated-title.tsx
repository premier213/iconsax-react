import { motion } from "framer-motion";

interface AnimatedTitleProps {
	titles: string[];
	currentIndex: number;
}

export const AnimatedTitle = ({ titles, currentIndex }: AnimatedTitleProps) => (
	<span className="relative flex w-full justify-center overflow-hidden text-center md:pt-1 md:pb-4">
		&nbsp;
		{titles.map((title, index) => (
			<motion.span
				key={index}
				className="absolute font-semibold"
				initial={{ opacity: 0, y: "-100" }}
				transition={{ type: "spring", stiffness: 50 }}
				animate={
					currentIndex === index
						? { y: 0, opacity: 1 }
						: { y: currentIndex > index ? -150 : 150, opacity: 0 }
				}
			>
				{title}
			</motion.span>
		))}
	</span>
);
