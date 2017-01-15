import React from "react";
import { connect } from "react-redux";
import { observable } from "mobx";

// import { fetchUser } from "../actions/userActions";
// import { fetchTweets } from "../actions/tweetsActions";
import {getBooksActions,deleteBooksActions,editBooksActions,addBookActions,findBooksActions,api_url} from "../actions/BooksActions";
import DisplayBookLists from "./layouts/displayBookLists";
import ShowModalBox from "./layouts/showModalBox";
import ShowAddModalBox from "./layouts/ShowAddModalBox";
import DeleteBook from "./layouts/DeleteBook";

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
   this.deleteBooks = this.deleteBooks.bind(this);
 }

  componentWillMount() {
    this.props.dispatch(getBooksActions())
  }

  componentWillUpdate(nextProps,nextState){
    console.log(nextProps);
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

  searchClass(event){
    const a = event.target.value
    this.props.dispatch(findBooksActions(a));
    event.preventDefault();
  }

  render() {
    console.log(this.props);
    const { books } = this.props;

    const bookList = books.map(book =>
    <tr key={book.id}>
    <td><img src={api_url + book.image} height="42" width="42"></img></td>
    <td>{book.classes}</td>
    <td>{book.bookname}</td>
    <td>&#x20B9; {book.price}</td>
    <td>{book.description}</td>
    <td><button class="btn btn-warning"  data-toggle="modal" data-target={'#'+book.id}>Edit</button>
        <ShowModalBox id={book.id} price={book.price} image={book.image} bookname={book.bookname} description={book.description} classes={book.classes} onChange={this.editBooks.bind(this)}/>

    </td>
    <td>
      <button class="btn btn-warning"  data-toggle="modal" data-target={'#delete'+book.id}>Delete</button>
      <DeleteBook id={book.id} title={book.bookname} class={book.classes} image={book.image} onClick={this.deleteBooks.bind(this)} />
     </td>
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
      <input type="search" placeholder='Search Anything.............' onChange={this.searchClass.bind(this)}/>
    <DisplayBookLists bookList={bookList} />
    </div>
  )
  }
}
