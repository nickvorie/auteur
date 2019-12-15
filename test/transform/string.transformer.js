/**
 * @author Nicholas Vorie - github.com/nickvorie
 *
 * This is by far the stupiest kludge I've written. I couldn't manage to get Jest to allow to import HTML from a TypeScript file.
 * I tried using jest-transform-stub, which did resolve the errors but would just return an empty string (which cause tests to fail).
 * If there is a more elegant solution to this issue PLEASE let me know and I will be happy to abandon this.
 *
 * To use this, simply ammend your jest.config.json file to include the following:
 * {
 * 	transform: {
 *		"\\.(html|xml|txt)$": "<rootDir>/test/transform/string.transformer.js"
 *	},
 * }
 */

module.exports = {
	process(src, filename) {
		//Encode the source file to hex (to avoid escape issues with the code below)
		let encoded = Buffer.from(src, "utf-8").toString("hex");

		//Generate transformer code that decodes an exports the hex string
		let code = `module.exports = Buffer.from("${encoded}", "hex").toString("utf-8")`;

		return {
			code
		};
	}
};
