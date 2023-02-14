<script lang="ts">
	import type { NavigationPath } from "../types/nav.type";
	import "../app.css";
	import { page } from "$app/stores";

	const paths: NavigationPath[] = [
		{
			href: "/",
			text: "Homepage",
		},
		{
			href: "/articles",
			text: "Articles",
		},
	];
</script>

<header class="flex bg-neutral-400 drop-shadow">
	<h1 class="flex items-center bg-gradient-to-r from-neutral-50/30 to-transparent p-2">
		<img src="/svelte-logo.svg" alt="Logo" class="inline-block aspect-square h-12" />
		<span class="italic">velte Kit Test</span>
	</h1>

	<nav>
		<ul class="flex gap-3 p-3">
			{#each paths as { href, text }}
			<li>
				<a
					class="block bg-neutral-300 p-3 shadow hover:bg-neutral-200 hover:shadow-lg"
					class:link--active="{
						(href !== '/' && $page.url.pathname.includes(href)) ||
						(href === '/' && $page.url.pathname === '/')
					}"
					href={href}
				>
					{text}
				</a>
			</li>
			{/each}
		</ul>
	</nav>
</header>

<main class="flex-grow p-3">
	<slot />
</main>

<footer class="bg-neutral-300 p-2 text-black">&copy; Richard Jelínek 2023</footer>

<style lang="scss">
	:global(h1) {
		@apply text-3xl;
	}

	:global(h2) {
		@apply text-2xl;
	}

	:global(h3) {
		@apply text-xl;
	}

	.link {
		&--active {
			@apply bg-orange-400;
		}
	}
</style>
