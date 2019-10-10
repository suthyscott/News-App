// this component needs to display the array of all saved articles. 

import React, {Component} from 'react';
import axios from 'axios';
import MyArticle from '../MyNews/MyArticle';
import SingleArticle from './SingleArticle'
import { thisTypeAnnotation } from '@babel/types';

export default class MyArticles extends Component {
    constructor(){
        super()

        this.state = {
            list: ["hi"],
            comment: [],
            input: "",
        }
    }

// delete = index => {
//     axios.delete(`/api/savedList/${index}`).then(response => {
//         this.setState({
//             comment: response.data
//         })
//     })
// }

// deleteArticle = index => {
//     axios.delete(`/api/displayedList/${index}`).then(res => {
//         this.setState({
//             list: res.data
//         })
//     })
// }

// updateState = updatedComment => {
//     console.log(this.state.comment)
//     console.log(updatedComment)
//     this.setState({
//          comment: updatedComment
//     })
//     console.log(this.state.comment)
// }


    render(){
        // console.log(this.state.list)
        // console.log(this.props.element.comment)
        let {savedArticles} = this.props
        return (
            <div>
                <section className='article-box-myArticles'>
                    
                { savedArticles.map((element, index) => {
                return <SingleArticle element={element} index={index} deleteArticle={this.deleteArticle} addComment={this.props.addComment} save={this.props.save} delete={this.props.delete}/>               
                
                })}
                    
        

                {/* <section>
                    {this.state.comment.map((element, index) => {
                        return <MyArticle element={element} index={index} delete={this.delete} updateState={this.updateState}/>
                    })}
                </section> */}
               

                </section>

                <section>
                   
                </section>
            </div>
        )
    }

}