import type { PostProps } from "~/components/Post";

export const posts: PostProps[] = [
	{
		id: ~~(Math.random() * 100),
		publishedAt: new Date(),
		author: {
			name: "Wellington L. Ramos",
			avatarUrl: import.meta.env.VITE_AVATAR,
			role: "Fullstack developer",
		},
		content: [
			{
				type: "paragraph",
				content: "Fala galeraa 👋",
			},
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{
				type: "link",
				content: "👉 jane.design/doctorcare",
			},
		],
	},
	{
		id: ~~(Math.random() * 100),
		publishedAt: new Date("2023-01-03 20:00:00"),
		author: {
			name: "Wellington L. Ramos",
			avatarUrl: import.meta.env.VITE_AVATAR,
			role: "Fullstack developer",
		},
		content: [
			{
				type: "paragraph",
				content: "Fala galeraa 👋",
			},
			{
				type: "paragraph",
				content:
					"Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
			},
			{
				type: "link",
				content: "👉 jane.design/doctorcare",
			},
		],
	},
];
