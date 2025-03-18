function Hero() {
    try {
        return (
            <section className="relative h-[600px] bg-black" data-name="hero-section">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-50"></div>
                <div className="relative container mx-auto px-4 h-full flex items-center">
                    <div className="max-w-2xl text-white" data-name="hero-content">
                        <h1 className="text-5xl font-bold mb-6" data-name="hero-title">
                            Experience Automotive Excellence
                        </h1>
                        <p className="text-xl mb-8" data-name="hero-description">
                            Discover our collection of the world's finest luxury vehicles
                        </p>
                        <button className="btn-primary text-lg" data-name="explore-button">
                            Explore Our Collection
                        </button>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
