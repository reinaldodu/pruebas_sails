module.exports = {


  friendlyName: 'Actualizar',


  description: 'Actualizar area.',


  inputs: {
    areaId: {
      description: 'The ID of the area to look up.',
      // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
      // if the `areaId` parameter is not a number.
      type: 'number',
      // By making the `areaId` parameter required, Sails will automatically respond with
      // `res.badRequest` if it's left out.
      required: true
    },
    nombre: {
      description: 'Nombre del area a crear',
      type: 'string',
      required: true
    },
    descripcion: {
      description: 'Descripción del area a crear',
      type: 'string'
    }
  },

  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs,exits) {

    var updatedArea = await Area.updateOne({id:inputs.areaId})
    .set({
      nombre:inputs.nombre,
      descripcion:inputs.descripcion
    });

    if (updatedArea) {
      sails.log(`Se actualizó el área de ${inputs.nombre}`);
    }
    else {
      sails.log('Esta área no existe');
    }
    return exits.success('/area');
  }
};