module.exports = {


  friendlyName: 'Eliminar',


  description: 'Eliminar area.',


  inputs: {
    areaId: {
      description: 'Id del área a eliminar',
      type: 'number',
      required: true
    }

  },

  exits: {
    success: {
      responseType: 'redirect'
    },
    invalid: {
      statusCode: 500,
      description: 'No es posible eliminar el área'
    },
    noFound: {
      statusCode: 404,
      description: 'No existe Id del área'
    }
  },

  fn: async function (inputs,exits) {
    let area = await Area.destroyOne({id:inputs.areaId})
    //Interceptar error de adaptador de BD
    .intercept({name:'AdapterError'}, (err)=> {
      return exits.invalid({error:err.message});
    });
    //Error si no existe el Id del área
    if (!area){
      return exits.noFound({error:'Id de área no existe'});
    }
    return exits.success('/area');
  }
};
