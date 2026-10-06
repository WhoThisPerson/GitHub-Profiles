import * as GitHubService from '../../services/GitHubService';

import "./RepositoryList.css";
interface RepositoryListProps {
    repositories: GitHubService.Repository[];
}

function RepositoryList({ repositories }: RepositoryListProps) {
    return (
        <div className="repository-list">
            {repositories.map((repo) => (
                <div className="repository-card" key={repo.url}>
                    <a 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        {repo.name}
                    </a>
                    <div className="repository-info">
                        <span className="repository-stars">
                            {repo.stargazersCount} Stars
                        </span>

                        {repo.language && (
                            <span className="repository-language">
                                {repo.language}
                            </span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RepositoryList;
