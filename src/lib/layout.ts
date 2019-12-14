import handlebars from "handlebars";

export default abstract class Layout {
	public templateString: string;
	public compiled: Function;

	public compile(): Layout {
		this.compiled = handlebars.compile(this.templateString);
		return this;
	}

	protected render(data: object): string {
		return this.compiled(data);
	}
}
