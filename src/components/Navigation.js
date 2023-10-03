import { Link } from "react-router-dom";
function Navigation() {
    return (
        <div className="navigation">
            <h1>BOSCH</h1>
            <div className="navigation-router">
                <Link to="/">
                    <h1>HOME</h1>
                </Link>
                <Link to="/About" >
                    <h1>ABOUT</h1>
                </Link>
                <Link to="/Gallery">
                    <h1>GALLERY</h1>
                </Link>
            </div>
            <h1>2023</h1>
        </div >
    );
}

export default Navigation;
