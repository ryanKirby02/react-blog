import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className='icons'>
                <i className="nav-icon fab fa-facebook-square"></i>
                <i className="nav-icon fab fa-twitter-square"></i>
                <i className="nav-icon fab fa-pinterest-square"></i>
                <i className="nav-icon fab fa-instagram-square"></i>
            </div>
            <div className="nav-link">
                <ul className='nav-links'>
                    <li className='nav-link-item'>HOME</li>
                    <li className='nav-link-item'>ABOUT</li>
                    <li className='nav-link-item'>CONTACT</li>
                    <li className='nav-link-item'>WRITE</li>
                    <li className='nav-link-item'>LOGOUT</li>
                </ul>
            </div>
            <div className='profile'>
                <img className='profile-image' src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' alt='profile' />
                <i className="search-icon fas fa-search"></i>
            </div>
        </div>
    )
}

