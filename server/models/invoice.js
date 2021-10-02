const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    invoiceNo: {
        type: String,
        required: [true, 'Invoice number field empty'],
    },
    fromAddress: {
        type: String,
        required: [true, 'Address field empty'],
    },
    fromCity: {
        type: String,
        required: [true, 'City field empty'],
    },
    fromZip: {
        type: String,
        required: [true, 'Zip code field empty'],
    },
    fromCountry: {
        type: String,
        required: [true, 'Country field empty'],
    },
    clientName: {
        type: String,
        required: [true, 'Enter Client name'],
    },
    clientEmail: {
        type: String,
    },
    toAddress: {
        type: String,
        required: [true, 'Client Address field empty'],
    },
    toCity: {
        type: String,
        required: [true, 'Client City field empty'],
    },
    toZip: {
        type: String,
        required: [true, 'Client Zip code field empty'],
    },
    toCountry: {
        type: String,
        required: [true, 'Client Country field empty'],
    },
    invoiceDate: {
        type: Date,
        required: [true, 'Invoice date field empty'],
    },
    paymentDue: {
        type: Date,
        required: [true, 'Due date field empty'],
    },
    status: {
        type: String,
        required: [true, 'Status field empty'],
    },
    productDetails: {
        productDescription: {
            type: String,
        },
        itemList: [
            {
                name: {
                    type: String,
                    required: [true, 'Item name field empty'],
                },
                qty: {
                    type: Number,
                    required: [true, 'Quantity field empty'],
                },
                price: {
                    type: Number,
                    required: [true, 'Price field empty'],
                },
            },
        ],
    },
});

invoiceSchema.index({ '$**': 'text' });

const Invoice = mongoose.model('invoices', invoiceSchema);

module.exports = Invoice;
