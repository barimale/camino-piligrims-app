// Rename this sample file to main.js to use on your project.
// The main.js file will be overwritten in updates/reinstalls.

var rn_bridge = require('rn-bridge');

// Echo every message received from react-native.
rn_bridge.channel.on('message', (msg) => {
  rn_bridge.channel.send(msg);
} );

rn_bridge.app.on('pause', (pauseLock) => {
  // server.close( () => {
  //   // App will only suspend after the server stops listening for connections and current connections are closed.
  //   pauseLock.release();
  // });
  console.log('[node] app paused.');
});

rn_bridge.app.on('resume', () => {
  console.log('[node] app resumed.');
});

// Inform react-native node is initialized.
rn_bridge.channel.send("Node was initialized.");