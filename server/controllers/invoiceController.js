const Invoice = require('../models/invoice');

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
            user,
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
            productDetails,
        } = req.body;

        try {
            const response = await Invoice.create({
                user,
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
    getAllInvoices: (req, res) => {
        const { pageNo, itemsCount, user } = req.query;
        console.log(pageNo, itemsCount);

        Invoice.find({ user })
            .limit(parseInt(itemsCount))
            .skip((parseInt(pageNo) - 1) * parseInt(itemsCount))
            .exec((err, invoices) => {
                if (err) {
                    res.status(404).json({
                        error: 'Items not found',
                    });
                } else {
                    if (invoices) {
                        res.status(200).json({ invoices });
                    } else {
                        res.status(404).json({
                            error: 'Items not found',
                        });
                    }
                }
            });
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
        const { user } = req.body;

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
