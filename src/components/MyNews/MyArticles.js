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

    

// componentDidMount = () => { 
//     axios.get('/api/savedList').then(res => {    
//         for(let i = 0; i < this.state.list.length; i++) {
//         console.log(res.data[i].title)
//         this.setState({
//             list: [this.state.list, res.data[i].title]

//         })
//     }
//         console.log(this.state.list)
//     })
//     .catch(err => {
//         console.log(err)
//     })
    
// }


// addToComment = () => {
//     console.log(this.state)
//     const addOn = this.state.input
//     axios.post('/api/savedList', {addOn}) .then(res => {
//         console.log(res.data)
//         console.log(this.state.comment)
//         this.setState({
//             comment: [...this.state.comment, res.data[res.data.length-1]],
//             input: ''
//         })
//         console.log(this.state.comment)
//     })
// }

delete = index => {
    axios.delete(`/api/savedList/${index}`).then(response => {
        this.setState({
            comment: response.data
        })
    })
}

deleteArticle = index => {
    axios.delete(`/api/displayedList/${index}`).then(res => {
        this.setState({
            list: res.data
        })
    })
}

updateState = updatedComment => {
    console.log(this.state.comment)
    console.log(updatedComment)
    this.setState({
         comment: updatedComment
    })
    console.log(this.state.comment)
}


    render(){
        // console.log(this.state.list)
        console.log(this.props.savedArticles)
        let {savedArticles} = this.props
        return (
            <div>
                <section className='article-box-myArticles'>
                    
                { savedArticles.map((element, index) => {
                return <SingleArticle element={element} index={index} deleteArticle={this.deleteArticle} addComment={this.props.addComment}/>               
                
                })}
                    
        

                <section>
                    {this.state.comment.map((element, index) => {
                        return <MyArticle element={element} index={index} delete={this.delete} updateState={this.updateState}/>
                    })}
                </section>
               

                </section>

                <section>
                   
                </section>
            </div>
        )
    }

}