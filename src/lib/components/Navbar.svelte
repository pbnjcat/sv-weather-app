<script lang="ts">
	import type { GeocodeLocation } from '$lib/types';

	let {
		searchTerm = $bindable(),
		isLoading = false,
		searchResults = [],
		searchError
	}: {
		searchTerm: string;
		isLoading: boolean;
		searchResults: GeocodeLocation[];
		searchError: string | undefined;
	} = $props();

	function selectLocation(location: GeocodeLocation) {
		searchTerm = location.name;
	}
</script>

<form method="get" onsubmit={(e) => e.preventDefault()}>
	<input
		type="search"
		name="location"
		placeholder="Enter a city or zip code"
		bind:value={searchTerm}
	/>

	{#if isLoading}
		<div class="loading">Searching...</div>
	{:else if searchError}
		<div class="error">{searchError}</div>
	{/if}
	{#if searchResults.length > 0}
		<ul class="results">
			{#each searchResults as result}
				<li>
					<a
						href="/"
						aria-label={`Select location ${result.name}`}
						onclick={() => selectLocation(result)}
					>
						{result.name}
						{#if result.admin1}, {result.admin1}{/if}
						{#if result.country}, {result.country}{/if}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</form>

<style>
	.loading {
		padding: 0.5rem;
		color: #666;
	}

	.results {
		list-style: none;
		padding: 0;
		margin: 0.5rem 0;
		border: 1px solid #ccc;
		border-radius: 4px;
		max-height: 300px;
		overflow-y: auto;
	}

	.results li {
		padding: 0.75rem;
		cursor: pointer;
		border-bottom: 1px solid #eee;
	}

	.results li:last-child {
		border-bottom: none;
	}

	.results li:hover {
		background-color: #f5f5f5;
	}
</style>
