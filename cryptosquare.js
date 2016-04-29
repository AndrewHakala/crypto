// create our Crypto class
var Crypto = function(text) {
  this.text = text;
};

Crypto.prototype.normalizePlaintext = function() {
  return this.text.replace(/[\W]/g, "").toLowerCase();
};

Crypto.prototype.size = function() {
  var length = this.normalizePlaintext().length;
  return Math.ceil(Math.sqrt(length));
};

Crypto.prototype.plaintextSegments = function() {
  var segments = [],
    npt = this.normalizePlaintext(),
    size = this.size();
  //loop through all caharacters is normal plain text
  for (var i = 0; i < npt.length; i += size) {
    //add a string if characters to our array of segmnets 
    segments.push(npt.substr(i, size));
  }

  // return an array of strings representing
  // plain text segments
  return segments;
};

Crypto.prototype.ciphertext = function() {
  var code = "",
    segs= this.plaintextSegments(),
    size = this.size(), 
    
  // loop through the columns
  for (var i = 0; i < size; i += 1) {
    // loop through the rows
    for (var j = 0; j < segs.length; j += 1) {
      code += segs[j].charAt(i);
    }
  }

  // return string representing coded message
  return code;
};

module.exports = Crypto;