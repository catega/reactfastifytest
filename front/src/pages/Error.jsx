import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className="error-page">
            <h1>404 page not found</h1>
            <Link to={'/'}>Return to home page</Link>
        </div>
    )
}

export default Error