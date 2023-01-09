import * as PostStyle from "./styles";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";
import type { Author } from "~/interface/author";
import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

type PostContent = {
	type: "link" | "paragraph";
	content: string;
};

export type PostProps = {
	id: number;
	author: Author;
	content: PostContent[];
	publishedAt: Date;
};

export function Post({ author, publishedAt, content }: PostProps) {
	const formatDate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBr });

	const formatRelativePublishedAt = formatDistanceToNow(publishedAt, {
		locale: ptBr,
		addSuffix: true,
	});

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
						return <p>{item.content}</p>;
					}
					return (
						<p>
							<a href="#">{item.content}</a>
						</p>
					);
				})}
			</PostStyle.PostContent>
			<PostStyle.CommentForm>
				<PostStyle.CommentTitle>Deixe seu feedback</PostStyle.CommentTitle>

				<PostStyle.TextArea
					name="commentMessage"
					id="commentMessage"
					placeholder="Deixe um comentário"
				/>

				<PostStyle.Footer>
					<PostStyle.CommentButton type="submit">Publicar</PostStyle.CommentButton>
				</PostStyle.Footer>
			</PostStyle.CommentForm>

			<PostStyle.CommentList>
				<Comment />
				<Comment />
				<Comment />
			</PostStyle.CommentList>
		</PostStyle.Article>
	);
}
