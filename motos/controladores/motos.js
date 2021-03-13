require('../modelos/motos');

const mongoose = require('mongoose');
const motos = mongoose.model('Motos');

async function recuperarTodos(req, res) {
	try {
      const motosLeidas = await motos.find({});
      return res.send(motosLeidas && motosLeidas.length ? motosLeidas : []);
    } catch (error) {
      return res.status(400).send({
        status: 'failure'
      });
    }
}
async function recuperarUno(req, res) {
	try {
      const motoLeida = await motos.findOne({'_id':req.params.id});

      return res.send(motoLeida ? motoLeida : {});
    } catch (error) {
      return res.status(400).send({
        status: 'failure'
      });
    }
  }
async function addNuevo(req, res) {
    try {
      const moto= req.body;
      if (moto._id == 0) {
	 delete moto._id;
      }
      await new motos(moto).save();
      return res.send({
        status: 'success'
      });
    } catch (error) {
      return res.status(400).send({
        status: 'failure' + error
      });
    }
  }

async function modificar(req, res) {
   try {
      const moto= req.body;
      await motos.updateOne({'_id':moto._id},moto);
      return res.send({
        status: 'success'
      });
    } catch (error) {
      return res.status(400).send({
        status: 'failure'
      });
    }
}

async function eliminar(req, res) {
    try {
      await motos.deleteOne({'_id':req.params.id});
      return res.send({
        status: 'success'
      });
    } catch (error) {
      return res.status(400).send({
        status: 'failure'
      });
    }
}

module.exports = {eliminar, modificar, addNuevo, recuperarTodos,recuperarUno};
