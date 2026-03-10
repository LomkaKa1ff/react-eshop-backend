import React from 'react';
import BazarControlls from './BazarControlls';

const Listing = ({ data, actionText, onAction, variant, isCompact }) => {
    if (isCompact) {
        return (
            <div className="d-flex justify-content-between align-items-center w-100">
                <div className="d-flex align-items-center text-start">
                    {data.image && (
                        <img
                            src={data.image}
                            alt={data.name}
                            className="me-3 rounded border"
                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                    )}
                    <div>
                        <span className="fw-bold d-block">{data.name}</span>
                        {data.description && (
                            <span className="text-muted small d-block">{data.description}</span>
                        )}
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <span className="me-3 text-nowrap">{data.price} Kč</span>
                    <BazarControlls label={actionText} onBtnClick={() => onAction(data)} variant={variant} />
                </div>
            </div>
        );
    }

    return (
        <div className="card h-100 shadow-sm text-center">
            {data.image && (
                <img
                    src={data.image}
                    className="card-img-top"
                    alt={data.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                />
            )}
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{data.name}</h5>

                {data.description && (
                    <p className="card-text text-secondary mb-3">{data.description}</p>
                )}

                <p className="card-text text-dark fw-bold mt-auto">{data.price} Kč</p>
                <div className="mt-2">
                    <BazarControlls label={actionText} onBtnClick={() => onAction(data)} variant={variant} />
                </div>
            </div>
        </div>
    );
};

export default Listing;