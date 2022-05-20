const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {

  return executeQuery('select * from hoteles ');

}
const create = ({ nombre, direccion, ciudad, num_estrellas, descripcion,tarifa}) => {

  return executeQuery('insert into hoteles (nombre, direccion, ciudad, num_estrellas, descripcion,tarifa) values (?,?,?,?,?,?)',
    [nombre, direccion, ciudad, num_estrellas, descripcion, tarifa]);
}



const getById = (pHotelesId) => {

  return executeQueryOne('select * from hoteles where id=?', [pHotelesId]);
}
const update = (pHotelesId, { nombre, direccion, ciudad, num_estrellas, descripcion, tarifa}) => {

  return executeQuery('update hoteles set nombre=?, direccion=?, ciudad=?, num_estrellas=?, descripcion=?, tarifa=? where id=?', [nombre, direccion, ciudad, num_estrellas, descripcion, tarifa, pHotelesId])
}

const deleteById = (pHotelesId) => {

  return executeQuery('delete from hoteles where id=?', [pHotelesId]);


}

module.exports = {

  getAll, create, getById, update, deleteById
}