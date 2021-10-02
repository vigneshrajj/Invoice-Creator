import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requireAuth from './require.auth';
import { logout } from '../redux/User/user.asyncActions';
import { HiOutlineLogout } from 'react-icons/hi';
import { TiDocumentAdd } from 'react-icons/ti';
import { AiOutlineSearch } from 'react-icons/ai';
import InvoiceTable from './Homepage/InvoiceTable';
import Stats from './Homepage/Stats';
import Clients from './Homepage/Clients';

const Home = ({ logout, history }) => {
    const logoutAction = async () => {
        await logout();
        history.push('/login');
    };

    return (
        <div>
            <div className='w-full h-screen flex flex-col items-center bg-gray-700'>
                <div
                    className='header w-full h-12 m-2 grid gap-x-3'
                    style={{ gridTemplateColumns: '4rem auto 3.5rem' }}
                >
                    <div className='logo bg-gray-800 w-12 rounded-full ml-2 text-center leading-normal text-3xl text-white select-none'>
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
                    style={{ gridTemplateColumns: 'auto 2rem 8rem' }}
                >
                    <div class='px-2 flex justify-between rounded bg-gray-300 w-full'>
                        <input
                            class='flex-grow outline-none text-gray-600 bg-gray-300'
                            type='text'
                            placeholder='Search Invoice...'
                        />
                        <AiOutlineSearch className='mt-1 text-2xl text-gray-500 hover:text-gray-800 transition-colors duration-100 cursor-pointer' />
                    </div>
                    <button className='bg-gray-800 rounded-xl flex justify-center items-center text-white text-2xl'>
                        <TiDocumentAdd />
                    </button>
                    <button className='bg-gray-800 rounded-xl text-white'>
                        Filter
                    </button>
                </div>
                <div className='main-container w-full h-full p-2 grid grid-cols-4 gap-2'>
                    <div className='card col-span-4'>
                        <InvoiceTable />
                    </div>
                    <div className='card bg-gray-800 rounded col-span-3 pt-8 flex relative'>
                        <Stats />
                    </div>
                    <div className='card bg-gray-800 rounded text-gray-300'>
                        <Clients />
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(null, mapDispatchToProps)(withRouter(requireAuth(Home)));
