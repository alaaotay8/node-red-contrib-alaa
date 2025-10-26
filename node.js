module.exports = function(RED) {
  function LowerCaseNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function(msg) {
      // Example default behavior: convert payload to lowercase if it's a string
      if (typeof msg.payload === "string") {
        msg.payload = msg.payload.toLowerCase();
      } else {
        // fallback behavior (example from the TP): return a constant name
        msg.payload = "Taiponrock";
      }
      node.send(msg);
    });
  }
  RED.nodes.registerType("lower-case", LowerCaseNode);
}
