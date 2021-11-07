module.exports = {


  friendlyName: 'Crear',


  description: 'Crear area.',


  inputs: {
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
    await Area.create({
      nombre:inputs.nombre,
      descripcion:inputs.descripcion
    })
    .intercept((err)=>{
      err.message = 'Error al guardar el área: '+err.message;
      return ({error:err.message});
    });
    return exits.success('/area');
  }
};
