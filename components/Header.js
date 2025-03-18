function Header() {
    try {
        return (
            <header className="header py-4" data-name="header">
                <div className="container mx-auto px-4">
                    <nav className="flex items-center justify-between">
                        <div className="logo" data-name="logo">LUXURY CARS</div>
                        <div className="flex items-center space-x-6" data-name="nav-links">
                            <a href="#" className="nav-link" data-name="home-link">Home</a>
                            <a href="#" className="nav-link" data-name="inventory-link">Inventory</a>
                            <a href="#" className="nav-link" data-name="about-link">About</a>
                            <a href="#" className="nav-link" data-name="contact-link">Contact</a>
                            <button className="btn-primary" data-name="contact-button">
                                <i className="fas fa-phone-alt mr-2"></i>
                                Contact Sales
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
