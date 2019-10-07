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
        console.log('hit handleInput')
        const {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {
        console.log(this.props.element)
        console.log(this.props.element.comment)
        if(!this.props.element.comment) {
            this.props.element.comment = []
        }
        return(
            <div>
                <div className='single-article'>
                    {this.props.element.title}

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


