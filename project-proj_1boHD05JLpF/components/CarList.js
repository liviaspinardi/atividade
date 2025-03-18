function CarList({ cars }) {
    try {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-name="car-list">
                {cars.map(car => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
        );
    } catch (error) {
        console.error('CarList component error:', error);
        reportError(error);
        return null;
    }
}
