<script lang="ts">
	import { getTestQuery } from './query.remote';
</script>

<h1>Boundary Query Error</h1>

<button onclick={async () => await getTestQuery().refresh()}>Refresh</button>

<!-- this is doesnt work with SSR -->
<svelte:boundary>
	{#snippet pending()}
		<p>Loading</p>
	{/snippet}
	{#snippet failed(error, reset)}
		<p>{error}</p>
		<button onclick={reset}>Try again</button>
	{/snippet}
	<p>{await getTestQuery()}</p>
</svelte:boundary>
