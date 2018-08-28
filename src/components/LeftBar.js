
import React, { Component } from 'react';
import Tree, { TreeNode } from 'rc-tree';
import $ from 'jquery';

import 'rc-tree/assets/index.css';
import '../App.css';
import './LeftBar.css';

class LeftBar extends Component {
  render() {
    return (
        <div className="leftBar">
        <MenuTree onItemSelected={this.props.onItemSelected} source={this.props.source} />
        </div>
    );
  }
}



class MenuTree extends Component {

  constructor(props) {
    super(props);
    this.state = {data: null};
  }

  renderTreeNodes(data) {

    
    if (!data) {
      return null;
    }

    return data.map( (item) => {
      if (item.sub_menus) {
        return (
            <TreeNode title={item.title} key={'top-' + item.id} dataRef={item} >
            {this.renderTreeNodes(item.sub_menus)}
          </TreeNode>
        );
      } else {
        return (
            <TreeNode title={item.title} key={item.id} dataRef={item} />
        );
      }
    });
  }

  componentDidMount() {
    this.serverRequest = $.get(this.props.source + 'menu_tree.json', function(result) {
      this.setState( {data: result} ); 
    }.bind(this) );

  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
  
  render() {
    return (
        <div>
        <Tree
      className="menuTree"
      onSelect={this.props.onItemSelected}
      defaultExpandAll
        >
        {this.renderTreeNodes(this.state.data)}
      </Tree>
        </div>
    );

  }
}



export default LeftBar;
