
import React, { Component } from 'react';
import $ from 'jquery';

import 'rc-tree/assets/index.css';
import '../App.css';
import './Section.css';

import Control from './Control';

class Section extends Component {

  constructor(props) {
    super(props);
    this.state = { show_body: false };
  }

  foldSwtich = () => {
    this.setState( (pre, props) => ({
      show_body: !pre.show_body
    }));
  }
    

  generateSection = (mode) => {
    if (mode == 'List') {
      return <SectionBodyList />
    } else if (mode == 'Record') {
      return <SectionBodyRecord fields={
        [
          {name: 'field1', type: 'text', value: 'value1'},
          {name: 'field2', type: 'picklist'},
          {name: 'field3', type: 'picklist'},
          {name: 'field4', type: 'radio'},
          {name: 'field5', type: 'file'}
        ]

      }/>
    } else {
      return null;
    }  
  }
  
  render() {
    let data = this.props.data;
    
    return (
        <div className="section">
        
        <div className="section-header" >
        <table style={{width: "100%"}} >
        <tr>
        <td className="title" ><p>{data.title + ":"}</p> </td>
        <td className="actions"> <a href="#" onClick={this.foldSwtich}>展开/折叠</a> </td>
        </tr>
        </table>
        </div>
        {
          this.state.show_body &&
            (
                <div className="section-body">
                {
                  this.generateSection(data.mode)
                }
                <input className="section-savebutton" type="button" value="保存设置" />
                </div>
            )
        }
        
      </div>
    );
  }

  componentDidMount() {
    /*
      let url = "";
      this.serverRequest = $.get(url, function(result) {
      this.setState( {data: result} ); 
      }.bind(this) );
    */
  }

  componentWillUnmount() {
    /*
      this.serverRequest.abort();
    */
  }

}

class SectionBodyList extends Component {
  render() {
    return <ol>Section List</ol>
  }
}

class SectionBodyRecord extends Component {
  constructor(props) {
    super(props);
  }
  
  
  fieldLine = (data) => {
    if (!data) return null;
    console.log(data);
    
    return data.map( (item) =>
                     <tr className="field">
                     <td>
                     <p className="fieldLabel right"> {item.name} </p>
                     </td>
                     <td>
                     <Control item={item} />
                     </td>
                     </tr>
                   )
  }
  render() {
    return (
        <table>
        {this.fieldLine(this.props.fields)}
      </table>
    )
  }
}



export default Section;
