import React, { useState, useEffect } from 'react';
import Invoice from './Invoice';
import { getAllInvoices } from '../../redux/Invoice/invoice.asyncActions';
import { connect } from 'react-redux';

const InvoiceTable = ({ invoices, invoiceCount, getAllInvoices }) => {
    const [pageNo, setPageNo] = useState(1);
    const itemsCount = 3;

    useEffect(async () => {
        await getAllInvoices({ pageNo, itemsCount });
    }, [pageNo]);

    const nextPage = () => {
        setPageNo(pageNo + 1);
    };

    const prevPage = async () => {
        setPageNo(pageNo - 1);
    };

    return (
        <div className='col-span-12 w-full'>
            <div
                className='overflow-auto lg:overflow-visible flex flex-col justify-between'
                style={{ minHeight: 300 }}
            >
                <table
                    className='table text-gray-400 border-separate space-y-6 text-sm w-full'
                    style={{ borderSpacing: '0 10px' }}
                >
                    <thead className=' text-gray-500 select-none'>
                        <tr>
                            <th className='p-2 rounded-l-lg bg-gray-800'>
                                Recipient
                            </th>
                            <th className='p-2 text-left bg-gray-800'>
                                Invoice No.
                            </th>
                            <th className='p-2 text-left bg-gray-800'>
                                Amount
                            </th>
                            <th className='p-2 text-left bg-gray-800'>
                                Status
                            </th>
                            <th className='p-2 rounded-r-lg text-left bg-gray-800'>
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices &&
                            invoices.map((invoice, index) => {
                                return <Invoice key={index} {...invoice} />;
                            })}
                    </tbody>
                </table>
                <div className='pagination flex justify-end'>
                    <ul className='flex pl-0 divide-x divide-gray-900 list-none rounded'>
                        <button
                            onClick={prevPage}
                            disabled={pageNo <= 1}
                            className='block py-1 px-3 leading-tight bg-gray-800 text-white cursor-pointer select-none ml-0 rounded-l-lg hover:bg-gray-900 disabled:bg-gray-200 transition-colors duration-100'
                        >
                            Previous
                        </button>
                        <button
                            onClick={nextPage}
                            disabled={pageNo >= invoiceCount / itemsCount}
                            className='block py-1 px-3 leading-tight bg-gray-800 text-white cursor-pointer select-none rounded-r-lg hover:bg-gray-900 disabled:bg-gray-200 transition-colors duration-100'
                        >
                            Next
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        invoices: state.invoice.invoices,
        invoiceCount: state.invoice.invoiceCount,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllInvoices: (payload) => dispatch(getAllInvoices(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvoiceTable);
