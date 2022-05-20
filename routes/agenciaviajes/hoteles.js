const router = require('express').Router();
const {getAll, getById, create, update, deleteById } = require('../../models/hoteles.model')

router.get('/', (req, res) => {

  getAll()
    .then((result) => { res.json(result) })
    .catch(err => res.json({ error: err.message }));

});

router.post('/', async (req, res) => {

  try {

    const result = await create(req.body);
    console.log(result);
    const newHotel = await getById(result.insertId);

    res.json(newHotel);

  } catch (err) {
    res.json({ error: err.message })
  }

});


router.put('/:hotelesId', async (req, res) => {
  try {
    const result = await update(req.params.hotelesId, req.body);

    const hotelModificado = await getById(req.params.hotelesId);

    res.json(hotelModificado);
  } catch (error) {
    res.json({ error: err.message });
  }
});

router.delete('/:hotelId', async (req, res) => {

  try {
    const result = await deleteById(req.params.hotelId);
    res.json(result)
  } catch (error) {
    res.json({ error: err.message });
  }

});



module.exports = router;