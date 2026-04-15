import React from 'react';
import Baner from '../../Component/Baner/Baner';
import SummaryCard from '../../Component/SummaryCard/SummaryCard';
import AllFriends from '../../Component/AllFriends/AllFriends';
import { useLoaderData } from 'react-router';

const Homepage = () => {
    const friendsData = useLoaderData();
    // console.log(friendsData)
    return (
        <div className='container min-h-screen'>
            <Baner></Baner>
            <SummaryCard></SummaryCard>
            <AllFriends friendsData={friendsData}></AllFriends>
        </div>
    );
};

export default Homepage;