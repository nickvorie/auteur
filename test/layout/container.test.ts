import ContainerLayout from "../../src/impl/layouts/container";

test("layout.container", () => {
	const layout = new ContainerLayout();

	layout.maxWidth = 400;

	const html = layout.render({
		content: "test",
	});

	expect(html).toContain("width=\"400\"");
});
