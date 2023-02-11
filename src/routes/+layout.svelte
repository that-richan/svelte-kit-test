<script>
	import "../app.css";
</script>

<header class="bg-neutral-400">
	<h1 class="p-2">Svelte Kit Test</h1>

	<nav>
		<ul class="flex gap-3 p-3">
			<li>
				<a class="block shadow p-3 bg-neutral-300 hover:bg-neutral-200" href="/">Homepage</a>
			</li>
			<li>
				<a class="block shadow p-3 bg-neutral-300 hover:bg-neutral-200" href="/articles">Articles</a>
			</li>
		</ul>
	</nav>
</header>

<main class="flex-grow p-3">
	<slot />
</main>

<footer class="bg-neutral-500 text-white p-2">&copy; Richard Jelínek 2023</footer>

<style lang="postcss">
	:global(body) {
		@apply min-h-screen flex flex-col;
	}

	:global(h1) {
		@apply text-3xl;
	}

	:global(h2) {
		@apply text-2xl;
	}

	:global(h3) {
		@apply text-xl;
	}
</style>
