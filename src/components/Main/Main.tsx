import { useState } from "react";

import UserSearch from "../UserSearch/UserSearch";
import UserProfile from "../UserProfile/UserProfile";
import RepositoryList from "../RepositoryList/RepositoryList";
import * as GitHubService from "../../services/GitHubService";

/**
 * Acts as the main component for the application, managing state and rendering child components.
 */
function Main() {
    const [userProfile, setUserProfile] = useState<GitHubService.UserProfile | null>(null);
    const [userRepositories, setUserRepositories] = useState<GitHubService.Repository[]>([]);
    const [error, setError] = useState<string | null>(null);

    async function handleSearchUser(username: string) {
        setError(null);

        try {

            const userProfileData = await GitHubService.getUserProfile(username);
            const userRepositoriesData = await GitHubService.getUserRepositories(username);

            setUserProfile(userProfileData);
            setUserRepositories(userRepositoriesData);

        } catch (error) {
            console.error(error);
            setUserProfile(null);
            setUserRepositories([]);
            setError("Unable to find that GitHub User");
        }
    }

    return (
        <>
            <UserSearch onSearch={handleSearchUser} />

            {error && (
                <div role="alert">
                    {error}
                </div>
            )}
            <UserProfile user={userProfile} />
            <RepositoryList repositories={userRepositories} />
        </>
    );
}

export default Main;
