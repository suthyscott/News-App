import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(props){
        super(props)

        this.state = {
            editing: false,
            editInput: ''
        }
    }

    handleInput = e => {
        const {name, value } = e.target;
        this.setState({ [name]: value })
    }

    // Does this function need to be connected to this.props.element somehow?
    edit = () => {
        const {editing} = this.state;
        this.setState({
            editing: !editing,
            editInput: ''
        })
    }

    save = (title, newItem, id) => {
            
        this.props.save(title, newItem, id)
        this.setState({
            editing: false,
            editInput: ''
    })
    }

    render(){
        console.log(this.props.element)
        return(
            <div className='comment-display'>
                {this.state.editing ? (
                    <article >
                        <input
                        value={this.state.editInput}
                        name="editInput"
                        onChange={e => this.handleInput(e)}                        
                        />
                        <button onClick={() => this.save(this.props.title, this.state.editInput, this.props.element.id)}>Save</button>
                    </article>
                    ) : (
                    <section className='comment-tools'>
                
                        {this.props.element.comment}
                        <button onClick={() => this.props.delete(this.props.title, this.props.element.id)}>Delete</button>
                        <button onClick={() => this.edit()}>Edit</button>
                    </section>
                )}
            </div>
        )
    }
}