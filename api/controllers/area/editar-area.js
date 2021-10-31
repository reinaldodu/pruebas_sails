module.exports = {


  friendlyName: 'Editar',


  description: 'Editar area.',


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
      responseType: 'view',
      viewTemplatePath: 'pages/area/area-editar'
    },
    notFound: {
      description: 'No area with the specified ID was found in the database.',      
      responseType: 'notFound'
    }
  },


  fn: async function (inputs,exits) {

    // Look up the area whose ID was specified in the request.
    // Note that we don't have to validate that `areaId` is a number;
    // the machine runner does this for us and returns `badRequest`
    // if validation fails.
    let area = await Area.findOne({ id: inputs.areaId });

    // If no area was found, respond "notFound" (like calling `res.notFound()`)
    if (!area) { sails.log('Esta área no existe'); throw 'notFound'; }

    // Display a personalized welcome view.
    return exits.success({area});
  }
};