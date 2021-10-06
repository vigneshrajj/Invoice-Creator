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
            productDescription,
            itemList,
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
                productDescription,
                itemList,
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
                '_id invoiceNo clientEmail clientName status paymentDue invoiceDate itemList'
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
            'itemList status clientEmail'
        );

        const chartData = await Invoice.aggregate([
            { $sort: { paymentDue: -1 } },
            {
                $match: {
                    itemList: {
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
                        qty: '$itemList.qty',
                        price: '$itemList.price',
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
        if (searchString) {
            Invoice.find({
                $text: { $search: `"${user}" "${searchString}"` },
            }).exec(function (err, invoices) {
                if (err) {
                    res.status(400).json({ error: 'No result' });
                } else {
                    res.status(200).json({ invoices });
                }
            });
        } else {
            res.status(200).json({ invoices: [] });
        }
    },
    applyFilters: async (req, res) => {
        try {
            const { user } = req;
            const { status, dateAdded } = req.query;
            let invoices = [];
            if (status) {
                invoices = await Invoice.find({ user, status });
            } else {
                invoices = await Invoice.find({
                    user,
                    invoiceDate: {
                        $gte: new Date(
                            Date.now() - dateAdded * 24 * 60 * 60 * 1000
                        ),
                    },
                });
            }
            res.status(200).json({ invoices });
        } catch (err) {
            res.status(400).json('Unable to fetch clients: ', err);
        }
    },
    getClients: async (req, res) => {
        try {
            const { user } = req;
            const clients = await Invoice.aggregate([
                { $match: { user } },
                {
                    $group: {
                        _id: {
                            clientEmail: '$clientEmail',
                            clientName: '$clientName',
                            toAddress: '$toAddress',
                            toCity: '$toCity',
                            toZip: '$toZip',
                            toCountry: '$toCountry',
                        },
                    },
                },
                {
                    $group: {
                        _id: {
                            clientEmail: '$_id.clientEmail',
                        },
                        data: {
                            $push: {
                                clientEmail: '$_id.clientEmail',
                                clientName: '$_id.clientName',
                                toAddress: '$_id.toAddress',
                                toCity: '$_id.toCity',
                                toZip: '$_id.toZip',
                                toCountry: '$_id.toCountry',
                            },
                        },
                    },
                },
            ]).limit(3);

            res.status(200).json({ clients });
        } catch (err) {
            res.status(400).json('Unable to fetch clients: ', err);
        }
    },
};
