import React from 'react';
import Gravatar from 'react-gravatar';

const Clients = () => {
    return (
        <>
            <p className='pl-4 pt-2 text-md font-bold text-gray-300'>
                Send Again
            </p>
            <div className='client-card m-2 px-2 rounded-lg select-none flex items-center hover:bg-gray-900 cursor-pointer transition-colors duration-100'>
                <div className='img w-8 h-8 rounded-xl overflow-hidden mr-3'>
                    <Gravatar email='raymaxrokzz@gmail.com' />
                </div>
                <div>
                    <p className='font-bold capitalize'>test test</p>
                    <p>test@gmail.com</p>
                </div>
            </div>
            <div className='client-card m-2 px-2 rounded-lg select-none flex items-center hover:bg-gray-900 cursor-pointer transition-colors duration-100'>
                <div className='img w-8 h-8 rounded-xl overflow-hidden mr-3'>
                    <Gravatar email='raymaxrokzz@gmail.com' />
                </div>
                <div>
                    <p className='font-bold capitalize'>test test</p>
                    <p>test@gmail.com</p>
                </div>
            </div>
            <div className='client-card m-2 px-2 rounded-lg select-none flex items-center hover:bg-gray-900 cursor-pointer transition-colors duration-100'>
                <div className='img w-8 h-8 rounded-xl overflow-hidden mr-3'>
                    <Gravatar email='raymaxrokzz@gmail.com' />
                </div>
                <div>
                    <p className='font-bold capitalize'>test test</p>
                    <p>test@gmail.com</p>
                </div>
            </div>
        </>
    );
};

export default Clients;
