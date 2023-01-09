import * as CommentStyles from "./styles";
import { styled } from "~/themes/global";
import { ThumbsUp, Trash } from "phosphor-react";
export function Comment() {
	return (
		<CommentStyles.CommentWrapper>
			<CommentStyles.CommentAvatar src={import.meta.env.VITE_AVATAR} />

			<CommentStyles.CommentBox>
				<CommentStyles.CommentContent>
					<CommentStyles.CommentContentHeader>
						<div>
							<CommentStyles.AuthorName>
								Wellington Leardini Ramos
							</CommentStyles.AuthorName>
							<CommentStyles.CommentTime
								title="11 de maio às 11:13"
								dateTime="2022-05-11T10:13:00">
								Cerca de uma hora atrás{" "}
							</CommentStyles.CommentTime>
						</div>

						<CommentStyles.DeleteComment title="Realiza a remoção do comentário">
							<Trash size={24} />
						</CommentStyles.DeleteComment>
					</CommentStyles.CommentContentHeader>

					<CommentStyles.CommentContentText>
						Muito bom John, parabéns!!
					</CommentStyles.CommentContentText>
				</CommentStyles.CommentContent>

				<CommentStyles.CommentFooter>
					<CommentStyles.ThumbsButton>
						<ThumbsUp size={20} />
						Aplaudir <CommentStyles.Likes>20</CommentStyles.Likes>
					</CommentStyles.ThumbsButton>
				</CommentStyles.CommentFooter>
			</CommentStyles.CommentBox>
		</CommentStyles.CommentWrapper>
	);
}
