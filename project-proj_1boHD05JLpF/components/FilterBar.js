function FilterBar({ onFilterChange }) {
    try {
        return (
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6" data-name="filter-bar">
                <div className="flex flex-wrap gap-4">
                    <select 
                        className="p-2 border rounded-md" 
                        onChange={(e) => onFilterChange('brand', e.target.value)}
                        data-name="brand-filter"
                    >
                        <option value="">All Brands</option>
                        <option value="Mercedes">Mercedes</option>
                        <option value="BMW">BMW</option>
                        <option value="Porsche">Porsche</option>
                        <option value="Ferrari">Ferrari</option>
                    </select>
                    <select 
                        className="p-2 border rounded-md"
                        onChange={(e) => onFilterChange('price', e.target.value)}
                        data-name="price-filter"
                    >
                        <option value="">All Prices</option>
                        <option value="100000">Under $100,000</option>
                        <option value="200000">Under $200,000</option>
                        <option value="300000">Under $300,000</option>
                    </select>
                </div>
            </div>
        );
    } catch (error) {
        console.error('FilterBar component error:', error);
        reportError(error);
        return null;
    }
}
