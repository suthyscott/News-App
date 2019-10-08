import React, {Component} from 'react';
import axios from 'axios';

class MyArticle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editing: false,
            editInput: props.element
        }
    }

    handleInput = e => {
        const {name, value } = e.target;
        this.setState({ [name]: value })
    }

    edit = () => {
        const {editing} = this.state;
        this.setState({
            editing: !editing
        })
    }

    save = () => {
        const index = this.props.index;
        const newItem = this.state.editInput;

        axios
            .put('/api/savedList', {index, newItem})
            .then(res => this.props.updateState(res.data))

            // console.log(res.data)

        this.setState({
            editing: false
        })
    }

    render(){
        console.log('hit render')
        return(
            <div>


        {this.state.editing ? (
          <article >
            <input
              value={this.state.editInput}
              name="editInput"
              onChange={e => this.handleInput(e)}
              
            />
            <button onClick={() => this.save()}>Save</button>
          </article>
        ) : (
          <section className='comment-tools'>
    
            {this.props.element.comment}
            <button onClick={() => this.props.delete(this.props.index)}>Delete</button>
            <button onClick={() => this.edit()}>EDIT</button>
          </section>
        )}
      </div>
        )
    }

}

export default MyArticle