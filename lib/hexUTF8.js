(function(exports,require){
  (function(_,StringView){
    function a2b(str){
      return new Uint8Array((new StringView(str)).bufferView); //in fact we don't have a Stringview module
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
    typeof _ !== 'undefined' 
      ? _
      : require('lodash'),
    typeof StringView !== 'undefined'
      ? StringView
      : require('Stringview') //in fact it does not exists currently
  )
})(
  typeof module !== 'undefined' 
    && module.exports 
    ? module.exports 
    : window.hexUTF8 = {},
  typeof require !== 'undefined'
    ? require
    : function(module){
      throw new Error('You must load module ' + module +' first')
    }
);