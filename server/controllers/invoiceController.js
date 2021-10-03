const Invoice = require('../models/invoice');
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    console.log(err.message, err.code);

    let errors = {};

    Object.values(err.errors).forEach(({ properties }) => {
        errors[properties.path] = properties.message;
    });

    return errors;
};

module.exports = {
    createInvoice: async (req, res) => {
        const {
            invoiceNo,
            fromAddress,
            fromCity,
            fromZip,
            fromCountry,
            clientName,
            clientEmail,
            toAddress,
            toCity,
            toZip,
            toCountry,
            invoiceDate,
            paymentDue,
            status,
            productDetails,
        } = req.body;

        const { user } = req;

        try {
            const response = await Invoice.create({
                user,
                invoiceNo,
                fromAddress,
                fromCity,
                fromZip,
                fromCountry,
                clientName,
                clientEmail,
                toAddress,
                toCity,
                toZip,
                toCountry,
                invoiceDate,
                paymentDue,
                status,
                productDetails,
            });
            res.status(201).json({
                message: 'Invoice created successfully',
                response,
            });
        } catch (err) {
            const errors = handleErrors(err);
            res.status(400).json({ errors });
        }
    },
    getInvoice: (req, res) => {
        const { id } = req.params;
        Invoice.findOne({ _id: id }).exec(async (err, invoice) => {
            if (err) {
                res.status(404).json({
                    error: 'Item not found',
                });
            } else {
                if (invoice) {
                    res.status(200).json({ invoice });
                } else {
                    res.status(404).json({
                        error: 'Item not found',
                    });
                }
            }
        });
    },
    getAllInvoices: async (req, res) => {
        const { user } = req;
        const { pageNo, itemsCount } = req.query;
        const count = await Invoice.find({ user }).countDocuments();

        Invoice.find({ user })
            .select(
                '_id invoiceNo clientEmail clientName status paymentDue invoiceDate productDetails'
            )
            .limit(parseInt(itemsCount))
            .skip((parseInt(pageNo) - 1) * parseInt(itemsCount))
            .exec((err, invoices) => {
                if (err) {
                    res.status(404).json({
                        error: 'Items not found',
                    });
                } else {
                    if (invoices) {
                        res.status(200).json({ invoices, count });
                    } else {
                        res.status(404).json({
                            error: 'Items not found',
                        });
                    }
                }
            });
    },
    getStats: async (req, res) => {
        const { user } = req;
        const statInvoices = await Invoice.find({ user }).select(
            'productDetails status clientEmail'
        );

        const chartData = await Invoice.aggregate([
            { $sort: { paymentDue: -1 } },
            {
                $match: {
                    'productDetails.itemList': {
                        $ne: [],
                    },
                    status: 'paid',
                },
            },
            {
                $group: {
                    _id: {
                        month: {
                            $month: '$paymentDue',
                        },
                        year: {
                            $year: '$paymentDue',
                        },
                        qty: '$productDetails.itemList.qty',
                        price: '$productDetails.itemList.price',
                    },
                },
            },
            {
                $group: {
                    _id: {
                        month: '$_id.month',
                        year: '$_id.year',
                    },
                    data: {
                        $push: {
                            month: '$_id.month',
                            year: '$_id.year',
                            qty: '$_id.qty',
                            price: '$_id.price',
                        },
                    },
                },
            },
        ]);
        res.status(200).json({ statInvoices, chartData });
    },
    updateInvoice: (req, res) => {
        const { id } = req.params;
        const { updatedValues } = req.body;

        try {
            Invoice.findByIdAndUpdate(
                id,
                updatedValues,
                { new: true },
                (err, invoice) => {
                    if (err) {
                        res.status(400).json({
                            error: 'Unable to update invoice',
                        });
                    } else {
                        res.status(200).json({ invoice });
                    }
                }
            );
        } catch (err) {
            res.status(400).json({
                error: 'Unable to update invoice',
            });
        }
    },
    deleteInvoice: (req, res) => {
        const { id } = req.params;

        try {
            Invoice.findByIdAndDelete(id, (err, data) => {
                if (err) {
                    res.status(400).json({ error: 'Unable to delete invoice' });
                } else {
                    res.status(200).json({
                        message: 'Invoice deleted successfully',
                    });
                }
            });
        } catch (err) {
            res.status(400).json({
                error: 'Unable to delete invoice',
            });
        }
    },
    searchInvoice: (req, res) => {
        const { searchString } = req.query;
        const { user } = req;

        Invoice.find({
            $text: { $search: `"${user}" "${searchString}"` },
        }).exec(function (err, invoices) {
            if (err) {
                res.status(400).json({ error: 'No result' });
            } else {
                res.status(200).json({ invoices });
            }
        });
    },
};
