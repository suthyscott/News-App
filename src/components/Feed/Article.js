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
            <div id='feed-display'>
                <div className='article-box-feed'>

                    {this.props.article.title}

                    <section className='save-button'>                
                    <button onClick={() => this.props.handleSaveArticle(this.props.article)}
                    id='specific-save-button'>Save</button>
                    </section> 
                </div>
            </div>
        )
    }
}

export default Article