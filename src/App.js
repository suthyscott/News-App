import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import axios from 'axios'
import Router from './Router';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      savedArticles: []
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

  render() {
  
    return (
          <HashRouter >
          <div >
            <Router handleSaveArticle={this.handleSaveArticle} savedArticles={this.state.savedArticles}/>
            
          </div>
          </HashRouter>
        );
  }  
}

export default App;
