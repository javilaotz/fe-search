import * as actionTypes from "./actionTypes";

const initialState = {
  query: "",
  isSearching: false,
  results: {
    isFetched: false,
    entries: [],
    error: null
  },
  featured: {
    entries: []
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.FETCH_RESULTS_REQUEST:
      return { ...state, isSearching:true, results: { isFetched: false, entries: [], error: null } };
    case actionTypes.FETCH_RESULTS_SUCCESS:
      return { ...state, isSearching:false, results: { isFetched: true, entries: action.payload, error:null } };
    case actionTypes.FETCH_RESULTS_FAILURE:
      return { ...state, isSearching:false, results: { isFetched: true, entries: [], error: action.payload} };
    case actionTypes.SET_QUERY:
      return { ...state, query: action.payload}
    case actionTypes.SET_IS_SEARCHING:
      return { ...state, isSearching: action.payload}
    case actionTypes.PATCH_RESULTS_SUCCESS:
      return { ...state, isSearching:false, results: { isFetched: true, entries: action.payload, error:null } };
    default:
      return state;
  }
}