module.exports = (sequelize, Sequelize) =>

{
  const Colegio = sequelize.define ("colegio", {
nombre:{
  type: Sequelize.STRING
},
apellidos:{
  type: Sequelize.STRING
},
grado: {
  type: Sequelize.STRING
},
Seccion: {
  type: Sequelize.STRING
},
Padre_o_encargado:{
  type: Sequelize.STRING
},
Profesor_encargado:{
  type: Sequelize.STRING
},

  });
  return Colegio
};