(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{101:function(e,t,c){e.exports={item:"Reviews_item__2VXsE",author:"Reviews_author__XYAUs"}},104:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return u}));var i=c(1),n=c(39),s=c(2),r=c(0),a=c(38),o=c(101),h=c.n(o);function u(){var e=Object(s.h)().movieId,t=Object(r.useState)(null),c=Object(n.a)(t,2),o=c[0],u=c[1];return Object(r.useEffect)((function(){a.a.fetchReviewsMovie(e).then(u)}),[e]),Object(i.jsx)(i.Fragment,{children:o&&o.length>0?Object(i.jsx)("ul",{className:h.a.item,children:o.map((function(e){var t=e.id,c=e.author,n=e.content;return Object(i.jsxs)("li",{children:[Object(i.jsx)("h2",{className:h.a.author,children:c}),Object(i.jsx)("span",{children:n})]},t)}))}):Object(i.jsx)("span",{children:"No reviews for this movie."})})}}}]);
//# sourceMappingURL=Reviews.f04803f8.chunk.js.map