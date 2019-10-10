import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import axios from 'axios'
import Router from './Router';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      savedArticles: [{
        comment: ['']
      }]
    }
  }

  handleSaveArticle = (article) => {
    
    axios.post('/api/article', article).then(res => {
      // console.log(res.data)
        this.setState({
            savedArticles: res.data
        })
    })
    .catch(err => {
      console.log(err)
    })
  }

  addComment = (title, comment) => {
    console.log('hit function')
    axios.post('/api/savedList', {title, comment}) .then(res => {
        this.setState({
            savedArticles: res.data
        })
        console.log(res.data)
    })
  }

  save = (title, newItem, id) =>{
    axios.put(`/api/savedList/${id}`, {title, newItem})
    .then(res => {
      this.setState({
        savedArticles: res.data
      })
    })
  }

  delete = (title, id) => {
    axios.delete(`/api/savedList/${title}/${id}`).then(response => {
        this.setState({
            savedArticles: response.data
        })
    })
}

  render() {
  
    return (
          <HashRouter >
          <div >
            <Router handleSaveArticle={this.handleSaveArticle} savedArticles={this.state.savedArticles} addComment={this.addComment} save={this.save} delete={this.delete}/>
            
          </div>
          </HashRouter>
        );
  }  
}

export default App;
