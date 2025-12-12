<script lang="ts">
	import '$lib/assets/styles/globals.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<script lang="ts">
		// Runs in html head to prevent FOUC
		const savedTheme = localStorage.getItem('theme');
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
		const theme = savedTheme || systemTheme;
		document.documentElement.dataset['theme'] = theme;
		if (!savedTheme) {
			localStorage.setItem('theme', theme);
		}
	</script>
	<link rel="icon" href={favicon} />
	<title>Weatherball</title>
</svelte:head>

<Navbar />
<main id="main-content">
	{@render children?.()}
</main>
