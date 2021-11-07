module.exports = {


  friendlyName: 'Crear estudiante',


  description: '',


  inputs: {
    apellidos: {
      description: 'Nombre del estudiante',
      type: 'string',
      required: true
    },
    nombres: {
      description: 'Descripción del area a crear',
      type: 'string',
      required: true
    },
    documento: {
      type: 'string',
      required: true,
    },
    tipo_documento: {
      type: 'string',
      required: true,
    },
    fecha_nacimiento: {
      type: 'ref',
      columnType: 'date',
      required: true,
    },
    sexo: {
      type: 'string',
      required: true,
    },
    direccion: {
      type: 'string',
      required: true,
    },
    barrio: {
      type: 'string',
    },
    telefono: {
      type: 'string',
    },
    celular: {
      type: 'string',
    },
    email: {
      type: 'string',
      isEmail: true,
    },
    foto: {
      type: 'string',
    },
    expedicionDocumento: {
      type: 'number',
      required: true,
    },
    nacionalidad: {
      type: 'number',
      required: true,
    },
    grado: {
      type: 'number',
      required: true,
    },

  },


  exits: {
    success: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs,exits) {
    await Estudiante.create({
      apellidos:inputs.apellidos,
      nombres:inputs.nombres,
      documento:inputs.documento,
      tipo_documento:inputs.tipo_documento,
      fecha_nacimiento:inputs.fecha_nacimiento,

    })
    .intercept((err)=>{
      err.message = 'Error al guardar el estudiante: '+err.message;
      return ({error:err.message});
    });
    return exits.success('/estudiante');

  }


};
