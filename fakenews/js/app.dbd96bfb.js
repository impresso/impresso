(function(e){function t(t){for(var n,i,o=t[0],u=t[1],l=t[2],c=0,p=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,i=1;i<a.length;i++){var u=a[i];0!==s[u]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={app:0},r=[];function i(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5d4741da"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=s[e]=[t,n]}));t.push(a[2]=n);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=i(e);var l=new Error;r=function(t){u.onerror=u.onload=null,clearTimeout(c);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}s[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"05d9":function(e,t,a){"use strict";var n=a("76cb"),s=a.n(n);s.a},"1a8b":function(e,t,a){"use strict";var n=a("dd10"),s=a.n(n);t["default"]=s.a},"4bd9":function(e,t,a){"use strict";var n=a("5bfb"),s=a.n(n);t["default"]=s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("a925"),r=a("5f5b"),i=a("0759"),o=a("7386"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/fakenews/"}},[e._v("Quiz")]),e._v(" | "),a("router-link",{attrs:{to:"/fakenews/about"}},[e._v("About")])],1),a("router-view"),a("footer",{staticClass:"mt-5"},[a("b-container",{staticClass:"bv-example-row"},[a("b-row",{attrs:{"align-v":"center"}},[a("b-col",{attrs:{sm:"3",md:"4"}}),a("b-col",{attrs:{sm:"6",md:"4"}},[a("a",{attrs:{href:"https://impresso-project.ch/"}},[a("img",{attrs:{src:"https://impresso-project.ch/assets/images/logo-mobile.png",width:"100%",alt:"Impresso Logo"}})])]),a("b-col",{attrs:{sm:"3",md:"4"}})],1)],1),a("p")],1)],1)},l=[],c=(a("99af"),a("b0c0"),{mounted:function(){document.title=this.$t("title")},methods:{},watch:{$route:function(e){document.title="Home"!==e.name?"".concat(e.name," — ").concat(this.$t("title")):this.$t("title"),this.$gtag.event("screen_view",{app_name:"fakeNews",screen_name:e.name})}}}),d=c,p=(a("5c0b"),a("2877")),m=a("1a8b"),f=Object(p["a"])(d,u,l,!1,null,null,null);"function"===typeof m["default"]&&Object(m["default"])(f);var h=f.exports,v=(a("d3b7"),a("8c4f")),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.answered.length<e.num_articles,expression:"answered.length < num_articles"}],staticClass:"stats"},[a("div",{staticClass:"position-absolute",staticStyle:{top:"-4.7em",left:"0"}},[a("h3",{staticClass:"m-3"},[e._v(" "+e._s(e.answered.length+1)+" / "+e._s(e.num_articles)+" ")])]),a("div",{staticClass:"position-absolute",staticStyle:{top:"-4.7em",right:"0"}},[a("h3",{staticClass:"m-3"},[e._v(e._s(e.score))])])]),a("h1",{staticClass:"pt-4 serif font-weight-bold"},[e._v(e._s(e.$t("title")))]),a("h5",{staticClass:"pb-4"},[e._v("Can you tell which articles have been generated by artificial intelligence and which ones were actually printed in newspapers?")]),a("b-alert",{attrs:{show:e.answered.length===e.num_articles,fade:""}},[a("h4",{staticClass:"alert-heading stats"},[e._v("Well done!")]),a("hr"),a("p",{staticClass:"stats",domProps:{innerHTML:e._s(this.alertMessage)}}),a("b-button",{attrs:{variant:"outline-info"},on:{click:function(t){return e.resetGame()}}},[e._v("Play again !")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.answered.length<e.num_articles,expression:"answered.length < num_articles"}]},[a("div",{staticClass:"controls-container"},[a("b-button-group",{staticClass:"w-100"},[a("b-button",{attrs:{variant:"outline-danger",disabled:e.disableButtons},on:{click:function(t){return e.checkNews(!1)}}},[a("b-icon",{attrs:{icon:"chevron-left"}}),e._v(" Fake ")],1),a("b-button",{attrs:{variant:"outline-secondary"},on:{click:function(t){return e.checkNews()}}},[e._v(" Pass ")]),a("b-button",{attrs:{variant:"outline-success",disabled:e.disableButtons},on:{click:function(t){return e.checkNews(!0)}}},[e._v(" Fact "),a("b-icon",{attrs:{icon:"chevron-right"}})],1)],1)],1),a("div",{staticClass:"app-container"},[a("div",{staticClass:"articles-container"},[a("div",{staticClass:"article"},[a("div",{staticClass:"date"},[e._v(" "+e._s(e.$d(new Date(e.current_article.date),"long"))+" ")]),a("h3",{staticClass:"title serif font-weight-bold"},[e._v(" "+e._s(e.current_article.title)+" ")]),a("div",{staticClass:"excerpt serif"},[e._v(" "+e._s(e.current_article.excerpt)+" ")])])]),a("transition",{attrs:{name:"fadescale"},on:{"after-enter":function(t){e.showFeedback={}},"after-leave":e.shuffleArticles}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showFeedback.success,expression:"showFeedback.success"}],staticClass:"checkit success"},[a("b-icon",{attrs:{icon:"check-circle","font-scale":"5"}})],1)]),a("transition",{attrs:{name:"fadescale"},on:{"after-enter":function(t){e.showFeedback={}},"after-leave":e.shuffleArticles}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showFeedback.fail,expression:"showFeedback.fail"}],staticClass:"checkit fail"},[a("b-icon",{attrs:{icon:"x-circle","font-scale":"5"}})],1)])],1)])],1)},g=[],w=(a("caad"),a("2532"),a("967b")),_={data:function(){return{articles:w.articles,score:0,correctAnswers:0,rand:0,answered:[],showFeedback:{},disableButtons:!1,alertMessage:""}},created:function(){this.shuffleArticles()},computed:{num_articles:function(){return this.articles.length},current_article:function(){return this.articles[this.rand]}},methods:{track:function(e){this.$gtag.event("answer",{event_category:e?"correct":"wrong",event_label:this.current_article.title,value:+e})},shuffleArticles:function(){if(this.answered.length>=this.num_articles)this.alertMessage="You guessed ".concat(this.correctAnswers," out of ").concat(this.num_articles," articles correctly.<br>Your score: ").concat(this.score);else{this.rand=Math.floor(Math.random()*this.num_articles);while(this.answered.includes(this.rand))this.rand=Math.floor(Math.random()*this.num_articles)}this.disableButtons=!1},resetGame:function(){this.answered=[],this.correctAnswers=0,this.alertMessage="",this.score=0},checkNews:function(e){"undefined"===typeof e?this.shuffleArticles():(this.disableButtons=!0,this.track(e!==this.current_article.isFake),e===this.current_article.isFake?this.showFeedback.fail=!0:(this.showFeedback.success=!0,this.score+=1e3,this.correctAnswers+=1),this.answered.push(this.rand))}}},y=_,k=(a("05d9"),a("4bd9")),x=Object(p["a"])(y,b,g,!1,null,null,null);"function"===typeof k["default"]&&Object(k["default"])(x);var C=x.exports;n["default"].use(v["a"]);var q=[{path:"/fakenews/",name:"Quiz",component:C},{path:"/fakenews/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],F=new v["a"]({mode:"history",base:"/",routes:q}),L=F,j=a("2f62"),M={namespaced:!0,state:{language_code:"en"}};n["default"].use(j["a"]);var O=new j["a"].Store({state:{},mutations:{},actions:{},modules:{settings:M}}),A={en:{welcome:"Welcome!"}},P={en:{year:{year:"numeric"},long:{weekday:"long",day:"numeric",month:"long",year:"numeric"}}},N=a("a584");a("f9e3");n["default"].config.productionTip=!1,n["default"].use(r["a"]),n["default"].component("BIcon",i["a"]),n["default"].component("BIconCheckCircle",o["d"]),n["default"].component("BIconXCircle",o["p"]),n["default"].component("BIconChevronLeft",o["g"]),n["default"].component("BIconChevronRight",o["h"]),n["default"].use(s["a"]),n["default"].use(N["a"],{config:{id:"UA-165584402-1"},appName:"fakenews-quiz",pageTrackerScreenviewEnabled:!1},L);var B=new s["a"]({fallbackLocale:"en",locale:O.state.settings.language_code,messages:A,dateTimeFormats:P,silentTranslationWarn:!0});new n["default"]({i18n:B,router:L,store:O,render:function(e){return e(h)}}).$mount("#app")},"5bfb":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"title":"Fact or Fake ?"}}'),delete e.options._Ctor}},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),s=a.n(n);s.a},"76cb":function(e,t,a){},"967b":function(e){e.exports=JSON.parse('{"articles":[{"date":"1912-04-23","title":"Les vaches de la Moselle","excerpt":"Le mystère nitenue du mot de l’air des vaches de la Moselle et de la Suisse a été déroulée avec l’art de la vente de vaches de la Moselle. Sur une liste d’accusant des vaches de La Moselle sortant des Boëls, un vaurien, de nationalité allemande, en compagnie de leurs chômeurs, a déclaré au commissaire de police : — C’est une bien, oui, peut-être, que j’ai tué la femme Dolisnquet, Adèle EttorachÃ§, Arnaud Koc, Jean Renard, Louis Brund, Alain Rondolin, Fred Koole, Hélène, J.-R., Rénaisse Hocquard, J.-P., Hélène Koc, J.-P. Kremmer, Raymond Köhler, M. Kremmer, M. Krier, A. Schmit .Arnaud Kéri, R.","isFake":true},{"date":"1910-11-09","title":"Informations locales","excerpt":"Les gendarmes ont dressé procès- verbal. * Dudelange. — Vente de charbon. — L’autre soir, serrurier M. Glesener de Dudelange portait du charbon de longue durée dans son sac du manteau. Le vieillard. qui suivait les habitants de Dudelange m’a laissé l’énorme charbon dans sa maison. * Bettem- bourg. — La kermesse. — A l’occasion de la kermesse, le feu ouverte avec grande puissance sur la capote du charbon du cabaretier N. Nieuwenhuys , appartenant à Mme Indélicatie de deuxième vie, a découvert, sur la kiospèche, un chemin de la localité à 1 insurilé de Bettem- bourg. Les pompiers de la localité ont interdit la retraite et ainsi de la balle dans la maison de la voiture et de l’armoire. M","isFake":true},{"date":"1956-01-12","title":"Un meurtre brutal","excerpt":"Le tireur était derrière les chairs voisins et, au lieu de passer à sa femme, il se précipita sur le trottoir; ce tournoi, écartait le lit, et demeurant sous la voiture avec un couteau, a dévilé plusieurs lèvres à l’eau. La portière de la maison de l’agence allemand êt-elle trouvée, puis contérant le chemin d’hôpital, les espions protestaient. Roumy avait l’habitude de prononcer la tête peu de tout. Mais, reluie de phalaropes pour quelques minutes, il se desguisait le petit Pol galot pour se heurtant sur son petit chapeau, et, assez agitément de l’un de l’autre, se sendit appelé : — Elle y y a sous le pied vrai ? Qo’y êtes-vous dans l’auto? Le Pol","isFake":true},{"date":"1914-05-23","title":"Un vilain merle","excerpt":"Il y a, dans la banlieue de Bâle, une grande gare de triage où, sur de nombreuses voies disposées en éventail, on aiguille les wagons de marchandises dans les différentes directions. Cette gare est un modèle d’organisation, et les manœuvres s’y font avec tant d’exactitude que de mémoire d’homme on n’y avait jamais eu d’accident. Depuis quelques semaines, au contraire, les accrocs se multiplient: tantôt c’est une locomotive qui démarre avant l’heure, tantôt une rame recule quand elle devrait avancer; et toujours l’erreur se produit de la même manière: le chef de train et le mécanicien ont entendu un coup de sifflet que personne n’a donné. D’abord, on fut tenté de croire au sabotage; mais le personnel était au-dessus du soupçon. On surveilla les chefs d’équipe pour voir s’il n’y aurait point parmi eux un malade dont le cerveau se serait affaibli: ils étaient tous en forme et de parfaite santé. On pensa qu’un gamin caché aux environs de la gare s’amusait à troubler, comme on dit là-bas, le service ferrugineux; on explora les rues et les maisons voisines: pas le moindre gamin. Et pendant que se poursuivait l’enquête, signaux et accidents redoublaient; on eût dit que le coupable narguait l’autorité. On le découvrit enfin; il ne se dissimulait pas derrière un mur ou une barrière, mais il était perché sur la cime d’un arbre; ce n’était ni un anarchiste ni même un polisson; c’était un merle. Ayant fait son nid tout auprès de la gare, il avait appris peu à peu tout le vocabulaire des signaux, le coup de sifflet du démarrage, celui du refoulement, celui de l’arrêt, celui du garde à vous. Il les exécutait avec une précision merveilleuse et goûtait, du haut de sa branche, tous les plaisirs du grand commandement. La tête de cet usurpateur a été mise à prix.","isFake":false},{"date":"1827-06-11","title":"On a découvert le fasciste qui mitrailla un train près de Nice","excerpt":"Nice, 11 juin. On mande de Nice au « Petit Parisien » que l\'auteur dés coups de feu tirés sur le train de voyageurs a été identifié. C\'est bien un milicien fasciste, Paul\' Rainandi qui était à Latte. H a reconnu avoir fait feu deux fois sur le train. Mais il a déclaré qu\'il cru voir descendre d\'un vagon deux individus et qu\'il a pensé avoir à faire à des passagers qui essayaient d\'entrer en fraude en Italie. Il voulait, a-t-il ajouté, faire arrêter le train. En attendant qu\'une solution définitive soit donnée à l\'incident, Raiandi a été frappé de 45 jours d\'arrêts dont 15 de rigueur.","isFake":false},{"date":"2003-06-04","title":"Vitrine brisée à la gare TC","excerpt":"Hier matin tôt, les ployés des Transports en commun chaux-defonniers venus prendre leur service ont constaté que leur vitrine d\'information du quai sud, devant lequel stationne le car pour Le Locle, avait été brisée. « Oh, oui ! Ily a le trou des deux côtés », témoigne l\'un d\'eux. La vitrine contient le plan de la ville et les horaires des différentes lignes. Un vitrier a été contacté pour la remettre en état. Plainte a été déposée.  Des usagers ont pu croire à un avatar chaux-de-fonnier des émeutes anti-G 8, mais il n\'en est rien. La police cantonale du moins l\'exclut. L\'auteur, ivre-mort, a été arrêté vers 4 h du matin. Il avait également endommagé une voiture. Du côté de la gare CFF, on n\'a en revanche constaté aucune déprédation. Hier en milieu de journée, l\'homme n\'avait pas encore pu être terrogé. Il a d\'abord dû être conduit à l\'hôpital pour cupérer _, / ron","isFake":false}]}')},"9c0c":function(e,t,a){},dd10:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"title":"Fake News Quiz"}}'),delete e.options._Ctor}}});
//# sourceMappingURL=app.dbd96bfb.js.map
