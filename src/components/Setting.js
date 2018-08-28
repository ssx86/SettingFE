
import React, { Component } from 'react';

import '../App.css';
import './Setting.css';

import LeftBar from './LeftBar';
import Panel from './Panel';

import $ from 'jquery';


class Setting extends Component {

  constructor(props) {
    super(props);
    this.onItemSelect = this.onItemSelect.bind(this);
    this.state = { sections: null };
  }


  onItemSelect(keys, info) {
    if ( keys.length < 1 )
      return;
    let key = keys[0];
    if ( key.slice(0, 3) === 'top' )
      return;
    
    // http://localhost/sub_menus/33/sections.json
    let url =   this.props.source + 'sub_menus/' + key + '/sections.json';
    this.serverRequest = $.get(url, function(result) {
      this.setState( {sections: result} ); 
    }.bind(this) );
  }

  render() {
    let sections = this.state.sections;
    let onItemSelect = this.onItemSelect;
    let source = this.props.source;
    
    return (
        <div className="setting">
        <LeftBar onItemSelected={onItemSelect} source={source} />
        <Panel sections={sections} source={source}/>
        </div>
    );
  }
}



export default Setting;
