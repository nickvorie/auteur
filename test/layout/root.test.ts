import RootLayout from "../../src/impl/layouts/root/index";

test("layout.root", () => {
	const rootLayout = new RootLayout();

	const html = rootLayout.render({
		content: "test",
	});

	expect(html).toContain("<body>test</body>");
});
