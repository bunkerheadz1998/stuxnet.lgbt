<script lang="ts">
import { type ArenaChannelContents } from 'arena-ts';

	export let data;

	const posts: ArenaChannelContents = data.posts;
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
	main {
		max-width: 440px;
	}

	img {
		min-width: 200px;
		max-width: 100%;
	}
</style>
