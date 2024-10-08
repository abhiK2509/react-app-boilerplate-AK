import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div>
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "❎"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/shimmer">Shimmer UI</Link>
          </li>
          <li className="px-4">
            <Link to="/accordion">Accordion</Link>
          </li>
          <li className="px-4">
            <Link to="/comments">Nested Comments</Link>
          </li>
          <li className="px-4">
            <Link to="/image-slider">Image Slider</Link>
          </li>
          <li className="px-4">
            <Link to="/pagination">Pagination</Link>
          </li>
          <li className="px-4">
            <Link to="/live-chat">Live Chat</Link>
          </li>
          <li className="px-4">
            <Link to="/search">Search</Link>
          </li>
          <li className="px-4 font-bold">Cart - ({cartItems.length} Items)</li>
          <li className="px-4">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
