import React from 'react';
import Baner from '../../Component/Baner/Baner';
import SummaryCard from '../../Component/SummaryCard/SummaryCard';
import AllFriends from '../../Component/AllFriends/AllFriends';

const Homepage = () => {
    return (
        <div className='container min-h-screen'>
            <Baner></Baner>
            <SummaryCard></SummaryCard>
            <AllFriends></AllFriends>
        </div>
    );
};

export default Homepage;