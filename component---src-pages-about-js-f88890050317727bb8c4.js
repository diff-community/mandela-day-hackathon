(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return l});var a=n(0),r=n.n(a),i=n(205),o=n(206),c=n(201);t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(c.a,{pageTitle:t.aboutJson.title}),r.a.createElement(o.a,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.aboutJson.content.childMarkdownRemark.html}})))};var l="3981516706"},196:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(72),o=n.n(i);n.d(t,"a",function(){return o.a});n(197),n(15).default.enqueue;var c=r.a.createContext({});function l(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:n,render:a||i,staticQueryData:e})})}},197:function(e,t,n){var a;e.exports=(a=n(203))&&a.default||a},198:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(195),o=n(199);function c(){var e=s(["\n    font-size: ",";\n  "]);return c=function(){return e},e}function l(){var e=s(["\n  display: block;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.2;\n\n  ",";\n"]);return l=function(){return e},e}function s(e,t){return t||(t=e.slice(0)),e.raw=t,e}var m=i.c.span(l(),function(e){var t=e.size;return function(){switch(t){case"large":return"400";default:return"500"}}},function(e){var t=e.size;return function(){switch(t){case"large":return"3.2rem";default:return"2rem"}}},o.a.TABLET(c(),function(e){var t=e.size;return function(){switch(t){case"large":return"2.6rem";default:return"2rem"}}}));t.a=function(e){var t=e.children,n=e.as,a=void 0===n?"span":n,i=e.size;return r.a.createElement(m,{as:a,size:i},t)}},199:function(e,t,n){"use strict";n(13),n(14),n(7),n(25);var a=n(195),r={DESKTOP:992,TABLET:768,PHONE:376};function i(){var e=c(["\n    @media (min-width: ","em) {\n      ",";\n    }\n  "]);return i=function(){return e},e}function o(){var e=c(["\n    @media (max-width: ","em) {\n      ",";\n    }\n  "]);return o=function(){return e},e}function c(e,t){return t||(t=e.slice(0)),e.raw=t,e}var l=Object.keys(r).reduce(function(e,t){return e[t]=function(){return Object(a.b)(o(),r[t]/16,a.b.apply(void 0,arguments))},e["MIN_"+t]=function(){return Object(a.b)(i(),r[t]/16,a.b.apply(void 0,arguments))},e},{});t.a=l},200:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="#f90000"},201:function(e,t,n){"use strict";n(16);var a=n(204),r=n(0),i=n.n(r),o=n(207),c=n(196),l=n(30),s=function(e){var t=e.siteTitle,n=e.siteDescription,a=e.siteUrl,r=e.pageTitle,c=e.pageTitleFull,l=void 0===c?r?t+": "+r:t:c,s=e.themeColor,m=e.social,u=e.imageUrl,p=e.location,f=e.canonical,d=void 0===f?a+(p.pathname||""):f;return i.a.createElement(o.Helmet,null,i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{content:"IE=edge",httpEquiv:"X-UA-Compatible"}),i.a.createElement("meta",{content:"width=device-width,initial-scale=1.0,user-scalable=yes",name:"viewport"}),i.a.createElement("meta",{content:t,name:"apple-mobile-web-app-title"}),i.a.createElement("meta",{content:l,property:"og:title"}),i.a.createElement("meta",{content:l,name:"twitter:title"}),i.a.createElement("title",null,l),i.a.createElement("meta",{content:n,name:"description"}),i.a.createElement("meta",{content:n,property:"og:description"}),i.a.createElement("meta",{content:n,name:"twitter:description"}),i.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),i.a.createElement("meta",{content:"black-translucent",name:"apple-mobile-web-app-status-bar-style"}),i.a.createElement("meta",{content:s,name:"theme-color"}),i.a.createElement("meta",{content:t,name:"application-name"}),i.a.createElement("meta",{content:"website",property:"og:type"}),i.a.createElement("meta",{content:t,property:"og:site_name"}),i.a.createElement("meta",{content:m.fbAppId,property:"fb:app_id"}),i.a.createElement("meta",{content:"summary_large_image",name:"twitter:card"}),i.a.createElement("meta",{content:"@"+m.twitter,name:"twitter:site"}),i.a.createElement("meta",{content:"@"+m.twitter,name:"twitter:creator"}),i.a.createElement("meta",{content:l,name:"twitter:text:title"}),i.a.createElement("meta",{content:d,property:"og:url"}),i.a.createElement("meta",{content:d,name:"twitter:url"}),i.a.createElement("link",{rel:"canonical",href:d}),i.a.createElement("meta",{content:u||a+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:u||a+"/social.png",name:"twitter:image"}),i.a.createElement("meta",{content:"1024",name:"twitter:image:width"}),i.a.createElement("meta",{content:"512",name:"twitter:image:height"}),i.a.createElement("meta",{content:u||a+"/social.png",property:"og:image"}),i.a.createElement("meta",{content:"1024",property:"og:image:width"}),i.a.createElement("meta",{content:"512",property:"og:image:height"}),i.a.createElement("meta",{content:s,name:"msapplication-TileColor"}),i.a.createElement("meta",{content:"/icons/mstile-70x70.png",name:"msapplication-square70x70"}),i.a.createElement("meta",{content:"/icons/mstile-144x144.png",name:"msapplication-square144x144"}),i.a.createElement("meta",{content:"/icons/mstile-150x150.png",name:"msapplication-square150x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x150.png",name:"msapplication-wide310x150"}),i.a.createElement("meta",{content:"/icons/mstile-310x310.png",name:"msapplication-square310x310"}),i.a.createElement("link",{href:"/manifest.json",rel:"manifest"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-57x57.png",rel:"apple-touch-icon",sizes:"57x57"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-60x60.png",rel:"apple-touch-icon",sizes:"60x60"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-72x72.png",rel:"apple-touch-icon",sizes:"72x72"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-76x76.png",rel:"apple-touch-icon",sizes:"76x76"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-114x114.png",rel:"apple-touch-icon",sizes:"114x114"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-120x120.png",rel:"apple-touch-icon",sizes:"120x120"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-144x144.png",rel:"apple-touch-icon",sizes:"144x144"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-152x152.png",rel:"apple-touch-icon",sizes:"152x152"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-167x167.png",rel:"apple-touch-icon",sizes:"167x167"}),i.a.createElement("link",{href:"/icons/apple-touch-icon-180x180.png",rel:"icon",sizes:"180x180",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-32x32.png",rel:"icon",sizes:"32x32",type:"image/png"}),i.a.createElement("link",{href:"/icons/favicon-16x16.png",rel:"icon",sizes:"16x16",type:"image/png"}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.location,n=e.canonical,a=e.siteUrl,r=e.pageTitle,i=e.siteTitle,o=[{"@context":"http://schema.org","@type":"WebSite",url:n,name:r||i,alternateName:e.pageTitleFull}];return r&&"/"!==t.pathname&&o.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:i}},{"@type":"ListItem",position:2,item:{"@id":n,name:r}}]}),o}({location:p,canonical:d,siteUrl:a,pageTitle:r,siteTitle:t,pageTitleFull:l}))))};t.a=function(e){return i.a.createElement(c.b,{query:"177639445",render:function(t){return i.a.createElement(l.Location,null,function(n){var a=n.location;return i.a.createElement(s,Object.assign({},t.site.siteMetadata,e,{location:a}))})},data:a})}},202:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Seeking Shelter"}}}}},203:function(e,t,n){"use strict";n.r(t);n(16);var a=n(0),r=n.n(a),i=n(100);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},204:function(e){e.exports={data:{site:{siteMetadata:{siteTitle:"Seeking Shelter",siteTitleShort:"Shelter",siteDescription:"Shelters and services aimed at women that are victims of abuse",siteUrl:"https://seeking-shelter.netlify.com",themeColor:"#000",social:{twitter:"",fbAppId:""}}}}}},205:function(e,t,n){"use strict";n(16);var a=n(202),r=n(0),i=n.n(r),o=n(196),c=n(201),l=n(81),s=n(195);function m(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4rem;\n\n  a {\n    color: #757575;\n    transition: color 0.2s ease;\n    text-decoration: none;\n\n    &:hover {\n      color: inherit;\n    }\n  }\n"]);return m=function(){return e},e}var u=s.c.header(m()),p=n(198);function f(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  ul {\n    display: flex;\n    list-style: none;\n    padding: 0;\n\n    li {\n      text-transform: uppercase;\n      font-size: 1.3rem;\n\n      & + li {\n        margin-left: 2rem;\n      }\n    }\n  }\n"]);return f=function(){return e},e}var d=s.c.nav(f()),g=function(){return i.a.createElement(d,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(o.a,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/fabe/gatsby-universal"},"GitHub"))))},h=l.b.div({enter:{y:0,transition:{ease:"easeInOut"}},exit:{y:"-100%",transition:{ease:"easeInOut"}}}),E=function(e){var t=e.title;return i.a.createElement(h,null,i.a.createElement(u,null,i.a.createElement(o.a,{to:"/"},i.a.createElement(p.a,{as:"h1"},t)),i.a.createElement(g,null)))},b=n(200);function v(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n  }\n\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";\n    line-height: 1;\n    font-size: 1.6rem;\n    color: #000;\n    background-color: #fff;\n    -webkit-text-size-adjust: 100%;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    -webkit-font-feature-settings: "pnum";\n    font-feature-settings: "pnum";\n    font-variant-numeric: proportional-nums;\n  }\n\n  ol, ul {\n    list-style: none;\n  }\n\n  blockquote, q {\n    quotes: none;\n  }\n\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: \'\';\n    content: none;\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  a {\n    color: ',";\n  }\n\n  pre {\n    display: block;\n    padding: 2rem;\n    margin-top: 4rem;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    border-radius: 5px;\n    color: ",';\n    border: 1px solid #ddd;\n    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;\n  }\n\n  video {\n    max-width: 100%;\n  }\n\n  p {\n    margin-bottom: 2rem;\n  }\n']);return v=function(){return e},e}var y=Object(s.a)(v(),b.a,b.a),x=function(e){var t=e.data,n=e.children;return i.a.createElement("div",null,i.a.createElement(y,null),i.a.createElement(c.a,null),i.a.createElement(E,{title:t.site.siteMetadata.siteTitle}),n)};t.a=function(e){return i.a.createElement(o.b,{query:"2302781957",render:function(t){return i.a.createElement(x,Object.assign({data:t},e))},data:a})}},206:function(e,t,n){"use strict";var a=n(0),r=n.n(a);function i(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n  padding: 2rem 4rem;\n  max-width: 700px;\n"]);return i=function(){return e},e}var o=n(195).c.div(i());t.a=function(e){var t=e.children;return r.a.createElement(o,null,t)}}}]);
//# sourceMappingURL=component---src-pages-about-js-f88890050317727bb8c4.js.map