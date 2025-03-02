import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(null); // Start as `null` to avoid SSR mismatch
    const [isLoaded, setIsLoaded] = useState(false); // Prevent rendering before theme is loaded

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
        setIsLoaded(true); // Mark as loaded to start rendering
    }, []);

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    // 🛠 Show a loading state until the theme is fully loaded
    if (!isLoaded) {
        return <div className="text-center mt-10">Loading theme...</div>;
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};