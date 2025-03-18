function CarCard({ car }) {
    try {
        return (
            <div className="car-card" data-name="car-card">
                <img src={car.image} alt={car.name} className="car-image" data-name="car-image" />
                <div className="p-4">
                    <h3 className="text-xl font-bold mb-2" data-name="car-name">{car.name}</h3>
                    <p className="text-gray-600 mb-3" data-name="car-description">{car.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="price-tag text-xl" data-name="car-price">${car.price.toLocaleString()}</span>
                        <button className="btn-primary" data-name="details-button">View Details</button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('CarCard component error:', error);
        reportError(error);
        return null;
    }
}
