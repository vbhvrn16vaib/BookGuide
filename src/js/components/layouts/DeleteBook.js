import React from 'react';
import {api_url} from "../../actions/BooksActions";

export default class DeleteBook extends React.Component {

  handleSubmit(){
    this.props.onClick(this.props.id);
  }

  render(){
    return (
      <div class="modal fade" id={'delete'+this.props.id} role="dialog">
      <div class="modal-dialog">

        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title"> Can I Delete {this.props.title} ??</h4>
          </div>
          <div class="modal-body">
            <div>
              <img src={api_url + this.props.image} height="72" width="72" />
          </div>
          </div>
          <div class="modal-footer">
            <div>
            <button type="button" class="btn btn-default" data-dismiss="modal"      onClick={this.handleSubmit.bind(this)}>Yes</button>
            </div>
            <div>
            <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    )
  }
}
