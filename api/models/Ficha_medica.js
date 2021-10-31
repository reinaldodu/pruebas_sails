/**
 * Ficha_medica.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    eps: {
      type: 'string',
      required: true,
    },
    prepagada: {
      type: 'string',
    },
    talla: {
      type: 'number',
      columnType: 'float',
      required: true,
    },
    peso: {
      type: 'number',
      columnType: 'float',
      required: true,
    },
    rh: {
      type: 'string',
      required: true,
    },
    clinica: {
      type: 'string',
    },
    alergias: {
      type: 'boolean',
    },
    caso_alergias: {
      type: 'string',
    },
    cuidados_especiales: {
      type: 'string',
    },
    tel_emergencia: {
      type: 'string',
    },
    observaciones: {
      type: 'string',
    },
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

