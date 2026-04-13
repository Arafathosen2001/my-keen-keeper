import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import { FaX, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        
        <footer className="footer gap-5 footer-horizontal footer-center bg-[#244D3F] text-primary-content p-10">
                <aside className='space-y-3'>
                   <h2 className='text-6xl font-bold'>KeenKeeper</h2>
                    <p className="">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>
                    
                </aside>
                <nav>
                    <h3 className='font-semibold text-2xl'>Social Links </h3>
                <div className="grid grid-flow-col gap-4">
                    <a className='bg-white text-xl text-black p-2 rounded-full'>
                        <FaInstagramSquare />
                        </a>
                    <a className='bg-white text-xl text-black p-2 rounded-full'>
                        <FaFacebookSquare />
                        </a>
                    <a className='bg-white text-xl text-black p-2 rounded-full'>
                        <FaXTwitter />
                        </a>
                        
                    </div>
            </nav>
            <div className="container flex justify-between items-center border-t border-gray-50 pt-4">
                <div className="text-sm">© {new Date().getFullYear()} KeenKeeper. All rights reserved.</div>
                <div className="text-sm">Privacy Policy | Terms of Service</div>
            </div>
            </footer>
        
    );
};

export default Footer;