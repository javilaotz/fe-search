import { useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchResults, setQuery, setIsSearching } from "../../../redux/actions";

import Search from './Search'

export default function Container() {
  const { query, isSearching } = useSelector((state) => ({
    query: state.query,
    isSearching: state.isSearching
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if(isSearching) {
      dispatch(fetchResults(query));
    }
  }, [isSearching, query, dispatch]);

  const updateQuery = (string) => {
    dispatch(setQuery(string))
  }

  const listenInput = (e) => {
    if(e.keyCode === 13){
      dispatch(setIsSearching(true))
    }
  }

  const updateIsSearching = () => {
    dispatch(setIsSearching(true))
  }

  return (
    <Search
      query={query}
      updateQuery={updateQuery}
      listenInput={listenInput}
      updateIsSearching={updateIsSearching}
    />
  );
}