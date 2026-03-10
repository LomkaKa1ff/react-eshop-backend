import React, { useState } from 'react';
import AllListings from './pages/AllListings';
import Cart from './pages/Cart';

const INITIAL_PRODUCTS = [
    {
        id: 1,
        name: "Marek párek",
        price: 9300,
        description: "Marek Párek sigma edice + bonus.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/marek_sigma.png?raw=true"
    },
    {
        id: 2,
        name: "Jirka Sirka",
        price: 11400,
        description: "Jirka Sirka bodygurad (Tri poloski edice)",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/image-removebg-preview.png?raw=true"
    },
    {
        id: 2,
        name: "Radek Zadek",
        price: 6700,
        description: "Radek Zadek veselá edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/1f61d2f3-7248-42e9-b937-a11af14291aa.jpg?raw=true"
    },
    {
        id: 2,
        name: "Kryštof Kacko896",
        price: 4600,
        description: "Kryštof Kacko896 usměvavá edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/5769480464539258059.jpg?raw=true"
    },
    {
        id: 2,
        name: "Kryštof Sneaky",
        price: 5900,
        description: "Kryštof Kacko896 sneaky scary edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/644244057_1583223589456776_3629360482997066314.png?raw=true"
    },
    {
        id: 2,
        name: "Kryštof Girl",
        price: 8600,
        description: "Kryštof Kacko896 dancing girl edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/ezgif-440294bb41ae5a74.gif?raw=true"
    },
    {
        id: 2,
        name: "Jirka Sirka Edit",
        price: 8600,
        description: "Jirka Sirka in edit edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/ezgif-7ca160c9209e73f9.gif?raw=true"
    },
    {
        id: 2,
        name: "Hopon CS2",
        price: 146800,
        description: "Hopon CS2 Kirill edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/Snimek_obrazovky_2026-01-29_2049081.png?raw=true"
    },
    {
        id: 2,
        name: "Krystof Babuška",
        price: 9,
        description: "Krystof Kacko896 babuška edice.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/638353584_1539286540475457_2549927676765281952_n.jpg?raw=true"
    },
    {
        id: 2,
        name: "CS2 Retardi - Full Video",
        price: 58000,
        description: "CS2 Retardi - Full Video. feat Kodytek.",
        image: "https://github.com/LomkaKa1ff/Funny-Gifs/blob/main/mS6sM3lSEF4-MQ.jpg?raw=true"
    },
];

function App() {
    const [products] = useState(INITIAL_PRODUCTS);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState('products');
    const [isFinished, setIsFinished] = useState(false)
    
    const handleCheckout = () => {
        setIsFinished(true);
    };

    if (isFinished) {
        return (
            <div className="vw-100 vh-100 d-flex justify-content-center align-items-center bg-white">
                <img
                    src="/JobApplicationPrank.jpeg"
                    className="img-fluid"
                    style={{ cursor: 'pointer', maxWidth: '100%' }}
                    onClick={() => { setIsFinished(false); setCurrentPage('products'); setCart([]); }}
                />
            </div>
        );
    }

    const addToCart = (product) => {
        setCart([...cart, { ...product, cartId: Date.now() }]);
    };

    const removeFromCart = (cartId) => {
        setCart(cart.filter(item => item.cartId !== cartId));
    };

    return (
        <div className="bg-light min-vh-100 d-flex flex-column">
            <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
                <div className="container">
                    <a
                        className="navbar-brand"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage('products');
                        }}
                    >
                        Kupto.cz
                    </a>
                    <div className="navbar-nav">
                        <button className={`nav-link btn btn-link ${currentPage === 'products' ? 'active' : ''}`}
                                onClick={() => setCurrentPage('products')}>Produkty
                        </button>
                        <button
                            className={`nav-link btn btn-link d-flex align-items-center ${currentPage === 'cart' ? 'active' : ''}`}
                            onClick={() => setCurrentPage('cart')}
                            style={{border: 'none', background: 'none'}}
                        >
                            <img
                                src="/ShoppingCart.png"
                                style={{width: '24px', height: '24px', marginRight: '8px'}}
                            />

                            Košík
                            <span className="badge bg-primary ms-2">{cart.length}</span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container flex-grow-1">
                {currentPage === 'products' ? (
                    <AllListings products={products} onAdd={addToCart}/>
                ) : (
                    <Cart cart={cart} onRemove={removeFromCart} onCheckout={handleCheckout}/>
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