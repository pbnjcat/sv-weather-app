<script lang="ts">
	import type { PageData } from './$types';
	import { getDirectionByDegrees } from '$lib/utils';

	let { data }: { data: PageData } = $props();

</script>

<section>
	<h2>Input a city into the search to get current weather</h2>
	<p>
		Data from <a href="https://open-meteo.com/" rel="noopener noreferrer" target="_blank"
			>Open meteo</a
		>
	</p>
</section>
