import React from 'react';

const BazarControlls = ({ label, onBtnClick, variant = "primary" }) => {
    return (
        <button
            onClick={onBtnClick}
            className={`btn btn-${variant} btn-sm`}
        >
            {label}
        </button>
    );
};

export default BazarControlls;