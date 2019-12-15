import BodyLayout from "../src/impl/layouts/body/index";

test("layout.body", () => {
	const bodyLayout = new BodyLayout();

	const html = bodyLayout.compile().render({
		body: "test",
	}, {
		minify: true,
	});

	expect(html).toContain("<body>test</body>");
});
