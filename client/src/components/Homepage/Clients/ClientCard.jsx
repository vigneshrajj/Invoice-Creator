import React, { useState } from 'react';
import Gravatar from 'react-gravatar';
import CreateInvoice from '../CreateInvoice/CreateInvoice';

const ClientCard = ({ client }) => {
    const [invoiceModal, setInvoiceModal] = useState(false);
    return (
        <>
            <div
                onClick={() => setInvoiceModal(true)}
                className='client-card mx-1 my-2 px-2 rounded-lg select-none flex items-center hover:bg-gray-900 cursor-pointer transition-colors duration-100'
            >
                <div className='img w-8 h-8 rounded-xl overflow-hidden mr-3'>
                    <Gravatar email={client.clientEmail} />
                </div>
                <div>
                    <p className='font-bold capitalize'>{client.clientName}</p>
                    <p>{client.clientEmail}</p>
                </div>
            </div>
            {invoiceModal && (
                <CreateInvoice {...{ sendAgain: client, setInvoiceModal }} />
            )}
        </>
    );
};

export default ClientCard;
