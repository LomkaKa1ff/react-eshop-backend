import React, { useState, useEffect } from 'react';
import AllListings from './pages/AllListings';
import Cart from './pages/Cart';

function App() {
    const [products, setProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [currentPage, setCurrentPage] = useState('products');
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3002/api/listings")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Nelze načíst produkty", err));

        updateCartCount();
    }, []);

    const updateCartCount = () => {
        fetch("http://localhost:3002/api/cart")
            .then(res => res.json())
            .then(data => setCartCount(data.length));
    };

    const addToCart = (product) => {
        fetch("http://localhost:3002/api/cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        })
            .then(() => {
                updateCartCount();
            });
    };

    const handleCheckout = () => {
        fetch("http://localhost:3002/api/cart", { method: "DELETE" })
            .then(() => {
                setIsFinished(true);
                setCartCount(0);
            });
    };

    if (isFinished) {
        return (
            <div className="vw-100 vh-100 d-flex justify-content-center align-items-center bg-white">
                <img
                    src="/JobApplicationPrank.jpeg"
                    className="img-fluid"
                    style={{ cursor: 'pointer', maxWidth: '100%' }}
                    onClick={() => { setIsFinished(false); setCurrentPage('products'); }}
                />
            </div>
        );
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
                <div className="container">
                    <button className="navbar-brand btn btn-link text-decoration-none" onClick={() => setCurrentPage('products')}>
                        Kupto.cz
                    </button>
                    <div className="navbar-nav">
                        <button className={`nav-link btn btn-link ${currentPage === 'products' ? 'active' : ''}`}
                                onClick={() => setCurrentPage('products')}>Produkty</button>
                        <button className={`nav-link btn btn-link d-flex align-items-center ${currentPage === 'cart' ? 'active' : ''}`}
                                onClick={() => setCurrentPage('cart')}>
                            Košík <span className="badge bg-primary ms-2">{cartCount}</span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container flex-grow-1">
                {currentPage === 'products' ? (
                    <AllListings products={products} onAdd={addToCart}/>
                ) : (
                    <Cart onCheckout={handleCheckout} onActionSuccess={updateCartCount}/>
                )}
            </div>

            <footer className="bg-dark text-light py-4 mt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 text-center text-md-start">
                            <h5 className="mb-1">Kupto.cz</h5>
                            <p className="text-muted small mb-0 text-white-50">Kup to, co potřebuješ.</p>
                        </div>
                        <div className="col-md-4 text-center my-3 my-md-0">
                            <span
                                className="text-muted small text-white-50">© 2026 Všechna práva vyhrazena</span>
                        </div>
                        <div className="col-md-4 text-center text-md-end">
                            <a href="#" className="text-light text-decoration-none me-3 small">Home</a>
                            <a href="#" className="text-light text-decoration-none small">Kontakty</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;