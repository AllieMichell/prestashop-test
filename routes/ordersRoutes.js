const router = require('express').Router();
const ordersController = require('../controllers/ordersController');

router.get('/', (req, res) => {
    res.send('Orders route working')
});
router.get('/ordersList', ordersController.getOrders);
module.exports = router;