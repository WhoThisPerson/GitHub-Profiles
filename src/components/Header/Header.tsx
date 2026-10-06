import { FaSun, FaMoon } from "react-icons/fa";

import "./Header.css";

interface HeaderProps {
    theme: "light" | "dark";
    onToggleTheme: () => void;
}

function Header({ theme, onToggleTheme }: HeaderProps) {
    return (
        <header>
            <h1>GitHub Profiles</h1>
            <button
                className="theme-button"
                onClick={onToggleTheme}
                aria-label="Toggle Theme"
            >
                {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
            </button>
        </header>
    )
}

export default Header;
