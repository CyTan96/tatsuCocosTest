System.register("chunks:///_virtual/Clicker.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,i,c,o,n,s,a;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,i=e.initializerDefineProperty,c=e.assertThisInitialized},function(e){o=e.cclegacy,n=e._decorator,s=e.Label,a=e.Component}],execute:function(){var l,u,p,f,h;o._RF.push({},"95f48ciw55BY6sv1eUiqbBK","Clicker",void 0);var b=n.ccclass,d=n.property;e("Clicker",(l=b("Clicker"),u=d(s),l((h=r((f=function(e){function r(){for(var r,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return r=e.call.apply(e,[this].concat(o))||this,i(r,"scoreLabel",h,c(r)),r.score=0,r}t(r,e);var o=r.prototype;return o.start=function(){this.updateScore()},o.updateScore=function(){this.scoreLabel&&(this.scoreLabel.string="Score: "+this.score)},o.onClick=function(){this.score++,this.updateScore()},o.update=function(e){},r}(a)).prototype,"scoreLabel",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),p=f))||p));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Clicker.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});