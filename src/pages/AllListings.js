import React from 'react';
import Listing from '../components/Listing';

const AllListings = ({ products, onAdd }) => {
    return (
        <div>
            <h2 className="mb-4 text-center">Aktuální nabídka</h2>
            <div className="row">
                {products.map(product => (
                    <div key={product.id} className="col-md-4 mb-4">
                        <Listing data={product} actionText="Přidat do košíku" onAction={onAdd} variant="primary" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllListings;