// Simulated data (you can replace this with an API request)
const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    // Add more items as needed
];

const itemsPerPage = 5; // Number of items to load per page
let currentPage = 1;

// Function to load and display items
function loadItems() {
    const contentList = document.getElementById('contentList');
    const loadMoreButton = document.getElementById('loadMore');
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < data.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = data[i];
        contentList.appendChild(listItem);
    }

    // Show/hide the "Load More" button
    if (endIndex >= data.length) {
        loadMoreButton.style.display = 'none';
    } else {
        loadMoreButton.style.display = 'block';
    }

    currentPage++;
}

// Load initial items
loadItems();

// Load more items when the "Load More" button is clicked
document.getElementById('loadMore').addEventListener('click', loadItems);
