import React from 'react';
import Listing from '../components/Listing';

const Cart = ({ cart, onRemove, onCheckout }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <h2 className="mb-4">Váš nákupní košík</h2>
                {cart.length === 0 ? (
                    <div className="alert alert-info">Košík je prázdný ):</div>
                ) : (
                    <>
                        <div className="list-group shadow-sm mb-4 text-dark">
                            {cart.map(item => (
                                <div key={item.cartId} className="list-group-item">
                                    <Listing
                                        data={item}
                                        actionText="Odstranit"
                                        onAction={() => onRemove(item.cartId)}
                                        variant="danger"
                                        isCompact={true}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="card shadow-sm border-primary mb-4 text-dark">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h4 className="m-0">Celková částka:</h4>
                                <h3 className="text-primary m-0">{total.toLocaleString()} Kč</h3>
                            </div>
                        </div>

                        <div className="d-grid gap-2 mb-5">
                            <button
                                className="btn btn-success btn-lg"
                                onClick={onCheckout}
                            >
                                Dokončit objednávku
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;