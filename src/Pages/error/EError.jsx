import React from 'react';
import { Link } from 'react-router';

const EError = () => {
    return (
        <div className='flex items-center justify-center mx-auto py-32 space-y-4'>
            <div className="error-container">
                <h1>404 Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Link to="/" className="btn btn-primary">Go to Home</Link>
            </div>
        </div>
    );
};

export default EError;