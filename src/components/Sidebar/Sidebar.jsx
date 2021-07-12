import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-item'>
        <span className='sidebar-title'>ABOUT ME</span>
        <img
          src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg'
          alt=''
        />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, minima.</p>
      </div>
      <div className='sidebar-item'>
        <span className='sidebar-title'>CATEGORIES</span>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>Life</li>
          <li className='sidebar-list-item'>Music</li>
          <li className='sidebar-list-item'>Style</li>
          <li className='sidebar-list-item'>Sports</li>
          <li className='sidebar-list-item'>Movies</li>
          <li className='sidebar-list-item'>Tech</li>
        </ul>
      </div>
      <div className='sidebar-item'>
        <span className='sidebar-title'>FOLLOW US</span>
        <div className='sidebar-Social'>
          <i className='sidebar-icon fab fa-facebook-square'></i>
          <i className='sidebar-icon fab fa-twitter-square'></i>
          <i className='sidebar-icon fab fa-pinterest-square'></i>
          <i className='sidebar-icon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
}
