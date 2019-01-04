const { Multiplexer } = require('omnistreams-concurrent');
const ab2str = require('arraybuffer-to-string')
const str2ab = require('string-to-arraybuffer')

// Helper functions for converting to/from bytes
function encodeObject(obj) {
  return new Uint8Array(str2ab(JSON.stringify((obj))))
}

function decodeObject(rawMessage) {
  return JSON.parse(ab2str(rawMessage))
}

module.exports = {
  encodeObject,
  decodeObject,
  Multiplexer,
}
