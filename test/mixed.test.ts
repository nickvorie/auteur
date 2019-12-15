import RootLayout from "../src/impl/layouts/root";
import ContainerLayout from "../src/impl/layouts/container";

test("mixed-layouts", () => {
	const html = new RootLayout().render({
		content: new ContainerLayout().render({
			content: "test",
		}),
	});

	expect(html).toContain("<td>test</td>");
});
