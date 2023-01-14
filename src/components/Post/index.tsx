import * as PostStyle from "./styles";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";
import type { Author } from "~/interface/author";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";
import { FormEvent, useState } from "react";

type PostContent = {
	type: "link" | "paragraph";
	content: string;
	id: number;
};

export type PostProps = {
	id: number;
	author: Author;
	content: PostContent[];
	publishedAt: Date;
};

export function Post({ author, publishedAt, content }: PostProps) {
	const [comments, setComments] = useState([{ id: 1, text: "Post inicial" }]);
	const [newComment, setNewComment] = useState<string>("");

	const formatDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr });

	const formatRelativePublishedAt = formatDistanceToNow(publishedAt, {
		locale: ptBr,
		addSuffix: true,
	});

	const handleCreateComment = (event: FormEvent) => {
		event.preventDefault();
		if (!newComment.trim()) return;
		const lastId = comments?.length ? (comments.at(-1)?.id as number) : 0;
		const newId = lastId + 1;
		setComments((prev) => [...prev, { id: newId, text: newComment }]);
		setNewComment("");
	};

	const handleDeleteComment = (commentId: number) => {
		console.log(comments);

		const commentsFiltered = comments.filter((comment) => comment.id !== commentId);
		setComments(commentsFiltered);
	};

	const isNewCommentEmpty = newComment?.length === 0;

	return (
		<PostStyle.Article>
			<PostStyle.ArticleHeader>
				<PostStyle.ArticleAuthor>
					<Avatar src={author.avatarUrl} />
					<div>
						<PostStyle.AuthorName>{author.name}</PostStyle.AuthorName>
						<PostStyle.AuthorJobTitle>{author.role}</PostStyle.AuthorJobTitle>
					</div>
				</PostStyle.ArticleAuthor>

				<PostStyle.ArticleTime
					title={`${formatDate}`}
					dateTime={publishedAt?.toISOString()}>
					{formatRelativePublishedAt}
				</PostStyle.ArticleTime>
			</PostStyle.ArticleHeader>
			<PostStyle.PostContent>
				{content.map((item) => {
					if (item.type === "paragraph") {
						return <p key={item.id}>{item.content}</p>;
					}
					return (
						<p key={item.id}>
							<a href="#">{item.content}</a>
						</p>
					);
				})}
			</PostStyle.PostContent>
			<PostStyle.CommentForm onSubmit={handleCreateComment}>
				<PostStyle.CommentTitle>Deixe seu feedback</PostStyle.CommentTitle>

				<PostStyle.TextArea
					name="commentMessage"
					id="commentMessage"
					placeholder="Deixe um comentário"
					onChange={({ target }) => setNewComment(target.value)}
					value={newComment}
					required
				/>

				<PostStyle.Footer>
					<PostStyle.CommentButton type="submit" disabled={isNewCommentEmpty}>
						Publicar
					</PostStyle.CommentButton>
				</PostStyle.Footer>
			</PostStyle.CommentForm>

			<PostStyle.CommentList>
				{comments.map((comment) => (
					<Comment
						key={comment.id}
						content={comment.text}
						id={comment.id}
						handleDeleteComment={handleDeleteComment}
					/>
				))}
			</PostStyle.CommentList>
		</PostStyle.Article>
	);
}
