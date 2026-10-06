import * as GitHubService from '../../services/GitHubService';

import "./UserProfile.css";
interface UserProfileProps {
    user: GitHubService.UserProfile | null;
}

function UserProfile({ user }: UserProfileProps) {

    if (!user) return null;

    return (
        <div className="user-profile">
            <img src={user.avatarUrl} alt={`${user.username}'s avatar`} />
            <h2>{user.username}</h2>
            <p>Followers: {user.followers}</p>
            <p>Repositories: {user.repositoryCount}</p>
        </div>
    )
}

export default UserProfile;
