import React, { useState } from 'react';
import { Transition, animated } from 'react-spring';
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
                <div className='max-w-3/5 overflow-hidden'>
                    <p className='font-bold capitalize overflow-hidden whitespace-nowrap overflow-ellipsis'>
                        {client.clientName}
                    </p>
                    <p className='w-full overflow-hidden whitespace-nowrap overflow-ellipsis'>
                        {client.clientEmail}
                    </p>
                </div>
            </div>
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
                                    zIndex: 20,
                                }}
                            >
                                <CreateInvoice
                                    {...{ sendAgain: client, setInvoiceModal }}
                                />
                            </animated.div>
                        )
                    );
                }}
            </Transition>
        </>
    );
};

export default ClientCard;
