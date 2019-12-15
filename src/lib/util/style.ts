import _ from "lodash";

export default function toCss(rules: object): string {
	let css = "";

	_.keys(rules).forEach((selector) => {
		css += `${selector} {`;

		const properties = _.keys(_.get(rules, selector));

		properties.forEach((property) => {
			const value = _.get(properties, property);

			css += `${property}: ${value};`;
		});

		css += "}";
	});

	return css;
}
