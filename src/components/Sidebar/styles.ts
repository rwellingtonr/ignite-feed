import { styled } from "~/themes/global";

export const Wrapper = styled("div", {
	backgroundColor: "$gray-800",
	borderRadius: "8px",
	overflow: "hidden",
	display: "none",
	"@bp2": {
		display: "block",
	},
});

export const Cover = styled("img", {
	width: "100%",
	height: "4.5rem",
	objectFit: "cover",
});
export const Profile = styled("div", {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginTop: "calc(0px - 1.5rem - 6px)",
});

export const ProfileName = styled("strong", {
	marginTop: "1rem",
	color: "$gray-100",
	lineHeight: "1.6",
});

export const ProfileJob = styled("span", {
	color: "$gray-400",
	lineHeight: 1.6,
	fontSize: "0.875rem",
});

export const SidebarFooter = styled("footer", {
	marginTop: "1.5rem",
	padding: "1.5rem 2rem 2rem",
	borderTop: "1px solid $gray-600",
});

export const FooterAnchor = styled("a", {
	color: "$green-500",
	background: "transparent",
	border: "1px solid $green-500",
	borderRadius: "8px",
	padding: "0 1.5rem",
	height: "50px",
	fontWeight: "bold",
	textDecoration: "none",
	cursor: "pointer",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	gap: "0.3rem",
	transition: "color 0.1s ease-in-out, background 0.1s ease-in-out",
	"&:hover": {
		color: "$gray-100",
		background: "$green-500",
	},
});
