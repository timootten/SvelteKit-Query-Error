<script lang="ts">
	import { getTestQuery } from './query.remote';

	const testQuery = $derived(await getTestQuery());
</script>

<h1>Response Query Error</h1>

<button onclick={async () => await getTestQuery().refresh()}>Refresh</button>

<!-- this is not typesafe -->
{#if (await getTestQuery()).success}
	<p>Query succeeded!</p>
	<p>{(await getTestQuery()).data}</p>
{:else}
	<p>Query failed!</p>
{/if}

<!-- this would work -->
{#if testQuery.success}
	<p>Query succeeded!</p>
	<p>{testQuery.data}</p>
{:else}
	<p>Query failed!</p>
{/if}
