import { useState } from "react";

import "./UserSearch.css";

interface UserSearchProps {
    onSearch: (username: string) => void;
}

function UserSearch({ onSearch }: UserSearchProps) {

    const [username, setUsername] = useState("");

    return (
        <form 
            className="user-search"
            onSubmit={(event) => {
                event.preventDefault();
                onSearch(username);
            }}
        >
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />

            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default UserSearch;
