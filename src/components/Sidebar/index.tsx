import { PencilLine } from "phosphor-react";
import * as S from "./styles";
import { Avatar } from "~/style/Avatar";
export function Sidebar() {
	return (
		<S.Wrapper>
			<S.Cover
				src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
				alt=""
			/>
			<S.Profile>
				<Avatar src={import.meta.env.VITE_AVATAR} alt="" />
				<S.ProfileName>Wellington Leardini</S.ProfileName>
				<S.ProfileJob>Fullstack developer</S.ProfileJob>
			</S.Profile>

			<S.SidebarFooter>
				<S.FooterAnchor>
					<PencilLine size={20} />
					Edit your profile
				</S.FooterAnchor>
			</S.SidebarFooter>
		</S.Wrapper>
	);
}
