"use strict";

var _require = require('tplink-smarthome-api'),
    Client = _require.Client;

var client = new Client();
var plug = client.getDevice({
  host: '192.168.179.14'
}).then(function (device) {
  device.getSysInfo().then(console.log);
  device.setPowerState(true);
});