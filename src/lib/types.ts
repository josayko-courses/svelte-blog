export type Category = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	slug: string;
	desription: string;
	date: string;
	categories: Category[];
	published: boolean;
};
