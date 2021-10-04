import React, { useRef, useState } from 'react';
import { FaDotCircle } from 'react-icons/fa';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';

const ModalForm = ({ page }) => {
    const invoiceDateRef = useRef();
    const dueDateRef = useRef();
    const [productName, setProductName] = useState('test');

    switch (page) {
        case 1:
            return (
                <div className='form mx-2'>
                    <input
                        type='text'
                        placeholder='Street Address'
                        class='bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full'
                    />
                    <input
                        type='text'
                        placeholder='City'
                        class='bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full'
                    />
                    <div className='flex justify-between'>
                        <input
                            type='text'
                            placeholder='Zip Code'
                            class='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2'
                        />
                        <input
                            type='text'
                            placeholder='Country'
                            class='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2'
                        />
                    </div>
                </div>
            );
        case 2:
            return (
                <div className='form mx-2'>
                    <div className='flex justify-between mb-5'>
                        <input
                            type='text'
                            placeholder='Client Name'
                            class='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2'
                        />
                        <input
                            type='text'
                            placeholder='Client Email'
                            class='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2'
                        />
                    </div>
                    <input
                        type='text'
                        placeholder='Street Address'
                        class='bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full'
                    />
                    <input
                        type='text'
                        placeholder='City'
                        class='bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full'
                    />
                    <div className='flex justify-between'>
                        <input
                            type='text'
                            placeholder='Zip Code'
                            class='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2'
                        />
                        <input
                            type='text'
                            placeholder='Country'
                            class='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2'
                        />
                    </div>
                </div>
            );
        case 3:
            return (
                <div className='form mx-2'>
                    <div className='flex justify-between'>
                        <input
                            type='text'
                            ref={invoiceDateRef}
                            onFocus={() =>
                                (invoiceDateRef.current.type = 'date')
                            }
                            onBlue={() =>
                                (invoiceDateRef.current.type = 'text')
                            }
                            placeholder='Invoice date'
                            class='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2'
                        />
                        <input
                            type='text'
                            ref={dueDateRef}
                            onFocus={() => (dueDateRef.current.type = 'date')}
                            onBlue={() => (dueDateRef.current.type = 'text')}
                            placeholder='Payment due date'
                            class='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2'
                        />
                    </div>
                    <div className='flex mt-5'>
                        <button class='w-24 py-1 flex justify-center items-center rounded-full text-white bg-red-500 hover:bg-red-600 duration-100 text-sm font-bold mr-3 pr-1'>
                            <IoIosCloseCircle size={20} className='mr-3' />
                            Overdue
                        </button>

                        <button class='w-24 py-1 flex justify-center items-center rounded-full text-white bg-yellow-500 hover:bg-yellow-600 duration-100 text-sm font-bold mr-3 pr-1'>
                            <FaDotCircle size={18} className='mr-3' />
                            Pending
                        </button>

                        <button class='w-20 py-1 flex justify-center items-center rounded-full text-white bg-green-500 hover:bg-green-600 duration-100 text-sm font-bold mr-3 pr-2'>
                            <IoIosCheckmarkCircle size={20} className='mr-3' />
                            Paid
                        </button>
                    </div>
                </div>
            );
        default:
            return (
                <div className='form mx-2 overflow-y-scroll max-h-60'>
                    <textarea
                        name='description'
                        placeholder='Product Description'
                        row={2}
                        class='bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full resize-none'
                    />
                    <p className='text-gray-300 text-sm mb-2'>Products</p>
                    <div className='flex justify-between'>
                        <input
                            type='text'
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            placeholder='Item Name'
                            class='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2'
                        />
                        <div class='flex flex-row items-center relative bg-gray-700 rounded-lg border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mx-2 text-gray-400'>
                            <button class='font-semibold hover:bg-gray-900 transition-colors duration-100 h-full w-10 flex rounded-l-lg focus:outline-none cursor-pointer'>
                                <span class='m-auto'>-</span>
                            </button>
                            <div className='qty mx-auto'>0</div>

                            <button class='font-semibold hover:bg-gray-900 transition-colors duration-100 h-full w-10 flex rounded-r-lg focus:outline-none cursor-pointer'>
                                <span class='m-auto'>+</span>
                            </button>
                        </div>
                        <input
                            type='text'
                            placeholder='Price'
                            class='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2'
                        />
                    </div>
                    <button className='add-items w-12 h-12 rounded-full bg-gray-900 flex justify-center items-center text-4xl text-gray-400 mx-auto mt-3'>
                        +
                    </button>
                </div>
            );
    }
};

export default ModalForm;
