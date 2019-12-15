import Layout from "../src/lib/Layout";
import BodyLayout from "../src/impl/layouts/body";

test("layout.body", () => {
	let bodyLayout = new BodyLayout();

	let html = bodyLayout.compile().render(
		{
			body: "test"
		},
		{
			minify: true
		}
	);

	expect(html).toContain("<body>test</body>");
});
