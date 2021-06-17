import Menu from '../complements/menu/Menu';
import Posts from '../posts/post';
import Contact from '../contact/Contact';

export default function Layout() {
    return (
      <>
        <Menu/>

        <div className="image-cover">
          <img src="logo.svg"></img>
          <p>DazzBlog</p>
        </div>

        <Posts/>

        <Contact/>

      </>
    )
}
  