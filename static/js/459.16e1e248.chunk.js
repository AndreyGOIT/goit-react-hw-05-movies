"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[459],{459:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(439),a=r(689),s=r(791),u=r(740),i="Cast_castList__hbalY",c="Cast_listElem__g0ORv",o="Cast_listElemBottom__C-XVs",p=r(184);function d(){var e=(0,a.UO)().moviesId,t=(0,s.useState)(null),r=(0,n.Z)(t,2),d=r[0],f=r[1];return(0,s.useEffect)((function(){(0,u.kK)(e).then(f)}),[e]),(0,p.jsx)(p.Fragment,{children:d?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("hr",{}),(0,p.jsx)("ul",{className:i,children:d.map((function(e){var t=e.id,r=e.character,n=e.name,a=e.profile_path;return(0,p.jsxs)("li",{className:c,children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w154".concat(a),alt:n}),(0,p.jsxs)("div",{className:o,children:[(0,p.jsx)("b",{children:n}),(0,p.jsxs)("p",{children:["Character: ",r]})]})]},t.toString())}))})]}):(0,p.jsx)("p",{children:"There are no any details, sorry."})})}},740:function(e,t,r){r.d(t,{LO:function(){return o},Tg:function(){return i},kK:function(){return m},so:function(){return d},sv:function(){return h}});var n=r(861),a=r(757),s=r.n(a),u=r(388);function i(){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("https://api.themoviedb.org/3/trending/movie/day?api_key=1eb36deae800d0e3d9fd1b0466458d26");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=1eb36deae800d0e3d9fd1b0466458d26"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("https://api.themoviedb.org/3/search/movie/?api_key=1eb36deae800d0e3d9fd1b0466458d26",{params:{query:t}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=1eb36deae800d0e3d9fd1b0466458d26&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=1eb36deae800d0e3d9fd1b0466458d26&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=459.16e1e248.chunk.js.map