import handlebars from "handlebars";
import minifier from "html-minifier";
import _ from "lodash";

import RenderOptions from "@/lib/RenderOptions";

export default class Layout {
	private templateString: string;
	private compiled: Function;

	constructor(templateString: string) {
		this.templateString = templateString;
		this.compiled = handlebars.compile(this.templateString);
	}

	public render(data: object = {}, options: RenderOptions = { minify: true }): string {
		const preRenderResult = this.preRender();

		if (preRenderResult) {
			if (preRenderResult.data) {
				_.merge(data, preRenderResult.data);
			}

			if (preRenderResult.options) {
				_.merge(options, preRenderResult.options);
			}
		}

		let html = this.compiled(data);

		if (options.minify) {
			html = minifier.minify(html, {
				collapseWhitespace: true,
			});
		}

		return html;
	}

	protected preRender(): { data?: object, options?: RenderOptions } | null {
		return null;
	}
}
