import React from 'react';
import { Link } from 'react-router';
import { Context } from '../../Context/ContextProvider';

const FriendsCard = ({ friend }) => {
    const { picture, name, days_since_contact, status, tags } = friend;
    return (
        
            <Link to={`/friends/${friend.id}`} className="space-y-3 text-center bg-white p-5 rounded-lg shadow-xl">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                    <img src={picture} alt={name} />
                </div>
                </div>
                <h2 className='font-semibold text-2xl'>{name}</h2>
                <p>{days_since_contact}d ago</p>
            <p >{tags.map((tag,index) => (
                <span key={index} className='bg-[#CBFADB] px-3 py-1 rounded-3xl mr-2'>{tag}</span>
            ))}</p>
                <p ><span className='bg-[#EFAD44] px-3 py-1 rounded-3xl text-white '>{status}</span></p>
            </Link>
            

    );
};

export default FriendsCard;