const data = [
    {
        _id: '123343545d53dg',
        name: 'Honda Sedan',
        price: '132',
        description: "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags,Transmission: Automatic",
        imageURL: "https://i.ibb.co/54WzQjR/Honda.png",
    },
    {
        _id: '2342143er5343s5',
        name: 'MitoSedan',
        price: '221',
        description: "Vehicle Type: Sedan, Doors: 2, Seats: 2, Luggage: 2 Suitcases / 2 Bags, Transmission: Manual",
        imageURL: "https://i.ibb.co/802Rwsq/Mito.png"
    },
    {
        _id: '6034e34f435754',
        name: 'Isuzu Tacoma',
        price: '105',
        description: "Vehicle Type: Pickup Truck, Doors: 5, Seats: 4, Luggage: 6 Suitcases / 8Bags, Transmission: Manual",
    }
];

const displayCars = cars => {
    const carsContainer = document.getElementById('cars-container');
    cars.forEach(car => {
        carsContainer.innerHTML = `
        <img src="${car.imageURL}">
        <h3>Car Name: ${car.name}</h3>
        <p>Car Detail: ${car.description}</p>
        <button class="btn-price">Car Price: ${car.price}</button>
        `
    })
}

displayCars(data);