import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Example = () => {
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios
        .get("https://api.github.com/repos/advide2001/movie-search-app")
        .then((res) => res.data),
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <p>Last updated: {data.updated_at}</p>
      {isFetching ? "Background Updating..." : null}
    </div>
  );
};

export default Example;
