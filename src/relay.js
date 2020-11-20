const { Client } = require('tplink-smarthome-api');

const client = new Client();
const plug = client.getDevice({ host: '192.168.179.14' }).then((device) => {
  device.getSysInfo().then(console.log);
  device.setPowerState(true);
});
