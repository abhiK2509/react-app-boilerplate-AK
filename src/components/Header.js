import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div>
                <ul className="flex">
                    <li>
                        Online Status: {onlineStatus ? "✅" : "❎"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;