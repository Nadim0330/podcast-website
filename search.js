document.getElementById("search-button").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input").value;
    const searchResults = document.querySelector(".search-results");

    // Clear previous search results
    searchResults.innerHTML = "";

    // Check if the search input is not empty
    if (searchInput.trim() !== "") {
        // Dummy content for search results (replace with actual search logic)
        const dummyContent = `
            <h2>Search Results for: ${searchInput}</h2>
            <ul>
                <li>Episode 1: Mahabharat</li>
                <li>Episode 2: Title of Episode 2</li>
                <li>Episode 3: Title of Episode 3</li>
            </ul>
        `;
        searchResults.innerHTML = dummyContent;
    }

    // Display the search results
    searchResults.style.display = "block";
});
