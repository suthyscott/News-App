// this component displays the array of all saved articles. 

import React, {Component} from 'react';
import SingleArticle from './SingleArticle'

export default class MyArticles extends Component {
    constructor(){
        super()

        this.state = {
            list: ["hi"],
            comment: [],
            input: "",
        }
    }

    render(){
        let {savedArticles} = this.props
        return (
            <div>
                <section className='article-box-myArticles'>
                    
                { savedArticles.map((element, index) => {
                return <SingleArticle element={element} index={index} deleteArticle={this.deleteArticle} addComment={this.props.addComment} save={this.props.save} delete={this.props.delete}/>               
                
                })}
                              
                </section>
            </div>
        )
    }

}