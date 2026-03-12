<script lang="ts">
	import type { PageData } from './$types';
	import Navbar from '$lib/components/Navbar.svelte';
	import { debounceTimeout } from '$lib/utils';
	import { fetchLocations } from '$lib/services/geocode';

	let { data }: { data: PageData } = $props();

	let isLoading = $state(false);
	const getInitialSearchRequest = () => data.searchRequest;
	const getInitialSearchResponse = () => data.geocodeResponse;
	const initialRequest = getInitialSearchRequest();
	const getInitialError = () => data.error;

	let query = $state(initialRequest.query);
	let searchResults = $state(getInitialSearchResponse());

	let currentController: AbortController | null = null;
	let error = $state<string | undefined>(getInitialError());

	$effect(() => {
		const request = data.searchRequest;
		query = request.query;
		searchResults = data.geocodeResponse;
		error = data.error;
	});

	const debounceSearch = debounceTimeout(500, async (searchTerm: string) => {
		if (currentController) {
			currentController.abort();
		}
		currentController = new AbortController();

		isLoading = true;

		try {
			const results = await fetchLocations({ query: searchTerm }, fetch, currentController.signal);
			if (query === searchTerm) {
				searchResults = results;
			}
		} catch (error) {
			console.error('Real error:', error);
			searchResults = [];
		} finally {
			isLoading = false;
		}
	});

	$effect(() => {
		debounceSearch(query);
	});
</script>

<section>
	<Navbar bind:searchTerm={query} {isLoading} {searchResults} searchError={error} />
	<h2>Input a city into the search to get current weather</h2>
	<p>
		Data from <a href="https://open-meteo.com/" rel="noopener noreferrer" target="_blank"
			>Open meteo</a
		>
	</p>
</section>
