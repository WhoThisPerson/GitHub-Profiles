import { FaGithub } from "react-icons/fa";

import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            
            <a
                href="https://github.com/WhoThisPerson/GitHub-Profiles"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
            >
                <FaGithub size={28} />
            </a>
        </div>
    )
}

export default Footer;
