(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(205),o=t(206),c=t(198),l=(t(16),t(227)),s=t.n(l),u=t(195),m=t(199);function p(){var e=h(["\n    margin-bottom: 4rem;\n  "]);return p=function(){return e},e}function f(){var e=h(["\n  color: #757575;\n  margin: 0 2rem 2rem;\n\n  ",";\n"]);return f=function(){return e},e}function d(){var e=h(["\n  display: block;\n  font-size: 2rem;\n  font-weight: 500;\n  margin: 2rem 2rem 1rem;\n"]);return d=function(){return e},e}function h(e,n){return n||(n=e.slice(0)),e.raw=n,e}var g=u.c.span(d()),v=u.c.p(f(),m.a.TABLET(p())),b=function(e){var n=e.title,t=e.copy,r=e.image;return a.a.createElement("figure",null,a.a.createElement(s.a,{fluid:r?r.childImageSharp.fluid:{},alt:n}),a.a.createElement("figcaption",null,a.a.createElement(g,null,n),a.a.createElement(v,null,t)))};function E(){var e=w(["\n    display: block;\n  "]);return E=function(){return e},e}function y(){var e=w(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 4rem;\n  padding: 0 4rem;\n  margin: 2rem 0;\n\n  ",";\n"]);return y=function(){return e},e}function w(e,n){return n||(n=e.slice(0)),e.raw=n,e}var x,k=u.c.div(y(),m.a.TABLET(E())),z=function(e){var n=e.items;return a.a.createElement(k,null,n.map(function(e,n){return a.a.createElement(b,Object.assign({},e,{key:n}))}))},S=(t(28),t(7),t(230)),T=t.n(S);t(210);function M(e,n,t,r,a,i,o){try{var c=e[i](o),l=c.value}catch(s){return void t(s)}c.done?n(l):Promise.resolve(l).then(r,a)}var O=[];function I(e){return void 0===e&&(e="-50px"),void 0===x&&"undefined"!=typeof window&&window.IntersectionObserver&&(x=new window.IntersectionObserver(function(e){e.forEach(function(e){O.forEach(function(n){n[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0?n[1](!0):(!e.isIntersecting||e.intersectionRatio<=0)&&n[1](!1))})})},{rootMargin:e})),x}var q=function(e,n,t){var r=I(t);return r.observe(e),O.push([e,n]),r},j=function(e){var n,r;function i(){var n;return(n=e.call(this)||this).listenToIntersections=function(){n.io=q(n.ref,function(e){n.setState(function(n){var t={};return!n.hasBeenVisible&&e&&(t={hasBeenVisible:!0}),Object.assign({isVisible:e},t)})},n.props.rootMargin)},n.handleRef=function(e){e&&(n.ref=e)},n.state={isVisible:!1,hasBeenVisible:!1,IOSupported:!1},n}r=e,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=i.prototype;return o.componentDidMount=function(){var e,n=(e=T.a.mark(function e(){var n,r,a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!0,r=!0,a=!1,"undefined"==typeof window||window.IntersectionObserver){e.next=6;break}return e.next=6,t.e(9).then(t.t.bind(null,237,7)).then(function(){console.log("IntersectionObserver polyfill injected.")});case 6:"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!1,a=!0),this.setState({isVisible:n,hasBeenVisible:r,IOSupported:a},this.listenToIntersections);case 8:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,a){var i=e.apply(n,t);function o(e){M(i,r,a,o,c,"next",e)}function c(e){M(i,r,a,o,c,"throw",e)}o(void 0)})});return function(){return n.apply(this,arguments)}}(),o.componentWillUnmount=function(){this.io.disconnect()},o.render=function(){var e=this.state,n=e.isVisible,t=e.hasBeenVisible;return a.a.createElement("div",{ref:this.handleRef},this.props.children({isVisible:n,hasBeenVisible:t}))},i}(r.Component),B=t(200);function L(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  padding: 4rem;\n  margin: 4rem;\n  border-radius: 10px;\n  position: relative;\n  text-align: center;\n  color: #fff;\n  transition: background-color 0.3s ease;\n\n  background-color: ",";\n"]);return L=function(){return e},e}var V=u.c.div(L(),function(e){return e.isVisible?B.a:" #333"}),C=function(){return a.a.createElement(j,{rootMargin:"-50px"},function(e){var n=e.isVisible;return a.a.createElement(V,{isVisible:n},a.a.createElement(c.a,{tag:"span"},"IntersectionObserver"))})},_=t(122);function A(){var e=D(["\n  -webkit-appearance: none;\n  background-color: transparent;\n  border: none;\n  font-family: inherit;\n  font-size: 4rem;\n  font-weight: normal;\n  padding: 1rem;\n  line-height: 4rem;\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #fff;\n"]);return A=function(){return e},e}function U(){var e=D(["\n  -webkit-appearance: none;\n  background-color: #fff;\n  border-radius: 5px;\n  border: none;\n  color: #757575;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 1.3rem;\n  font-weight: 500;\n  margin: 4rem 0 2rem;\n  padding: 1rem 2rem;\n  text-transform: uppercase;\n  transition: 0.2s background-color ease;\n\n  &:active,\n  &:focus {\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);\n    outline: none;\n  }\n\n  &:hover {\n    background-color: #f9f9f9;\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n"]);return U=function(){return e},e}function D(e,n){return n||(n=e.slice(0)),e.raw=n,e}var R=u.c.button(U()),F=u.c.button(A()),K=t(233),H=t(231);t(232);var J=function(e){var n,t;function r(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).onKeyDown=function(e){"Escape"===e.key&&n.props.open&&n.props.hideModal()},n}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var i=r.prototype;return i.componentDidMount=function(){document.addEventListener("keydown",this.onKeyDown)},i.componentWillUnmount=function(){document.removeEventListener("keydown",this.onKeyDown)},i.disableScrolling=function(e){e?(document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"):(document.body.style.overflow=null,document.documentElement.style.overflow=null)},i.render=function(){var e=this.props,n=e.children,t=e.open,r=e.showModal,i=e.hideModal;return"undefined"!=typeof document&&this.disableScrolling(t),a.a.createElement(a.a.Fragment,null,a.a.createElement(R,{onClick:r},"Show Modal"),a.a.createElement(K.a,{isOpen:t},a.a.createElement(F,{onClick:i},a.a.createElement(H.a,null,"Close"),a.a.createElement("span",{"aria-hidden":!0},"×")),n))},r}(r.PureComponent),N=function(e){var n=e.children;return a.a.createElement(_.a,null,function(e){var t=e.open,r=e.showModal,i=e.hideModal;return a.a.createElement(J,{open:t,showModal:r,hideModal:i},n)})};t.d(n,"query",function(){return P});n.default=function(e){var n=e.data;return a.a.createElement(i.a,null,a.a.createElement(o.a,null,a.a.createElement(c.a,{as:"h2",size:"large"},n.homeJson.content.childMarkdownRemark.rawMarkdownBody),a.a.createElement(N,null,a.a.createElement("picture",null,a.a.createElement("source",{srcSet:"https://i.imgur.com/lqKlotB.png",media:"(min-width: 800px)"}),a.a.createElement("img",{src:"https://i.imgur.com/lqKlotB.png",alt:"Very Nice!"})))),a.a.createElement(z,{items:n.homeJson.gallery}),a.a.createElement("div",{style:{height:"50vh"}}),a.a.createElement(C,null))};var P="751990366"},196:function(e,n,t){"use strict";t.d(n,"b",function(){return s});var r=t(0),a=t.n(r),i=t(72),o=t.n(i);t.d(n,"a",function(){return o.a});t(197),t(15).default.enqueue;var c=a.a.createContext({});function l(e){var n=e.staticQueryData,t=e.data,r=e.query,i=e.render,o=t?t.data:n[r]&&n[r].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var n=e.data,t=e.query,r=e.render,i=e.children;return a.a.createElement(c.Consumer,null,function(e){return a.a.createElement(l,{data:n,query:t,render:r||i,staticQueryData:e})})}},197:function(e,n,t){var r;e.exports=(r=t(203))&&r.default||r},198:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(195),o=t(199);function c(){var e=s(["\n    font-size: ",";\n  "]);return c=function(){return e},e}function l(){var e=s(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n\n  ",";\n"]);return l=function(){return e},e}function s(e,n){return n||(n=e.slice(0)),e.raw=n,e}var u=i.c.span(l(),function(e){var n=e.size;return function(){switch(n){case"large":return"400";default:return"500"}}},function(e){var n=e.size;return function(){switch(n){case"large":return"3.2rem";default:return"2rem"}}},o.a.TABLET(c(),function(e){var n=e.size;return function(){switch(n){case"large":return"2.6rem";default:return"2rem"}}}));n.a=function(e){var n=e.children,t=e.as,r=void 0===t?"span":t,i=e.size;return a.a.createElement(u,{as:r,size:i},n)}},199:function(e,n,t){"use strict";t(13),t(14),t(7),t(25);var r=t(195),a={DESKTOP:992,TABLET:768,PHONE:376};function i(){var e=c(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return i=function(){return e},e}function o(){var e=c(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return o=function(){return e},e}function c(e,n){return n||(n=e.slice(0)),e.raw=n,e}var l=Object.keys(a).reduce(function(e,n){return e[n]=function(){return Object(r.b)(o(),a[n]/16,r.b.apply(void 0,arguments))},e["MIN_"+n]=function(){return Object(r.b)(i(),a[n]/16,r.b.apply(void 0,arguments))},e},{});n.a=l},200:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r="#f90000"},201:function(e,n,t){"use strict";t(16);var r=t(204),a=t(0),i=t.n(a),o=t(207),c=t(196),l=t(30),s=function(e){var n=e.siteTitle,t=e.siteDescription,r=e.siteUrl,a=e.pageTitle,c=e.pageTitleFull,l=void 0===c?a?n+": "+a:n:c,s=e.themeColor,u=e.social,m=e.imageUrl,p=e.location,f=e.canonical,d=void 0===f?r+(p.pathname||""):f;return i.a.createElement(o.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),i.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,user-scalable=yes",name:"viewport"}),i.a.createElement("meta",{content:n,name:"apple-mobile-web-app-title"}),i.a.createElement("meta",{content:l,property:"og:title"}),i.a.createElement("meta",{content:l,name:"twitter:title"}),i.a.createElement("title",null,l),i.a.createElement("meta",{content:t,name:"description"}),i.a.createElement("meta",{content:t,property:"og:description"}),i.a.createElement("meta",{content:t,name:"twitter:description"}),i.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),i.a.createElement("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),i.a.createElement("meta",{content:s,name:"theme-color"}),i.a.createElement("meta",{content:n,name:"application-name"}),i.a.createElement("meta",{content:"website",property:"og:type"}),i.a.createElement("meta",{content:n,property:"og:site_name"}),i.a.createElement("meta",{content:u.fbAppId,property:"fb:app_id"}),i.a.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),i.a.createElement("meta",{content:"@"+u.twitter,name:"twitter:site"}),i.a.createElement("meta",{content:"@"+u.twitter,name:"twitter:creator"}),i.a.createElement("meta",{content:l,name:"twitter:text:title"}),i.a.createElement("meta",{content:d,property:"og:url"}),i.a.createElement("meta",{content:d,name:"twitter:url"}),i.a.createElement("link",{rel:"canonical",href:d}),i.a.createElement("meta",{content:m||r+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:m||r+"/social.png",name:"twitter:image"}),i.a.createElement("meta",{content:"1024",name:"twitter:image:width"}),i.a.createElement("meta",{content:"512",name:"twitter:image:height"}),i.a.createElement("meta",{content:m||r+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:s,name:"msapplication-TileColor"}),i.a.createElement("meta",{content:"/icons/mstile-70x70.png",name:"msapplication-square70x70"}),i.a.createElement("meta",{content:"/icons/mstile-144x144.png",name:"msapplication-square144x144"}),i.a.createElement("meta",{content:"/icons/mstile-150x150.png",name:"msapplication-square150x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x150.png",name:"msapplication-wide310x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x310.png",name:"msapplication-square310x310"}),i.a.createElement("link",{href:"/manifest.json",rel:"manifest"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-57x57.png",rel:"apple-touch-icon",sizes:"57x57"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-60x60.png",rel:"apple-touch-icon",sizes:"60x60"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-72x72.png",rel:"apple-touch-icon",sizes:"72x72"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-76x76.png",rel:"apple-touch-icon",sizes:"76x76"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-114x114.png",rel:"apple-touch-icon",sizes:"114x114"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-120x120.png",rel:"apple-touch-icon",sizes:"120x120"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-144x144.png",rel:"apple-touch-icon",sizes:"144x144"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-152x152.png",rel:"apple-touch-icon",sizes:"152x152"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-167x167.png",rel:"apple-touch-icon",sizes:"167x167"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-180x180.png",rel:"icon",sizes:"180x180",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var n=e.location,t=e.canonical,r=e.siteUrl,a=e.pageTitle,i=e.siteTitle,o=[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a||i,alternateName:e.pageTitleFull}];return a&&"/"!==n.pathname&&o.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:i}},{"@type":"ListItem",position:2,item:{"@id":t,name:a}}]}),o}({location:p,canonical:d,siteUrl:r,pageTitle:a,siteTitle:n,pageTitleFull:l}))))};n.a=function(e){return i.a.createElement(c.b,{query:"177639445",render:function(n){return i.a.createElement(l.Location,null,function(t){var r=t.location;return i.a.createElement(s,Object.assign({},n.site.siteMetadata,e,{location:r}))})},data:r})}},202:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Seeking Shelter"}}}}},203:function(e,n,t){"use strict";t.r(n);t(16);var r=t(0),a=t.n(r),i=t(100);n.default=function(e){var n=e.location,t=e.pageResources;return t?a.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null}},204:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Seeking Shelter",siteTitleShort:"Shelter",siteDescription:"Shelters and services aimed at women that are victims of abuse",siteUrl:"https://seeking-shelter.netlify.com",themeColor:"#000",social:{twitter:"",fbAppId:""}}}}}},205:function(e,n,t){"use strict";t(16);var r=t(202),a=t(0),i=t.n(a),o=t(196),c=t(201),l=t(81),s=t(195);function u(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4rem;\n\n  a {\n    color: #757575;\n    transition: color 0.2s ease;\n    text-decoration: none;\n\n    &:hover {\n      color: inherit;\n    }\n  }\n"]);return u=function(){return e},e}var m=s.c.header(u()),p=t(198);function f(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n\n    li {\n      text-transform: uppercase;\n      font-size: 1.3rem;\n\n      & + li {\n        margin-left: 2rem;\n      }\n    }\n  }\n"]);return f=function(){return e},e}var d=s.c.nav(f()),h=function(){return i.a.createElement(d,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.a,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/fabe/gatsby-universal"},"GitHub"))))},g=l.b.div({enter:{y:0,transition:{ease:"easeInOut"}},exit:{y:"-100%",transition:{ease:"easeInOut"}}}),v=function(e){var n=e.title;return i.a.createElement(g,null,i.a.createElement(m,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(p.a,{as:"h1"},n)),i.a.createElement(h,null)))},b=t(200);function E(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n    line-height: 1;\n    font-size: 1.6rem;\n    color: #000;\n    background-color: #fff;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    -webkit-font-feature-settings: "pnum";\n    font-feature-settings: "pnum";\n    font-variant-numeric: proportional-nums;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    color: ',";\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    color: ",';\n    border: 1px solid #ddd;\n    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  p {\n    margin-bottom: 2rem;\n  }\n']);return E=function(){return e},e}var y=Object(s.a)(E(),b.a,b.a),w=function(e){var n=e.data,t=e.children;return i.a.createElement("div",null,i.a.createElement(y,null),i.a.createElement(c.a,null),i.a.createElement(v,{title:n.site.siteMetadata.siteTitle}),t)};n.a=function(e){return i.a.createElement(o.b,{query:"2302781957",render:function(n){return i.a.createElement(w,Object.assign({data:n},e))},data:r})}},206:function(e,n,t){"use strict";var r=t(0),a=t.n(r);function i(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  padding: 2rem 4rem;\n  max-width: 700px;\n"]);return i=function(){return e},e}var o=t(195).c.div(i());n.a=function(e){var n=e.children;return a.a.createElement(o,null,n)}}}]);
//# sourceMappingURL=component---src-pages-index-js-90264cf2e9fb412ece62.js.map