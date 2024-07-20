import { useDispatch } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

const Body = () => {
    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) return <h1>Looks like you're offline!! Please check your internet.</h1>

    const dispatch = useDispatch();
    const handleItems = (actionType) => {
        switch (actionType) {
            case "Add":
                dispatch(addItem(1));
                break;
            case "Subtract":
                dispatch(removeItem());
                break;
            case "Clear":
                dispatch(clearCart());
                break;
        }
    };

    return (
        <div>
            <h1 className="text-center font-bold">Body</h1>
            <div className="flex text-center items-center">
                <button className="font-semibold px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => handleItems('Subtract')}>-</button>
                <span className="font-semibold">Cart Counter</span>
                <button className="font-semibold px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => handleItems('Add')}>+</button>
            </div>
            <div className="flex text-center items-center">
                <button className="font-semibold px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => handleItems('Clear')}>Clear Cart</button>
            </div>
        </div>
    );
};

export default Body;