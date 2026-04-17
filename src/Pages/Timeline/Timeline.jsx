import React, { useContext, useState } from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { Context } from '../../Context/ContextProvider';
import { MdOutlineTextsms } from 'react-icons/md';
import { IoVideocamOutline } from 'react-icons/io5';
const Timeline = () => {
    const { frindg } = useContext(Context);
    const [filterType, setFilterType] = useState('All');

    const filteredData =filterType === 'All'? frindg : frindg.filter(
                (friend) => friend.actionType === filterType
            );
            // console.log(filteredData);
    return (
        <div className='container py-20 px-5 md:px-10 lg:px-10 xl:px-0'>
            <h1 className='text-5xl font-bold'>Timeline</h1>
            <div className=" flex flex-col md:flex-row items-center justify-between mt-5 gap-5">
                
                <input
                    type="text"
                    placeholder="Call / Text / Video"
                    className="input input-bordered max-w-md my-5"
                    onChange={(e) => {
                        const value = e.target.value;

                        if (
                            value == '' ||
                            value == 'Call' ||
                            value == 'Text' ||
                            value == 'Video'
                        ) {
                            setFilterType(value || 'All');
                        }
                    }}
                />
                <div className="dropdown dropdown-center ">
                    <div tabIndex={0} role="button" className="btn m-1">Filter timeline ⬇ </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => setFilterType('All')}>All</a></li>
                        <li><a onClick={() => setFilterType('Call')}>Call</a></li>
                        <li><a onClick={() => setFilterType('Text')}>Text</a></li>
                        <li><a onClick={() => setFilterType('Video')}>Video</a></li>
                    </ul>
                </div>
                <input type="date" className="input" />
            </div>
            {filteredData.length > 0 ? (
                <div className="">
                    {filteredData.map((friend, index) =>
                        <div key={index} className="flex gap-5 items-center bg-white p-5 rounded-lg shadow-md mt-5">
                            <h3 className="text-xl font-bold">{friend.actionType == 'Call' && <LuPhoneCall />}{friend.actionType == 'Text' && <MdOutlineTextsms />}{friend.actionType == 'Video' && <IoVideocamOutline /> }</h3>
                            <div className="">
                                <h3 className="text-xl font-bold">{friend.actionType} <span className='text-sm'>with</span> <span className='font-normal'>{friend.userData.name}</span></h3>
                                <p className="text-gray-500">{friend.timestamp.toLocaleString()}</p>
                            </div>
                        </div>)}
                </div>
            ) : (
                    <div className="text-center py-10">
                        <h3 className='text-gray-500 text-5xl'>Not Available Data {`${filterType==='All' ? '' : `for ${filterType}`}`}</h3>
                    </div>
                )}
            
        </div>
    );
};

export default Timeline;