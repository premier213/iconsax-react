import * as fs from "node:fs";
import * as path from "node:path";
import * as glob from "glob";

function processFile(filePath) {
	const content = fs.readFileSync(filePath, "utf8");
	const exports = [];

	// Extract the parent directory name
	const parentDir = path.basename(path.dirname(filePath));

	const exportLines = content.match(
		/export\s*{\s*default\s+as\s+([^}]+)}\s*from\s*["'](.+)["']/g,
	);

	if (exportLines) {
		for (const line of exportLines) {
			const match = line.match(
				/export\s*{\s*default\s+as\s+(Sax[^}]+)}\s*from\s*["']\.\/([^"']+)["']/,
			);
			if (match) {
				const exportName = match[1].trim();
				const fileName = match[2];

				exports.push({
					fileName,
					exportName,
					keywords: [fileName, parentDir],
				});
			}
		}
	}

	return exports;
}

function main() {
	const indexFiles = glob.sync("src/**/index.ts");

	const allExports = [];

	for (const file of indexFiles) {
		const exports = processFile(file);
		allExports.push(...exports);
	}

	fs.writeFileSync(
		"example/public/exports.json",
		JSON.stringify(allExports, null, 2),
		"utf8",
	);

	console.log(`Generated exports.json with ${allExports.length} icons`);
}

main();
