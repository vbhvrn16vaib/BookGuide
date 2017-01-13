// import { Reducers } from "redux";

export default function reducer(state={
    books:[],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_BOOKS_FULFILLED": {
        return {...state, fetching: true}
      }
      case "FETCH_TWEETS_FULFILLED": {
        return {...state, fetching: true,books: action.payload,}
      }
      case "DELETE_FULFILLED": {
        return {...state,fetching: true, books: action.payload,}
      }
      case "EDIT_FULFILLED":{
        return {...state,fetching: true, books: action.payload,}
      }
      case "ADD_FULFILLED":{
        return {...state,fetching: true, books: action.payload,}
      }
      case "UPLOAD_FULFILLED":{
        return {...state,fetching: true, output: action.payload,}
      }
      case "FIND_BOOKS_FULFILLED":{
        return {...state,fetching: true, books: action.payload,}
      }
    }

    return state
}
