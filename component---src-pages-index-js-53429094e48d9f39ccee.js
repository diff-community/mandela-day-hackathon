(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{210:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(220),o=t(221),c=t(214),l=(t(16),t(236)),u=t.n(l),s=t(107),m=t(215);function p(){var e=h(["\n    margin-bottom: 4rem;\n  "]);return p=function(){return e},e}function d(){var e=h(["\n  color: #757575;\n  margin: 0 2rem 2rem;\n\n  ",";\n"]);return d=function(){return e},e}function f(){var e=h(["\n  display: block;\n  font-size: 2rem;\n  font-weight: 500;\n  margin: 2rem 2rem 1rem;\n"]);return f=function(){return e},e}function h(e,n){return n||(n=e.slice(0)),e.raw=n,e}var g=s.d.span(f()),v=s.d.p(d(),m.a.TABLET(p())),E=function(e){var n=e.title,t=e.copy,r=e.image;return a.a.createElement("figure",null,a.a.createElement(u.a,{fluid:r?r.childImageSharp.fluid:{},alt:n}),a.a.createElement("figcaption",null,a.a.createElement(g,null,n),a.a.createElement(v,null,t)))};function b(){var e=y(["\n    display: block;\n  "]);return b=function(){return e},e}function w(){var e=y(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 4rem;\n  padding: 0 4rem;\n  margin: 2rem 0;\n\n  ",";\n"]);return w=function(){return e},e}function y(e,n){return n||(n=e.slice(0)),e.raw=n,e}var x,k=s.d.div(w(),m.a.TABLET(b())),z=function(e){var n=e.items;return a.a.createElement(k,null,n.map(function(e,n){return a.a.createElement(E,Object.assign({},e,{key:n}))}))},S=(t(29),t(5),t(239)),T=t.n(S);t(226);function O(e,n,t,r,a,i,o){try{var c=e[i](o),l=c.value}catch(u){return void t(u)}c.done?n(l):Promise.resolve(l).then(r,a)}var q=[];function M(e){return void 0===e&&(e="-50px"),void 0===x&&"undefined"!=typeof window&&window.IntersectionObserver&&(x=new window.IntersectionObserver(function(e){e.forEach(function(e){q.forEach(function(n){n[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0?n[1](!0):(!e.isIntersecting||e.intersectionRatio<=0)&&n[1](!1))})})},{rootMargin:e})),x}var I=function(e,n,t){var r=M(t);return r.observe(e),q.push([e,n]),r},j=function(e){var n,r;function i(){var n;return(n=e.call(this)||this).listenToIntersections=function(){n.io=I(n.ref,function(e){n.setState(function(n){var t={};return!n.hasBeenVisible&&e&&(t={hasBeenVisible:!0}),Object.assign({isVisible:e},t)})},n.props.rootMargin)},n.handleRef=function(e){e&&(n.ref=e)},n.state={isVisible:!1,hasBeenVisible:!1,IOSupported:!1},n}r=e,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var o=i.prototype;return o.componentDidMount=function(){var e,n=(e=T.a.mark(function e(){var n,r,a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!0,r=!0,a=!1,"undefined"==typeof window||window.IntersectionObserver){e.next=6;break}return e.next=6,t.e(13).then(t.t.bind(null,247,7)).then(function(){console.log("IntersectionObserver polyfill injected.")});case 6:"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!1,a=!0),this.setState({isVisible:n,hasBeenVisible:r,IOSupported:a},this.listenToIntersections);case 8:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(r,a){var i=e.apply(n,t);function o(e){O(i,r,a,o,c,"next",e)}function c(e){O(i,r,a,o,c,"throw",e)}o(void 0)})});return function(){return n.apply(this,arguments)}}(),o.componentWillUnmount=function(){this.io.disconnect()},o.render=function(){var e=this.state,n=e.isVisible,t=e.hasBeenVisible;return a.a.createElement("div",{ref:this.handleRef},this.props.children({isVisible:n,hasBeenVisible:t}))},i}(r.Component),L=t(216);function C(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  padding: 4rem;\n  margin: 4rem;\n  border-radius: 10px;\n  position: relative;\n  text-align: center;\n  color: #fff;\n  transition: background-color 0.3s ease;\n\n  background-color: ",";\n"]);return C=function(){return e},e}var B=s.d.div(C(),function(e){return e.isVisible?L.a:" #333"}),_=function(){return a.a.createElement(j,{rootMargin:"-50px"},function(e){var n=e.isVisible;return a.a.createElement(B,{isVisible:n},a.a.createElement(c.a,{tag:"span"},"IntersectionObserver"))})},U=t(126);function V(){var e=R(["\n  -webkit-appearance: none;\n  background-color: transparent;\n  border: none;\n  font-family: inherit;\n  font-size: 4rem;\n  font-weight: normal;\n  padding: 1rem;\n  line-height: 4rem;\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: #fff;\n"]);return V=function(){return e},e}function A(){var e=R(["\n  -webkit-appearance: none;\n  background-color: #fff;\n  border-radius: 5px;\n  border: none;\n  color: #757575;\n  border: 1px solid #ddd;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 1.3rem;\n  font-weight: 500;\n  margin: 4rem 0 2rem;\n  padding: 1rem 2rem;\n  text-transform: uppercase;\n  transition: 0.2s background-color ease;\n\n  &:active,\n  &:focus {\n    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);\n    outline: none;\n  }\n\n  &:hover {\n    background-color: #f9f9f9;\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n"]);return A=function(){return e},e}function R(e,n){return n||(n=e.slice(0)),e.raw=n,e}var D=s.d.button(A()),F=s.d.button(V()),J=t(243),K=t(240);t(241);var N=function(e){var n,t;function r(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).onKeyDown=function(e){"Escape"===e.key&&n.props.open&&n.props.hideModal()},n}t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t;var i=r.prototype;return i.componentDidMount=function(){document.addEventListener("keydown",this.onKeyDown)},i.componentWillUnmount=function(){document.removeEventListener("keydown",this.onKeyDown)},i.disableScrolling=function(e){e?(document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"):(document.body.style.overflow=null,document.documentElement.style.overflow=null)},i.render=function(){var e=this.props,n=e.children,t=e.open,r=e.showModal,i=e.hideModal;return"undefined"!=typeof document&&this.disableScrolling(t),a.a.createElement(a.a.Fragment,null,a.a.createElement(D,{onClick:r},"Show Modal"),a.a.createElement(J.a,{isOpen:t},a.a.createElement(F,{onClick:i},a.a.createElement(K.a,null,"Close"),a.a.createElement("span",{"aria-hidden":!0},"×")),n))},r}(r.PureComponent),H=function(e){var n=e.children;return a.a.createElement(U.a,null,function(e){var t=e.open,r=e.showModal,i=e.hideModal;return a.a.createElement(N,{open:t,showModal:r,hideModal:i},n)})},P=t(242);function W(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  display: flex;\n  width: 100%;\n  min-height: 50px;\n"]);return W=function(){return e},e}var Q=s.d.div(W()),G=function(e){var n=e.children;return a.a.createElement(Q,null,n)};function X(){var e=ee(["\n  font-size: 1.3em;\n  font-weight: 100;\n  color: ",";\n  width: ",";\n  text-align: ",";\n"]);return X=function(){return e},e}function Y(){var e=ee(["\n  font-size: 2em;\n  margin-bottom: 0.4em;\n  color: ",";\n"]);return Y=function(){return e},e}function Z(){var e=ee(["\n  font-size: 2em;\n  color: ",";\n"]);return Z=function(){return e},e}function $(){var e=ee(["\n  font-size: 2em;\n  color: ",";\n"]);return $=function(){return e},e}function ee(e,n){return n||(n=e.slice(0)),e.raw=n,e}s.d.h2($(),function(e){return e.theme.grey}),s.d.p(Z(),function(e){return e.theme.grey});var ne=s.d.h3(Y(),function(e){return e.theme.darkGrey}),te=s.d.p(X(),function(e){return e.theme[e.color]||"white"},function(e){return e.width||"auto"},function(e){return e.textAlignCenter});function re(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  background-color: ",";\n  padding: 5em 3em;\n"]);return re=function(){return e},e}var ae=s.d.article(re(),function(e){return e.blue?e.theme.blue:"white"}),ie=function(e){var n=e.title,t=e.description,r=e.blue;return a.a.createElement(ae,{blue:r},a.a.createElement(ne,null,n),a.a.createElement(te,{width:"50%",textAlignCenter:"center",color:"grey"},t),a.a.createElement("div",null,a.a.createElement("button",null,"button")))},oe=function(){var e=P.data;return a.a.createElement(G,null,e.helpJson.helpList.map(function(e,n){return a.a.createElement(ie,{key:n,blue:0===n,title:e.title,description:e.description})}))};function ce(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  width: 100%;\n  display: flex;\n  font-weight: 500;\n  margin: 0 15px;\n"]);return ce=function(){return e},e}var le=s.d.div(ce()),ue=function(){return a.a.createElement(G,null,a.a.createElement(le,null,"Stats Section"))},se=function(){return a.a.createElement(G,null,a.a.createElement(le,null,"Story Section"))},me=function(){return a.a.createElement(G,null,a.a.createElement(le,null,"Resources Section"))};function pe(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  width: calc(100vw - 30px);\n  height: calc((100vw - 30px) * 619 / 1100);\n"]);return pe=function(){return e},e}var de=s.d.div(pe()),fe=function(e){var n=e.videoSrcURL,t=e.videoTitle;return a.a.createElement(de,null,a.a.createElement("iframe",{src:n,title:t,width:"100%",height:"100%",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",frameBorder:"0",webkitallowfullscreen:"true",mozallowfullscreen:"true",allowFullScreen:!0}))},he=function(){return a.a.createElement(G,null,a.a.createElement(le,null,a.a.createElement(fe,{videoTitle:"Seeking Shelter",videoSrcURL:"https://www.youtube.com/embed/9WDUmj_ooac"})))};t.d(n,"query",function(){return ge});n.default=function(e){var n=e.data;return a.a.createElement(i.a,null,a.a.createElement(o.a,null,a.a.createElement(c.a,{as:"h2",size:"large"},n.homeJson.content.childMarkdownRemark.rawMarkdownBody),a.a.createElement(H,null,a.a.createElement("picture",null,a.a.createElement("source",{srcSet:"https://i.imgur.com/lqKlotB.png",media:"(min-width: 800px)"}),a.a.createElement("img",{src:"https://i.imgur.com/lqKlotB.png",alt:"Very Nice!"})))),a.a.createElement(oe,null),a.a.createElement(ue,null),a.a.createElement(se,null),a.a.createElement(he,null),a.a.createElement(me,null),a.a.createElement(z,{items:n.homeJson.gallery}),a.a.createElement("div",{style:{height:"50vh"}}),a.a.createElement(_,null))};var ge="751990366"},211:function(e,n,t){"use strict";t.d(n,"b",function(){return u});var r=t(0),a=t.n(r),i=t(74),o=t.n(i);t.d(n,"a",function(){return o.a});t(212),t(17).default.enqueue;var c=a.a.createContext({});function l(e){var n=e.staticQueryData,t=e.data,r=e.query,i=e.render,o=t?t.data:n[r]&&n[r].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var n=e.data,t=e.query,r=e.render,i=e.children;return a.a.createElement(c.Consumer,null,function(e){return a.a.createElement(l,{data:n,query:t,render:r||i,staticQueryData:e})})}},212:function(e,n,t){var r;e.exports=(r=t(218))&&r.default||r},213:function(e,n,t){"use strict";t(16);var r=t(219),a=t(0),i=t.n(a),o=t(222),c=t(211),l=t(30),u=function(e){var n=e.siteTitle,t=e.siteDescription,r=e.siteUrl,a=e.pageTitle,c=e.pageTitleFull,l=void 0===c?a?n+": "+a:n:c,u=e.themeColor,s=e.social,m=e.imageUrl,p=e.location,d=e.canonical,f=void 0===d?r+(p.pathname||""):d;return i.a.createElement(o.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),i.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,user-scalable=yes",name:"viewport"}),i.a.createElement("meta",{content:n,name:"apple-mobile-web-app-title"}),i.a.createElement("meta",{content:l,property:"og:title"}),i.a.createElement("meta",{content:l,name:"twitter:title"}),i.a.createElement("title",null,l),i.a.createElement("meta",{content:t,name:"description"}),i.a.createElement("meta",{content:t,property:"og:description"}),i.a.createElement("meta",{content:t,name:"twitter:description"}),i.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),i.a.createElement("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),i.a.createElement("meta",{content:u,name:"theme-color"}),i.a.createElement("meta",{content:n,name:"application-name"}),i.a.createElement("meta",{content:"website",property:"og:type"}),i.a.createElement("meta",{content:n,property:"og:site_name"}),i.a.createElement("meta",{content:s.fbAppId,property:"fb:app_id"}),i.a.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),i.a.createElement("meta",{content:"@"+s.twitter,name:"twitter:site"}),i.a.createElement("meta",{content:"@"+s.twitter,name:"twitter:creator"}),i.a.createElement("meta",{content:l,name:"twitter:text:title"}),i.a.createElement("meta",{content:f,property:"og:url"}),i.a.createElement("meta",{content:f,name:"twitter:url"}),i.a.createElement("link",{rel:"canonical",href:f}),i.a.createElement("meta",{content:m||r+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:m||r+"/social.png",name:"twitter:image"}),i.a.createElement("meta",{content:"1024",name:"twitter:image:width"}),i.a.createElement("meta",{content:"512",name:"twitter:image:height"}),i.a.createElement("meta",{content:m||r+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:u,name:"msapplication-TileColor"}),i.a.createElement("meta",{content:"/icons/mstile-70x70.png",name:"msapplication-square70x70"}),i.a.createElement("meta",{content:"/icons/mstile-144x144.png",name:"msapplication-square144x144"}),i.a.createElement("meta",{content:"/icons/mstile-150x150.png",name:"msapplication-square150x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x150.png",name:"msapplication-wide310x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x310.png",name:"msapplication-square310x310"}),i.a.createElement("link",{href:"/manifest.json",rel:"manifest"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-57x57.png",rel:"apple-touch-icon",sizes:"57x57"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-60x60.png",rel:"apple-touch-icon",sizes:"60x60"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-72x72.png",rel:"apple-touch-icon",sizes:"72x72"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-76x76.png",rel:"apple-touch-icon",sizes:"76x76"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-114x114.png",rel:"apple-touch-icon",sizes:"114x114"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-120x120.png",rel:"apple-touch-icon",sizes:"120x120"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-144x144.png",rel:"apple-touch-icon",sizes:"144x144"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-152x152.png",rel:"apple-touch-icon",sizes:"152x152"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-167x167.png",rel:"apple-touch-icon",sizes:"167x167"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-180x180.png",rel:"icon",sizes:"180x180",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var n=e.location,t=e.canonical,r=e.siteUrl,a=e.pageTitle,i=e.siteTitle,o=[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a||i,alternateName:e.pageTitleFull}];return a&&"/"!==n.pathname&&o.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:i}},{"@type":"ListItem",position:2,item:{"@id":t,name:a}}]}),o}({location:p,canonical:f,siteUrl:r,pageTitle:a,siteTitle:n,pageTitleFull:l}))))};n.a=function(e){return i.a.createElement(c.b,{query:"177639445",render:function(n){return i.a.createElement(l.Location,null,function(t){var r=t.location;return i.a.createElement(u,Object.assign({},n.site.siteMetadata,e,{location:r}))})},data:r})}},214:function(e,n,t){"use strict";var r=t(0),a=t.n(r),i=t(107),o=t(215);function c(){var e=u(["\n    font-size: ",";\n  "]);return c=function(){return e},e}function l(){var e=u(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n\n  ",";\n"]);return l=function(){return e},e}function u(e,n){return n||(n=e.slice(0)),e.raw=n,e}var s=i.d.span(l(),function(e){var n=e.size;return function(){switch(n){case"large":return"400";default:return"500"}}},function(e){var n=e.size;return function(){switch(n){case"large":return"3.2rem";default:return"2rem"}}},o.a.TABLET(c(),function(e){var n=e.size;return function(){switch(n){case"large":return"2.6rem";default:return"2rem"}}}));n.a=function(e){var n=e.children,t=e.as,r=void 0===t?"span":t,i=e.size;return a.a.createElement(s,{as:r,size:i},n)}},215:function(e,n,t){"use strict";t(11),t(12),t(5),t(24);var r=t(107),a={DESKTOP:992,TABLET:768,PHONE:376};function i(){var e=c(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return i=function(){return e},e}function o(){var e=c(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return o=function(){return e},e}function c(e,n){return n||(n=e.slice(0)),e.raw=n,e}var l=Object.keys(a).reduce(function(e,n){return e[n]=function(){return Object(r.c)(o(),a[n]/16,r.c.apply(void 0,arguments))},e["MIN_"+n]=function(){return Object(r.c)(i(),a[n]/16,r.c.apply(void 0,arguments))},e},{});n.a=l},216:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r="#f90000"},217:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Seeking Shelter"}}}}},218:function(e,n,t){"use strict";t.r(n);t(16);var r=t(0),a=t.n(r),i=t(108);n.default=function(e){var n=e.location,t=e.pageResources;return t?a.a.createElement(i.a,Object.assign({location:n,pageResources:t},t.json)):null}},219:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Seeking Shelter",siteTitleShort:"Shelter",siteDescription:"Shelters and services aimed at women that are victims of abuse",siteUrl:"https://abafazi.netlify.com",themeColor:"#000",social:{twitter:"",fbAppId:""}}}}}},220:function(e,n,t){"use strict";t(16);var r=t(217),a=t(0),i=t.n(a),o=t(211),c=t(213),l=t(75),u=t(107);function s(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4rem;\n\n  a {\n    color: #757575;\n    transition: color 0.2s ease;\n    text-decoration: none;\n\n    &:hover {\n      color: inherit;\n    }\n  }\n"]);return s=function(){return e},e}var m=u.d.header(s()),p=t(214),d=t(245),f=t(246);function h(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  ul {\n    display: flex;\n    list-style: none;\n    align-items: center;\n    padding: 0;\n\n    li {\n      font-size: 1.3rem;\n\n      & + li {\n        margin-left: 2rem;\n      }\n    }\n  }\n"]);return h=function(){return e},e}var g=u.d.nav(h()),v=function(e){var n=e.url,t=e.children;return i.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank"},t)};function E(){var e=w(["\n  color: black;\n"]);return E=function(){return e},e}function b(){var e=w(["\n  color: black;\n"]);return b=function(){return e},e}function w(e,n){return n||(n=e.slice(0)),e.raw=n,e}var y=Object(u.d)(d.a)(b()),x=Object(u.d)(f.a)(E()),k=function(){return i.a.createElement(g,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.a,{to:"/faq"},"FAQs")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/resources"},"Resources")),i.a.createElement("li",null,i.a.createElement(o.a,{to:"/contact"},"Contact Us")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/diff-community/abafazi"},"GitHub")),i.a.createElement("li",null,i.a.createElement(v,{url:"https://twitter.com/nsm_za"},i.a.createElement(x,{size:"26"}))),i.a.createElement("li",null,i.a.createElement(v,{url:"https://www.facebook.com/NationalShelterMovementSA/"},i.a.createElement(y,{size:"26"})))))},z=l.b.div({enter:{y:0,transition:{ease:"easeInOut"}},exit:{y:"-100%",transition:{ease:"easeInOut"}}}),S=function(e){var n=e.title;return i.a.createElement(z,null,i.a.createElement(m,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(p.a,{as:"h1"},n)),i.a.createElement(k,null)))},T=t(216);function O(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n    line-height: 1;\n    font-size: 1.6rem;\n    color: #000;\n    background-color: #fff;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    -webkit-font-feature-settings: "pnum";\n    font-feature-settings: "pnum";\n    font-variant-numeric: proportional-nums;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    color: ',";\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    color: ",';\n    border: 1px solid #ddd;\n    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  p {\n    margin-bottom: 2rem;\n  }\n']);return O=function(){return e},e}var q=Object(u.b)(O(),T.a,T.a),M=function(e){var n=e.data,t=e.children;return i.a.createElement("div",null,i.a.createElement(q,null),i.a.createElement(c.a,null),i.a.createElement(S,{title:n.site.siteMetadata.siteTitle}),t)};n.a=function(e){return i.a.createElement(o.b,{query:"2302781957",render:function(n){return i.a.createElement(M,Object.assign({data:n},e))},data:r})}},221:function(e,n,t){"use strict";var r=t(0),a=t.n(r);function i(){var e=function(e,n){n||(n=e.slice(0));return e.raw=n,e}(["\n  padding: 2rem 4rem;\n  max-width: 700px;\n"]);return i=function(){return e},e}var o=t(107).d.div(i());n.a=function(e){var n=e.children;return a.a.createElement(o,null,n)}},242:function(e){e.exports={data:{helpJson:{helpList:[{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",title:"I need help"},{description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",title:"What i can do to help"}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-53429094e48d9f39ccee.js.map