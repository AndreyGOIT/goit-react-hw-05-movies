"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[509],{6509:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(9439),a=r(2791),i=r(7689),s=r(740),c=r(1087),u="MovieDetails_wrapper__cJixg",o="MovieDetails_title__RBndM",d="MovieDetails_arrow__-AsXl",p="MovieDetails_addInfoWrapper__uGn4P",l=r(184);function h(){var e=(0,i.UO)().moviesId,t=(0,a.useState)(null),r=(0,n.Z)(t,2),h=r[0],f=r[1],v=(0,i.s0)(),m=(0,i.TH)();if((0,a.useEffect)((function(){(0,s.LO)(e).then(f)}),[e]),h)return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("button",{onClick:function(){var e,t;v(null!==(e=null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},children:[(0,l.jsx)("b",{className:d,children:"\u2039-"})," GO BACK"]}),(0,l.jsx)("br",{}),h&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:u,children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w154".concat(h.poster_path),alt:h.original_title,width:"200",height:"300"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:o,children:h.original_title}),(0,l.jsx)("br",{}),(0,l.jsx)("b",{children:"Overview: "}),(0,l.jsx)("p",{children:h.overview}),(0,l.jsx)("b",{children:"Genres:"}),(0,l.jsx)("ul",{children:h.genres.map((function(e){var t=e.name,r=e.id;return(0,l.jsx)("li",{children:t},r)}))})]})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("p",{children:"Additional information:"}),(0,l.jsx)(c.rU,{to:"cast",children:"Cast"}),(0,l.jsx)("br",{}),(0,l.jsx)(c.rU,{to:"reviews",children:"Reviews"})]}),(0,l.jsx)(i.j3,{}),(0,l.jsx)("hr",{})]})]})}},740:function(e,t,r){r.d(t,{LO:function(){return o},Tg:function(){return c},kK:function(){return v},so:function(){return p},sv:function(){return h}});var n=r(5861),a=r(7757),i=r.n(a),s=r(2388);function c(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("https://api.themoviedb.org/3/trending/movie/day?api_key=1eb36deae800d0e3d9fd1b0466458d26");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=1eb36deae800d0e3d9fd1b0466458d26"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("https://api.themoviedb.org/3/search/movie/?api_key=1eb36deae800d0e3d9fd1b0466458d26",{params:{query:t}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=1eb36deae800d0e3d9fd1b0466458d26&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=1eb36deae800d0e3d9fd1b0466458d26&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=509.533ad8af.chunk.js.map