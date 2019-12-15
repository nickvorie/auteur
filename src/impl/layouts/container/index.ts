import Layout from "@/lib/Layout";
import RenderOptions from "@/lib/RenderOptions";

import html from "./index.html";

export default class ContainerLayout extends Layout {
	public maxWidth: number = 500;

	constructor() {
		super(html);
	}

	protected preRender(): { data?: object, options?: RenderOptions } | null {
		return {
			data: {
				maxWidth: this.maxWidth,
			},
		};
	}
}
