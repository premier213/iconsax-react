import { GitStarButton } from "@/components/ui/git-start-button";
import { useEffect, useState } from "react";
import type { GitHubRepo } from "./model";

const GITHUB_API_URL = "https://api.github.com/repos/premier213/iconsax-react";

const useGitHubRepo = () => {
	const [repoData, setRepoData] = useState<GitHubRepo | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRepo = async () => {
			try {
				const response = await fetch(GITHUB_API_URL);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setRepoData(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "An error occurred");
				console.error("Error fetching GitHub repo data:", err);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRepo();
	}, []);

	return { repoData, isLoading, error };
};

export const GitHubRepoInfo = () => {
	const { repoData, isLoading, error } = useGitHubRepo();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	if (!repoData) return null;

	return (
		<GitStarButton
			link={repoData.html_url}
			starCount={repoData.stargazers_count}
		/>
	);
};
