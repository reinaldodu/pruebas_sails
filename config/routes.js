/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'GET /paises': { action: 'view-paises'},

  //RUTAS AREA
  'GET /area':                        {action: 'area/listar-areas'},
  'POST /area/crear':                 {action: 'area/crear-area'},
  'GET /area/editar/:areaId':         {action: 'area/editar-area'},
  'POST /area/actualizar/:areaId':    {action: 'area/actualizar-area'},
  'GET /area/eliminar/:areaId':       {action: 'area/eliminar-area'},
  'POST /asignatura/crear/:areaId':   {action: 'asignatura/crear-asignatura'},

  // RUTAS API
  //**************/
  //AREA
  // 'GET /api/v1/area': { action: 'area/listar' },
  // 'POST /api/v1/area/crear': { action: 'area/crear' },
  // 'PUT /api/v1/area/editar/:areaId': { action: 'area/editar' },
  // 'GET /admin/area/eliminar/:areaId': { action: 'area/eliminar' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
