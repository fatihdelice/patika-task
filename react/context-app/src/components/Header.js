import { useTheme } from '../context/ThemeContext'

export default function Header() {
    const { theme, setTheme } = useTheme();
    return (
        <div>
            
            Active Theme: {theme}

            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                Change Theme
            </button>
        </div>
    )
}
