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
        // this name is how it knows where
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

                    <section className='article-description'>
                    {this.props.element.description}
                    </section>

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

                    {this.props.element.comment.map((element, commentIndex) => {
                        return <Comment element={element} save={this.props.save} delete={this.props.delete} title={this.props.element.title}/>
                    })}
                </div>
                
                

            </div>
        
        )
    }

    
} 


