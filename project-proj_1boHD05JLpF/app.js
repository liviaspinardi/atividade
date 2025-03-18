function App() {
    try {
        const [filteredCars, setFilteredCars] = React.useState(cars);
        const [filters, setFilters] = React.useState({ brand: '', price: '' });

        const handleFilterChange = (filterType, value) => {
            const newFilters = { ...filters, [filterType]: value };
            setFilters(newFilters);

            let filtered = [...cars];
            if (newFilters.brand) {
                filtered = filtered.filter(car => car.brand === newFilters.brand);
            }
            if (newFilters.price) {
                filtered = filtered.filter(car => car.price <= parseInt(newFilters.price));
            }
            setFilteredCars(filtered);
        };

        return (
            <div data-name="app">
                <Header />
                <Hero />
                <main className="container mx-auto px-4 py-12" data-name="main-content">
                    <h2 className="text-3xl font-bold mb-8 text-center" data-name="featured-heading">
                        Featured Vehicles
                    </h2>
                    <FilterBar onFilterChange={handleFilterChange} />
                    <CarList cars={filteredCars} />
                </main>
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
