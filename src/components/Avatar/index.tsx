import { styled } from "~/themes/global";
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
	if (hasBorder) return <AvatarWithBorder {...props} />;

	return <AvatarWithoutBorder {...props} />;
}

const AvatarWithBorder = styled("img", {
	width: "calc(3rem + 12px)",
	height: "calc(3rem + 12px)",
	borderRadius: "8px",
	background: "$gray-100",
	border: "4px solid $gray-800",
	outline: "2px solid $green-500",
});

export const AvatarWithoutBorder = styled("img", {
	width: "3rem",
	height: "3rem",
	borderRadius: "8px",
	background: "$gray-100",
});
