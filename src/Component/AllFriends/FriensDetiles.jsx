import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import FriendsCard from './FriendsCard';

const FriensDetiles = () => {
    const FriendsId=useParams();
    console.log(FriendsId);
    const FriensDat = useLoaderData();
    console.log(FriensDat);
    const friend = FriensDat.find(f => f.id == FriendsId.friendId);   
    console.log(friend)
    const { picture, name, days_since_contact, status, tags, email, bio, goal, next_due_date } = friend;
    return (
        <div className='container'>
            <h1>Friend Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 justify-between mt-10">
                <div className=" col-span-2 row-span-2">
                    <div className="space-y-3 text-center bg-white p-5 rounded-lg shadow-xl">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src={picture} alt={name} />
                            </div>
                        </div>
                        <h2 className='font-semibold text-2xl'>{name}</h2>
                        <p ><span className='bg-[#EFAD44] px-3 py-1 rounded-3xl text-white '>{status}</span></p>
                        <p >{tags.map((tag, index) => (
                            <span key={index} className='bg-[#CBFADB] px-3 py-1 rounded-3xl mr-2'>{tag}</span>
                        ))}</p>
                        <p className='text-lg font-bold text-gray-700'>"{bio}"</p>
                        <p className='text-lg font-bold text-gray-700'>Email: {email}</p>
                    </div>
                </div>
                <div className="bg-red-500">Layout</div>
                <div className="bg-red-500">Layout</div>
                <div className="bg-red-500">Layout</div>
                <div className="bg-red-500 col-span-3">Layout</div>
                <div className="bg-red-500 col-span-2 row-span-1">Layout</div>
                <div className="bg-red-500 col-span-3">Layout</div>
            </div>
        </div>
    );
};

export default FriensDetiles;