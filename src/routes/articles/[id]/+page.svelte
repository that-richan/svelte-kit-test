<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<h3>{data.article.name}</h3>
<p>{data.article.description}</p>
