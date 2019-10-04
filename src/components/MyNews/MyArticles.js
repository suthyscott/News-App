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

handleInput = e => {
    console.log('hit handleInput')
    const {name, value} = e.target;
    this.setState({[name]: value})
}

addToComment = () => {
    console.log(this.state)
    const addOn = this.state.input
    axios.post('/api/savedList', {addOn}) .then(res => {
        console.log(res.data)
        console.log(this.state.comment)
        this.setState({
            comment: [...this.state.comment, res.data[1]],
            input: ''
        })
        console.log(this.state)
    })
}

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
    this.setState({
         comment: updatedComment
    })
}


    render(){
        // console.log(this.state.list)
        console.log(this.props.savedArticles)
        let {savedArticles} = this.props
        return (
            <div>
                <section className='article-box-myArticles'>
                    
                { savedArticles.map((element, index) => {
                return <SingleArticle element={element} index={index} deleteArticle={this.deleteArticle}/>
                })}
                
               </section>

               <section>
                   {this.state.comment.map((element, index) => {
                       return <MyArticle element={element} index={index} delete={this.delete} updateState={this.updateState}/>
                   })}
               </section>

                <section>
                    
                    <input 
                    placeholder='Comment' 
                    name='input'
                    value={this.state.input}
                    onChange={e => this.handleInput(e)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            this.addToComment()
                        }
                    }}/>
                </section>
            </div>
        )
    }

}