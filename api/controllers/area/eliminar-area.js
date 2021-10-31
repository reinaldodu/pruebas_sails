module.exports = {


  friendlyName: 'Eliminar',


  description: 'Eliminar area.',


  inputs: {
    areaId: {
      description: 'The ID of the area to look up.',
      // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
      // if the `areaId` parameter is not a number.
      type: 'number',
      // By making the `areaId` parameter required, Sails will automatically respond with
      // `res.badRequest` if it's left out.
      required: true
    }

  },


  exits: {
    success: {
      responseType: 'redirect'
    },
    invalid: {
      statusCode: 500,
      description: 'No se puede eliminar el área si tiene asignaturas' // this will not go in response
    }
  },


  fn: async function (inputs,exits) {   
    
    let identificador=inputs.areaId;
    
    let tieneAsignaturas = await Asignatura.find({area:inputs.areaId});
    console.log(tieneAsignaturas);
    if (tieneAsignaturas.length===0) {
      let deleteArea = await Area.destroyOne({id:inputs.areaId});
      
      if (deleteArea) {
        sails.log(`Se eliminó el área con ID ${identificador}`);
      }
      else {
        sails.log('Esta área no existe');
      } 
      error=false;
      return exits.success('/area',error);
    }
    else {
      error =true;
      return exits.invalid(error);
    }
  }

};
