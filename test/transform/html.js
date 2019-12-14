module.exports = {
	process(src, filename) {
		let encoded = Buffer.from(src, "utf-8").toString("hex");
		return { code: `module.exports = Buffer.from("${encoded}", "hex").toString("utf-8")` };
	}
};
