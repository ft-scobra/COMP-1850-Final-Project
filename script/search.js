// Get references to the search input and article grid
const searchInput = document.getElementById('search-input');
const articleGrid = document.getElementById('character-grid');

// Add an input event listener to the search input
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    // Loop through each article in the grid
    Array.from(articleGrid.children).forEach(article => {
        const articleName = article.getAttribute('data-name').toLowerCase();

        // Check if the article name contains the search term
        if (articleName.startsWith(searchTerm)) {
            article.style.display = 'block'; // Show the article
        } else {
            article.style.display = 'none'; // Hide the article
        }
    });
});

// Sort the articles alphabetically on page load
window.addEventListener('DOMContentLoaded', function () {
    const articles = Array.from(articleGrid.children);
    articles.sort((a, b) => {
        const nameA = a.getAttribute('data-name').toLowerCase();
        const nameB = b.getAttribute('data-name').toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Append the sorted articles back to the grid
    articles.forEach(article => {
        articleGrid.appendChild(article);
    });

    // Display all articles initially
    articles.forEach(article => {
        article.style.display = 'block';
    });
});