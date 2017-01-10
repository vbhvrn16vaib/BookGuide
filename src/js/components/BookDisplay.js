import React from "react";
import { connect } from "react-redux";
import { observable } from "mobx";

// import { fetchUser } from "../actions/userActions";
// import { fetchTweets } from "../actions/tweetsActions";
import {getBooksActions,deleteBooksActions,editBooksActions,addBookActions} from "../actions/BooksActions";
import DisplayBookLists from "./layouts/displayBookLists";
import ShowModalBox from "./layouts/ShowModalBox";
import ShowAddModalBox from "./layouts/ShowAddModalBox";

@connect((store) => {
  return {
     books: observable(store.book.books),
  };
})
export default class BookDisplay extends React.Component {

 constructor(){
   super();
   this.state = {
     details:{
       booktitle:"",
       imageurl:"",
       productid:"",
     }
   }

   this.editBooks = this.editBooks.bind(this);
 }

  componentWillMount() {
    this.props.dispatch(getBooksActions())
  }

  componentWillUnmount(){
    this.removeListner();
  }

  deleteBooks(id){
    this.props.dispatch(deleteBooksActions(id));
  }

  editBooks(id,details){
    this.props.dispatch(editBooksActions(id,details));
  }

  addBook(newBook){
    this.props.dispatch(addBookActions(newBook));
  }

  render() {
    const { books } = this.props;

    const bookList = books.map(book =>
    <tr>
    <td><img src={book.image} height="42" width="42"></img></td>
    <td>{book.classes}</td>
    <td>{book.bookname}</td>
    <td>&#x20B9; {book.price}</td>
    <td>{book.description}</td>
    <td><button class="btn btn-warning"  data-toggle="modal" data-target={'#'+book.id}>Edit</button>
        <ShowModalBox id={book.id} imageurl={book.imageurl} title={book.booktitle} productid={book.productid} onChange={this.editBooks.bind(this)}/>
    </td>
    <td><button onClick={()=>this.deleteBooks(book.id)} class="btn btn-danger">Delete</button></td>
    </tr>
  )

  // return <div>
  //   <ol>{mappedTweets}</ol>
  // </div>
  return (
    <div>
     <button data-toggle="modal" data-target='#myModal' class="btn-floating btn-large waves-effect waves-light red">
       <i class="material-icons">+</i>
       </button>
      <ShowAddModalBox onChange={this.addBook.bind(this)}/>
      <input type="search" placeholder='Search Anything.............'/>
    <DisplayBookLists bookList={bookList} />
    </div>
  )
  }
}
