import React, { useEffect } from 'react';
import ClientCard from './ClientCard';

const Clients = ({ getClients, clients }) => {
    useEffect(() => {
        getClients();
    }, []);

    return (
        <>
            <div className='header flex justify-between items-center px-3 pt-3 pb-3'>
                <p className='text-lg font-bold text-gray-300'>Send Again</p>
            </div>
            {clients &&
                clients.map(({ data }, index) => (
                    <ClientCard key={index} client={data[0]} />
                ))}
        </>
    );
};

export default Clients;
