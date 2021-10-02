import React from 'react';
import Invoice from './Invoice';

const InvoiceTable = ({ invoices }) => {
    return (
        <div class='col-span-12 w-full'>
            <div
                class='overflow-auto lg:overflow-visible flex flex-col justify-between'
                style={{ minHeight: 300 }}
            >
                <table
                    class='table text-gray-400 border-separate space-y-6 text-sm w-full'
                    style={{ borderSpacing: '0 10px' }}
                >
                    <thead class=' text-gray-500 select-none'>
                        <tr>
                            <th class='p-2 rounded-l-lg bg-gray-800'>
                                Recipient
                            </th>
                            <th class='p-2 text-left bg-gray-800'>
                                Invoice No.
                            </th>
                            <th class='p-2 text-left bg-gray-800'>Price</th>
                            <th class='p-2 text-left bg-gray-800'>Status</th>
                            <th class='p-2 rounded-r-lg text-left bg-gray-800'>
                                Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {invoices.map((invoice) => {
                            return <Invoice {...invoice} />;
                        })} */}
                        <Invoice />
                        <Invoice />
                        <Invoice />
                    </tbody>
                </table>
                <div className='pagination flex justify-end'>
                    <ul class='flex pl-0 divide-x divide-gray-900 list-none rounded'>
                        <li class='relative block py-1 px-3 leading-tight bg-gray-800 text-white cursor-pointer select-none ml-0 rounded-l-lg hover:bg-gray-900 transition-colors duration-100'>
                            <a>Previous</a>
                        </li>
                        <li class='relative block py-1 px-3 leading-tight bg-gray-800 text-white cursor-pointer select-none rounded-r-lg hover:bg-gray-900 transition-colors duration-100'>
                            <a>Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default InvoiceTable;
