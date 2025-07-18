import { NavLink, Outlet } from "react-router-dom"


const AppHeader = () => {

    const navList = [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Libri',
            url: '/books'
        },

    ];


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        My Books
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {navList.map((curLink, index) => (
                                <li className="nav-item" key={index}>
                                    <NavLink
                                        className = 'nav-link'
                                        
                                        to={curLink.url}>
                                        {curLink.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AppHeader;
