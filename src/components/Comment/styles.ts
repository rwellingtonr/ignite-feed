import { styled } from "~/themes/global";

export const CommentWrapper = styled("div", {
	marginTop: "1.5rem",
	display: "flex",
	gap: "1rem",
});

export const CommentBox = styled("div", {
	flex: 1,
});

export const CommentContent = styled("main", {
	background: "$gray-700",
	padding: "1rem",
	borderRadius: "8px",
});

export const CommentContentHeader = styled("header", {
	display: "flex",
	flexDirection: "row",
	alignItems: "flex-start",
	justifyContent: "space-between",
});
export const AuthorName = styled("strong", {
	display: "block",
	fontSize: "0.875rem",
	lineHeight: "1.6",
});
export const CommentContentText = styled("p", {
	marginTop: "1rem",
	color: "$gray-300",
});
export const DeleteCommentButton = styled("button", {
	backgroundColor: "transparent",
	color: "$gray-400",
	border: 0,
	cursor: "pointer",
	fontSize: 0,
	borderRadius: "2px",
	transition: "color .1s",

	"&:hover": {
		color: "$red-500",
	},
});
export const CommentFooter = styled("footer", {
	marginTop: "1rem",
});

export const CommentTime = styled("time", {
	display: "block",
	fontSize: "0.75rem",
	lineHeight: "1.6",
	color: "$gray-400",
});

export const ThumbsButton = styled("button", {
	backgroundColor: "transparent",
	border: 0,
	color: "$gray-400",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	borderRadius: "2px",

	"&:hover": {
		color: "$green-300",
	},

	"& svg": {
		marginRight: "0.5rem",
	},
});

export const Likes = styled("span", {
	"&::before": {
		padding: "0 0.25rem",
		content: "\\2022",
	},
});
