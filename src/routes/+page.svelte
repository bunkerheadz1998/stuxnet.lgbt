<script lang="ts">
import { type ArenaChannelContents } from 'arena-ts';

	export let data;

	const posts: ArenaChannelContents = data.posts;
	console.log(posts)
</script>

<main>
	{#each posts as post}
		<article>
			{#if post.class == 'Image'}
				<img src={post.image.display.url}/>
			{:else if post.class == 'Video'}
				<Video src={post.image.display.url}/>
			{:else if post.class == 'Media'}
				{@html post.embed.html}
			{/if}
		</article>
	{/each}
</main>

<style>
	/*
	:global(html, body) {
		background: #000;
		color: oklch(92.8% 0.006 264.531);
	}
	*/

	main {
		max-width: 440px;
	}

	img {
		max-width: 100%;
	}
</style>
