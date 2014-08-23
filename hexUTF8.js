(function(exports){
  function a2b(str){
    return new Uint8Array((new StringView(str)).bufferView);
  }
  function b2a(b){
    return (new StringView(b)).toString();
  }
  function a2h(str){
    return (_.map(a2b(str),function(v){
      return (0x100 + v).toString(16).slice(1)
    }) || '').join('');
  }

  function h2a(hex){
    var r = [];
    for(var i = 0, l = hex.length; i < l; i+=2){
      r.push(0 | '0x' + hex.substr(i,2))
    }
    return b2a(r);
  }
  exports.a2h = a2h;
  exports.h2a = h2a;
})(
  typeof module !== 'undefined' 
  && module.exports 
  ? module.exports 
  : window.hexUTF8 = {}
);