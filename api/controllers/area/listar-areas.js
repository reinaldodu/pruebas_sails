module.exports = {


  friendlyName: 'Listar',


  description: 'Listar areas.',


  inputs: {

  },


  exits: {
    success: {
      viewTemplatePath: 'pages/area/area-listar'
    }

  },


  fn: async function () {
    let areas= await Area.find().sort('id ASC').populate('asignaturas');
    console.log(areas);
    return {areas};
  }


};
