import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link>  |
            <Link to="/books">Books</Link>
        </div>
    );
};

export default Navbar;