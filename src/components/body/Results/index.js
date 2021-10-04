//Redux
import { useSelector, useDispatch } from "react-redux";
import { setStarred } from "../../../redux/actions";
import Results from './Results';

export default function Container () {
  const { isFetched, entries, error, isSearching, query } = useSelector((state) => ({
    isSearching: state.isSearching,
    isFetched: state.results.isFetched,
    entries: state.results.entries,
    error: state.results.error,
    query: state.query
  }))

  const dispatch = useDispatch();

  const starred = (id) => dispatch(setStarred(id, query))

  return <Results starred={starred} isSearching={isSearching} isFetched={isFetched} entries={entries} error={error} />
}