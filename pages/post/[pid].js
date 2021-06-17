import Post from '../../modules/post/Post'
import DefaultErrorPage from 'next/error'

const Details = ({ data, posts }) => {

    if (!Object.keys(data).length) {
      return <DefaultErrorPage statusCode={404} />
    }

    return <Post data={data} posts={posts}/>
}

Details.getInitialProps = async ({ query }) => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + query.pid);
    const res2 = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    try {
      const json = await res.json();
      const json2 = await res2.json();
      
      return {data: json, posts: json2}
  
    } catch(error) {
  
      return {data: undefined}
  
    }
}

export default Details;