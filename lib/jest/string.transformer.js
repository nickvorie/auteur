module.exports = {
	process(src, filename) {
		// Encode the source file to hex (to avoid escape issues with the code below)
		const encoded = Buffer.from(src, "utf-8").toString("hex");

		// Generate transformer code that decodes an exports the hex string
		const code = `module.exports = Buffer.from("${encoded}", "hex").toString("utf-8")`;

		return {
			code,
		};
	},
};
