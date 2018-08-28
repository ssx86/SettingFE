
import React, { Component } from 'react';
import $ from 'jquery';

import '../App.css';
import './Control.css';

class Control extends Component {
  generateControl(item) {
    if(item.type == 'text') {
      return <input type="text" placeholder={item.value}/>;
    } else if (item.type == 'picklist') {
      return (
          <select>
          <option>option1</option>
          <option>option2</option>
          </select>
      );
    } else if (item.type == 'radio') {
      return (
        <div>
          <input type="radio" name="a" value="1" />选项一
          <input type="radio" name="a" value="2" />选项二
          <input type="radio" name="a" value="3" />选项三
        </div>
      );
    } else if (item.type == 'file') {
      return (
        <div>
          <input type="file" />
        </div>
      );
    } else {
      return null;
    }
  }
  
  render() {
    let item = this.props.item;
    return <div className="left">{this.generateControl(item)}</div>;
  }

}

export default Control;
