import React, { useState, useEffect } from 'react';
import { IoIosClose, IoMdDownload } from 'react-icons/io';
import moment from 'moment';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const InvoiceView = ({ setInvoiceView, currentInvoice }) => {
    const [sum, setSum] = useState(0);
    const pdfRef = React.useRef(null);

    const printDoc = () => {
        let config = {
            useCORS: true,
            scale: '2',
            ignoreElements: (el) => {
                if (el.id == 'footer' || el.id == 'close-icon') return true;
            },
        };
        html2canvas(pdfRef.current, config).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'JPEG', 3, 5);
            pdf.save('invoice.pdf');
        });
    };

    useEffect(() => {
        setSum(grandTotal());
    }, [currentInvoice]);

    const grandTotal = () => {
        let summed = 0;
        if (currentInvoice.itemList) {
            currentInvoice.itemList.forEach((item) => {
                console.log(summed);
                summed += parseInt(item.qty) * parseInt(item.price);
            });
        }
        return summed;
    };

    return (
        <>
            <div className='overlay fixed w-screen h-screen opacity-50 bg-black z-10 left-0 top-0'></div>
            <div
                ref={pdfRef}
                className='invoice-view-modal fixed bg-gray-800 text-gray-400 rounded h-5/6 w-96 z-20 inset-0 m-auto py-2 px-3'
            >
                <div className='header'>
                    <p className='invoice-no font-bold text-2xl'>
                        #{currentInvoice.invoiceNo}
                    </p>
                    <IoIosClose
                        id='close-icon'
                        onClick={() => setInvoiceView('')}
                        className='absolute right-3 top-2 cursor-pointer'
                        size={32}
                    />
                </div>
                <div
                    className='invoice-dates mt-2 grid'
                    style={{ gridTemplateColumns: '30% 70%' }}
                >
                    <div className='issued-on flex flex-col'>
                        <span className='text-sm'>Issued on:</span>
                        <span className='font-bold'>
                            {moment(currentInvoice.invoiceDate).format(
                                'MMM D,YYYY'
                            )}
                        </span>
                    </div>
                    <div className='due-on flex flex-col'>
                        <span className='text-sm'>Due on:</span>
                        <span className='font-bold'>
                            {moment(currentInvoice.paymentDue).format(
                                'MMM D,YYYY'
                            )}
                        </span>
                    </div>
                </div>
                <div className='invoice-to mt-5 capitalize'>
                    <p className='text-sm'>Invoice to:</p>
                    <p className='font-bold mt-0.5'>
                        {currentInvoice.clientName}
                    </p>
                    <div className='address'>
                        <p>{currentInvoice.toAddress}</p>
                        <p>{`${currentInvoice.toCity}, ${currentInvoice.toCountry}, ${currentInvoice.toZip}`}</p>
                    </div>
                </div>
                <div className='items border border-gray-600 rounded p-1 my-3'>
                    <div
                        className='grid font-bold text-sm mb-1'
                        style={{ gridTemplateColumns: '50% 10% 20% 20%' }}
                    >
                        <p>Item</p>
                        <p>Qty</p>
                        <p>Price</p>
                        <p>Total</p>
                    </div>
                    {currentInvoice.itemList &&
                        currentInvoice.itemList.map((item) => (
                            <div
                                className='grid'
                                key={item.name}
                                style={{
                                    gridTemplateColumns: '50% 10% 20% 20%',
                                }}
                            >
                                <p className='capitalize'>{item.name}</p>
                                <p>{item.qty}</p>
                                <p>₹{item.price}</p>
                                <p>
                                    ₹{parseInt(item.qty) * parseInt(item.price)}
                                </p>
                            </div>
                        ))}
                </div>
                <div
                    className='grid px-1'
                    style={{ gridTemplateColumns: '80% 20%' }}
                >
                    <div className='additional-notes'>
                        <p className='text-sm'>Additional Notes:</p>
                        <p>{currentInvoice.productDescription}</p>
                    </div>
                    <p className='font-bold text-lg'>₹{sum}</p>
                </div>
                <div
                    id='footer'
                    className='footer absolute bottom-0 left-0 w-full h-auto flex justify-between items-center p-4'
                >
                    <a
                        onClick={() => printDoc()}
                        className='text-blue-800 font-bold flex items-center cursor-pointer'
                    >
                        <IoMdDownload className='mr-2' />
                        DOWNLOAD INVOICE
                    </a>
                    <button
                        onClick={() => setInvoiceView('')}
                        className='bg-gray-700 hover:bg-gray-900 disabled:bg-gray-900 disabled:cursor-default transition-colors duration-100 px-5 py-1 rounded text-lg'
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    );
};

export default InvoiceView;
