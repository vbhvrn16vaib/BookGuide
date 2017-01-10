import React from "react";
import Dropdown from "./ClassList";
import UploadImage from "./UploadImage";

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

  handleSubmit(event) {
    this.props.onChange(this.state.details);
    event.preventDefault();
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
          <p>
          Class:<input placeholder='Enter class like 1 2 3'  onChange={this.handleChange.bind(this,"classes")} class="form-control"/>
          Book name:    <input placeholder='Enter Book title'  onChange={this.handleChange.bind(this,"bookname")} class="form-control"/>
          Price:    <input placeholder='Enter Price in Rs'  onChange={this.handleChange.bind(this,"price")} class="form-control"/>
          image Url: <input placeholder='Enter image URL'  onChange={this.handleChange.bind(this,"image")} class="form-control"/>
          description: <input placeholder='Enter Description'  onChange={this.handleChange.bind(this,"description")} class="form-control"/>
          <UploadImage />
        </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.handleSubmit}>Submit</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
  }
}
