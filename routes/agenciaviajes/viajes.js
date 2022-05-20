const router = require('express').Router();
const { getAll, getById, create, update, deleteById, addViajeToCliente} = require('../../models/viajes.model')

router.get('/', (req, res) => {

  getAll()
    .then((result) => { res.json(result) })
    .catch(err => res.json({ error: err.message }));

});

router.post('/', async (req, res) => {

  try {

    const result = await create(req.body);
    console.log(result);
    const newViaje = await getById(result.insertId);

    res.json(newViaje);

  } catch (err) {
    res.json({ error: err.message })
  }

});

  // viajes/idviaje/cliente/idcliente
router.get('/:viajeId/cliente/:clienteId', async (req, res) => {

 try {
      const result =   await  addViajeToCliente(req.params.clienteId, req.params.viajeId)
       
   res.json(result);
   
   
 } catch (error) {
   res.json({ error: err.message });
 }
     
});


router.put('/:viajesId', async (req, res) => {
  try {
    const result = await update(req.params.viajesId, req.body);

    const viajeModificado = await getById(req.params.viajesId);

    res.json(viajeModificado);
  } catch (error) {
    res.json({ error: err.message });
  }
});

router.delete('/:viajeId', async (req, res) => {

  try {
    const result = await deleteById(req.params.viajeId);
    res.json(result)
  } catch (error) {
    res.json({ error: err.message });
  }

});
module.exports = router;
