import React from "react";

export default class ShowModalBox extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    details:{
      booktitle: this.props.title,
      imageurl:this.props.imageurl,
      productid:this.props.productid,
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
          <p>
          Title:    <input placeholder={this.props.title}  onChange={this.handleChange.bind(this,"booktitle")} class="form-control"/><br></br>
        image Url: <input placeholder={this.props.imageurl}  onChange={this.handleChange.bind(this,"imageurl")} class="form-control"/>
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
