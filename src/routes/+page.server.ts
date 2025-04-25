import type { PageLoad } from './$types';
import { ARENA_TOKEN, ARENA_CHANNEL } from '$env/static/private';
import {
	ArenaClient,
	type ArenaChannelApi,
	type GetChannelContentsApiResponse
} from 'arena-ts';

export const load: PageLoad = async () => {
	const client = new ArenaClient({ token: ARENA_TOKEN });

	const channel: ArenaChannelApi = await client
		.channel(ARENA_CHANNEL)

	const { contents: posts }: GetChannelContentsApiResponse = await channel.contents()

	const lastSeen = posts
		.map(({ updated_at }) => updated_at)
		.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0]

  return {
    posts,
		lastSeen
  };
};

