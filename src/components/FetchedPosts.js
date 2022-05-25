import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Post from './Post'
import {fetchPosts} from '../redux/actions'

export default () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.FetchedPosts)

  if (!posts.lenght) {
    return <button
     className="btn btn-primary"
     onClick={() => dispatch(fetchPosts())}
     >Загрузить</button>
  }
return posts.map(post => <Post post={post} key={post.id} />)
}

/*const gettingKurs1 = useDispatch()
const posts = useSelector(state => state.posts.FetchedPosts)


class FetchedPosts extends React.Component {



gettingKurs1 = async (e1) => {
  e1.preventDefault();
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const json = await response.json()
  dispatch({ type: FETCH_POSTS, payload: json })
  }


  render() {

    if (!posts.lenght) {
      return(
             <button
              className="btn btn-primary"
              onClick={() => dispatch(gettingKurs1)}
            >Загрузить</button>
           )
    }

     return posts.map(post => <Post post={post} key={post.id} />)

         }
}

export default FetchedPosts;*/
