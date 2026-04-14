import React from 'react';

const AllFriends = () => {
    return (
        <div className='my-10'>
            <h1 className='text-5xl font-bold mt-10'>Your Friends</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between mt-10">
                <div className="space-y-2 text-center bg-white p-5 rounded-lg shadow-xl">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                    </div>
                    <h2 className='font-semibold text-2xl'>David Kim</h2>
                    <p>62d ago</p>
                    <p ><span className='bg-[#CBFADB] px-3 py-1 rounded-3xl'>WoRK</span></p>
                    <p ><span className='bg-[#EFAD44] px-3 py-1 rounded-3xl text-white'>Almost Due</span></p>
                </div>
                <div className="space-y-2 text-center bg-white p-5 rounded-lg shadow-xl">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                    </div>
                    <h2 className='font-semibold text-2xl'>David Kim</h2>
                    <p>62d ago</p>
                    <p ><span className='bg-[#CBFADB] px-3 py-1 rounded-3xl'>WoRK</span></p>
                    <p ><span className='bg-[#EFAD44] px-3 py-1 rounded-3xl text-white'>Almost Due</span></p>
                </div>
                <div className="space-y-2 text-center bg-white p-5 rounded-lg shadow-xl">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                    </div>
                    <h2 className='font-semibold text-2xl'>David Kim</h2>
                    <p>62d ago</p>
                    <p ><span className='bg-[#CBFADB] px-3 py-1 rounded-3xl'>WoRK</span></p>
                    <p ><span className='bg-[#EFAD44] px-3 py-1 rounded-3xl text-white'>Almost Due</span></p>
                </div>
                <div className="space-y-2 text-center bg-white p-5 rounded-lg shadow-xl">
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                        </div>
                    </div>
                    <h2 className='font-semibold text-2xl'>David Kim</h2>
                    <p>62d ago</p>
                    <p ><span className='bg-[#CBFADB] px-3 py-1 rounded-3xl'>WoRK</span></p>
                    <p ><span className='bg-[#EFAD44] px-3 py-1 rounded-3xl text-white'>Almost Due</span></p>
                </div>
            </div>

        </div>
    );
};

export default AllFriends;