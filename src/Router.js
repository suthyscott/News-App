import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Feed from './components/Feed/Feed'
import MyArticles from './components/MyNews/MyArticles'

export default class Router extends React.Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' render={(props) => <Feed handleSaveArticle={this.props.handleSaveArticle}/>} />
                <Route path='/myarticles' render={(props) => <MyArticles savedArticles={this.props.savedArticles} addComment={this.props.addComment} save={this.props.save} delete={this.props.delete}/> } />
                
                
            </Switch>
        )
    }
}