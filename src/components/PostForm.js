import React from 'react'

export default class PostForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  submitHandler = event => {
    event.preventDefault()
  }

  render() {
    return (
           <form onSubmit={this.submitHandler}>
             <div className="mb-3">
                  <label htmlFor="title">Заголовок поста</label>
                  <p></p>
                  <input type="text" className="form-control" id="title" />
             </div>
             <button className="btn btn-success" type="submit">Создать</button>
             <p></p>
             <p></p>
           </form>
           )
  }
}
