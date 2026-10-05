import * as GitHubService from '../../services/GitHubService';
interface RepositoryListProps {
    repositories: GitHubService.Repository[];
}

function RepositoryList({ repositories }: RepositoryListProps) {
    return (
        <div>
            {repositories.map((repo, index) => (
                <div key={repo.url}>
                    {index + 1}. <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        {repo.name}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default RepositoryList;
