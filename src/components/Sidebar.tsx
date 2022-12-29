import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
				alt=""
			/>
			<div className={styles.profile}>
				<img src="https://avatars.githubusercontent.com/u/73858173?v=4" alt="" />
				<strong>Wellington</strong>
				<span>Desenvolvedor fullstack</span>
			</div>

			<footer>
				<a type="submit">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
