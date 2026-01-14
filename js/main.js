document.addEventListener("DOMContentLoaded", () => {
    const loadHTML = async (selector, path) => {
        try {
            // In a real server environment, paths starting with '/' are fine.
            // For "Live Server" or local file access, relative paths are safer.
            // This script assumes the structure is run from the root.
            const response = await fetch(path);
            if (!response.ok) throw new Error(`Could not fetch ${path}, status: ${response.status}`);
            const text = await response.text();
            const element = document.querySelector(selector);
            if (element) {
                element.innerHTML = text;
            }
        } catch (error) {
            console.error("Error loading partial HTML:", error);
        }
    };

    // Load header and footer into their respective placeholder elements
    loadHTML('header.main-header', './partials/header.html');
    loadHTML('footer.main-footer', './partials/footer.html');

    
});