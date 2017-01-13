import React from "react";
import Dropdown from "./ClassList";
import UploadImage from "./UploadImage";
import {uploadBookImage,api_url} from "../../actions/BooksActions";
import { connect } from "react-redux";
import CopyToClipboard from 'react-copy-to-clipboard';


@connect((store) => {
  return {
     book: store.book,
  };
})
export default class ShowModalBox extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    details:{
      bookname: "",
      image:"",
      classes:"",
      price:"",
      description:"",
    }
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(propertyName,event) {
    const details = this.state.details;
    details[propertyName] = event.target.value;
    this.setState({details: details});
  }

  // handleImageChange(){
  //   const details = this.state.details;
  //   details.image = event;
  //   this.setState({details: details});
  //   this.setState({'image':this.props.book.output});
  // }

  handleSubmit(event) {
    this.props.onChange(this.state.details);
    event.preventDefault();
  }

  uploadBook(file){
    this.props.dispatch(uploadBookImage(file));
    //this.setState({'image':this.props.book.output});
    event.preventDefault();
  }

  mapStateToProps(state,props){
    console.log(state);
    console.log(props);
  }

  render(){

    return <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add new Book</h4>
        </div>
        <div class="modal-body">
          <div>
          <input placeholder='Enter class like 1 2 3'  onChange={this.handleChange.bind(this,"classes")} class="form-control"/>
          <input placeholder='Enter Book title'  onChange={this.handleChange.bind(this,"bookname")} class="form-control"/>
          <input placeholder='Enter Price in Rs'  onChange={this.handleChange.bind(this,"price")} class="form-control"/>
          <div>
          <UploadImage onChange={this.uploadBook.bind(this)}/>
          </div>
          <input placeholder='Enter image URL' onChange={this.handleChange.bind(this,'image')} class="form-control"/>
          <input placeholder='Enter Description'  onChange={this.handleChange.bind(this,"description")} class="form-control"/>
      </div>
       <em>{this.props.book.output}</em>
      </div>
            <CopyToClipboard text={this.props.book.output}>
               <button class="btn btn-default">Copy to clipboard</button>
             </CopyToClipboard>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.handleSubmit}>Submit</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
  }
}
