import App from './app.svelte';

// could be used to pass environment variables
const app = new App({
	target: document.body,
	props: {
		websocketUrl: 'ws://localhost:7777/ws',
	},
});

export default app;
