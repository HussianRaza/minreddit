import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const redditApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `https://www.reddit.com` }),
  endpoints: (builder) => ({
    getSubredditByName: builder.query({
      query: (subreddit) => `r/${subreddit}.json`,
      transformResponse: (response, meta, arg) => {
        const data = response.data.children;
        const redditPosts = data.map((post) => {
          return {
            title: post.data.title,
            thumbnail: post.data.url_overridden_by_dest,
            subreddit: post.data.subreddit,
            upVotes: post.data.ups,
            downVotes: post.data.downs,
            createdUtcTimestamp: post.data.created_utc,
            postDescription: post.data.selftext,
          };
        });
        return redditPosts;
      },
    }),
  }),
});

export const { useGetSubredditByNameQuery } = redditApi;
