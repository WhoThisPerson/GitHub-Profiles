import { useState } from "react";

interface UserSearchProps {
    onSearch: (username: string) => void;
}

function UserSearch({ onSearch }: UserSearchProps) {
    return (
        <div>
            User Search Component TBA
        </div>
    )
}

export default UserSearch;
