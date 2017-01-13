import React from "react";

export default class ShowModalBox extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    details:{
      bookname: this.props.bookname,
      classes:this.props.classes,
      price:this.props.price,
      image:this.props.image,
      id:this.props.id,
      description:this.props.description
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
    this.props.onChange(this.props.id,this.state.details);
    event.preventDefault();
  }

  render(){

    return <div class="modal fade" id={this.props.id} role="dialog">
    <div class="modal-dialog">

      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Edit the {this.props.productid}</h4>
        </div>
        <div class="modal-body">
          <div>
          <input placeholder={this.props.classes}  onChange={this.handleChange.bind(this,"classes")} class="form-control"/>
          <input placeholder={this.props.bookname}  onChange={this.handleChange.bind(this,"bookname")} class="form-control"/>
          <input placeholder={this.props.price}  onChange={this.handleChange.bind(this,"price")} class="form-control"/>
          <input placeholder={this.props.image}   onChange={this.handleChange.bind(this,'image')} class="form-control"/>
          <input placeholder={this.props.description}   onChange={this.handleChange.bind(this,"description")} class="form-control"/>
        </div>
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
