import logo from "~/assets/logo.svg";
import { Logo, HeaderWrapper } from "./styles";

export function Header() {
	return (
		<HeaderWrapper>
			<Logo src={logo} alt="Logo do Ignite" />
			<h1>Ignite Feed</h1>
		</HeaderWrapper>
	);
}
