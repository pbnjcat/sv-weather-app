<script lang="ts">
	let searchString = $state('');
	let searchResults: string[] = [];
	let userClosed = $state(false);

</script>

<form method="get">
	<input
		type="search"
		name="location"
		placeholder="Enter a city or zip code"
		bind:value={searchString}
	/>
	<button type="submit">Search</button>
</form>

