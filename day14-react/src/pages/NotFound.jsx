import { Link } from "react-router";

const NotFoundPage = () => {
    return (
      <div>
        <h2>OOPS... Page Not Found</h2>
        <Link to="/">Home</Link>
      </div>
    )
}

export default NotFoundPage;