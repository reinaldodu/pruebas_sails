module.exports = {


  friendlyName: 'Listar',


  description: 'Listar areas.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/area/area-consultar'
    }

  },

  fn: async function () {
    let areas= await Area.find().sort('id ASC').populate('asignaturas')
    .intercept((err)=>{
      err.message = 'Error al consultar las áreas: '+err.message;
      return ({error:err.message});
    });
    return {areas};
  }
};
