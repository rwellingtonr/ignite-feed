import * as CommentStyles from "./styles";
import { useState } from "react";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

type CommentProps = {
	content: string;
	id: number;
	handleDeleteComment: (index: number) => void;
};

export function Comment({ content, handleDeleteComment, id }: CommentProps) {
	const [likeCount, setLikeCount] = useState(0);

	return (
		<CommentStyles.CommentWrapper>
			<Avatar hasBorder={false} src={import.meta.env.VITE_AVATAR} />

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

						<CommentStyles.DeleteCommentButton
							type="button"
							onClick={() => handleDeleteComment(id)}
							title="Realiza a remoção do comentário">
							<Trash size={24} />
						</CommentStyles.DeleteCommentButton>
					</CommentStyles.CommentContentHeader>

					<CommentStyles.CommentContentText>{content}</CommentStyles.CommentContentText>
				</CommentStyles.CommentContent>

				<CommentStyles.CommentFooter>
					<CommentStyles.ThumbsButton
						type="button"
						id="addLikes"
						onClick={() => setLikeCount((prev) => prev + 1)}>
						<ThumbsUp size={20} />
						Aplaudir <CommentStyles.Likes>{likeCount}</CommentStyles.Likes>
					</CommentStyles.ThumbsButton>
				</CommentStyles.CommentFooter>
			</CommentStyles.CommentBox>
		</CommentStyles.CommentWrapper>
	);
}
