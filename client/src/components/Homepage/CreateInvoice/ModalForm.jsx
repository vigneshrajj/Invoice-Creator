import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createInvoice } from '../../../redux/Invoice/invoice.asyncActions';
import { FaDotCircle } from 'react-icons/fa';
import { IoIosCloseCircle, IoIosCheckmarkCircle } from 'react-icons/io';

const ModalForm = ({
    page,
    setIsNextDisabled,
    createInvoice,
    setInvoiceModal,
    getAllInvoices,
    getStats,
    pageNo,
}) => {
    const [userDetails, setUserDetails] = useState({
        fromAddress: '',
        fromCity: '',
        fromZip: '',
        fromCountry: '',
    });
    const [clientDetails, setClientDetails] = useState({
        clientName: '',
        clientEmail: '',
        toAddress: '',
        toCity: '',
        toZip: '',
        toCountry: '',
    });
    const [invoiceDetails, setInvoiceDetails] = useState({
        status: 'pending',
        invoiceDate: '',
        paymentDue: '',
    });
    const [productDescription, setProductDescription] = useState('');
    const [itemList, setItemList] = useState([
        {
            name: '',
            qty: 0,
            price: '',
        },
    ]);

    const rexp = /^[0-9\b]+$/;

    useEffect(() => {
        setIsNextDisabled(isNextDisabled());
    }, [
        userDetails,
        clientDetails,
        invoiceDetails,
        productDescription,
        itemList,
        page,
    ]);

    useEffect(() => {
        if (page > 4) {
            submitForm();
            getAllInvoices({ pageNo, itemsCount: 3 });
            getStats();
            setInvoiceModal(false);
        }
    }, [page]);

    const handleChange = (e) => {
        switch (page) {
            case 1:
                if (
                    e.target.id === 'fromZip' &&
                    !(e.target.value === '' || rexp.test(e.target.value))
                )
                    break;
                setUserDetails({
                    ...userDetails,
                    [e.target.id]: e.target.value,
                });
                break;
            case 2:
                if (
                    e.target.id === 'toZip' &&
                    !(e.target.value === '' || rexp.test(e.target.value))
                )
                    break;
                setClientDetails({
                    ...clientDetails,
                    [e.target.id]: e.target.value,
                });
                break;
            case 3:
                if (
                    e.target.id === 'invoiceDate' ||
                    e.target.id === 'paymentDue'
                ) {
                    setInvoiceDetails({
                        ...invoiceDetails,
                        [e.target.id]: Date(e.target.value),
                    });
                }
                setInvoiceDetails({
                    ...invoiceDetails,
                    [e.target.id]: e.target.value,
                });
                break;
            default:
                if (e.target.id === 'productDescription') {
                    setProductDescription(e.target.value);
                }
                break;
        }
    };

    const isNextDisabled = () => {
        if (page === 1) {
            for (let key in userDetails) {
                if (userDetails[key] === '' || !userDetails[key]) {
                    return true;
                }
            }
            return false;
        } else if (page === 2) {
            for (let key in clientDetails) {
                if (clientDetails[key] === '' || !clientDetails[key]) {
                    return true;
                }
            }
            return false;
        } else if (page === 3) {
            for (let key in invoiceDetails) {
                if (invoiceDetails[key] === '' || !invoiceDetails[key]) {
                    return true;
                }
            }
            return false;
        } else {
            let flag = false;
            itemList.forEach((i) => {
                for (let key in i) {
                    if (i[key] === '' || !i[key]) {
                        flag = true;
                    }
                }
            });
            return flag;
        }
    };

    const updateItemList = (e, index) => {
        let tempList = [...itemList];
        if (e.target.id === 'inc') {
            tempList[index] = {
                ...tempList[index],
                qty: tempList[index].qty + 1,
            };
        } else if (e.target.id === 'dec') {
            tempList[index] = {
                ...tempList[index],
                qty: tempList[index].qty - 1,
            };
        } else {
            if (
                e.target.id === 'price' &&
                !(e.target.value === '' || rexp.test(e.target.value))
            )
                return;
            tempList[index] = {
                ...tempList[index],
                [e.target.id]: e.target.value,
            };
        }
        setItemList(tempList);
    };

    const submitForm = () => {
        const invoiceNo =
            clientDetails.clientName.slice(0, 2).toUpperCase() +
            Math.floor(Math.random() * 9999 + 1000).toString();
        let formData = {
            ...userDetails,
            ...clientDetails,
            ...invoiceDetails,
            itemList,
            invoiceNo,
        };
        if (productDescription !== '')
            formData = { ...formData, productDescription };
        createInvoice(formData);
    };

    switch (page) {
        case 1:
            return (
                <div className='form mx-2'>
                    <input
                        type='text'
                        id='fromAddress'
                        value={userDetails['fromAddress']}
                        onChange={handleChange}
                        placeholder='Street Address'
                        className='bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full'
                    />
                    <input
                        type='text'
                        id='fromCity'
                        value={userDetails['fromCity']}
                        onChange={handleChange}
                        placeholder='City'
                        className='bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full'
                    />
                    <div className='flex justify-between'>
                        <input
                            type='text'
                            id='fromZip'
                            value={userDetails['fromZip']}
                            onChange={handleChange}
                            placeholder='Zip Code'
                            className='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2'
                        />
                        <input
                            type='text'
                            id='fromCountry'
                            value={userDetails['fromCountry']}
                            onChange={handleChange}
                            placeholder='Country'
                            className='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2'
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
                            id='clientName'
                            value={clientDetails['clientName']}
                            onChange={handleChange}
                            placeholder='Client Name'
                            className='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2'
                        />
                        <input
                            type='text'
                            id='clientEmail'
                            value={clientDetails['clientEmail']}
                            onChange={handleChange}
                            placeholder='Client Email'
                            className='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2'
                        />
                    </div>
                    <input
                        type='text'
                        id='toAddress'
                        value={clientDetails['toAddress']}
                        onChange={handleChange}
                        placeholder='Street Address'
                        className='bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full'
                    />
                    <input
                        type='text'
                        id='toCity'
                        value={clientDetails['toCity']}
                        onChange={handleChange}
                        placeholder='City'
                        className='bg-gray-700 p-2 mb-5 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full'
                    />
                    <div className='flex justify-between'>
                        <input
                            type='text'
                            id='toZip'
                            value={clientDetails['toZip']}
                            onChange={handleChange}
                            placeholder='Zip Code'
                            className='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2'
                        />
                        <input
                            type='text'
                            id='toCountry'
                            value={clientDetails['toCountry']}
                            onChange={handleChange}
                            placeholder='Country'
                            className='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2'
                        />
                    </div>
                </div>
            );
        case 3:
            return (
                <div className='form mx-2'>
                    <div className='flex justify-between'>
                        <input
                            type='date'
                            id='invoiceDate'
                            value={invoiceDetails.invoiceDate}
                            onChange={handleChange}
                            placeholder='Invoice date'
                            className='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2'
                        />
                        <input
                            type='date'
                            id='paymentDue'
                            min={
                                invoiceDetails.invoiceDate &&
                                invoiceDetails.invoiceDate
                            }
                            value={invoiceDetails['paymentDue']}
                            onChange={handleChange}
                            placeholder='Payment due date'
                            className='bg-gray-700 p-2 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2'
                        />
                    </div>
                    <div className='flex mt-5'>
                        <button
                            onClick={() =>
                                setInvoiceDetails({
                                    ...invoiceDetails,
                                    status: 'overdue',
                                })
                            }
                            className={`w-24 py-1 flex ${
                                invoiceDetails.status === 'overdue'
                                    ? ''
                                    : 'border-gray-800'
                            } border-2 justify-center items-center rounded-full text-white bg-red-500 hover:bg-red-400 duration-100 text-sm font-bold mr-3 pr-1`}
                        >
                            <IoIosCloseCircle size={20} className='mr-3' />
                            Overdue
                        </button>

                        <button
                            onClick={() =>
                                setInvoiceDetails({
                                    ...invoiceDetails,
                                    status: 'pending',
                                })
                            }
                            className={`w-24 py-1 flex ${
                                invoiceDetails.status === 'pending'
                                    ? ''
                                    : 'border-gray-800'
                            } border-2 justify-center items-center rounded-full text-white bg-yellow-500 hover:bg-yellow-400 duration-100 text-sm font-bold mr-3 pr-1`}
                        >
                            <FaDotCircle size={18} className='mr-3' />
                            Pending
                        </button>

                        <button
                            onClick={() =>
                                setInvoiceDetails({
                                    ...invoiceDetails,
                                    status: 'paid',
                                })
                            }
                            className={`w-20 py-1 flex ${
                                invoiceDetails.status === 'paid'
                                    ? ''
                                    : 'border-gray-800'
                            } border-2 justify-center items-center rounded-full text-white bg-green-500 hover:bg-green-400 duration-100 text-sm font-bold mr-3 pr-2`}
                        >
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
                        id='productDescription'
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        placeholder='Product Description (Optional)'
                        row={2}
                        className='bg-gray-700 p-2 mb-3 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full resize-none'
                    />
                    <p className='text-gray-300 text-sm mb-2'>Products</p>
                    {itemList &&
                        itemList.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className='flex justify-between mb-5'
                                >
                                    <input
                                        type='text'
                                        id='name'
                                        value={item.name}
                                        onChange={(e) =>
                                            updateItemList(e, index)
                                        }
                                        placeholder='Item Name'
                                        className='bg-gray-700 py-2 px-4 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mr-2'
                                    />
                                    <div className='flex flex-row items-center relative bg-gray-700 rounded-lg border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full mx-2 text-gray-400'>
                                        <button
                                            id='dec'
                                            onClick={(e) =>
                                                updateItemList(e, index)
                                            }
                                            disabled={item.qty < 1}
                                            className='font-semibold hover:bg-gray-900 transition-colors duration-100 h-full w-10 flex justify-center items-center rounded-l-lg focus:outline-none cursor-pointer'
                                        >
                                            -
                                        </button>
                                        <div className='qty mx-auto'>
                                            {item.qty}
                                        </div>

                                        <button
                                            id='inc'
                                            onClick={(e) =>
                                                updateItemList(e, index)
                                            }
                                            className='font-semibold hover:bg-gray-900 transition-colors duration-100 h-full w-10 flex justify-center items-center rounded-r-lg focus:outline-none cursor-pointer'
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div className='w-full relative mr-2'>
                                        {item.price !== '' && (
                                            <p className='absolute text-gray-400 ml-3.5 mt-2.5'>
                                                ₹
                                            </p>
                                        )}
                                        <input
                                            type='text'
                                            id='price'
                                            value={item.price}
                                            onChange={(e) =>
                                                updateItemList(e, index)
                                            }
                                            placeholder='Price'
                                            className='bg-gray-700 py-2 px-4 rounded-lg border-2 border-gray-700 shadow-md focus:outline-none focus:border-gray-600 placeholder-gray-400 w-full ml-2'
                                        />
                                    </div>
                                    <button
                                        onClick={() => {
                                            setItemList(
                                                itemList.filter(
                                                    (i) => i !== item
                                                )
                                            );
                                        }}
                                        style={{
                                            opacity:
                                                itemList.length - 1 ? 1 : 0,
                                        }}
                                        disabled={!(itemList.length - 1)}
                                        className='mx-2 text-gray-400 select-none disabled:cursor-default'
                                    >
                                        x
                                    </button>
                                </div>
                            );
                        })}

                    <button
                        onClick={() =>
                            setItemList([
                                ...itemList,
                                {
                                    name: '',
                                    qty: 0,
                                    price: '',
                                },
                            ])
                        }
                        className='add-items w-12 h-12 rounded-full bg-gray-900 flex justify-center items-center text-4xl text-gray-400 mx-auto mt-3'
                    >
                        +
                    </button>
                </div>
            );
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createInvoice: (payload) => dispatch(createInvoice(payload)),
    };
};

export default connect(null, mapDispatchToProps)(ModalForm);