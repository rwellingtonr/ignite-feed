import { globalStyles } from "./themes/global";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./styles";

export function App() {
	globalStyles();
	return (
		<>
			<Header />
			<Wrapper>
				<Sidebar />
				<p> ...</p>
			</Wrapper>
		</>
	);
}
