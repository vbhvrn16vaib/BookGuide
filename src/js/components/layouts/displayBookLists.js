import React from 'react';

export default class DisplayBookLists extends React.Component {
  render(){
    return <div class="container"><table class="table">
    <thead>
       <tr>
      <th>Image</th>
       <th>Class</th>
       <th>Title</th>
       <th>Price</th>
       <th>Description</th>
       </tr>
       </thead>
         <tbody>
        {this.props.bookList}
        </tbody>
    </table>
  </div>
  }
}
