import React, { useEffect, useState } from 'react';
import { animated, useSpring, config } from 'react-spring';
import moment from 'moment';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const CardData = ({ innerText, cardType }) => {
    const { number } = useSpring({
        from: { number: 0 },
        number: parseInt(innerText),
        delay: 100,
        config: config.mollases,
    });
    if (innerText) {
        return (
            <p className='text-lg mb-2 text-blue-600 font-bold'>
                {cardType === 'revenue' && <span>₹</span>}
                <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
                {cardType === 'loyalty' && <span>%</span>}
            </p>
        );
    } else {
        return <p className='text-lg mb-2 text-blue-600 font-bold'>No data</p>;
    }
};

const Stats = ({ statInvoices, chartData }) => {
    const [stats, setStats] = useState({});
    const [calculatedData, setCalculatedData] = useState([
        {
            Month: 'Jan',
            Revenue: '200',
        },
        {
            Month: 'Feb',
            Revenue: '500',
        },
        {
            Month: 'Mar',
            Revenue: '300',
        },
        {
            Month: 'Apr',
            Revenue: '400',
        },
        {
            Month: 'May',
            Revenue: '500',
        },
    ]);

    useEffect(() => {
        statCalculations();
        chartDataCalculations();
    }, []);

    const statCalculations = () => {
        let tempStats = {
            revenue: 0,
            clients: 0,
            loyalty: 0,
            invoices: 0,
        };
        if (statInvoices) {
            let paid = 0;
            let overdue = 0;
            statInvoices.forEach((invoice) => {
                if (invoice.status === 'paid') {
                    paid++;
                    invoice.itemList &&
                        invoice.itemList.forEach((item) => {
                            tempStats.revenue += item.qty * item.price;
                        });
                } else if (invoice.status === 'overdue') overdue++;
            });
            tempStats.revenue = tempStats.revenue.toFixed(2);
            tempStats.loyalty = ((paid / (paid + overdue)) * 100).toFixed(2);
            tempStats.clients = [
                ...new Set(statInvoices.map((item) => item.clientEmail)),
            ].length;
            tempStats.invoices = statInvoices.length;
        }
        setStats(tempStats);
    };

    const chartDataCalculations = async () => {
        let newChartData = chartData.map((data) => {
            let monthlyRevenue = 0;
            data.data.forEach((item) => {
                item.qty.forEach((it, index, arr) => {
                    monthlyRevenue += arr[index] * item.price[index];
                });
            });
            return {
                Month: data._id.month - 1,
                Revenue: monthlyRevenue,
            };
        });
        let monthArr = new Array(12).fill(null);
        newChartData.forEach((item) => {
            if (!monthArr[item.Month]) monthArr[item.Month] = item.Revenue;
        });
        monthArr = monthArr.map((item, index) => {
            if (item === null) {
                return {
                    Month: moment().month(index).format('MMM'),
                    Revenue: 0,
                };
            } else {
                return {
                    Month: moment().month(index).format('MMM'),
                    Revenue: item,
                };
            }
        });
        setCalculatedData(monthArr);
    };

    return (
        <>
            <p className='absolute text-white left-52 top-2 text-md font-bold text-gray-300'>
                Monthly income
            </p>
            <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={calculatedData}>
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
                                stopColor='rgba(37, 99, 235)'
                                stopOpacity={0.8}
                            />
                            <stop
                                offset='95%'
                                stopColor='rgba(37, 99, 235)'
                                stopOpacity={0}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        type='monotone'
                        dataKey='Revenue'
                        stroke='rgba(37, 99, 235)'
                        fillOpacity={1}
                        fill='url(#colorEarning)'
                        dot={{ fill: '#fff' }}
                    />
                    <XAxis
                        dataKey='Month'
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
                    <CardData innerText={stats.revenue} cardType='revenue' />
                </div>
                <div className='detail-card rounded-xl shadow-xl flex flex-col justify-center items-center'>
                    <p className='font-bold text-2xl'>Clients</p>
                    <p className='text-lg mb-2' style={{ color: '#00C49A' }}>
                        <CardData
                            innerText={stats.clients}
                            cardType='clients'
                        />
                    </p>
                </div>
                <div className='detail-card rounded-xl shadow-xl flex flex-col justify-center items-center'>
                    <p className='font-bold text-2xl'>Loyalty</p>
                    <p className='text-lg' style={{ color: '#00C49A' }}>
                        <CardData
                            innerText={stats.loyalty ? stats.loyalty : ''}
                            cardType='loyalty'
                        />
                    </p>
                </div>
                <div className='detail-card rounded-xl shadow-xl flex flex-col justify-center items-center'>
                    <p className='font-bold text-2xl'>Invoices</p>
                    <p className='text-lg' style={{ color: '#00C49A' }}>
                        <CardData
                            innerText={stats.invoices}
                            cardType='invoices'
                        />
                    </p>
                </div>
            </div>
        </>
    );
};

export default Stats;
