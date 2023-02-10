<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<p>List of articles here...</p>
<ul>
	{#each data.articles as article}
		<li>
			<a href="/articles/{article.id}">{article.name}</a>
		</li>
	{/each}
</ul>
