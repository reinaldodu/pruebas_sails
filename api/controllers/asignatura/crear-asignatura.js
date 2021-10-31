module.exports = {


  friendlyName: 'Crear asignatura',


  description: '',


  inputs: {
    areaId: {
      description: 'ID del área de la que depende la asignatura',
      type: 'number',
      required: true
    },
    nombre: {
      description: 'Nombre de la asignatura a crear',
      type: 'string',
      required: true
    },
    descripcion: {
      description: 'Descripción de la asignatura a crear',
      type: 'string'
    }
  },

  exits: {
    success: {
      responseType: 'redirect'
    },
    invalid: {
      statusCode: 409,
      description: 'asignatura create error' // this will not go in response
    },
  },

  fn: async function (inputs,exits) {
    //Se verifica que el Id del área exista
    verificaArea=await Area.findOne(inputs.areaId);
    //Si existe el Id del área se crea la asignatura
    if (verificaArea) {
      await Asignatura.create({
        nombre:inputs.nombre,
        descripcion:inputs.descripcion,
        area:inputs.areaId
      })
      .intercept((err)=>{
        err.message = 'Error al guardar la asignatura: '+err.message;
        return err;
      });
    }
    else {
      return exits.invalid({error:'Id área inválido'});
    }
    return exits.success('/area');
  }
};
