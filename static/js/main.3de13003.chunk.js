(this["webpackJsonpstar-wars"]=this["webpackJsonpstar-wars"]||[]).push([[0],{127:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(11),c=n.n(a),i=n(62),s=(n(127),n(14)),l=n(101),o=n(69),u=n(43),d=n.n(u),j=n(57),p=n(29),b=n(77),h=n(95),f=n.n(h),m=n(28),O=n(67),x=function(e,t){return e.reduce((function(e,n){return Object(m.a)(Object(m.a)({},e),{},Object(O.a)({},"".concat(n[t]),n))}),{})},v=function(e){var t=e.people,n=e.films,r=e.starships,a=e.species,c=x(n,"url"),i=x(r,"url"),s=x(a,"url");return t.map((function(e){var t=e.films.map((function(e){return{id:c[e].id,title:c[e].title,releaseDate:c[e].releaseDate}})).sort((function(e,t){return new Date(e.releaseDate).getTime()-new Date(t.releaseDate).getTime()})),n=e.starships.map((function(e){return{id:i[e].id,name:i[e].name}})),r=e.species.map((function(e){return{id:s[e].id,name:s[e].name}}));return Object(m.a)(Object(m.a)({},e),{},{films:t,starships:n||null,species:r||null})}))},g=function(e){if(!e)return null;var t=new URL(e);return new URLSearchParams(t.search).get("page")||null},Y=function(e){var t=e.toUpperCase(),n=t.replace(/[^\d]/gi,""),r=t.replace(/[^ABY]/gi,"");return"".concat(n).concat(r?" ".concat(r):"")},S=function(e){return{year:+e.replace(/[^\d]/gi,""),era:e.replace(/[^ABY]/gi,"")}},B=function(e,t){var n=S(e),r=S(t);return n.era===r.era&&n.year===r.year?0:"BBY"===n.era&&"ABY"===r.era?-1:"BBY"===n.era&&"BBY"===r.era?n.year>r.year?-1:1:"ABY"===n.era&&"ABY"===r.era?n.year>r.year?1:-1:null},R=function(e){var t=S(e);return("BBY"===t.era||"ABY"===t.era)&&!(t.year<0)},y=f.a.create({baseURL:"https://swapi.dev/api",timeout:3e4}),C=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,r,a,c,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,y.get("/".concat(t));case 3:r=e.sent,a=r.data,n.push.apply(n,Object(b.a)(a.results)),c=g(a.next);case 7:if(!c){e.next=16;break}return e.next=10,y.get("/".concat(t,"?page=").concat(c));case 10:i=e.sent,s=i.data,c=g(s.next),n.push.apply(n,Object(b.a)(s.results)),e.next=7;break;case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=n(218),w=n(230),N=n(228),k=n(232),A=n(233),P=n(53),D=n(174),F=n(219),T=n(4),L=Object(W.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff",marginTop:0}}})),M=function(e){var t=e.isOpen,n=e.handleClose,r=L();return Object(T.jsx)(D.a,{className:r.backdrop,open:t,onClick:n,children:Object(T.jsx)(F.a,{color:"inherit"})})};M.defaultProps={isOpen:!1,handleClose:null};var I=Object(r.memo)(M),U=n(102),E=n(5),z=n(226),J=n(224),_=n(220),q=n(222),G=n(223),V=n(221),H=n(96),K=n.n(H),Q=Object(E.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var t=e.children,n=e.classes,r=e.onClose,a=Object(U.a)(e,["children","classes","onClose"]);return Object(T.jsxs)(_.a,Object(m.a)(Object(m.a)({disableTypography:!0,className:n.root},a),{},{children:[Object(T.jsx)(P.a,{variant:"h6",children:t}),r?Object(T.jsx)(V.a,{"aria-label":"close",className:n.closeButton,onClick:r,children:Object(T.jsx)(K.a,{})}):null]}))})),X=Object(E.a)((function(e){return{root:{padding:e.spacing(2)}}}))(q.a),Z=Object(E.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(G.a),$=function(e){var t=e.children,n=e.title,r=e.button,a=e.handleClose,c=e.handleAction;return Object(T.jsxs)(J.a,{onClose:a,open:!0,children:[Object(T.jsx)(Q,{onClose:a,children:n}),Object(T.jsx)(X,{dividers:!0,children:t}),c&&r&&Object(T.jsx)(Z,{children:Object(T.jsx)(z.a,{autoFocus:!0,onClick:a,color:"primary",children:r})})]})};$.defaultProps={button:null,handleAction:null};var ee=Object(r.memo)($),te=n(239),ne=Object(W.a)((function(){return{root:{width:"100%",minWidth:320,maxWidth:600},title:{fontWeight:600}}})),re=function(e){var t=e.person,n=ne();return Object(T.jsxs)("div",{className:n.root,children:[Object(T.jsxs)(te.a,{mb:2,children:[Object(T.jsx)(P.a,{component:"span",className:n.title,children:"Born: "}),Object(T.jsx)(P.a,{component:"span",children:t.birthYear})]}),!!t.species.length&&Object(T.jsxs)(te.a,{mb:2,children:[Object(T.jsx)(P.a,{component:"span",className:n.title,children:"Species: "}),Object(T.jsx)(P.a,{component:"span",children:"".concat(t.species.map((function(e){return e.name})).join(", "))})]}),Object(T.jsxs)(te.a,{mb:2,children:[Object(T.jsx)(P.a,{component:"span",className:n.title,children:"Movies: "}),Object(T.jsx)(P.a,{component:"span",children:t.films.map((function(e){var t=e.title,n=e.releaseDate;return"".concat(t," (").concat(new Date(n).getFullYear(),")")})).join(", ")})]}),!!t.starships.length&&Object(T.jsxs)(te.a,{mb:2,children:[Object(T.jsx)(P.a,{component:"span",className:n.title,children:"Starships: "}),Object(T.jsx)(P.a,{component:"span",children:t.starships.map((function(e){return e.name})).join(", ")})]})]})};re.defaultProps={person:null};var ae=Object(r.memo)(re),ce=n(106),ie=n(231),se=n(242),le=n(238),oe=n(227),ue=n(229),de=n(240),je=n(97),pe=n.n(je),be=n(98),he=n.n(be),fe=Object(W.a)((function(e){return{root:{"& > * + *":{marginTop:e.spacing(3)}}}})),me=function(e){var t=e.id,n=e.name,a=e.value,c=e.options,i=e.label,s=e.placeholder,l=e.limitTags,o=e.variant,u=e.handleSelect,d=fe(),j=Object(r.useRef)((function(e){return e.title||e.name})),p=Object(r.useRef)((function(e,t){return e===t})),b=Object(r.useRef)((function(e){return Object(T.jsx)(le.a,Object(m.a)(Object(m.a)({},e),{},{variant:o,label:i,placeholder:s}))})),h=Object(r.useRef)((function(e,t){var n=t.inputValue,r=he()(e.title,n),a=pe()(e.title,r);return Object(T.jsx)("div",{children:a.map((function(e){return Object(T.jsx)("span",{style:{fontWeight:e.highlight?700:400},children:e.text},e.text)}))})})),f=Object(r.useRef)((function(e,t){return u(e,t,n)}));return Object(T.jsx)("div",{className:d.root,children:Object(T.jsx)(de.a,{id:t,name:n,value:a,options:c,fullWidth:!0,multiple:!0,filterSelectedOptions:!0,limitTags:l,onChange:f.current,getOptionLabel:j.current,getOptionSelected:p.current,renderInput:b.current,renderOption:h.current})})};me.defaultProps={value:[],label:"",placeholder:"",limitTags:1,variant:"outlined"};var Oe=Object(r.memo)(me),xe=Object(W.a)((function(e){return{root:{},formWrapper:{paddingTop:e.spacing(4)},fieldWrapper:{padding:e.spacing(0,2,4)}}})),ve=function(e){var t=e.films,n=e.species,r=e.selectedFilms,a=e.selectedSpecies,c=e.startYear,i=e.endYear,s=e.isRelationshipAnd,l=e.handleChange,o=xe();return Object(T.jsx)(ce.a,{elevation:3,className:o.root,children:Object(T.jsxs)(w.a,{container:!0,className:o.formWrapper,children:[Object(T.jsx)(w.a,{item:!0,className:o.fieldWrapper,xs:12,children:Object(T.jsx)(ie.a,{control:Object(T.jsx)(se.a,{checked:s,onChange:l,color:"primary",name:"isRelationshipAnd",inputProps:{"aria-label":"primary checkbox"}}),label:s?"Relative all selected fields":"Relative one of selected fields"})}),Object(T.jsx)(w.a,{item:!0,className:o.fieldWrapper,xs:12,children:t&&Object(T.jsx)(Oe,{id:"films-autocomplete-field",name:"films",options:t,value:r,label:"Movies",handleSelect:l})}),Object(T.jsx)(w.a,{item:!0,className:o.fieldWrapper,xs:12,children:n&&Object(T.jsx)(Oe,{id:"species-autocomplete-field",name:"species",options:n,value:a,label:"Species",handleSelect:l})}),Object(T.jsx)(w.a,{item:!0,className:o.fieldWrapper,xs:12,children:Object(T.jsx)(oe.a,{fullWidth:!0,children:Object(T.jsx)(le.a,{name:"startYear",value:c,label:"Start Year",variant:"outlined",fullWidth:!0,onChange:l})})}),Object(T.jsx)(w.a,{item:!0,className:o.fieldWrapper,xs:12,children:Object(T.jsxs)(oe.a,{fullWidth:!0,children:[Object(T.jsx)(le.a,{name:"endYear",value:i,label:"End Year",fullWidth:!0,variant:"outlined",onChange:l}),Object(T.jsx)(ue.a,{variant:"outlined",children:"For example: 112 BBY"})]})})]})})};ve.defaultProps={selectedFilms:[],selectedSpecies:[],startYear:"",endYear:"",isRelationshipAnd:!1};var ge=Object(r.memo)(ve),Ye=Object(W.a)((function(){return{root:{width:"100%"}}})),Se=function(e){var t=e.isLoading,n=e.people,r=e.films,a=e.species,c=e.selectedPerson,i=e.selectedFilms,s=e.selectedSpecies,l=e.startYear,o=e.endYear,u=e.isRelationshipAnd,d=e.handleSelectPerson,j=e.handleChange,p=Ye();return Object(T.jsxs)("div",{className:p.root,children:[Object(T.jsxs)(w.a,{container:!0,spacing:3,children:[Object(T.jsx)(w.a,{item:!0,xs:12,sm:6,children:r&&a&&Object(T.jsx)(ge,{films:r,species:a,selectedFilms:i,selectedSpecies:s,startYear:l,endYear:o,isRelationshipAnd:u,handleChange:j})}),Object(T.jsxs)(w.a,{item:!0,xs:12,sm:6,children:[null===n||void 0===n?void 0:n.map((function(e){return Object(T.jsx)(N.a,{dense:!0,children:Object(T.jsx)(k.a,{button:!0,component:"li",id:e.id,onClick:d,children:Object(T.jsx)(A.a,{primary:e.name})})},e.id)})),0===(null===n||void 0===n?void 0:n.length)&&Object(T.jsx)(P.a,{variant:"h6",align:"center",children:"Characters not found..."})]})]}),c&&Object(T.jsx)(ee,{title:c.name,handleClose:d,children:Object(T.jsx)(ae,{person:c})}),Object(T.jsx)(I,{isOpen:t})]})};Se.defaultProps={isLoading:!1,people:null,films:null,species:null,selectedPerson:null,selectedFilms:[],selectedSpecies:[],startYear:"",endYear:"",isRelationshipAnd:!1};var Be=Object(r.memo)(Se);var Re=function(){var e=Object(o.b)().enqueueSnackbar,t=Object(r.useState)(),n=Object(p.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(),s=Object(p.a)(i,2),l=s[0],u=s[1],b=Object(r.useState)(),h=Object(p.a)(b,2),f=h[0],m=h[1],O=Object(r.useState)(),x=Object(p.a)(O,2),g=x[0],S=x[1],y=Object(r.useState)(),W=Object(p.a)(y,2),w=W[0],N=W[1],k=Object(r.useState)(!0),A=Object(p.a)(k,2),P=A[0],D=A[1],F=Object(r.useState)([]),L=Object(p.a)(F,2),M=L[0],I=L[1],U=Object(r.useState)([]),E=Object(p.a)(U,2),z=E[0],J=E[1],_=Object(r.useState)(""),q=Object(p.a)(_,2),G=q[0],V=q[1],H=Object(r.useState)(""),K=Object(p.a)(H,2),Q=K[0],X=K[1],Z=Object(r.useRef)((function(e,t,n){return e[n].some((function(e){var n=e.id;return t===n}))})),$=Object(r.useMemo)((function(){return M.length>0?null===a||void 0===a?void 0:a.filter((function(e){return M.every((function(t){var n=t.id;return Z.current(e,n,"films")}))})):a}),[M,a]),ee=Object(r.useMemo)((function(){return z.length>0?null===$||void 0===$?void 0:$.filter((function(e){return z.every((function(t){var n=t.id;return Z.current(e,n,"species")}))})):$}),[z,$]),te=Object(r.useMemo)((function(){var e=R(G)?G:"999999 BBY",t=R(Q)?Q:"999999 ABY";return null===ee||void 0===ee?void 0:ee.filter((function(n){var r=B(n.birthYear,e)>=0,a=B(t,n.birthYear)>=0;return n.birthYear&&r&&a}))}),[ee,G,Q]),ne=Object(r.useMemo)((function(){if(P)return te;var e=R(G)?G:"999999 BBY",t=R(Q)?Q:"999999 ABY";return a.filter((function(n){var r=M.some((function(e){return Z.current(n,e.id,"films")})),a=z.some((function(e){return Z.current(n,e.id,"species")})),c=B(n.birthYear,e)>=0,i=B(t,n.birthYear)>=0;return[r,a,n.birthYear&&c&&i].some(Boolean)}))}),[a,P,z,M,G,Q,te]),re=Object(r.useMemo)((function(){var e=null===a||void 0===a?void 0:a.find((function(e){return e.id===w}));return e||null}),[a,w]),ae=Object(r.useRef)(Object(j.a)(d.a.mark((function t(){var n,r,a,c,i,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,S(!0),t.next=4,Promise.all([C("people").then((function(e){return e.map((function(e){return{id:e.url.replace(/\D/gi,""),name:e.name,birthYear:Y(e.birth_year),films:e.films,species:e.species,starships:e.starships,url:e.url}}))})),C("films").then((function(e){return e.map((function(e){var t=e.title,n=e.release_date,r=e.url;return{id:r.replace(/\D/gi,""),title:t,releaseDate:n,url:r}}))})),C("starships").then((function(e){return e.map((function(e){var t=e.name,n=e.url;return{id:n.replace(/\D/gi,""),name:t,title:t,url:n}}))})),C("species").then((function(e){return e.map((function(e){var t=e.name,n=e.url;return{id:n.replace(/\D/gi,""),name:t,title:t,url:n}}))}))]);case 4:return n=t.sent,r=Object(p.a)(n,4),a=r[0],c=r[1],i=r[2],s=r[3],t.abrupt("return",{peopleWithLinks:a,fetchedFilms:c,fetchedStarships:i,fetchedSpecies:s});case 13:return t.prev=13,t.t0=t.catch(0),t.abrupt("return",e(t.t0.message));case 16:return t.prev=16,S(!1),t.finish(16);case 19:case"end":return t.stop()}}),t,null,[[0,13,16,19]])})))),ce=Object(r.useRef)(Object(j.a)(d.a.mark((function e(){var t,n,r,a,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.current();case 2:t=e.sent,n=t.peopleWithLinks,r=t.fetchedFilms,a=t.fetchedStarships,i=t.fetchedSpecies,s=v({people:n,films:r,starships:a,species:i}),c(s),u(r),m(i);case 11:case"end":return e.stop()}}),e)}))));Object(r.useEffect)((function(){ce.current()}),[]);var ie=Object(r.useRef)((function(e){var t=e.currentTarget.id;N(t)})),se=Object(r.useRef)((function(e,t,n){var r=n||e.target.name,a=t||e.target.value,c={films:function(){return I(a)},species:function(){return J(a)},isRelationshipAnd:function(){return D((function(e){return!e}))},startYear:function(){return V(Y(a))},endYear:function(){return X(Y(a))}};c[r]&&c[r]()}));return Object(T.jsx)(Be,{isLoading:g,people:ne,films:l,species:f,selectedPerson:re,selectedFilms:M,selectedSpecies:z,startYear:G,endYear:Q,isRelationshipAnd:P,handleSelectPerson:ie.current,handleChange:se.current})},ye=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(s.c,{children:Object(T.jsx)(s.a,{path:"/",exact:!0})}),Object(T.jsx)(s.c,{children:Object(T.jsx)(s.a,{path:"/",exact:!0,component:Re})})]})},Ce=n(236),We=n(237),we=n(234),Ne=n(235),ke=Object(W.a)((function(){return{root:{flexGrow:1}}})),Ae=function(e){var t=e.title,n=ke();return Object(T.jsx)(we.a,{position:"fixed",className:n.root,children:Object(T.jsx)(Ne.a,{children:Object(T.jsx)(P.a,{className:n.title,variant:"h6",noWrap:!0,children:t})})})},Pe=Object(r.memo)(Ae),De=function(e){var t=e.children;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Pe,{title:"Star Wars Characters"}),Object(T.jsx)(Ce.a,{}),Object(T.jsx)(We.a,{maxWidth:"lg",children:Object(T.jsx)(te.a,{mt:12,children:t})})]})};De.defaultProps={children:null};var Fe=De,Te=function(){return Object(T.jsx)(l.a,{ReactRouterRoute:s.a,children:Object(T.jsx)(o.a,{children:Object(T.jsx)(Fe,{children:Object(T.jsx)(ye,{})})})})};c.a.render(Object(T.jsx)(i.a,{children:Object(T.jsx)(Te,{})}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.3de13003.chunk.js.map