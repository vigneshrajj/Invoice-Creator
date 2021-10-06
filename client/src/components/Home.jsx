import React, { useEffect, useState } from 'react';
import { Transition, animated } from 'react-spring';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requireAuth from './require.auth';
import { logout } from '../redux/User/user.asyncActions';
import {
    getStats,
    getAllInvoices,
    searchInvoice,
    getClients,
    applyFilter,
} from '../redux/Invoice/invoice.asyncActions';
import { HiOutlineLogout } from 'react-icons/hi';
import { TiDocumentAdd } from 'react-icons/ti';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import InvoiceTable from './Homepage/InvoiceTable';
import Stats from './Homepage/Stats';
import Clients from './Homepage/Clients/Clients';
import CreateInvoice from './Homepage/CreateInvoice/CreateInvoice';
import Filter from './Homepage/Filter';

const Home = ({
    logout,
    history,
    getStats,
    getAllInvoices,
    getClients,
    clients,
    searchInvoice,
    searchResults,
    statInvoices,
    chartData,
    applyFilter,
}) => {
    const [pageNo, setPageNo] = useState(1);
    const [invoiceModal, setInvoiceModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getStats();
    }, []);

    const logoutAction = async () => {
        await logout();
        history.push('/login');
    };

    const search = (e) => {
        if (e.keyCode == 13) {
            searchInvoice(searchQuery);
        }
    };

    return (
        <div className='overflow-hidden md:overflow-y-scroll'>
            <div className='w-full h-screen flex flex-col items-center bg-gray-700 md:h-full'>
                <div
                    className='header w-full h-12 m-2 grid gap-x-3'
                    style={{ gridTemplateColumns: '4rem auto 3.5rem' }}
                >
                    <div className='logo bg-gray-900 w-12 rounded-full ml-2 text-center leading-normal text-3xl text-white select-none font-bold'>
                        I
                    </div>
                    <div className='heading text-gray-300'>
                        <p className='font-bold text-3xl leading-normal'>
                            Invoicer
                        </p>
                    </div>
                    <button
                        onClick={logoutAction}
                        className='logout bg-gray-800 hover:bg-gray-900 w-12 rounded-xl flex justify-center items-center'
                    >
                        <HiOutlineLogout className='text-white text-3xl text-center' />
                    </button>
                </div>
                <div
                    className='search-bar w-full h-10 px-2 grid gap-x-3'
                    style={{ gridTemplateColumns: '3rem 8rem auto' }}
                >
                    <button
                        onClick={() => setInvoiceModal(true)}
                        className='bg-gray-800 px-2 rounded flex justify-center items-center text-white text-2xl hover:bg-gray-900 transition-colors duration-100'
                    >
                        <TiDocumentAdd />
                    </button>
                    <Filter applyFilter={applyFilter} />
                    <div className='px-2 flex justify-between rounded bg-gray-300 w-full'>
                        <input
                            className='flex-grow outline-none text-gray-600 bg-gray-300 w-full'
                            type='text'
                            placeholder='Search Invoice...'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={search}
                        />
                        {searchResults && searchResults.length ? (
                            <AiOutlineClose
                                onClick={() => {
                                    setSearchQuery('');
                                    searchInvoice('');
                                }}
                                className='mt-1 text-2xl text-gray-500 hover:text-gray-800 transition-colors duration-100 cursor-pointer'
                            />
                        ) : (
                            <AiOutlineSearch
                                onClick={() => searchInvoice(searchQuery)}
                                className='mt-1 text-2xl text-gray-500 hover:text-gray-800 transition-colors duration-100 cursor-pointer'
                            />
                        )}
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
                                        pageNo={pageNo}
                                        setInvoiceModal={setInvoiceModal}
                                    />
                                </animated.div>
                            )
                        );
                    }}
                </Transition>
                <div className='main-container w-full h-full p-2 grid grid-cols-4 gap-2'>
                    {searchResults && searchResults.length ? (
                        <div className='card col-span-4'>
                            <InvoiceTable
                                pageNo={pageNo}
                                setPageNo={setPageNo}
                                getAllInvoices={getAllInvoices}
                                searchResults={searchResults}
                            />
                        </div>
                    ) : (
                        <div className='card col-span-4'>
                            <InvoiceTable
                                pageNo={pageNo}
                                setPageNo={setPageNo}
                                getAllInvoices={getAllInvoices}
                            />
                        </div>
                    )}
                    {searchResults && searchResults.length ? (
                        ''
                    ) : (
                        <>
                            <div className='card bg-gray-800 rounded col-span-3 pt-3 flex relative md:col-span-4 sm:flex-col sm:mb-5 sm:px-2'>
                                <Stats {...{ statInvoices, chartData }} />
                            </div>
                            <div className='card bg-gray-800 rounded text-gray-300 md:col-span-4 md:mb-2'>
                                <Clients {...{ getClients, clients }} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        statInvoices: state.invoice.statInvoices,
        chartData: state.invoice.chartData,
        searchResults: state.invoice.searchResults,
        clients: state.invoice.clients,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        getStats: () => dispatch(getStats()),
        getAllInvoices: (payload) => dispatch(getAllInvoices(payload)),
        searchInvoice: (payload) => dispatch(searchInvoice(payload)),
        getClients: (payload) => dispatch(getClients(payload)),
        applyFilter: (payload) => dispatch(applyFilter(payload)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(requireAuth(Home)));
