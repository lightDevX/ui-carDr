import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Link to={'/about'}>About</Link>
            <h3>This is Home</h3>
        </div>
    );
};

export default Home;