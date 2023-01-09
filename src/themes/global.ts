import { createStitches, globalCss } from "@stitches/react";

export const { styled, css } = createStitches({
	theme: {
		colors: {
			white: "#fff",
			"gray-100": "#e1e1e6",
			"gray-300": "#c4c4cc",
			"gray-400": "#8d8d99",
			"gray-600": "#323238",
			"gray-700": "#29292e",
			"gray-800": "#202024",
			"gray-900": "#121214",
			"green-500": "#00875f",
			"green-300": "#00b37e",
			"red-500": "#F75A68",
		},
	},
	media: {
		bp1: "(min-width: 640px)",
		bp2: "(min-width: 768px)",
		bp3: "(min-width: 1024px)",
	},
});

export const globalStyles = globalCss({
	"*": {
		margin: 0,
		padding: 0,
		boxSize: "border-box",
	},
	body: {
		background: "#323238",
		color: "#c4c4cc",
		width: "100vw",
		minHeight: "100vh",
	},
	"body, input, select, textarea": {
		fontFamily: "Hanken Grotesk, sans-serif",
		fontWeight: 400,
		fontSize: "1rem",
	},
	":focus": {
		outline: "transparent",
		boxShadow: "0 0 0 2px #00875f",
	},
});
