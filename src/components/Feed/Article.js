// this is supposed to 

import React from 'react'


class Article extends React.Component {
    constructor(){
        super()

        this.state = {
            savedArticles: []
        }
    }

    
    

    render(){
        // console.log(this.props)
        // console.log(this.state.state)
        return(
            <div className='article-box'>

                {this.props.article.title}

                <button onClick={() => this.props.handleSaveArticle(this.props.article)}>Save</button>

                {/* <MyArticles handleSaveArticle={this.handleSaveArticle}/> */}
            </div>
        )
    }
}

export default Article