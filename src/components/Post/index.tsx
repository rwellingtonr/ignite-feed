import { styled } from "~/themes/global";
import * as PostStyle from "./styles";
import { Avatar } from "~/style/Avatar";
type PostProps = {};

export function Post({}: PostProps) {
	return (
		<PostStyle.Article>
			<PostStyle.ArticleHeader>
				<PostStyle.ArticleAuthor>
					<Avatar src={import.meta.env.VITE_AVATAR} />
					<div>
						<PostStyle.AuthorName>Wellington Leardini Ramos</PostStyle.AuthorName>
						<PostStyle.AuthorJobTitle>Fullstack developer</PostStyle.AuthorJobTitle>
					</div>
				</PostStyle.ArticleAuthor>

				<PostStyle.ArticleTime title="11 de maio às 11:13" dateTime="2022-05-11T10:13:00">
					Publicado há 1h
				</PostStyle.ArticleTime>
			</PostStyle.ArticleHeader>
			<PostStyle.PostContent>
				<p>Fala galeraa 👋</p>
				<p>
					Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW
					Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
				</p>
				<p>
					<a href="#"> 👉 jane.design/doctorcare</a>
				</p>
				<p>
					<a href="#">#novoprojeto</a> <a href="#"> #nlw </a> <a href="#"> #rocketseat</a>{" "}
				</p>
			</PostStyle.PostContent>
			<PostStyle.CommentForm>
				<PostStyle.CommentTitle>Deixe seu feedback</PostStyle.CommentTitle>
				<PostStyle.TextArea
					name="commentMessage"
					id="commentMessage"
					placeholder="Deixe um comentario"
				/>
				<PostStyle.CommentButton type="submit">Comentar</PostStyle.CommentButton>
			</PostStyle.CommentForm>
		</PostStyle.Article>
	);
}
