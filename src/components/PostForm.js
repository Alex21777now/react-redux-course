import React from 'react'
import {connect} from 'react-redux'
import {createPost} from "../redux/actions"

class PostForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault()

    const {title} = this.state

    if (!title.trim()) {
      return
    }

    const newPost = {
      title, id: Date.now().toString()
    }

    this.props.createPost(newPost)
    this.setState({title: ''})

  }

  changeInputHandler = event => {
      /*event.persists()*/
      this.setState( prev => ({...prev, ...{
        [event.target.name]: event.target.value
      }}))
  }

  render() {
    return (
           <form onSubmit={this.submitHandler}>
             <div className="mb-3">
                  <label htmlFor="title">Заголовок поста</label>
                  <p></p>
                  <input
                     type="text"
                     className="form-control"
                     id="title"
                     value={this.state.title}
                     name="title"
                     onChange={this.changeInputHandler}
                  />
             </div>
             <button className="btn btn-success" type="submit">Создать</button>
             <p></p>
             <p></p>
           </form>
           )
  }
}

const mapDispatchToProps = {
  createPost
}

export default connect(null, mapDispatchToProps)(PostForm)
