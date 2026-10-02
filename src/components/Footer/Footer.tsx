import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            
            <a
                href="https://github.com/WhoThisPerson/GitHub-Profiles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
            >
                <FaGithub size={28} />
            </a>
        </footer>
    )
}

export default Footer;
