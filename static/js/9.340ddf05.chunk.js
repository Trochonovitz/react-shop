(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[9],{208:function(e,n,t){"use strict";t.r(n);var r,c,a,i,s,o,p=t(59),u=t.n(p),d=t(60),l=t(56),b=t(0),j=t(61),f=t(58),x=t(52),g=t(53),O=t(51),y=t(54),m=g.c.div(r||(r=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),h=Object(g.c)(y.a)(c||(c=Object(x.a)(["\n  padding: 30px 0;\n  font-size: 1.4rem;\n  text-align: center;\n"]))),k=(g.c.div(a||(a=Object(x.a)(["\n  padding: 0 20px;\n\n  @media "," {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 20px;\n  }\n\n  @media "," {\n    grid-template-columns: repeat(3, 1fr);\n    width: 60%;\n  }\n"])),O.a.tablet,O.a.laptop),g.c.div(i||(i=Object(x.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin: 0 0 30px 0;\n"])))),v=g.c.button(s||(s=Object(x.a)(["\n  background: transparent;\n  border: none;\n  color: #595959;\n  font-family: 'Montserrat';\n  cursor: pointer;\n  text-transform: uppercase;\n  margin: 0 10px 10px 10px;\n  padding: 0px;\n  letter-spacing: 0.1em;\n\n  ","\n"])),(function(e){return e.activeCategory===e.pickedCategory&&Object(g.b)(o||(o=Object(x.a)(["\n      border-bottom: 1px solid #595959;\n    "])))})),w=t(123),C=t(3);n.default=function(){var e=Object(b.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],c=Object(b.useState)("wszystkie"),a=Object(l.a)(c,2),i=a[0],s=a[1],o=Object(j.a)().getArticles,p="wszystkie"===i?t:t.filter((function(e){return e.category===i})),x=function(e){return s(e)};return Object(b.useEffect)((function(){var e=!1;return Object(d.a)(u.a.mark((function n(){var t;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o();case 2:t=n.sent,e||r(t);case 4:case"end":return n.stop()}}),n)})))(),function(){return e=!0}}),[o]),Object(C.jsx)(f.b,{children:Object(C.jsxs)(m,{children:[Object(C.jsx)(h,{textType:"h1",children:"Papiernicze inspiracje"}),Object(C.jsxs)(k,{children:[Object(C.jsx)(v,{onClick:function(){return x("wszystkie")},activeCategory:"wszystkie",pickedCategory:i,children:"wszystkie"}),t.map((function(e,n){var t=e.category;return Object(C.jsx)(v,{onClick:function(){return x(t)},activeCategory:t,pickedCategory:i,children:t},n)}))]}),Object(C.jsx)(w.a,{articles:p,option:i})]})})}}}]);
//# sourceMappingURL=9.340ddf05.chunk.js.map