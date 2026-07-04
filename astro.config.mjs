// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	// GitHub Pages の URL 設定（※ご自身のユーザー名・リポジトリ名に書き換えてください）
	site: 'https://alirex-labs.github.io', 
	base: '/Alirex-Labs-Portfolio',                  
	integrations: [
		starlight({
			title: 'Alirex Labs.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/alirex-labs/Alirex-Labs-Portfolio' }],
			sidebar: [
				{
					label: 'Products (開発アプリ)',
					items: [{ autogenerate: { directory: 'products' } }],
				},
				{
					label: 'Tech Blog (技術ブログ)',
					items: [{ autogenerate: { directory: 'blog' } }],
				},
			],
		}),
	],
});
