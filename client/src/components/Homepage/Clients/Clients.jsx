import React, { useEffect } from 'react';
import ClientCard from './ClientCard';

const Clients = ({ getClients, clients }) => {
    useEffect(() => {
        getClients();
    }, []);

    return (
        <>
            <p className='text-lg font-bold text-gray-300 p-3 sm:text-center'>
                Send Again
            </p>
            {clients &&
                clients.map(({ data }, index) => (
                    <ClientCard key={data[0].clientEmail} client={data[0]} />
                ))}
        </>
    );
};

export default Clients;
