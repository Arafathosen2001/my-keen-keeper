import React from 'react';
import FriendsCard from './FriendsCard';

const AllFriends = ({ friendsData }) => {
    // console.log(typeof friendsData);
    
    return (
        <div className='my-10'>
            <h1 className='text-5xl font-bold mt-10'>Your Friends</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between mt-10">
                {
                    friendsData.map(friend => <FriendsCard key={friend.id} friend={friend} />)
                }
            </div>

        </div>
    );
};

export default AllFriends;