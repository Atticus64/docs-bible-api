import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Bible Api Docs",
	description: "A documentation for bible-api",
	lastUpdated: true,
	ignoreDeadLinks: true,
	cleanUrls: true,
	markdown: {
		theme: {
			light: 'github-light',
			dark: 'github-dark',
		},
	},
	themeConfig: {
		search: {
			provider: 'local'
		},
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/api/book' }
		],

		sidebar: [
			{
				text: 'Api Enpoints',
				items: [
					{ text: 'Book', link: '/api/book' }

				],
			},
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/api/markdown-examples' },
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/atticus64/bible-api' }
		]
	}
})
