import { useRef, useState } from "react";

export const InputBorderSpotlight = () => {
	const divRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);

	const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
		if (!divRef.current || isFocused) return;

		const div = divRef.current;
		const rect = div.getBoundingClientRect();

		setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
	};

	const handleFocus = () => {
		setIsFocused(true);
		setOpacity(1);
	};

	const handleBlur = () => {
		setIsFocused(false);
		setOpacity(0);
	};

	const handleMouseEnter = () => {
		setOpacity(1);
	};

	const handleMouseLeave = () => {
		setOpacity(0);
	};

	return (
		<>
			<div className="relative w-80">
				<input
					onMouseMove={handleMouseMove}
					onFocus={handleFocus}
					onBlur={handleBlur}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					autoComplete="off"
					placeholder="Enter your email address"
					type="email"
					name="email"
					className="h-10 w-full cursor-default rounded-md border border-neutral-800 bg-neutral-950 p-3.5 text-slate-100 transition-colors duration-500 placeholder:select-none placeholder:text-neutral-500 focus:border-[rgb(207_174_255)] focus:outline-none"
				/>
				<input
					ref={divRef}
					disabled
					style={{
						border: "1px solid rgb(207 174 255)",
						opacity,
						WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
					}}
					className="174 255)] pointer-events-none absolute top-0 left-0 z-10 h-10 w-full cursor-default rounded-md border border-[rgb(207 bg-[transparent] p-3.5 opacity-0 transition-opacity duration-500 placeholder:select-none"
				/>
			</div>
		</>
	);
};
