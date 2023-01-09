import { styled } from "./themes/global";

export const Wrapper = styled("div", {
	display: "grid",
	gridTemplateColumns: "1fr",
	gap: "2rem",
	alignItems: "start",
	maxWidth: "70rem",
	margin: "2rem auto",
	padding: "1rem",

	"@bp2": {
		gridTemplateColumns: "256px 1fr",
	},
});
