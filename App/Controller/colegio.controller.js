const db = require("../Models");
const Colegio = db.colegio;
const Op = db.Sequelize.Op;

exports.create = (req, res)=>{
  if(!req.body.nombre){

    res.status(400).send({

      message:"El contenido no puede estar vacio!"
    });

    return;
  }

  const colegio = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    grado: req.body.grado,
    Seccion: req.body.Seccion,
    Padre_o_encargado: req.body.Padre_o_encargado,
    Profesor_encargado: req.body.Profesor_encargado

  };

  Colegio.create(colegio)

  .then(data =>{

    res.send(data);

  })

  .catch(err=>{

    res.status(500).send({

      message:

      err.message || "Ocurrio algun error mientras se creaba el usuario"

    });

  });

};



exports.findAll = (req, res) =>{

  const nombre = req.query.nombre;

  var condition = nombre ? {nombre: {[Op.iLike]: `%${nombre}%`} }: null;

Colegio.findAll ({ where: condition})

.then(data => {

  res.send(data);

  })

.catch(err=>{

  res.status(500).send({

    message:

    err.message || "Ocurrio un error al buscar clientes"

  });

});



};


exports.findOne = (req, res) => {

  const id = req.params.id;

  Colegio.findByPk(id)

  .then(data =>{

    res.send(data);

  })

  .catch(err => {

    res.status(500).send({

      message: "Error al buscar el cliente con el ID = " + id

    });

  });

};



exports.update = (req, res) =>{

  const id = req.params.id;

  Colegio.update(req.body, {

    where: {id: id}

  })

  .then(num =>{

    if (num==1){

      res.send({

        message: "El cliente fue actualizado correctamente."

      });

    } else{

      res.send({

        message:`No se pudo actualizar el cliente con el ID=${id}. Talvez el cliente no fue encontrado o el cuerpo esta vacio.`

      });

    }

  })

  .catch(err => {

res.status(500).send({

  message: "Error al actualizar al cliente con el ID = "+id

});

  });

};



exports.delete = (req, res) => {
  const id = req.params.id;
  Colegio.destroy({
    werhe: {id: id}
  })

  .then(num => {

    if (num ==1)

    {
      res.send({
        message: "El cliente fue eliminado exitosamente!"
      });

    } else{
      res.send({
        message: `No se pudo eliminar el cliente con el id = ${id}. El cliente no fue encontrado`
      });
    }
  })

  .catch(err =>{
    res.status(500).send({
      message: "No se pudo eliminar el Cliente con el id="+id
    });

  });

};

exports.deleteAll = (req, res) =>{
  Colegio.destroy({
    where:{},
    truncate: false
  })
  .then(nums =>{
    res.send({
      message:`${nums} clientes fueron eliminados exitosamente`
    });

})
    .catch(err =>{
      res.status(500).send({
        message:
        err.message || "Ocurrio un error mientras se eliminaban todos los clientes"
      });
    });
  };