import React from "react";
import { useGetSubredditByNameQuery } from "../api/apiSlice";
import RedditListCard from "./RedditListCard";

function RedditList({ search }) {
  const { isLoading, isSuccess, isError, error, data } =
    useGetSubredditByNameQuery(search);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((post, id) => <RedditListCard key={id} data={post} />);
  } else if (isError) {
    <p>{error}</p>;
  }

  return <div>{content}</div>;
}

export default RedditList;
