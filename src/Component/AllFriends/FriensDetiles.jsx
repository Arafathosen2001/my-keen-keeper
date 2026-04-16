import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineSnooze, MdOutlineTextsms } from 'react-icons/md';
import { IoVideocamOutline } from 'react-icons/io5';
import { GoArchive } from 'react-icons/go';
import { AiOutlineDelete } from 'react-icons/ai';
import { Context } from '../../Context/ContextProvider';

const FriensDetiles = () => {
    const { handelButtonClick } = useContext(Context);
    const FriendsId=useParams();
    // console.log(FriendsId);
    const FriensDat = useLoaderData();
    // console.log(FriensDat);
    const friend = FriensDat.find(f => f.id == FriendsId.friendId);   
    // console.log(friend)
    const { picture, name, days_since_contact, status, tags, email, bio, goal, next_due_date } = friend;
    return (
        <div className='container py-20'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 justify-between ">
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
                <div className=" col-span-3">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-items-center text-center '>
                        <div className="space-y-4 p-8 bg-white rounded-lg shadow-xl w-full">
                            <h3 className="text-xl font-bold">{days_since_contact}</h3>
                            <p>Days Since Contact</p>
                        </div>
                        <div className="space-y-4 p-8 bg-white rounded-lg shadow-md w-full">
                            <h3 className="text-xl font-bold">{goal}</h3>
                            <p>Goal (Days)</p>
                        </div>
                        <div className="space-y-4 p-8 bg-white rounded-lg shadow-md w-full">
                            <h3 className="text-xl font-bold">{next_due_date}</h3>
                            <p>Next Due Date</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white col-span-3 p-10 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Relationship Goal</h2>
                        <button className='btn'>Edit</button>
                    </div>
                    <p>Connect every <span className="text-xl font-semibold">{goal} days</span> </p>
                </div>
                <div className="bg-white col-span-2 row-span-1 rounded-lg shadow-md">
                    <div className="flex flex-col gap-3 p-5">
                        <button className='btn'><MdOutlineSnooze />Snooze 2 weeks</button>
                        <button className='btn'><GoArchive />Archive</button>
                        <button className='btn text-red-600'><AiOutlineDelete />Delete</button>
                    </div>
                </div>
                <div className="bg-white col-span-3 p-10 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Quick Check-In</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-items-center text-center mt-5'>
                        <button onClick={() => handelButtonClick(friend,"Call")} className="btn flex flex-col p-8 rounded-lg shadow-md w-full ">
                            <h3 className="text-xl font-bold"><LuPhoneCall /></h3>
                            <p>Call</p>
                        </button>
                        <button onClick={() => handelButtonClick(friend, 'Text')} className="btn flex flex-col p-8 rounded-lg shadow-md w-full ">
                            <h3 className="text-xl font-bold"><MdOutlineTextsms /></h3>
                            <p>Text</p>
                        </button>
                        <button onClick={() => handelButtonClick(friend, 'Video')} className="btn flex flex-col p-8 rounded-lg shadow-md w-full ">
                            <h3 className="text-xl font-bold"><IoVideocamOutline /></h3>
                            <p>Video</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriensDetiles;