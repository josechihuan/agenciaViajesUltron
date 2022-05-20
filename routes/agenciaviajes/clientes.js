const { getAll, create, getById, update, deleteById} = require('../../models/clientes.model');

const router = require('express').Router();



router.get('/', (req, res) => {

  getAll()
    .then((result) => { res.json(result) })
    .catch(err => res.json({ error: err.message }));

});

router.post('/', async (req, res) => { 
  
  try {

    const result = await create(req.body);
    console.log(result);
    const newCliente = await getById(result.insertId);

      res.json(newCliente);

} catch (err) {
  res.json({error: err.message})
}

});


router.put('/:clienteId', async (req, res) => {
  try {
    const result = await update(req.params.clienteId, req.body);

    const clienteModificado = await getById(req.params.clienteId);

    res.json(clienteModificado);
  } catch (error) {
    res.json({ error: err.message });
  }
});

router.delete('/:clienteId', async (req, res) => {

  try {
    const result = await deleteById(req.params.clienteId);
    res.json(result)
  } catch (error) {
    res.json({ error: err.message });
  }

});


module.exports = router;