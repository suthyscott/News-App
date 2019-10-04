// this component needs to display the array of all saved articles. 

import React, {Component} from 'react';
import axios from 'axios';
import MyArticle from '../MyNews/MyArticle';

export default class MyArticles extends Component {
    constructor(){
        super()

        this.state = {
            list: ["hi"],
            comment: [],
            input: ""
        }
    }

    

componentDidMount = () => { 
    axios.get('/api/savedList').then(res => {
     console.log(res.data[0].title)
        this.setState({
            list: res.data[0].title

        })
        console.log(this.state.list)
    })
    .catch(err => {
        console.log(err)
    })
}

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

updateState = updatedComment => {
    this.setState({
         comment: updatedComment
    })
}

    render(){
        console.log(this.state.list)
        console.log(this.state.comment)
        console.log(this.state.input)
        // console.log(this.props.savedArticles)
        return (
            <div>
                <section>
                    
                {this.state.list}
                {/* {this.state.comment} */}
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