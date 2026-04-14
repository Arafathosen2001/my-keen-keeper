import React from 'react';

const SummaryCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-items-center mt-10 text-center border-b-2 border-[#E9E9E9] pb-10'>
            <div className="space-y-4 p-8 bg-white rounded-lg shadow-xl w-full">
                <h3 className="text-xl font-bold">10</h3>
                <p>Total Friends</p>
            </div>
            <div className="space-y-4 p-8 bg-white rounded-lg shadow-md w-full">
                <h3 className="text-xl font-bold">10</h3>
                <p>On Track</p>
            </div>
            <div className="space-y-4 p-8 bg-white rounded-lg shadow-md w-full">
                <h3 className="text-xl font-bold">10</h3>
                <p>Need Attention</p>
            </div>
            <div className="space-y-4 p-8 bg-white rounded-lg shadow-md w-full">
                <h3 className="text-xl font-bold">10</h3>
                <p>Interactions This Month</p>
            </div>
        </div>
    );
};

export default SummaryCard;