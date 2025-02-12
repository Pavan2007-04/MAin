document.addEventListener('DOMContentLoaded', () => {
    const buyNowButtons = document.querySelectorAll('.buy-now');

    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('You clicked on Buy Now!');
        });
    });
});
