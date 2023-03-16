module.exports = {
	name: "animation test",
	description: "Displays an animation",
	category: "Basic",
	icon: "user",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "left",
			vertical_position: "bottom",
			width: "50"
		}
	},
	entry_props: [
		{
			name: "name",
			description: "Name",
			type: "String"
		},
	],
	vue_template: getFile("animationtest.html").toString(),
	css: getFile("style.css").toString()
}
