interface HeaderProps {
    onToggleTheme: () => void;
}

function Header({ onToggleTheme }: HeaderProps) {
    return (
        <header>
            <h1>GitHub Profiles</h1>
            <button onClick={onToggleTheme}>Toggle Theme</button>
        </header>
    )
}

export default Header;
