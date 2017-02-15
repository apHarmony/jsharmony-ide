/*
Copyright 2017 apHarmony

This file is part of jsHarmony.

jsHarmony is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

jsHarmony is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this package.  If not, see <http://www.gnu.org/licenses/>.
*/


/*******
 * IDE *
 *******/
/*
global.idesalt = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
global.idecookiesalt = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
var ideroutes = require('jsharmony-ide/routes.js');
var ideconfig = {
  basetemplate: 'index',
  baseurl: '/ide/',
  show_system_errors: true,
  auth: {
    salt: global.idesalt,
    supersalt: global.idesalt,
    sql_auth: "",
    sql_login: "",
    sql_superlogin: "",
    sql_loginsuccess: "",
    sql_passwordreset: "",
    getuser_name: function (user_info, jsh) { return user_info[jsh.map.user_firstname] + ' ' + user_info[jsh.map.user_lastname];; },
    getContextUser: function (user_info, jsh) { return 'S' + user_info[jsh.map.user_id]; }
  },
  globalparams: {
    'user_id': function (req) { return req.user_id; }
  },
  sqlparams: {
  }
}
ideconfig.public_apps = [];
ideconfig.private_apps = [];
app.use('/ide/', cookieParser(global.idecookiesalt, { path: '/' }));
app.use('/ide/', ideroutes(ideconfig));
*/

module.exports = {};