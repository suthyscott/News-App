import React, {Component} from 'react';
import Comment from './Comment'
import MyArticle from './MyArticle'
import axios from 'axios'

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

    

    // updateState = updatedComment => {
    //     console.log(this.state.comment)
    //     console.log(updatedComment)
    //     this.setState({
    //          comment: updatedComment
    //     })
    //     console.log(this.state.comment)
    // }

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

                    {this.props.element.comment.map((element, commentIndex) => {
                        return <Comment element={element} save={this.props.save} delete={this.props.delete} title={this.props.element.title}/>
                    })}

                {/* <section>
                    {this.props.element.comment.map((element, index) => {
                        return <MyArticle element={element} index={index} delete={this.delete} updateState={this.updateState} comment={this.props.element.comment}/>
                    })}
                </section> */}
                </div>
                
                

            </div>
        
        )
    }

    
} 

{/* <button onClick={() => this.props.deleteArticle(this.props.index)}>Delete</button> */}


