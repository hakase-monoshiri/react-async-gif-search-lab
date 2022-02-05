import React, { Component } from 'react';

export default class GifSearch extends Component {
    
    state = {
        query: ""
    }
    
  render() {
    return (
    <form>
        <input type='text' value={this.state.query} ></input>
    </form>
  )}
}
