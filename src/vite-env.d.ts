/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_AVATAR: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
