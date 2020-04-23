import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";
import SearchPresenter from "./SearchPresenter";

export default ({ location: { search } }) => {
  const term = decodeURI(search.split("=")[1]);
  const { data, loading } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: {
      term,
    },
  });
  return <SearchPresenter searchTerm={term} loading={loading} data={data} />;
};
