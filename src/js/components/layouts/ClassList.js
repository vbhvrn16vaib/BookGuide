import React from "react";

const Dropdown = () => (
          <div class="btn-group">
        <button class="btn">Please Select From List</button>
        <button class="btn dropdown-toggle" data-toggle="dropdown">
        <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" class="center">
        <li value="1">I</li>
        <li value="2">II</li>
        <li value="3">III</li>
        <li class="divider"></li>
        <li><a tabindex="-1" href="#">Other</a></li>
        </ul>
        </div>
);

//Class:    <input type='dropdown' placeholder='Enter new Title'  onChange={this.handleChange.bind(this,"classes")} class="form-control"/>
export default Dropdown;
