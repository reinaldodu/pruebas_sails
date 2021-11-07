module.exports = {


  friendlyName: 'Consultar municipios',


  description: '',


  inputs: {
    departamentoId: {
      description: 'Id del Departamento para consultar los Municipios',
      type: 'number',
      required: true
    }
  },


  exits: {
    success: {
      statusCode: 200,
      description: 'Consulta de municipios exitosa'
    },
    noFound: {
      statusCode: 404,
      description: 'No existe Id del área'
    }

  },

  fn: async function (inputs,exits) {
    let municipios= await Municipio.find({ departamento: inputs.departamentoId }).sort('nombre ASC');
    if (municipios.length===0){
      return exits.noFound({error:'Id de departamento no existe'});
    }
    return exits.success ({municipios});
  }
};
