import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const Stats = () => {
    const data = [
        {
            month: 'Jan',
            earning: '200',
        },
        {
            month: 'Feb',
            earning: '500',
        },
        {
            month: 'Mar',
            earning: '300',
        },
        {
            month: 'Apr',
            earning: '400',
        },
        {
            month: 'May',
            earning: '500',
        },
    ];

    return (
        <>
            <p className='absolute text-white left-52 top-2 text-md font-bold text-gray-300'>
                Monthly income
            </p>
            <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient
                            id='colorEarning'
                            x1='0'
                            y1='0'
                            x2='0'
                            y2='1'
                        >
                            <stop
                                offset='5%'
                                stopColor='#00C49A'
                                stopOpacity={0.8}
                            />
                            <stop
                                offset='95%'
                                stopColor='#00C49A'
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        type='monotone'
                        dataKey='earning'
                        stroke='#00C49A'
                        fillOpacity={1}
                        fill='url(#colorEarning)'
                        dot={{ fill: '#fff' }}
                    />
                    <XAxis
                        dataKey='month'
                        stroke='rgba(156, 163, 175)'
                        style={{ fontSize: 15 }}
                    />
                    <YAxis
                        style={{ fontSize: 15 }}
                        stroke='rgba(156, 163, 175)'
                    />
                    <Tooltip />
                </AreaChart>
            </ResponsiveContainer>

            <div className='p-2 w-full text-center text-gray-400 grid grid-cols-2 gap-2 grid-rows-2'>
                <div className='detail-card rounded-xl shadow-xl flex flex-col justify-center items-center'>
                    <p className='font-bold text-2xl'>Total revenue</p>
                    <p className='text-lg mb-2' style={{ color: '#00C49A' }}>
                        ₹300
                    </p>
                </div>
                <div className='detail-card rounded-xl shadow-xl flex flex-col justify-center items-center'>
                    <p className='font-bold text-2xl'>Clients</p>
                    <p className='text-lg mb-2' style={{ color: '#00C49A' }}>
                        300
                    </p>
                </div>
                <div className='detail-card rounded-xl shadow-xl flex flex-col justify-center items-center'>
                    <p className='font-bold text-2xl'>Loyalty</p>
                    <p className='text-lg' style={{ color: '#00C49A' }}>
                        70%
                    </p>
                </div>
                <div className='detail-card rounded-xl shadow-xl flex flex-col justify-center items-center'>
                    <p className='font-bold text-2xl'>Invoices</p>
                    <p className='text-lg' style={{ color: '#00C49A' }}>
                        250
                    </p>
                </div>
            </div>
        </>
    );
};

export default Stats;
