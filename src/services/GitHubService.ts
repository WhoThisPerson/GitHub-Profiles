import { Octokit } from "octokit";

export const githubClient = new Octokit();

/**
 * Defines the information about a GitHub user's profile to display
 */
export interface UserProfile {
    avatarUrl: string;
    username: string;
    followers: number;
    repositoryCount: number;
}

/**
 * Defines the repository information to be displayed
 */
export interface Repository {
    name: string;
    url: string;
    stargazersCount: number;
    language: string | null;
}

/**
 * Fetches the profile information for a given GitHub username
 * @param username - The GitHub username to be searched
 * @returns the user's profile data specified in the UserProfile interface
 */
export async function getUserProfile(username: string): Promise<UserProfile> {

    try {
            const response = await githubClient.rest.users.getByUsername({
                username
            });

            return {
                avatarUrl: response.data.avatar_url,
                username: response.data.login,
                followers: response.data.followers,
                repositoryCount: response.data.public_repos
            };

    } catch (error) {
        throw new Error(`Failed to fetch user profile for ${username}`);
    }
}

/**
 * Fetches the repositories for a given GitHub username
 * @param username - The GitHub username to be searched
 * @returns the user's repository data specified in the Repository interface
 */
export async function getUserRepositories(username: string): Promise<Repository[]> {

    try {
        const response = await githubClient.rest.repos.listForUser({
            username,
        });
        
        // Sort repos by top star count and return the top 4
        const repositories = response.data
            .sort((a, b) => (b.stargazers_count ?? 0) - (a.stargazers_count ?? 0))
            .slice(0, 4);

        return repositories.map(repo => ({
            name: repo.name,
            url: repo.html_url,
            stargazersCount: repo.stargazers_count ?? 0,
            language: repo.language ?? null,
        }));

    } catch (error) {
        throw new Error(`Failed to fetch repositories for ${username}`);
    }

}