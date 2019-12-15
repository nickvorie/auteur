import handlebars from "handlebars";
import minifier from "html-minifier";

import RenderOptions from "@/lib/RenderOptions";

export default class Layout {
	private templateString: string;
	private compiled: Function;

	constructor(templateString: string) {
		this.templateString = templateString;
	}

	public compile(): Layout {
		this.compiled = handlebars.compile(this.templateString);
		return this;
	}

	public render(data: object, options: RenderOptions = {}): string {
		let html = this.compiled(data);

		if (options.minify) {
			html = minifier.minify(html, {
				collapseWhitespace: true
			});
		}

		return html;
	}
}
