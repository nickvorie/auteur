import RootLayout from "../../src/impl/layouts/root/index";

test("layout.body", () => {
	const rootLayout = new RootLayout();

	const html = rootLayout.compile().render({
		body: "test",
	}, {
		minify: true,
	});

	expect(html).toContain("<body>test</body>");
});
