import { useState } from "react";

interface UserSearchProps {
    onSearch: (username: string) => void;
}

function UserSearch({ onSearch }: UserSearchProps) {

    const [username, setUsername] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Enter GitHub username..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={() => onSearch(username)}>Search</button>
        </div>
    )
}

export default UserSearch;
