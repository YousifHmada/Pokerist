webpackJsonp([1],{"+h1B":function(l,n,t){"use strict";var u=t("/oeL"),e=t("aR8+"),o=t("wQAS"),r=t("q4dy"),a=t("qbdv"),i=t("fc+i"),c=t("f9zQ"),s=t("fL27"),d=t("EyWH"),_=t("bm2B"),p=t("V8+5"),f=t("l6RC"),h=t("j5BN"),g=t("8Xfy"),m=t("Lpd/"),y=t("YXpL"),b=t("SlD5"),S=t("ghl+");t.d(n,"a",function(){return v});var v=u.b(e.a,[o.a],function(l){return u.c([u.d(512,u.e,u.f,[[8,[r.a]],[3,u.e],u.g]),u.d(5120,u.h,u.i,[[3,u.h]]),u.d(4608,a.a,a.b,[u.h]),u.d(4608,u.j,u.j,[]),u.d(5120,u.k,u.l,[]),u.d(5120,u.m,u.n,[]),u.d(5120,u.o,u.p,[]),u.d(4608,i.b,i.c,[a.c]),u.d(6144,u.q,null,[i.b]),u.d(4608,i.d,i.e,[]),u.d(5120,i.f,function(l,n,t,u){return[new i.g(l),new i.h(n),new i.i(t,u)]},[a.c,a.c,a.c,i.d]),u.d(4608,i.j,i.j,[i.f,u.r]),u.d(135680,i.k,i.k,[a.c]),u.d(4608,i.l,i.l,[i.j,i.k]),u.d(5120,c.a,s.a,[]),u.d(5120,c.b,s.b,[]),u.d(4608,c.c,s.c,[c.a,c.b]),u.d(5120,u.s,s.d,[i.l,c.c,u.r]),u.d(6144,i.m,null,[i.k]),u.d(4608,u.t,u.t,[u.r]),u.d(4608,i.n,i.n,[a.c]),u.d(4608,i.o,i.o,[a.c]),u.d(4608,d.a,s.e,[u.s,i.p]),u.d(4608,_.a,_.a,[]),u.d(4608,p.a,p.a,[]),u.d(6144,f.a,null,[i.p]),u.d(4608,f.b,f.b,[[2,f.a]]),u.d(4608,h.a,h.a,[]),u.d(4608,g.a,g.a,[p.a]),u.d(4608,g.b,g.b,[g.a,p.a,u.r]),u.d(136192,g.c,g.d,[[3,g.c],p.a]),u.d(5120,g.e,g.f,[[3,g.e],[2,g.g],p.a]),u.d(5120,g.h,g.i,[[3,g.h],u.r,p.a]),u.d(512,a.d,a.d,[]),u.d(1024,u.u,i.q,[]),u.d(1024,u.v,function(l,n){return[i.r(l,n)]},[[2,i.s],[2,u.w]]),u.d(512,u.x,u.x,[[2,u.v]]),u.d(131584,u.y,u.y,[u.r,u.z,u.A,u.u,u.e,u.x]),u.d(2048,u.B,null,[u.y]),u.d(512,u.C,u.C,[u.B]),u.d(512,i.t,i.t,[[3,i.t]]),u.d(512,s.f,s.f,[]),u.d(512,_.b,_.b,[]),u.d(512,_.c,_.c,[]),u.d(512,p.b,p.b,[]),u.d(512,m.a,m.a,[]),u.d(512,h.b,h.b,[]),u.d(512,f.c,f.c,[]),u.d(256,h.c,!0,[]),u.d(512,h.d,h.d,[[2,h.c]]),u.d(512,y.a,y.a,[]),u.d(512,b.a,b.a,[]),u.d(512,h.e,h.e,[]),u.d(512,g.j,g.j,[]),u.d(512,S.a,S.a,[]),u.d(512,e.a,e.a,[])])})},0:function(l,n,t){l.exports=t("cDNt")},"Hj+J":function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=[".example-full-width[_ngcontent-%COMP%]{width:100px}@media only screen and (max-width:700px){.example-full-width[_ngcontent-%COMP%]{width:40px}}"]},NhKt:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=[".example-container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.controllers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .example-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .newGame[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%}.controllers[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:10px}.newGame[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:10px}.container-table[_ngcontent-%COMP%]{margin:10px auto}table[_ngcontent-%COMP%]{margin-top:20px}.addButton[_ngcontent-%COMP%]{bottom:10px;right:10px}.addButton[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]{z-index:5000;position:fixed}.header[_ngcontent-%COMP%]{width:100%;top:0;left:0}.main[_ngcontent-%COMP%]{z-index:200;margin-top:80px}"]},VcHD:function(l,n,t){"use strict";var u=t("/oeL");t.d(n,"a",function(){return e});var e=function(){function l(){this.players=[],this.screenShots=[],this.scoreUpdated=new u.S,null!=localStorage.getItem("screenShots")&&null!=localStorage.getItem("players")&&(this.players=JSON.parse(localStorage.getItem("players")),this.screenShots=JSON.parse(localStorage.getItem("screenShots")))}return l.prototype.getPlayers=function(){return this.players},l.prototype.addPlayer=function(l){this.players.push(l);var n=[];this.players.forEach(function(l){n.push(l.score)}),this.screenShots[0]=n,localStorage.setItem("players",JSON.stringify(this.players)),localStorage.setItem("screenShots",JSON.stringify(this.screenShots))},l.prototype.updateScore=function(){this.scoreUpdated.emit();var l=[];this.players.forEach(function(n){l.push(n.score)}),this.screenShots.push(l),localStorage.setItem("players",JSON.stringify(this.players)),localStorage.setItem("screenShots",JSON.stringify(this.screenShots))},l.prototype.getScreenShots=function(){return this.screenShots},l.prototype.clearHistory=function(){localStorage.removeItem("players"),localStorage.removeItem("screenShots"),this.players=[],this.screenShots=[]},l.ctorParameters=function(){return[]},l}()},VnIc:function(l,n,t){"use strict";var u=t("VcHD");t.d(n,"a",function(){return e});var e=function(){function l(l){this.playerService=l,this.transaction=0}return l.prototype.ngOnInit=function(){var l=this;this.playerService.scoreUpdated.subscribe(function(){l.player.score+=l.transaction,l.transaction=0})},l.ctorParameters=function(){return[{type:u.a}]},l}()},"aR8+":function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){}return l}()},cDNt:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t("/oeL"),e=t("p5Ee"),o=t("rgUS"),r=(t.n(o),t("+h1B")),a=t("fc+i");e.a.production&&t.i(u.a)(),t.i(a.a)().bootstrapModuleFactory(r.a)},eS0w:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(l,n){void 0===n&&(n=0),this.name=l,this.score=n}return l}()},kgqD:function(l,n,t){"use strict";function u(l){return r._22(0,[(l()(),r._23(0,0,null,null,20,"mat-form-field",[["class","example-full-width mat-input-container mat-form-field"]],[[2,"mat-input-invalid",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-focused",null],[2,"mat-primary",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,a.a,a.b)),r._26(1,7389184,null,6,i.c,[r.M,r.L,r.T,[2,c.i]],null,null),r._31(335544320,1,{_control:0}),r._31(335544320,2,{_placeholderChild:0}),r._31(603979776,3,{_errorChildren:1}),r._31(603979776,4,{_hintChildren:1}),r._31(603979776,5,{_prefixChildren:1}),r._31(603979776,6,{_suffixChildren:1}),r._26(8,16384,null,0,c.j,[],null,null),(l()(),r._24(-1,1,["\n    "])),(l()(),r._23(10,0,null,1,9,"input",[["class","mat-input-element mat-form-field-autofill-control"],["matInput",""],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[1,"id",0],[8,"placeholder",0],[8,"disabled",0],[8,"required",0],[8,"readOnly",0],[1,"aria-describedby",0],[1,"aria-invalid",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"],[null,"focus"]],function(l,n,t){var u=!0,e=l.component;if("input"===n){u=!1!==r._27(l,11)._handleInput(t.target.value)&&u}if("blur"===n){u=!1!==r._27(l,11).onTouched()&&u}if("compositionstart"===n){u=!1!==r._27(l,11)._compositionStart()&&u}if("compositionend"===n){u=!1!==r._27(l,11)._compositionEnd(t.target.value)&&u}if("change"===n){u=!1!==r._27(l,12).onChange(t.target.value)&&u}if("input"===n){u=!1!==r._27(l,12).onChange(t.target.value)&&u}if("blur"===n){u=!1!==r._27(l,12).onTouched()&&u}if("blur"===n){u=!1!==r._27(l,18)._focusChanged(!1)&&u}if("focus"===n){u=!1!==r._27(l,18)._focusChanged(!0)&&u}if("input"===n){u=!1!==r._27(l,18)._onInput()&&u}if("ngModelChange"===n){u=!1!==(e.transaction=t)&&u}return u},null,null)),r._26(11,16384,null,0,d.g,[r.L,r.M,[2,d.h]],null,null),r._26(12,16384,null,0,d.i,[r.L,r.M],null,null),r._28(1024,null,d.j,function(l,n){return[l,n]},[d.g,d.i]),r._26(14,671744,null,0,d.k,[[8,null],[8,null],[8,null],[2,d.j]],{model:[0,"model"]},{update:"ngModelChange"}),r._28(2048,null,d.d,null,[d.k]),r._26(16,16384,null,0,d.l,[d.d],null,null),r._26(17,16384,null,0,c.j,[],null,null),r._26(18,933888,null,0,_.b,[r.M,r.L,p.a,[2,d.d],[2,d.e],[2,d.f],c.a],{type:[0,"type"]},null),r._28(2048,[[1,4]],i.b,null,[_.b]),(l()(),r._24(-1,1,["\n"]))],function(l,n){l(n,14,0,n.component.transaction);l(n,18,0,"number")},function(l,n){l(n,0,1,[r._27(n,1)._control.errorState,r._27(n,1)._control.errorState,r._27(n,1)._canPlaceholderFloat,r._27(n,1)._control.shouldPlaceholderFloat||r._27(n,1)._shouldAlwaysFloat,r._27(n,1)._control.focused,"primary"==r._27(n,1).color,"accent"==r._27(n,1).color,"warn"==r._27(n,1).color,r._27(n,1)._shouldForward("untouched"),r._27(n,1)._shouldForward("touched"),r._27(n,1)._shouldForward("pristine"),r._27(n,1)._shouldForward("dirty"),r._27(n,1)._shouldForward("valid"),r._27(n,1)._shouldForward("invalid"),r._27(n,1)._shouldForward("pending")]),l(n,10,1,[r._27(n,16).ngClassUntouched,r._27(n,16).ngClassTouched,r._27(n,16).ngClassPristine,r._27(n,16).ngClassDirty,r._27(n,16).ngClassValid,r._27(n,16).ngClassInvalid,r._27(n,16).ngClassPending,r._27(n,18).id,r._27(n,18).placeholder,r._27(n,18).disabled,r._27(n,18).required,r._27(n,18).readonly,r._27(n,18)._ariaDescribedby||null,r._27(n,18).errorState])})}function e(l){return r._22(0,[(l()(),r._23(0,0,null,null,1,"app-player",[],null,null,null,u,g)),r._26(1,114688,null,0,s.a,[f.a],null,null)],function(l,n){l(n,1,0)},null)}var o=t("Hj+J"),r=t("/oeL"),a=t("6OSA"),i=t("Lpd/"),c=t("j5BN"),s=t("VnIc"),d=t("bm2B"),_=t("SlD5"),p=t("V8+5"),f=t("VcHD");t.d(n,"b",function(){return g}),n.a=u;var h=[o.a],g=r._21({encapsulation:0,styles:h,data:{}});r._29("app-player",s.a,e,{player:"player"},{},[])},p5Ee:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u={production:!0}},q4dy:function(l,n,t){"use strict";function u(l){return _._22(0,[(l()(),_._23(0,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),_._24(1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit.name)})}function e(l){return _._22(0,[(l()(),_._23(0,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),_._24(1,null,["",""]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function o(l){return _._22(0,[(l()(),_._23(0,0,null,null,7,"tr",[],null,null,null,null,null)),(l()(),_._24(-1,null,["\n              "])),(l()(),_._23(2,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),_._24(3,null,["",""])),(l()(),_._24(-1,null,["\n              "])),(l()(),_._25(16777216,null,null,1,null,e)),_._26(6,802816,null,0,p.h,[_._13,_._14,_.m],{ngForOf:[0,"ngForOf"]},null),(l()(),_._24(-1,null,["\n          "]))],function(l,n){l(n,6,0,n.context.$implicit)},function(l,n){l(n,3,0,n.context.index)})}function r(l){return _._22(0,[(l()(),_._23(0,0,null,null,4,"th",[],null,null,null,null,null)),(l()(),_._24(-1,null,["\n                "])),(l()(),_._23(2,0,null,null,1,"app-player",[],null,null,null,f.a,f.b)),_._26(3,114688,null,0,h.a,[g.a],{player:[0,"player"]},null),(l()(),_._24(-1,null,["\n              "]))],function(l,n){l(n,3,0,n.context.$implicit)},null)}function a(l){return _._22(0,[(l()(),_._23(0,0,null,null,5,"button",[["class","mat-button mat-raised-button"],["color","primary"],["mat-button",""],["mat-raised-button",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.addPlayer()&&u}return u},m.a,m.b)),_._26(1,16384,null,0,y.j,[],null,null),_._26(2,180224,null,0,b.b,[_.L,_.M,S.a,v.h],{color:[0,"color"]},null),_._26(3,16384,null,0,b.c,[],null,null),_._26(4,16384,null,0,b.d,[],null,null),(l()(),_._24(-1,0,["add player"]))],function(l,n){l(n,2,0,"primary")},function(l,n){l(n,0,0,_._27(n,2).disabled||null)})}function i(l){return _._22(0,[(l()(),_._23(0,0,null,null,4,"button",[["class","addButton mat-fab"],["mat-fab",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.updateScore()&&u}return u},m.a,m.b)),_._26(1,16384,null,0,y.j,[],null,null),_._26(2,180224,null,0,b.b,[_.L,_.M,S.a,v.h],null,null),_._26(3,16384,null,0,b.e,[[2,b.b],[8,null]],null,null),(l()(),_._24(-1,0,["\n    +\n"]))],null,function(l,n){l(n,0,0,_._27(n,2).disabled||null)})}function c(l){return _._22(0,[(l()(),_._23(0,0,null,null,14,"div",[["class","header"]],null,null,null,null,null)),(l()(),_._24(-1,null,["\n  "])),(l()(),_._23(2,0,null,null,11,"mat-toolbar",[["class","mat-toolbar"],["color","primary"],["role","toolbar"]],null,null,null,C.a,C.b)),_._26(3,16384,null,0,y.j,[],null,null),_._26(4,49152,null,0,w.b,[_.L,_.M],{color:[0,"color"]},null),(l()(),_._24(-1,0,["\n  "])),(l()(),_._23(6,0,null,0,6,"span",[],null,null,null,null,null)),(l()(),_._23(7,0,null,null,5,"button",[["class","mat-button mat-raised-button"],["color","accent"],["mat-button",""],["mat-raised-button",""]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.clearHistory()&&u}return u},m.a,m.b)),_._26(8,16384,null,0,y.j,[],null,null),_._26(9,180224,null,0,b.b,[_.L,_.M,S.a,v.h],{color:[0,"color"]},null),_._26(10,16384,null,0,b.c,[],null,null),_._26(11,16384,null,0,b.d,[],null,null),(l()(),_._24(-1,0,["New Game"])),(l()(),_._24(-1,0,["\n"])),(l()(),_._24(-1,null,["\n"])),(l()(),_._24(-1,null,["\n"])),(l()(),_._23(16,0,null,null,39,"div",[["class","container main"]],null,null,null,null,null)),(l()(),_._24(-1,null,["\n  "])),(l()(),_._24(-1,null,["\n  "])),(l()(),_._23(19,0,null,null,35,"table",[["class","table table-hover table-responsive"]],null,null,null,null,null)),(l()(),_._24(-1,null,["\n\n      "])),(l()(),_._24(-1,null,["\n      "])),(l()(),_._23(22,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),_._24(-1,null,["\n          "])),(l()(),_._23(24,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),_._24(-1,null,["\n              "])),(l()(),_._23(26,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),_._24(-1,null,["\n              "])),(l()(),_._25(16777216,null,null,1,null,u)),_._26(29,802816,null,0,p.h,[_._13,_._14,_.m],{ngForOf:[0,"ngForOf"]},null),(l()(),_._24(-1,null,["\n          "])),(l()(),_._24(-1,null,["\n      "])),(l()(),_._24(-1,null,["\n      "])),(l()(),_._24(-1,null,["\n\n      "])),(l()(),_._24(-1,null,["\n      "])),(l()(),_._23(35,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),_._24(-1,null,["\n          "])),(l()(),_._25(16777216,null,null,1,null,o)),_._26(38,802816,null,0,p.h,[_._13,_._14,_.m],{ngForOf:[0,"ngForOf"]},null),(l()(),_._24(-1,null,["\n          \n      "])),(l()(),_._24(-1,null,["\n      "])),(l()(),_._24(-1,null,["\n\n      "])),(l()(),_._24(-1,null,["\n      "])),(l()(),_._23(43,0,null,null,9,"tfoot",[["class","primary"]],null,null,null,null,null)),(l()(),_._24(-1,null,["\n          "])),(l()(),_._23(45,0,null,null,6,"tr",[],null,null,null,null,null)),(l()(),_._24(-1,null,["\n              "])),(l()(),_._23(47,0,null,null,0,"th",[],null,null,null,null,null)),(l()(),_._24(-1,null,["\n              "])),(l()(),_._25(16777216,null,null,1,null,r)),_._26(50,802816,null,0,p.h,[_._13,_._14,_.m],{ngForOf:[0,"ngForOf"]},null),(l()(),_._24(-1,null,["\n          "])),(l()(),_._24(-1,null,["\n      "])),(l()(),_._24(-1,null,["\n      "])),(l()(),_._24(-1,null,["\n  "])),(l()(),_._24(-1,null,["\n"])),(l()(),_._24(-1,null,["\n  "])),(l()(),_._24(-1,null,["\n"])),(l()(),_._23(58,0,null,null,7,"div",[["class","container"]],null,null,null,null,null)),(l()(),_._24(-1,null,["\n  "])),(l()(),_._23(60,0,null,null,4,"div",[["class","controllers"]],null,null,null,null,null)),(l()(),_._24(-1,null,["\n    "])),(l()(),_._25(16777216,null,null,1,null,a)),_._26(63,16384,null,0,p.i,[_._13,_._14],{ngIf:[0,"ngIf"]},null),(l()(),_._24(-1,null,["\n  "])),(l()(),_._24(-1,null,["\n"])),(l()(),_._24(-1,null,["\n\n"])),(l()(),_._25(16777216,null,null,1,null,i)),_._26(68,16384,null,0,p.i,[_._13,_._14],{ngIf:[0,"ngIf"]},null),(l()(),_._24(-1,null,["\n"]))],function(l,n){var t=n.component;l(n,4,0,"primary");l(n,9,0,"accent"),l(n,29,0,t.players),l(n,38,0,t.screenShots),l(n,50,0,t.players),l(n,63,0,!(t.screenShots.length>=2)),l(n,68,0,t.players.length>=2)},function(l,n){l(n,7,0,_._27(n,9).disabled||null)})}function s(l){return _._22(0,[(l()(),_._23(0,0,null,null,2,"app-root",[],null,null,null,c,P)),_._28(512,null,g.a,g.a,[]),_._26(2,114688,null,0,x.a,[g.a],null,null)],function(l,n){l(n,2,0)},null)}var d=t("NhKt"),_=t("/oeL"),p=t("qbdv"),f=t("kgqD"),h=t("VnIc"),g=t("VcHD"),m=t("wjk8"),y=t("j5BN"),b=t("ghl+"),S=t("V8+5"),v=t("8Xfy"),C=t("Co17"),w=t("YXpL"),x=t("wQAS");t.d(n,"a",function(){return M});var O=[d.a],P=_._21({encapsulation:0,styles:O,data:{}}),M=_._29("app-root",x.a,s,{},{},[])},qtrl:function(l,n){function t(l){throw new Error("Cannot find module '"+l+"'.")}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="qtrl"},wQAS:function(l,n,t){"use strict";var u=t("eS0w"),e=t("VcHD");t.d(n,"a",function(){return o});var o=function(){function l(l){this.playerService=l,this.players=[],this.screenShots=[]}return l.prototype.ngOnInit=function(){this.players=this.playerService.getPlayers(),this.screenShots=this.playerService.getScreenShots()},l.prototype.addPlayer=function(){this.playerService.addPlayer(new u.a("ahmed",2e3)),console.log(this.screenShots)},l.prototype.updateScore=function(){console.log(this.screenShots),this.playerService.updateScore(),window.scrollBy(0,5e3)},l.prototype.clearHistory=function(){this.playerService.clearHistory(),this.players=this.playerService.getPlayers(),this.screenShots=this.playerService.getScreenShots()},l.ctorParameters=function(){return[{type:e.a}]},l}()}},[0]);