export interface PageConfig {
	id: string;
	to: string;
	text: string;
	icon?: string;
	authority?: string[];
	roles?: string[];
	subPages?: Record<string, PageConfig>;
}

export const authPages = {
	home: {
		id: 'home',
		to: '/',
		text: 'Home'
	},
	contact: {
		id: 'contact',
		to: '/contact',
		text: 'Contacto',
	},
} satisfies Record<string, PageConfig>;

export const privatePages = {} satisfies Record<string, PageConfig>;

export const pagesConfig = { ...authPages, ...privatePages };
export default pagesConfig;
