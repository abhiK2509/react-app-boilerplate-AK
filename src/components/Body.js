import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) return <h1>Looks like you're offline!! Please check your internet.</h1>
    
    return (
        <div>
            <h1>Body</h1>
        </div>
    );
};

export default Body;