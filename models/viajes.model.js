const { executeQuery, executeQueryOne } = require('../helpers/utils');

const getAll = () => {

  return executeQuery('select * from viajes ');

}
const create = ({ fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id }) => {
  return executeQuery('insert into viajes (fecha_salida, fecha_vuelta, id_vuelo_ida,id_vuelo_vuelta, hotel_id ) values (?,?,?,?,?)',
    [fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id]);
}

const addViajeToCliente = (clienteId, viajeId) => {
  return executeQuery('insert into clientes_viajes (cliente_id, viaje_id) values (?,?)', [clienteId, viajeId]);

}

const getById = (pViajesId) => {

  return executeQueryOne('select * from viajes where id=?', [pViajesId]);
}
const update = (pViajesId, { fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id  }) => {

  return executeQuery('update viajes set fecha_salida=?, fecha_vuelta=?, id_vuelo_ida=?, id_vuelo_vuelta=?, hotel_id=? where id=?', [fecha_salida, fecha_vuelta, id_vuelo_ida, id_vuelo_vuelta, hotel_id, pViajesId])
}

const deleteById = (pViajesId) => {

  return executeQuery('delete from viajes where id=?', [pViajesId]);


}

module.exports = {

  getAll, create, getById, update, deleteById, addViajeToCliente
}