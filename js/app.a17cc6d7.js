(function(){"use strict";var a={127:function(a,e,i){var t=i(231),s=i(0);const n={class:"conteudo"};function o(a,e,i,t,o,d){const c=(0,s.up)("NavBar"),r=(0,s.up)("PageContent"),l=(0,s.up)("MenuLateralMobile");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s.Wm)(c,{onClick:a.open},null,8,["onClick"]),(0,s.Wm)(r),(0,s.Wm)(l,{onClick:a.close},null,8,["onClick"])])}var d=i.p+"img/logo.56dd9ce1.svg",c=i.p+"img/icon-todo.48f3c1d9.svg",r=i.p+"img/icon-calendar.2290e827.svg",l=i.p+"img/icon-reminders.f097a34e.svg",v=i.p+"img/icon-planning.1bc52036.svg",u=i.p+"img/icon-menu.a12a9fae.svg";const m=a=>((0,s.dD)("data-v-9ee90564"),a=a(),(0,s.Cn)(),a),g={class:"nav"},p={class:"nav-bar"},f=(0,s.uE)('<div class="logo" data-v-9ee90564><img src="'+d+'" alt="Logo Snap" data-v-9ee90564></div><div class="site-navigation desktop" data-v-9ee90564><div class="dropdown" data-v-9ee90564><button class="dropdown1" name="drop" data-v-9ee90564> Features </button><div class="lista-dropdown1" data-v-9ee90564><div class="item" data-v-9ee90564><div class="img" data-v-9ee90564><img src="'+c+'" alt="" data-v-9ee90564></div><a href="#" data-v-9ee90564>Todo List</a></div><div class="item" data-v-9ee90564><div class="img" data-v-9ee90564><img src="'+r+'" alt="" data-v-9ee90564></div><a href="" data-v-9ee90564>Calendar</a></div><div class="item" data-v-9ee90564><div class="img" data-v-9ee90564><img class="reminders" src="'+l+'" alt="" data-v-9ee90564></div><a href="" data-v-9ee90564>Reminders</a></div><div class="item" data-v-9ee90564><div class="img" data-v-9ee90564><img src="'+v+'" alt="" data-v-9ee90564></div><a href="" data-v-9ee90564>Planning</a></div></div></div><div class="dropdown" data-v-9ee90564><button class="dropdown2" name="drop" data-v-9ee90564> Company </button><div class="lista-dropdown2" data-v-9ee90564><div class="item" data-v-9ee90564><a href="#" data-v-9ee90564>History</a></div><div class="item" data-v-9ee90564><a href="" data-v-9ee90564>Our Team</a></div><div class="item" data-v-9ee90564><a href="" data-v-9ee90564>Blog</a></div></div></div><button class="careers" data-v-9ee90564>Careers</button><button class="about" data-v-9ee90564>About</button></div>',2),b=m((()=>(0,s._)("img",{src:u,alt:""},null,-1))),h=[b],y=m((()=>(0,s._)("div",{class:"nav-login"},[(0,s._)("button",{class:"login"},"Login"),(0,s._)("button",{class:"register"},"Register")],-1)));function w(a,e,i,t,n,o){return(0,s.wg)(),(0,s.iD)("div",g,[(0,s._)("div",p,[f,(0,s._)("div",{id:"mobile-navigation",onClick:e[0]||(e[0]=a=>o.open())},h)]),y])}var k={name:"NavBar",methods:{open:function(){let a=document.querySelector(".navigation-mobile");a.style.display="flex"}},data(){return[]}},C=i(860);const O=(0,C.Z)(k,[["render",w],["__scopeId","data-v-9ee90564"]]);var _=O,x=i.p+"img/client-databiz.a147d9fa.svg",L=i.p+"img/client-audiophile.d2c1dbad.svg",M=i.p+"img/client-meet.95bc7714.svg",P=i.p+"img/client-maker.8c396a86.svg",j=i.p+"img/image-hero-desktop.58209876.png";const T={class:"row content"},B=(0,s.uE)('<div class="col-6 esquerda"><h1>Make remote work</h1><div class="text"> Get your team in sync, no matter your location. Streamline processes create team rituals, and watch productivity soar. </div><button class="learn-more">Learn more</button><div class="clients"><div class="img"><img src="'+x+'" alt=""></div><div class="img"><img src="'+L+'" alt=""></div><div class="img"><img src="'+M+'" alt=""></div><div class="img"><img src="'+P+'" alt=""></div></div></div><div class="col-6 direita"><img class="image-hero" src="'+j+'" alt=""></div>',2),D=[B];function E(a,e,i,t,n,o){return(0,s.wg)(),(0,s.iD)("div",T,D)}var S={name:"PageContent"};const Z=(0,C.Z)(S,[["render",E]]);var q=Z,A=i.p+"img/icon-close-menu.7a75d930.svg";const F={class:"menu-hamburguer"},N={class:"navigation-mobile"},R=(0,s.uE)('<div class="lista"><label class="task-collapse"><input type="checkbox" class="toggle-collapse"><div class="heading">Features</div><div class="collapse"><div class="content"><div class="item"><div class="img"><img src="'+c+'" alt=""></div><a href="#">Todo List</a></div><div class="item"><div class="img"><img src="'+r+'" alt=""></div><a href="">Calendar</a></div><div class="item"><div class="img"><img class="reminders" src="'+l+'" alt=""></div><a href="">Reminders</a></div><div class="item"><div class="img"><img src="'+v+'" alt=""></div><a href="">Planning</a></div></div></div></label><label class="task-collapse"><input type="checkbox" class="toggle-collapse"><div class="heading">Company</div><div class="collapse"><div class="content"><div class="item"><a href="#">History</a></div><div class="item"><a href="">Our Team</a></div><div class="item"><a href="">Blog</a></div></div></div></label><button class="careers">Careers</button><button class="about">About</button></div>',1),W=(0,s._)("img",{src:A,alt:""},null,-1),H=[W];function z(a,e,i,t,n,o){return(0,s.wg)(),(0,s.iD)("div",F,[(0,s._)("div",N,[R,(0,s._)("button",{class:"close",onClick:e[0]||(e[0]=(...a)=>o.close&&o.close(...a))},H)])])}var G={name:"MenuLateralMobile",methods:{close:function(){let a=document.querySelector(".navigation-mobile");a.style.display="none"}},data(){return[]}};const I=(0,C.Z)(G,[["render",z]]);var J=I,K={name:"App",components:{NavBar:_,PageContent:q,MenuLateralMobile:J}};const Q=(0,C.Z)(K,[["render",o]]);var U=Q;(0,t.ri)(U).mount("#app")}},e={};function i(t){var s=e[t];if(void 0!==s)return s.exports;var n=e[t]={exports:{}};return a[t](n,n.exports,i),n.exports}i.m=a,function(){var a=[];i.O=function(e,t,s,n){if(!t){var o=1/0;for(l=0;l<a.length;l++){t=a[l][0],s=a[l][1],n=a[l][2];for(var d=!0,c=0;c<t.length;c++)(!1&n||o>=n)&&Object.keys(i.O).every((function(a){return i.O[a](t[c])}))?t.splice(c--,1):(d=!1,n<o&&(o=n));if(d){a.splice(l--,1);var r=s();void 0!==r&&(e=r)}}return e}n=n||0;for(var l=a.length;l>0&&a[l-1][2]>n;l--)a[l]=a[l-1];a[l]=[t,s,n]}}(),function(){i.d=function(a,e){for(var t in e)i.o(e,t)&&!i.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){i.p="/snap-page/"}(),function(){var a={143:0};i.O.j=function(e){return 0===a[e]};var e=function(e,t){var s,n,o=t[0],d=t[1],c=t[2],r=0;if(o.some((function(e){return 0!==a[e]}))){for(s in d)i.o(d,s)&&(i.m[s]=d[s]);if(c)var l=c(i)}for(e&&e(t);r<o.length;r++)n=o[r],i.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return i.O(l)},t=self["webpackChunkintro_section"]=self["webpackChunkintro_section"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(127)}));t=i.O(t)})();
//# sourceMappingURL=app.a17cc6d7.js.map