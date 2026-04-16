import React, { useContext } from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { Context } from '../../Context/ContextProvider';
import { MdOutlineTextsms } from 'react-icons/md';
import { IoVideocamOutline } from 'react-icons/io5';
const Timeline = () => {
    const { frindg } = useContext(Context);
    console.log(frindg);
    return (
        <div className='container py-20'>
            <h1 className='text-5xl font-bold'>Timeline {frindg.length}</h1>
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Filter timeline ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            {frindg.length > 0 ? (
                <div className="">
                    {frindg.map((friend, index) =>
                        <div key={index} className="flex gap-5 items-center bg-white p-5 rounded-lg shadow-md mt-5">
                            <h3 className="text-xl font-bold">{friend.actionType == 'Call' && <LuPhoneCall />}{friend.actionType == 'Text' && <MdOutlineTextsms />}{friend.actionType == 'Video' && <IoVideocamOutline /> }</h3>
                            <div className="">
                                <h3 className="text-xl font-bold">{friend.userData?.name || 'Unknown'}</h3>
                                <p className="text-gray-500">{friend.timestamp?.toLocaleString() || 'Unknown'}</p>
                            </div>
                        </div>)}
                </div>
            ) : (
                    <div className="text-center py-10">
                        <h3 className='text-gray-500 text-5xl'>No recent interactions to show</h3>
                    </div>
                )}
            
        </div>
    );
};

export default Timeline;