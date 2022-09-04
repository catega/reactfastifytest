import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/p'}>Posts</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}

export default Layout