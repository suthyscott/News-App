// this component will get the news articles from Google News API. Stateful, state holds array containing all articles received from API. 

import React from 'react'
import axios from 'axios';
import Article from './Article';
import {Link} from 'react-router-dom'

const config = require('../../Config')

class Feed extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            feed: []
        }
    }

    // this is getting the array of articles from Google API
    componentDidMount(){
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.apiKey}`, )
        .then(res => {
            this.setState({
                feed: res.data.articles
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        let articles = this.state.feed.map((article) => {
            return <Article article={article} handleSaveArticle={this.props.handleSaveArticle}/>
        })
        return(
            <div>
                <section id='header'>
               <Link to='/myarticles'>
                   <button id='my-articles-button'>My Articles</button>
                </Link>
                </section>

                <section className="articles-display">
               {articles}
               </section>
            </div>
        )
    }
}

export default Feed
