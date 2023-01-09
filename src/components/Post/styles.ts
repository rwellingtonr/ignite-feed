import { styled } from "~/themes/global";

export const Article = styled("article", {
	background: "$gray-800",
	borderRadius: "8px",
	width: "100%",
	padding: "20px",

	"& + article": {
		marginTop: "2rem",
	},
});

export const PostContent = styled("div", {
	lineHeight: 1.6,
	color: "$gray-300",
	marginTop: "1.5rem",

	"& p": {
		marginTop: "1rem",
	},

	"& a": {
		color: "$green-500",
		fontWeight: "bold",
		textDecoration: "none",
	},
	"& a:hover": {
		color: "$green-300",
	},
});

export const ArticleHeader = styled("header", {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
});
export const ArticleTime = styled("time", {
	fontSize: "0.875rem",
	color: "$gray-400",
});

export const ArticleAuthor = styled("div", {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: "1rem",
});

export const AuthorName = styled("strong", {
	display: "block",
	color: "$gray-100",
	lineHeight: 1.6,
});
export const AuthorJobTitle = styled("span", {
	display: "block",
	fontSize: "0.875rem",
	color: "$gray-400",
	lineHeight: 1.6,
});
export const Footer = styled("footer", {
	visibility: "hidden",
	maxHeight: 0,
});

export const CommentForm = styled("form", {
	width: "100%",
	marginTop: "1.5rem",
	paddingTop: "1.5rem",
	borderTop: "1px solid $gray-600",

	[`&:focus-within ${Footer}`]: {
		visibility: "visible",
		maxHeight: "none",
	},
});
export const CommentTitle = styled("strong", {
	lineHeight: 1.6,
	color: "$gray-100",
});

export const TextArea = styled("textarea", {
	width: "100%",
	backgroundColor: "$gray-900",
	border: 0,
	resize: "none",
	height: "6rem",
	padding: "1rem 0",
	borderRadius: "8px",
	color: "$gray-100",
	lineHeight: 1.4,
	marginTop: "1rem",
});

export const CommentButton = styled("button", {
	padding: "1rem 1.5rem",
	marginTop: "1rem",
	borderRadius: "8px",
	border: 0,
	fontWeight: "bold",
	background: "$green-500",
	color: "$white",
	cursor: "pointer",
	transition: "background 0.1s linear",

	"&:hover": {
		background: "$green-300",
	},
});

export const CommentList = styled("div", {
	marginTop: "3rem",
});
