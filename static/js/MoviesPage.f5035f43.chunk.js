(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var n=r(1),a=r(39),c=r(0),u=r(2),s=r(10),o=r(17),i=(r(21),r(38)),p=r(43);function f(){return Object(n.jsx)("div",{role:"alert",children:Object(n.jsx)("h1",{style:{textAlign:"center"},children:"Page not found 404"})})}var l=r(98),v=r.n(l),b="idle",h="pending",j="rejected",d="resolved";function m(){var e=Object(c.useState)(null),t=Object(a.a)(e,2),r=t[0],l=t[1],m=Object(c.useState)(""),O=Object(a.a)(m,2),x=O[0],w=O[1],g=Object(c.useState)(""),_=Object(a.a)(g,2),k=_[0],y=_[1],M=Object(c.useState)(null),N=Object(a.a)(M,2),S=N[0],C=N[1],E=Object(c.useState)(b),L=Object(a.a)(E,2),P=L[0],F=L[1],I=Object(u.i)().url,U=Object(u.g)();return Object(c.useEffect)((function(){F(h);i.a.fetchMovies(k).then(l).then(F(d)).catch((function(e){C(e),F(j)}))}),[k]),Object(n.jsxs)(n.Fragment,{children:[P===h&&Object(n.jsx)(p.a,{}),P===j&&Object(n.jsx)(f,{message:S}),P===d&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("form",{className:v.a.form,onSubmit:function(e){e.preventDefault(),""!==x.trim()?y(x):Object(o.b)("What would you like to find?")},children:[Object(n.jsx)("input",{className:v.a.input,value:x,onChange:function(e){w(e.currentTarget.value.toLowerCase())},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie"}),Object(n.jsx)("button",{className:v.a.button,type:"submit",children:Object(n.jsx)("span",{children:"Search"})})]}),r&&Object(n.jsx)("ul",{className:v.a.moviesList,children:r.map((function(e){var t=e.title,r=e.id;return Object(n.jsx)(s.c,{className:v.a.moviesLink,to:{pathname:"".concat(I,"/").concat(r),state:{from:U.pathname}},children:Object(n.jsx)("li",{className:v.a.moviesItem,children:t},r)},r)}))})]})]})}},38:function(e,t,r){"use strict";var n=r(40),a=r.n(n),c=r(41),u=r(42),s=r.n(u);s.a.defaults.baseURL="https://api.themoviedb.org/3/",s.a.defaults.params={api_key:"c828b854ef40a7dc6bde47f13c682e4b",language:"en-US"};var o={fetchTrendingMovieForHomepage:function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"trending/movie/day"},e.next=4,s()(t);case 4:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 9:e.prev=9,e.t0=e.catch(0),new Error("Not found");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),fetchMovies:function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,r={url:"search/movie",params:{query:t}},e.next=6,s()(r);case 6:return n=e.sent,c=n.data,e.abrupt("return",c.results);case 11:e.prev=11,e.t0=e.catch(2),new Error("Not found");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}(),fetchMovieDetails:function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t)},e.next=4,s()(r,t);case 4:return n=e.sent,c=n.data,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),new Error("Not found");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),fetchMovieCast:function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/credits")},e.next=4,s()(r,t);case 4:return n=e.sent,c=n.data,e.abrupt("return",c.cast);case 9:e.prev=9,e.t0=e.catch(0),new Error("Not found");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),fetchReviewsMovie:function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/reviews")},e.next=4,s()(r,t);case 4:return n=e.sent,c=n.data,e.abrupt("return",c.results);case 9:e.prev=9,e.t0=e.catch(0),new Error("Not found");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()};t.a=o},43:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(1),a=r(52),c=r(53),u=r(58),s=r(57),o=r(0),i=r(54),p=r.n(i),f=(r(55),function(e){Object(u.a)(r,e);var t=Object(s.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(c.a)(r,[{key:"render",value:function(){return Object(n.jsx)(p.a,{type:"Grid",color:"#e50914",height:60,width:60})}}]),r}(o.Component))},98:function(e,t,r){e.exports={form:"MoviesPage_form__3pf7M",input:"MoviesPage_input__12rWB",button:"MoviesPage_button__1Cz_K",moviesItem:"MoviesPage_moviesItem__AMCul",moviesLink:"MoviesPage_moviesLink__2kEsU"}}}]);
//# sourceMappingURL=MoviesPage.f5035f43.chunk.js.map