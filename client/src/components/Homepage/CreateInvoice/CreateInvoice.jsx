import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createInvoice } from '../../../redux/Invoice/invoice.asyncActions';
import { IoIosClose } from 'react-icons/io';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import ModalForm from './ModalForm';

const CreateInvoice = ({
    setInvoiceModal,
    createInvoice,
    getAllInvoices,
    getStats,
    pageNo,
}) => {
    const [page, setPage] = useState(1);
    const [isNextDisabled, setIsNextDisabled] = useState(true);
    const [formData, setFormData] = useState({});
    const submitForm = (formData) => {
        createInvoice(formData);
    };

    return (
        <>
            <div className='overlay fixed w-screen h-screen opacity-50 bg-black z-10 left-0 top-0'></div>
            <div className='create-invoice-modal fixed bg-gray-800 text-gray-300 rounded h-3/5 w-1/2 z-20 inset-0 m-auto py-2 px-3'>
                <div className='header'>
                    <p className='font-bold text-3xl text-center mb-5'>
                        Create Invoice
                    </p>
                    <IoIosClose
                        onClick={() => setInvoiceModal(false)}
                        className='text-gray-400 absolute right-3 top-2 cursor-pointer'
                        size={32}
                    />
                </div>
                <ModalForm
                    {...{
                        page,
                        setIsNextDisabled,
                        setInvoiceModal,
                        getAllInvoices,
                        getStats,
                        pageNo,
                    }}
                />
                <div className='footer absolute bottom-0 left-0 w-full flex justify-between mb-4 px-3 items-center'>
                    <p className='page-name text-lg'>
                        {page === 1
                            ? 'User details'
                            : page === 2
                            ? 'Client details'
                            : page === 3
                            ? 'Invoice details'
                            : 'Product details'}
                    </p>
                    <div className='page-indication flex justify-between w-14'>
                        <div
                            className='indicator h-1.5 w-1.5 bg-gray-400 rounded-full'
                            style={{
                                outline:
                                    page === 1 && '3px solid rgba(30, 58, 138)',
                            }}
                        />
                        <div
                            className='indicator h-1.5 w-1.5 bg-gray-400 rounded-full'
                            style={{
                                outline:
                                    page === 2 && '3px solid rgba(30, 58, 138)',
                            }}
                        />
                        <div
                            className='indicator h-1.5 w-1.5 bg-gray-400 rounded-full'
                            style={{
                                outline:
                                    page === 3 && '3px solid rgba(30, 58, 138)',
                            }}
                        />
                        <div
                            className='indicator h-1.5 w-1.5 bg-gray-400 rounded-full'
                            style={{
                                outline:
                                    page === 4 && '3px solid rgba(30, 58, 138)',
                            }}
                        />
                    </div>
                    <div className='buttons-container'>
                        <button
                            onClick={() => {
                                setPage(page - 1);
                                setIsNextDisabled(false);
                            }}
                            disabled={page <= 1}
                            className='bg-blue-800 hover:bg-blue-900 disabled:bg-gray-900 disabled:cursor-default transition-colors duration-100 px-1 py-2 mr-3 rounded text-lg'
                        >
                            <GoChevronLeft />
                        </button>
                        <button
                            onClick={() => {
                                setPage(page + 1);
                                setIsNextDisabled(true);
                            }}
                            disabled={isNextDisabled}
                            className='bg-blue-800 hover:bg-blue-900 disabled:bg-gray-900 disabled:cursor-default transition-colors duration-100 px-1 py-2 rounded text-lg'
                        >
                            <GoChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createInvoice: (payload) => dispatch(createInvoice(payload)),
    };
};

export default connect(null, mapDispatchToProps)(CreateInvoice);
