import React, { useState, useEffect } from "react";
import Search from "./components/search";
import User from "./components/user";

export default function App() {
    const [username, setUsername] = useState();
    const [user, setUserData] = useState(Object);

    useEffect(() => {
        getUser();
    }, [username]);

    const getUser = async () => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const jsonData = await response.json();
        setUserData(jsonData);
    };

    return (
        <div>
            <Search username={username} setUsername={setUsername} />
            <User userData={user} />
        </div>
    );
}
