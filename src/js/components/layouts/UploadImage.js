import React from 'react';
import Dropzone from 'react-dropzone';

export default class UploadImage extends React.Component{
 constructor(props){
    super(props);
   this.state = {
     files: [],
   }
 }

  // uploadFile(event){
  //   console.log(event.target.file);
  // }

  onDrop(acceptedFiles) {
        this.setState({
          files: acceptedFiles
        });
      }

  onOpenClick() {
        this.dropzone.open();
  }

  onUploadClick(){
    this.props.onChange(this.state.files);
  }

  render(){

    return (
      <div>
                     <Dropzone ref={(node) => { this.dropzone = node; }} onDrop={this.onDrop.bind(this)}>
                         <div>Try dropping some files here, or click to select files to upload.</div>
                     </Dropzone>
                     <button type="button" class="btn btn-default" onClick={this.onOpenClick.bind(this)}>
                         Browse files
                     </button>
                     {this.state.files.length > 0 ?
                      <div>
                     <h4>Uploading {this.state.files.length} files...</h4>
                     <div>{this.state.files.map((file) => <img key={file} src={file.preview} height="62" width="62"/> )}
                     <button type="button" class="btn btn-default" onClick={this.onUploadClick.bind(this)}>Upload</button>
                     </div>
                     </div> : null}
                 </div>
    )
  }
}
