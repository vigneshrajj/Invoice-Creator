import React, { useState } from 'react';
import { Transition, animated } from 'react-spring';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { RiEdit2Line, RiDeleteBin2Line } from 'react-icons/ri';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import CreateInvoice from './CreateInvoice/CreateInvoice';

const Invoice = ({ invoice, setInvoiceView, deleteItem, getInvoice }) => {
    const [invoiceModal, setInvoiceModal] = useState(false);
    const netAmount = (arr) => {
        var price = 0;
        arr.forEach((item) => {
            price += item.qty * item.price;
        });
        return price;
    };

    return (
        <tr className='cursor-pointer'>
            <td
                onClick={() => {
                    setInvoiceView(invoice._id);
                }}
                className='p-2 rounded-l-lg bg-gray-800'
            >
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
            <td
                onClick={() => {
                    setInvoiceView(invoice._id);
                }}
                className='p-2 bg-gray-800'
            >{`#${invoice.invoiceNo}`}</td>
            <td
                onClick={() => {
                    setInvoiceView(invoice._id);
                }}
                className='p-2 bg-gray-800 font-bold'
            >{`₹${invoice.itemList.length && netAmount(invoice.itemList)}`}</td>
            <td
                onClick={() => {
                    setInvoiceView(invoice._id);
                }}
                className='p-2 bg-gray-800'
            >
                <span
                    className={`${
                        invoice.status === 'overdue'
                            ? 'bg-red-400'
                            : invoice.status === 'pending'
                            ? 'bg-yellow-400'
                            : 'bg-green-400'
                    } text-gray-50 rounded-md px-2 py-px`}
                >
                    {invoice.status}
                </span>
            </td>
            <td
                onClick={() => {
                    setInvoiceView(invoice._id);
                }}
                className='p-2 bg-gray-800'
            >
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
            <td className='p-2 rounded-r-lg bg-gray-800'>
                <div className='flex justify-start items-center'>
                    <RiEdit2Line
                        onClick={async () => {
                            await getInvoice(invoice._id);
                            setInvoiceModal(true);
                        }}
                        className='mr-5 hover:text-yellow-400 transition-colors duration-100'
                        size={20}
                    />
                    <RiDeleteBin2Line
                        className='hover:text-red-400 transition-colors duration-100'
                        size={20}
                        onClick={() => deleteItem(invoice._id)}
                    />
                </div>
            </td>

            <Transition
                items={invoiceModal}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
            >
                {(styles, item) => {
                    return (
                        item && (
                            <animated.div
                                style={{
                                    ...styles,
                                    position: 'relative',
                                    zIndex: 20,
                                }}
                            >
                                <CreateInvoice
                                    edit={invoice._id}
                                    setInvoiceModal={setInvoiceModal}
                                />
                            </animated.div>
                        )
                    );
                }}
            </Transition>
        </tr>
    );
};

export default Invoice;
