import { globalStyles } from "./themes/global";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./styles";
import { Post } from "./components/Post";

export function App() {
	globalStyles();

	return (
		<>
			<Header />
			<Wrapper>
				<Sidebar />
				<div>
					<Post />
					<Post />
				</div>
			</Wrapper>
		</>
	);
}
