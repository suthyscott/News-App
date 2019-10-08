import React, {Component} from 'react';
import Comment from './Comment'

export default class SingleArticle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    handleInput = e => {
        
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        
        if(!this.props.element.comment) {
            this.props.element.comment = []
        }
        return(
            <div>
                <div className='single-article'>
                    {this.props.element.title}

                    {/* <button className='url-button'>
                    {this.props.element.url}
                    </button> */}

                    <div className='description'>
                    {this.props.element.description}
                    </div>

                    <button className='specific-save-button'>Remove</button>

                    <input 
                    id='comment-box'
                    placeholder='Comments' 
                    name='value'
                    value={this.state.value}
                    onChange={e => this.handleInput(e)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            this.props.addComment(this.props.element.title, this.state.value)
                        }
                    }}/>

                    {/* <button>
                    Comment
                    </button> */}

                    {this.props.element.comment.map(element => {
                        return <Comment element={element}/>
                    })}
                </div>
                
            </div>
        
        )
    }

    
} 

{/* <button onClick={() => this.props.deleteArticle(this.props.index)}>Delete</button> */}


