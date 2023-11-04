import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '200.html',
            pages: 'docs',
            assets: 'docs'
        }),
        paths: {
            base: process.env.NODE_ENV === 'production' ? '/ciao-cow' : '',
        }
	}
};

export default config;
