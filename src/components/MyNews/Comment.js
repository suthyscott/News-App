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

    edit = () => {
        const {editing} = this.state;
        this.setState({
            editing: !editing
        })
    }

    save = () => {
        const index = this.props.index;
        const newItem = this.state.editInput;
            
        this.props.save(index, newItem)
        this.setState({
            editing: false
    })
    }

    render(){
        return(
            <div className='comment-display'>
                {this.state.editing ? (
                    <article >
                        <input
                        value={this.state.editInput}
                        name="editInput"
                        onChange={e => this.handleInput(e)}
                        
                        />
                        <button onClick={() => this.save(this.props.index, this.state.editInput.newItem)}>Save</button>
                    </article>
                    ) : (
                    <section className='comment-tools'>
                
                        {this.props.element}
                        <button onClick={() => this.props.delete(this.props.index)}>Delete</button>
                        <button onClick={() => this.edit()}>Edit</button>
                    </section>
                )}
            </div>
        )
    }
}