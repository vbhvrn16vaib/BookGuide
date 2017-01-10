import React from 'react';

export default class UploadImage extends React.Component{

  uploadFile(event){
    console.log(event.target.file);
  }


  render(){
    return (
      <div>
      <form ref="uploadForm" className="uploader" encType="multipart/form-data" >
        <input ref="file" type="file" name="file" className="upload-file" onChange={this.uploadFile.bind(this)}/>
        <input type="button" ref="button" value="Upload" />
      </form>
   </div>
    )
  }
}
