/**
 * Estudiante.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    apellidos: {
      type: 'string',
      required: true,
    },

    nombres: {
      type: 'string',
      required: true,
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
    },
    foto: {
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
    expedicionDocumento: {
      model: 'municipio',
      columnName: 'exp_documento_id'
    },
    nacionalidad: {
      model: 'pais',
      columnName: 'nacionalidad_id'
    },
    nacimientoMunicipio: {
      model: 'municipio',
      columnName: 'mpo_nacimiento_id'
    },
    fichaMedica: {
      model: 'ficha_medica',
      columnName: 'ficha_medica_id'
    },
    grado: {
      model: 'grado',
      columnName: 'grado_id'
    },

  },

};

