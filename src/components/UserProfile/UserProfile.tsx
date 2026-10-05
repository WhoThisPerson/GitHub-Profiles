import * as GitHubService from '../../services/GitHubService';
interface UserProfileProps {
    user: GitHubService.UserProfile | null;
}

function UserProfile({ user }: UserProfileProps) {

    if (!user) return null;

    return (
        <div>
            <img src={user.avatarUrl} alt={`${user.username}'s avatar`} />
            <h2>{user.username}</h2>
            <p>Followers: {user.followers}</p>
            <p>Repositories: {user.repositoryCount}</p>
        </div>
    )
}

export default UserProfile;
