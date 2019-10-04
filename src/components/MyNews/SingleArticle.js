import React, {Component} from 'react';

export default class SingleArticle extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.element)
        return(
        <div className='single-article'>
            {this.props.element.title}

        </div>
        )
    }

    
} 

{/* <button onClick={() => this.props.deleteArticle(this.props.index)}>Delete</button> */}


