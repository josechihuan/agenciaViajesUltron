const router = require('express').Router();

const agenciaviajesRouterClientes = require('./clientes');
const agenciaviajesRouterHoteles = require('./hoteles');
const agenciaviajesRouteViajes = require('./viajes');

router.use('/clientes', agenciaviajesRouterClientes);
router.use('/hoteles', agenciaviajesRouterHoteles);
router.use('/viajes', agenciaviajesRouteViajes);




module.exports = router;