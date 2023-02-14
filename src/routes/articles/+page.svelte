<script lang="ts">
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>

<a class="text-green-700" href="/articles/add">Add article</a>

<h2>List of articles</h2>
<ul class="flex gap-2">
	{#each data.articles as article}
	<li>
		<a
			class="p-3 inline-block shadow bg-neutral-600 hover:bg-neutral-500 text-white"
			href="/articles/{article.id}"
		>
			{article.name}
		</a>
	</li>
	{/each}
</ul>
