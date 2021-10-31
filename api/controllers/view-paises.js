module.exports = {


  friendlyName: 'View paises',


  description: 'Display "Paises" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/paises'
    }

  },


  fn: async function () {
    let paises= await Pais.find();
    // Respond with view.
    //sails.log.debug(paises);
    return {paises};

  }


};
