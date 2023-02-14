<script lang="ts">
	// This library is not type-safe at all...
	// Consider other options...
	import { field, form } from "svelte-forms";
	import { required } from "svelte-forms/validators";
	import type { Article } from "../../../types/article.type";
	import { articlesMock } from "../../../mock/article.mock";
	import { goto } from "$app/navigation";

	const name = field("name", "", [required()]);
	const description = field("description", "", []);
	const addArticle = form(name, description);

	async function submit(event: SubmitEvent): Promise<void> {
		await addArticle.validate();
		if (!$addArticle.valid) {
			event.preventDefault();
		}
	}

	async function submitByCode(event: SubmitEvent): Promise<void> {
		event.preventDefault();
		await addArticle.validate();

		const article: Article = {
			id: articlesMock.reduce((max, article) => article.id > max ? article.id : max, 0) + 1,
			...addArticle.summary() as Article,
		};

		console.log("Would add article", article);
		await goto("/articles");
	}
</script>

<form method="POST" on:submit={submit}>
	<div class="p-2">
		<label for="article-name">Name</label>
		<input
			class="border-2"
			type="text"
			id="article-name"
			name="name"
			bind:value={$name.value}
		/>
		<div
			class="text-sm text-red-600"
			class:invisible={!$addArticle.hasError("name.required")}
		>
			Name is required
		</div>
	</div>
	<div class="p-2">
		<label for="article-description">Description</label>
		<input
			class="border-2"
			type="text"
			id="article-description"
			name="description"
			bind:value={$description.value}
		/>
	</div>
	<button
		disabled={!$addArticle.valid}
		class="mt-5 bg-green-300 p-2 shadow"
	>
		Add article by form action
	</button>
	<button
		on:click={submitByCode}
		disabled={!$addArticle.valid}
		class="mt-5 bg-green-300 p-2 shadow"
	>
		Add article by code
	</button>
</form>
