const express = require('express');
const router = express.Router();
const infactibilidades = require('../data/infactibilidades.json');
const recursos = require('../data/recursos.json');
const reservas = require('../data/reservas.json');

module.exports = function(app, mountPoint) {
  router.get('/', function(req, res, next) {
    res.render('index');
  });

  const io = app.io;
  io.on('connection', (socket) => {
    console.log('New user from Socket with id: ', socket.id);
    socket.emit('data', {
      recursos: recursos,
      reservas: reservas,
      infactibilidades: infactibilidades
    });
  });

  app.use(mountPoint, router);
}
