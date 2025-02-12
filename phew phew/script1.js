function sortProducts() {
    const productsContainer = document.getElementById('products-container');
    const sortOption = document.getElementById('sort').value;
    
    const products = Array.from(productsContainer.getElementsByClassName('product'));

    // Sort products by price or rating based on selected option
    if (sortOption === "price-asc") {
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
            return priceA - priceB;
        });
    } else if (sortOption === "price-desc") {
        products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
            const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
            return priceB - priceA;
        });
    } else if (sortOption === "rating") {
        // Example for sorting by rating (if data available)
        products.sort((a, b) => {
            const ratingA = parseFloat(a.getAttribute('data-rating') || '0');
            const ratingB = parseFloat(b.getAttribute('data-rating') || '0');
            return ratingB - ratingA; // highest rating first
        });
    }

    // Re-attach sorted products to the container
    products.forEach(product => productsContainer.appendChild(product));
}