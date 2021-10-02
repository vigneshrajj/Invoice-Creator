import React from 'react';
import { AiOutlineSwapRight } from 'react-icons/ai';
import Gravatar from 'react-gravatar';

const Invoice = () => {
    return (
        <tr>
            <td class='p-2 rounded-l-lg bg-gray-800'>
                <div class='flex align-items-center'>
                    <Gravatar
                        email='test@gmail.com'
                        className='rounded-xl h-12 w-12  object-cover'
                    />
                    <div class='ml-3'>
                        <div class=''>Test User</div>
                        <div class='text-gray-500'>test@gmail.com</div>
                    </div>
                </div>
            </td>
            <td class='p-2 bg-gray-800'>#TE23535645</td>
            <td class='p-2 bg-gray-800 font-bold'>200.00$</td>
            <td class='p-2 bg-gray-800'>
                <span class='bg-red-400 text-gray-50 rounded-md px-2'>
                    cancelled
                </span>
            </td>
            <td class='p-2 rounded-r-lg bg-gray-800'>
                <div className='flex items-center'>
                    <span className='mr-6'>Aug 20, 2021</span>
                    <AiOutlineSwapRight />
                    <span className='mx-3'>Sep 20, 2021</span>
                </div>
            </td>
        </tr>
    );
};

export default Invoice;
