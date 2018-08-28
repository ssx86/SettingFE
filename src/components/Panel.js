
import React, { Component } from 'react';
import Section from './Section';
import $ from 'jquery';


import '../App.css';
import './Panel.css';

class Panel extends Component {
  
  render() {
    let sections = this.props.sections;
    if ( sections == null)
      return null;
    
    return (
        <table className="panel">
        <tr>
        <td> {sections.map ( (item) => <Section data={item} /> ) }  </td>
        </tr>
        </table>
    );
  }

}



export default Panel;
