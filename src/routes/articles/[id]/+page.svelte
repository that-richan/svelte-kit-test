<script lang="ts">
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>

<a
	class="hover:text-blue-400 underline"
	href="/articles"
>
	Back
</a>

<h2>{data.article.name}</h2>
<p>{data.article.description}</p>
