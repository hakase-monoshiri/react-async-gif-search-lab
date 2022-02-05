import React, { Component } from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {

    state = {
        data: []
    }

    componentDidMount () {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then()
    }


    render() {
        return( 
        <div>
            <GifSearch />
            <GifList gifs={this.state} />
        </div>
        )}
}
