import * as actionTypes from "./actionTypes"
import API from "../lib/api";

//Actions
export const setQuery = (query) => ({
  type: actionTypes.SET_QUERY,
  payload: query
})

export const setIsSearching = (value) => ({
  type: actionTypes.SET_IS_SEARCHING,
  payload: value
})

//thunks
export const fetchResults = (query) => async (dispatch) => {
  dispatch({
    type: actionTypes.FETCH_RESULTS_REQUEST
  });
  try{
    const results = await API.search(query);
    dispatch({
      type: actionTypes.FETCH_RESULTS_SUCCESS,
      payload: results
    })
  } catch (e) {
    dispatch({
      type: actionTypes.FETCH_RESULTS_FAILURE,
      payload: e
    })
  }
}

export const setStarred = (id, query) => async (dispatch) => {
  dispatch({
    type:actionTypes.PATCH_RESULTS_REQUEST
  });
  try {
    await API.patch(id)
    const results = await API.search(query);
    dispatch({
      type: actionTypes.PATCH_RESULTS_SUCCESS,
      payload: results
    })
  }catch(e){
    dispatch({
      type: actionTypes.PATCH_RESULTS_FAILURE,
      payload: e
    })
  }
}
