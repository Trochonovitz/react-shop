(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[9],{207:function(e,n,t){"use strict";t.r(n);var r,i,a,c,o,s,p=t(56),d=t(0),l=t(17),u=t(95),b=t(59),j=t(58),g=t(123),y=t(52),f=t(53),m=t(51),x=t(54),O=f.c.div(r||(r=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  @media "," {\n    width: 60%;\n  }\n"])),m.a.desktop),h=Object(f.c)(x.a)(i||(i=Object(y.a)(["\n  padding: 30px 0;\n  font-size: 1.4rem;\n  text-align: center;\n"]))),k=f.c.div(a||(a=Object(y.a)(["\n  padding: 0 20px;\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 20px;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),m.a.tablet,m.a.laptop),v=f.c.div(c||(c=Object(y.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 30px 0;\n"]))),w=f.c.button(o||(o=Object(y.a)(["\n  background: transparent;\n  border: none;\n  color: #595959;\n  font-family: 'Montserrat';\n  cursor: pointer;\n  text-transform: uppercase;\n  margin: 0 10px 10px 10px;\n  padding: 0px;\n  letter-spacing: 0.1em;\n\n  ","\n"])),(function(e){return e.activeCategory===e.pickedCategory&&Object(f.b)(s||(s=Object(y.a)(["\n      border-bottom: 1px solid #595959;\n    "])))})),C=t(3);n.default=function(){var e=Object(b.a)().blogArticlesQuery,n=Object(l.c)(e),t=n.loading,r=n.error,i=n.data,a=Object(d.useState)("wszystkie"),c=Object(p.a)(a,2),o=c[0],s=c[1],y=Object(u.useTransition)(o,{from:{y:100,opacity:0},enter:{y:0,opacity:1}}),f=Object(u.animated)(g.a);if(t)return"Loading...";if(r)return"Something Bad Happened";var m=i.allArticles,x="wszystkie"===o?m:m.filter((function(e){return e.category===o})),z=function(e){return s(e)};return Object(C.jsx)(j.b,{children:Object(C.jsxs)(O,{children:[Object(C.jsx)(h,{textType:"h1",children:"Papiernicze inspiracje"}),Object(C.jsxs)(v,{children:[Object(C.jsx)(w,{onClick:function(){return z("wszystkie")},activeCategory:"wszystkie",pickedCategory:o,children:"wszystkie"}),m.map((function(e,n){var t=e.category;return Object(C.jsx)(w,{onClick:function(){return z(t)},activeCategory:t,pickedCategory:o,children:t},n)}))]}),Object(C.jsx)(k,{children:x.map((function(e){var n=e.id,t=e.category,r=e.title,i=e.mainPhoto.responsiveImage.srcSet,a=e.lead;return y((function(e){return Object(C.jsx)(f,{style:e,id:n,category:t,title:r,img:i,lead:a},n)}))}))})]})})}}}]);
//# sourceMappingURL=9.d6c23ca3.chunk.js.map