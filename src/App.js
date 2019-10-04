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
    axios.post('/api/savedList', article) .then(res => {
        this.setState({
            savedArticles: res.data
        })
    })
}

  render() {
  
    return (
          <HashRouter >
          <div >
            <Router handleSaveArticle={this.handleSaveArticle}/>
            
          </div>
          </HashRouter>
        );
  }  
}

export default App;
