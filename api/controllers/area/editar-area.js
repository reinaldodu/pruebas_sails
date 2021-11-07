module.exports = {


  friendlyName: 'Editar',


  description: 'Editar area.',


  inputs: {
    areaId: {
      description: 'The ID of the area to look up.',
      type: 'number',
      required: true
    }
  },

  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/area/area-editar'
    },
    notFound: {
      description: 'No area with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },


  fn: async function (inputs,exits) {

    let area = await Area.findOne({ id: inputs.areaId });
    // If no area was found, respond "notFound" (like calling `res.notFound()`)
    if (!area){
      return exits.notFound({error:'Id de área no existe'});
    }

    return exits.success({area});
  }
};
