const { Router } = require('express');
const invoiceController = require('../controllers/invoiceController');

const router = Router();

router.post('/', invoiceController.createInvoice);
router.patch('/:id', invoiceController.updateInvoice);
router.delete('/:id', invoiceController.deleteInvoice);
router.get('/list', invoiceController.getAllInvoices);
router.get('/search', invoiceController.searchInvoice);
router.get('/:id', invoiceController.getInvoice);

module.exports = router;
