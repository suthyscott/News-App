// this component needs to display the array of all saved articles. 

import React, {Component} from 'react';
import Article from '../Feed/Article';

export default class MyArticles extends Component {
    constructor(){
        super()

        this.state = {
            list: ["hi"]
        }
    }



    render(){
        return (
            <div>
                {this.state.list}
               
            </div>
        )
    }

}