import React from 'react';
import { AiOutlineSwapRight } from 'react-icons/ai';
import Gravatar from 'react-gravatar';
import moment from 'moment';

const Invoice = (invoice) => {
    const netAmount = (arr) => {
        var price = 0;
        arr.forEach((item) => {
            price += item.qty * item.price;
        });
        return price;
    };

    return (
        <tr>
            <td className='p-2 rounded-l-lg bg-gray-800'>
                <div className='flex align-items-center'>
                    <Gravatar
                        email={invoice.clientEmail}
                        className='rounded-xl h-12 w-12  object-cover'
                    />
                    <div className='ml-3'>
                        <div className='name'>{invoice.clientName}</div>
                        <div className='text-gray-500'>
                            {invoice.clientEmail}
                        </div>
                    </div>
                </div>
            </td>
            <td className='p-2 bg-gray-800'>{`#${invoice.invoiceNo}`}</td>
            <td className='p-2 bg-gray-800 font-bold'>{`₹${
                invoice.productDetails.itemList.length &&
                netAmount(invoice.productDetails.itemList)
            }`}</td>
            <td className='p-2 bg-gray-800'>
                <span className='bg-red-400 text-gray-50 rounded-md px-2'>
                    {invoice.status}
                </span>
            </td>
            <td className='p-2 rounded-r-lg bg-gray-800'>
                <div className='flex items-center'>
                    <span className='mr-6'>
                        {moment(invoice.invoiceDate).format('MMM D, YYYY')}
                    </span>
                    <AiOutlineSwapRight />
                    <span className='mx-3'>
                        {moment(invoice.paymentDue).format('MMM D, YYYY')}
                    </span>
                </div>
            </td>
        </tr>
    );
};

export default Invoice;
