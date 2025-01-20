"use client";

import { Link } from "@/components/ui/link";
import { GitHubRepoInfo } from "../github";

const styles = {
	container: "fixed z-20 w-full border-zinc-800 border-b bg-background",
	wrapper: "flex justify-between p-4",
	navLinks: "flex gap-4",
} as const;

export function Topbar() {
	return (
		<header className={styles.container}>
			<nav className={styles.wrapper}>
				<div className={styles.navLinks}>
					<Link variant="link" href="https://iconsax.io/">
						Visit the Iconsax
					</Link>
				</div>
				<GitHubRepoInfo />
			</nav>
		</header>
	);
}
