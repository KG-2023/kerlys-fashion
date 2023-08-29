// Fetch the contents of reviews.html
fetch('/reviews.html')
    .then(response => response.text())
    .then(data => {
        // Insert the contents into the footer element
        document.getElementById('reviews').innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching reviews.html:', error);
    });


$(document).ready(function () {
    $('#card-carousel').carousel({
        interval: 3000 // Set interval to 3 seconds (3000 milliseconds)
    });
});
