import React from 'react';
import Baner from '../../Component/Baner/Baner';
import SummaryCard from '../../Component/SummaryCard/SummaryCard';

const Homepage = () => {
    return (
        <div className='container min-h-screen'>
            <Baner></Baner>
            <SummaryCard></SummaryCard>
        </div>
    );
};

export default Homepage;