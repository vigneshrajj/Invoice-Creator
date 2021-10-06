const { Router } = require('express');
const invoiceController = require('../controllers/invoiceController');
const { getUser } = require('../controllers/authController');

const router = Router();

router.post('/', getUser, invoiceController.createInvoice);
router.patch('/:id', invoiceController.updateInvoice);
router.delete('/:id', invoiceController.deleteInvoice);
router.get('/list', getUser, invoiceController.getAllInvoices);
router.get('/search', getUser, invoiceController.searchInvoice);
router.get('/stats', getUser, invoiceController.getStats);
router.get('/clients', getUser, invoiceController.getClients);
router.get('/filters', getUser, invoiceController.applyFilters);
router.get('/:id', invoiceController.getInvoice);

module.exports = router;
