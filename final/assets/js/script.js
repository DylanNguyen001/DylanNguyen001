// Your JavaScript code for interactive features will go here
// Feel free to use jQuery if you prefer
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        arrows: false
    });
});

$(document).ready(function(){
    // Sample car data (replace this with your actual data)
    const cars = [
        { make: 'toyota', model: 'AE86', image: 'ae86.jpg' },
        { make: 'nissan', model: 'S13', image: 's13.jpg' },
        // Add more car data as needed
    ];

    // Function to filter and display cars
    function displayCars(make) {
        const filteredCars = make === 'all' ? cars : cars.filter(car => car.make === make);
        const carContainer = $('.cars');
        carContainer.empty();
        filteredCars.forEach(car => {
            carContainer.append(`<div class="car"><img src="${car.image}" alt="${car.model}"></div>`);
        });
    }

    // Event listener for filter change
    $('#make-filter').change(function(){
        const selectedMake = $(this).val();
        displayCars(selectedMake);
    });

    // Initial display of all cars
    displayCars('all');
});
