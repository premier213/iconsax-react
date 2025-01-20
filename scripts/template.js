const path = require("node:path");

function toPascalCase(str) {
	return str
		.replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase())
		.replace(/-/g, "");
}

function defaultIndexTemplate(filePaths) {
	const exportEntries = filePaths.map(({ path: filePath }) => {
		const basename = path.basename(filePath, path.extname(filePath));
		const dirName = path.basename(path.dirname(filePath));
		const parentDirName = path.basename(path.dirname(path.dirname(filePath)));
		let exportName = toPascalCase(basename);
		const dirSuffix = toPascalCase(dirName);
		if (parentDirName.toLowerCase() === "crypto") {
			exportName = `SaxCrypto${exportName}${dirSuffix}`;
		} else {
			exportName = `Sax${exportName}${dirSuffix}`;
		}

		exportName = exportName.replace(/[^a-zA-Z0-9]/g, "");
		if (/^\d/.test(exportName)) {
			exportName = `Sax${exportName}`;
		}

		return `export { default as ${exportName} } from './${basename}'`;
	});
	return exportEntries.join("\n");
}

module.exports = defaultIndexTemplate;
