module.exports = {


  friendlyName: 'View estudiante crear',


  description: 'Display "Estudiante crear" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/estudiante/estudiante-crear'
    }

  },


  fn: async function () {
    //Consultar grados
    let grados= await Grado.find().sort('id ASC')
    .intercept((err)=>{
      err.message = 'Error al consultar los grados: '+err.message;
      return ({error:err.message});
    });
    //Consultar Departamentos
    let departamentos= await Departamento.find().sort('id ASC')
    .intercept((err)=>{
      err.message = 'Error al consultar los departamentos: '+err.message;
      return ({error:err.message});
    });
    //Consultar Paises    
    let paises= await Pais.find()
    .intercept((err)=>{
      err.message = 'Error al consultar los paises: '+err.message;
      return ({error:err.message});
    });
    return ({grados, departamentos, paises});
  }

};
