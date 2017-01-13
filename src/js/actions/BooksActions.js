import axios from "axios";


export const api_url = "http://192.168.2.8:8081";
export const GET_BOOK_API = `${api_url}/books`;
export const DELETE_BOOK_API = `${api_url}/delete/`;
export const EDIT_BOOK_API = `${api_url}/editbook/`;
export const ADD_BOOK_API = `${api_url}/addbook`;
export const UPLOAD_BOOK_API = `${api_url}/addFiles`;
export const SEARCH_BOOK_API = `${api_url}/find/`

export const formdata = new FormData();
export const config = { headers: { 'Content-Type': 'multipart/form-data' } };


export function getBooksActions() {
  return function(dispatch){
      axios.get(GET_BOOK_API)
      .then((response) => {
        dispatch({type: "FETCH_TWEETS_FULFILLED",payload: response.data})
      }).catch((err)=>{
        dispatch({type: "FETCH_TWEETS_REJECTED",payload:err})
      })
    };
}

export function findBooksActions(query) {
  console.log(query);
  return function(dispatch){
      axios.get(SEARCH_BOOK_API+query)
      .then((response) => {
        dispatch({type: "FIND_BOOKS_FULFILLED",payload: response.data})
      }).catch((err)=>{
        dispatch({type: "FIND_BOOKS_REJECTED",payload:err})
      })
    };
}

export function deleteBooksActions(id) {
  return function(dispatch){
      axios.delete(DELETE_BOOK_API + id)
      .then((response) => {
        dispatch({type: "DELETE_FULFILLED",payload: response.data});
      }).catch((err)=>{
        dispatch({type: "DELETE_REJECTED",payload:err})
      })
    };
}

export function editBooksActions(id,details) {
  return function(dispatch){
      axios.post(EDIT_BOOK_API+id,details)
      .then((response) => {
        dispatch({type: "EDIT_FULFILLED",payload: response.data});
      }).catch((err)=>{
        dispatch({type: "EDIT_REJECTED",payload:err})
      })
    };
}

export function addBookActions(details) {
  return function(dispatch){
      axios.post(ADD_BOOK_API,details)
      .then((response) => {
        dispatch({type: "ADD_FULFILLED",payload: response.data});
      }).catch((err)=>{
        dispatch({type: "ADD_REJECTED",payload:err})
      })
    };
}

export function uploadBookImage(file){
  formdata.set('file', file[0]);
  window.formdata = formdata;
  return function(dispatch){
      axios.post(UPLOAD_BOOK_API,formdata,config)
      .then((response) => {
        dispatch({type: "UPLOAD_FULFILLED",payload: response.data});
      }).catch((err)=>{
        dispatch({type: "UPLOAD_REJECTED",payload:err})
      })
    };
}

// export function getBooksActions() {
//   return function(disptach){
//     dispatch({
//       type: "FETCH_TWEETS",
//       payload: axios.get("http://localhost:8081/books")
//     })
//   }
// }

// export function fetchTweets() {
//   return function(dispatch) {
//     axios.get("http://rest.learncode.academy/api/test123/tweets")
//       .then((response) => {
//         dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
//       })
//       .catch((err) => {
//         dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
//       })
//   }
// }
