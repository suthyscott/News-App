// this component will get the news articles from Google News API. Stateful, state holds array containing all articles received from API. 

import React from 'react'
import axios from 'axios';
import Article from './Article';
import {Link} from 'react-router-dom'

class Feed extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            feed: []
        }
    }

    // this is getting the array of articles from Google API
    componentDidMount(){
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3a0d4ebfb4fa4a7bb1fe6f3b60d5ff13', )
        .then(res => {
            this.setState({
                feed: res.data.articles
            })
            console.log(typeof this.state.feed)
            console.log(this.state.feed)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        console.log(this.state.feed)
        console.log(this.props)
        // this is mapping over every element in our array, calling each one article and sending it to the component Article through props.

        // COMMENT OUT BELOW TO GET ALL NEWS ARTICLES.
        let article = this.state.feed.slice(0, 1)
        let articles = article.map((article) => {
            return <Article article={article} handleSaveArticle={this.props.handleSaveArticle}/>
        })

        // UNCOMMENT BELOW TO GET ALL NEWS ARTICLES

        // let articles = this.state.feed.map((article) => {
        //     return <Article article={article}/>
        // })
        return(
            <div>
               {articles}
               <Link to='/myarticles'>My Articles</Link>
            </div>
        )
    }
}

export default Feed
