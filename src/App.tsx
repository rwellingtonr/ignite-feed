import { globalStyles } from "./themes/global";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./styles";
import { Post } from "./components/Post";
import { posts } from "./mocks/posts";

export function App() {
	globalStyles();

	return (
		<>
			<Header />
			<Wrapper>
				<Sidebar />
				<main>
					{posts?.map((post) => (
						<Post key={post.id} {...post} />
					))}
				</main>
			</Wrapper>
		</>
	);
}
