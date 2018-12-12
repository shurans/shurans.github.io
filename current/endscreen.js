(function(g){var window=this;var L9=function(a,b){g.T(a).experiments.g("player_gel_logging")&&a.app.ba.nc("onLogToGel",{payload_name:"thumbnailLoaded",payload:b})},M9=function(a,b,c,d){var e=b.Sb();
g.Nd(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.Ih();d=b.Zc(c,d?d:"mqdefault.jpg");var k=b instanceof g.lz?g.Vj(b.lengthSeconds):null,l=!!f,f=l&&"RD"==g.Hz(f).type;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.P("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.kk(c),is_list:l,is_mix:f,background:d?"background-image: url("+d+")":""};b instanceof g.Kz&&(c.playlist_length=b.B);a.update(c)},N9=function(a){var b=
g.T(a),c=b.experiments.g("video_wall_moving_thumbnails_hover"),c=b.experiments.g("video_wall_moving_thumbnails_autoplay")||c;
this.C=b.C&&!b.F;b={K:"img",Y:"ytp-videowall-moving-thumbnail",X:{src:"{{moving_thumbnail}}"}};g.R.call(this,{K:"a",Y:"ytp-videowall-still",X:{href:"{{url}}",target:this.C?"_blank":null,"aria-label":"{{watch}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},R:[{K:"div",Y:"ytp-videowall-still-image",X:{style:"{{background}}"}},c?b:null,{K:"span",Y:"ytp-videowall-still-info",R:[{K:"span",Y:"ytp-videowall-still-info-bg",R:[{K:"span",Y:"ytp-videowall-still-info-content",X:g.Rh||g.mc?{style:"will-change: opacity"}:
null,R:[{K:"span",Y:"ytp-videowall-still-info-title",R:["{{title}}"]},{K:"span",Y:"ytp-videowall-still-info-author",R:["{{author_and_views}}"]},{K:"span",Y:"ytp-videowall-still-info-duration",R:["{{duration}}"]}]}]}]},{K:"span",ea:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],R:[{K:"span",Y:"ytp-videowall-still-listlabel-icon"},g.P("YTP_PLAYLIST"),{K:"span",Y:"ytp-videowall-still-listlabel-length",R:[" (",{K:"span",R:["{{playlist_length}}"]},")"]}]},{K:"span",ea:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],R:[{K:"span",Y:"ytp-videowall-still-listlabel-mix-icon"},g.P("YTP_MIX"),{K:"span",Y:"ytp-videowall-still-listlabel-length",R:[" (50+)"]}]}]});this.o=a;this.A=null;this.D=0;this.P("click",this.ZK);this.P("keypress",this.$K);c&&this.T(this.ua["ytp-videowall-moving-thumbnail"],"load",this.bL);g.T(a).experiments.g("player_interaction_logging")&&(a=a.app.ca,g.eb(a.B,this),b=String(a.G++),this.element.setAttribute("data-visual-id",b),g.Cb(this,(0,g.w)(a.D,a,this)))},O9=
function(a){if(5E5<g.jw(a.o.app.la)){var b=a.A.ek();
b&&(a.D=(0,g.Bj)(),a.update({moving_thumbnail:b}))}},P9=function(a){g.Tz.call(this,a,{K:"div",
ea:["ytp-thumbnail-overlay","ytp-channel-overlay"],R:[{K:"div",Y:"ytp-thumbnail-overlay-image",X:{style:"{{background}}"}},{K:"div",Y:"ytp-thumbnail-overlay-curtain"}]})},Q9=function(a){var b=g.T(a).experiments.g("moving_thumbnails_autonav"),c={K:"img",
Y:"ytp-upnext-moving-thumbnail",X:{src:"{{moving_thumbnail}}"}},c={K:"div",Y:"ytp-upnext",X:{"aria-label":"{{watch}}"},R:[{K:"div",Y:"ytp-thumbnail-overlay-image",X:{style:"{{background}}"}},b?c:null,{K:"div",Y:"ytp-thumbnail-overlay-curtain"},{K:"span",Y:"ytp-upnext-top",R:[{K:"span",Y:"ytp-upnext-header",R:[g.P("YTP_PLAYLIST_UP_NEXT")]},{K:"span",Y:"ytp-upnext-title",R:["{{title}}"]},{K:"span",Y:"ytp-upnext-author",R:["{{author}}"]}]},{K:"a",Y:"ytp-upnext-autoplay-icon",X:{href:"{{url}}"},R:[{K:"svg",
X:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},R:[{K:"circle",Y:"ytp-svg-autoplay-circle",X:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{K:"circle",Y:"ytp-svg-autoplay-ring",X:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{K:"polygon",Y:"ytp-svg-autoplay-triangle",X:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{K:"span",Y:"ytp-upnext-bottom",R:[{K:"span",
Y:"ytp-upnext-cancel"},{K:"span",Y:"ytp-upnext-paused",R:[g.P("YTP_AUTOPLAY_PAUSED_2")]}]},{K:"span",Y:"ytp-upnext-close"}]};g.R.call(this,c);this.D=null;var d=this.ua["ytp-upnext-cancel"],c=this.ua["ytp-upnext-close"];this.D=new g.R({K:"button",ea:["ytp-upnext-cancel-button","ytp-button"],X:{tabindex:0,"aria-label":g.P("YTP_AUTOPLAY_CANCEL")},R:[g.P("YTP_CANCEL")]});g.K(this,this.D);this.D.P("click",this.Pt,this);this.D.Ea(d);d=new g.R({K:"button",ea:["ytp-upnext-close-button","ytp-button"]});g.K(this,
d);d.P("click",this.Pt,this);d.Ea(c);this.o=a;this.L=this.ua["ytp-svg-autoplay-ring"];this.F=this.C=this.A=this.B=null;this.G=new g.Ed(this.Rj,5E3,this);g.K(this,this.G);this.H=0;this.T(this.ua["ytp-upnext-autoplay-icon"],"click",this.dG);this.Mt();this.T(a,"autonavvisibility",this.Mt);this.T(a,"mdxnowautoplaying",this.vF);this.T(a,"mdxautoplaycanceled",this.wF);this.T(a,"mdxautoplayupnext",this.Lv);3==this.o.Ya()&&(a=(a=g.Ii(this.o).D)?a.loaded?a.C.suggestion:null:null)&&this.Lv(a);b&&(this.J=0,
this.T(this.ua["ytp-upnext-moving-thumbnail"],"load",this.BM))},R9=function(a,b){a.B=b;
M9(a,b,g.T(a.o),"hqdefault.jpg");g.Ld(a.element,"ytp-moving-thumbnail-loaded");a.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});if(5E5<g.jw(a.o.app.la)){var c=a.B.ek();c&&(a.J=(0,g.Bj)(),a.update({moving_thumbnail:c}))}},S9=function(a,b){a.A||(g.ci("a11y-announce",g.P("YTP_PLAYLIST_UP_NEXT")+" "+a.B.title),a.H=(0,g.Bj)(),a.A=new g.Ed((0,g.w)(a.Yl,a,b),25),a.Yl(b));
g.Ld(a.element,"ytp-upnext-autoplay-paused")},U9=function(a){T9(a);
a.H=(0,g.Bj)();a.Yl();g.M(a.element,"ytp-upnext-autoplay-paused")},T9=function(a){a.A&&(a.A.dispose(),a.A=null)},V9=function(a,b){g.Rz.call(this,{K:"div",
ea:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.o=a;this.O=!1},W9=function(a){a=g.T(a);
return a.Kb&&!a.wa},X9=function(a,b){V9.call(this,a,"videowall-endscreen");
this.ca=a;this.aa=b;this.G=0;this.A=[];this.H=this.D=this.C=null;this.J=this.W=!1;this.F=new g.pm(this);g.K(this,this.F);this.L=new g.Ed(g.y(g.M,this.element,"ytp-show-tiles"),0);g.K(this,this.L);var c=new g.R({K:"button",ea:["ytp-button","ytp-endscreen-previous"],X:{"aria-label":g.P("YTP_PREVIOUS")},R:[g.yg()]});g.K(this,c);c.Ea(this.element);c.P("click",this.XK,this);this.M=new g.Nj({K:"div",Y:"ytp-endscreen-content"});g.K(this,this.M);this.M.Ea(this.element);c=new g.R({K:"button",ea:["ytp-button",
"ytp-endscreen-next"],X:{"aria-label":g.P("YTP_NEXT")},R:[g.zg()]});g.K(this,c);c.Ea(this.element);c.P("click",this.WK,this);this.B=new Q9(a);g.K(this,this.B);g.ys(this.o,this.B.element,5);this.oa()},Y9=function(a){return(0,g.S)(a.U,function(a){return g.Sz(a)})},Z9=function(a,b,c){return 0==b&&a.C.length&&(b=c/X9.g,2<=c/X9.g&&2<=b&&g.T(a.o).experiments.g("video_wall_emphasize_first"))?2*X9.g:X9.g},$9=function(a){var b=a.aa.ep();
b!=a.W&&(a.W=b,a.o.Sa("autonavvisibility"))},a$=function(a){V9.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.A=new P9(a);g.K(this,this.A);g.ys(this.o,this.A.element,5);this.B=new g.R(["div","ytp-subscribe-card",["img","ytp-author-image",{src:b.profilePicture}],["div","ytp-subscribe-card-right",["div","ytp-author-name",b.author],["div","html5-subscribe-button-container"]]]);g.K(this,this.B);this.B.Ea(this.element);this.C=new g.Is(g.P("YTP_SUBSCRIBE"),g.P("YTP_UNSUBSCRIBE"),!0,b.wq,b.subscribed,"trailer-endscreen",null,a);g.K(this,this.C);this.C.Ea(this.B.ua["html5-subscribe-button-container"]);
this.oa()},b$=function(a){g.km.call(this,a);
g.dh({});this.o=null;this.isAvailable=!0;this.A=new g.pm(this);g.K(this,this.A);this.B=g.T(a);W9(a)?this.o=new X9(this.g,this):this.B.wa?this.o=new a$(this.g):this.o=new V9(this.g);g.K(this,this.o);g.ys(this.g,this.o.element,5);this.Qu();this.A.T(a,"videodatachange",this.Qu,this);this.A.T(a,"crn_endscreen",this.IK,this);this.A.T(a,"crx_endscreen",this.JK,this)};
g.A(N9,g.R);g.h=N9.prototype;g.h.xh=function(){var a=this.A.Sb().videoId;g.v7(this.o.app,a,this.A.ad,this.A.Ih(),void 0,void 0)};
g.h.ZK=function(a){g.Mv(this.o,this);g.Rk(a,this.o,!this.o.isFullscreen()&&this.C,this.A.ad)&&this.xh()};
g.h.aL=function(){this.Ba(this.B);this.B=null;O9(this)};
g.h.$K=function(a){switch(a.keyCode){case 13:case 32:g.Zi(a)||(this.xh(),g.Yi(a))}};
g.h.bL=function(a){120<g.Ui(a).naturalWidth&&(g.M(this.element,"ytp-videowall-moving-thumbnail-loaded"),L9(this.o,{isMovingThumbnail:!0,durationLoadingMs:(0,g.Bj)()-this.D,videoId:this.A.videoId}))};
g.A(P9,g.Tz);P9.prototype.Ab=function(a){a?this.B.show():g.Ur(this.B)};
g.A(Q9,g.R);g.h=Q9.prototype;g.h.Rj=function(){this.C&&(this.G.stop(),this.Ba(this.F),this.F=null,this.C.close(),this.C=null)};
g.h.Mt=function(){this.Ab(g.kv(this.o))};
g.h.UF=function(){window.focus();this.Rj()};
g.h.Yl=function(a){a=a||g.T(this.o).experiments.o("autoplay_time")||1E4;var b=Math.min((0,g.Bj)()-this.H,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.o.Ya()?this.select(!0):this.A&&this.A.start()};
g.h.select=function(a){var b=g.T(this.o);if(b.experiments.g("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.sr(this.o,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.B.Sb(),this.Rj(),this.C=new window.Notification(g.P("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.Zc(b)}),this.F=this.T(this.C,"click",this.UF),this.G.start())}T9(this);this.o.kj(!1,
a)};
g.h.dG=function(a){!g.Ye(this.D.element,g.Ui(a))&&g.Rk(a,this.o)&&this.select()};
g.h.Pt=function(){g.yv(this.o,"autonavcancel");g.mv(this.o,!0)};
g.h.BM=function(a){120<g.Ui(a).naturalWidth&&(g.M(this.element,"ytp-moving-thumbnail-loaded"),L9(this.o,{isMovingThumbnail:!0,durationLoadingMs:(0,g.Bj)()-this.J,videoId:this.B.Sb().videoId}))};
g.h.vF=function(a){this.show();S9(this,a)};
g.h.Lv=function(a){this.B&&this.B.Sb().videoId==a.Sb().videoId||R9(this,a)};
g.h.wF=function(){T9(this);this.oa()};
g.h.S=function(){T9(this);this.Rj();Q9.N.S.call(this)};
g.A(V9,g.Rz);V9.prototype.create=function(){this.O=!0};
V9.prototype.destroy=function(){this.O=!1};
V9.prototype.hm=function(){return!1};
g.A(X9,V9);X9.g=2;g.h=X9.prototype;g.h.create=function(){X9.N.create.call(this);var a=this.o.getVideoData();a&&(this.C=Y9(a),this.D=a);this.ag();this.F.T(this.o,"appresize",this.ag);this.F.T(this.o,"videodatachange",this.YK);this.F.T(this.o,"autonavchange",this.Rw);this.F.T(this.o,"autonavcancel",this.VK);this.F.T(this.element,"transitionend",this.kH)};
g.h.destroy=function(){g.rm(this.F);g.Eb(this.A);this.A=[];this.C=null;X9.N.destroy.call(this);g.Ld(this.element,"ytp-show-tiles");this.L.stop()};
g.h.hm=function(){return 1!=this.D.autonavState};
g.h.Wi=function(){return g.Jv(this.o)&&this.hm()&&!this.H};
g.h.show=function(){X9.N.show.call(this);g.Ld(this.element,"ytp-show-tiles");g.T(this.o).isMobile?g.Fd(this.L):this.L.start();(this.J||this.H&&this.H!=this.D.clientPlaybackNonce)&&g.mv(this.o,!1);var a=this.Wi();g.Jv(this.o)&&g.T(this.o).experiments.g("ui_logging")&&this.aa.log({cancelButtonShow:a?"1":"0",state:this.hm()?"enabled":"disabled"});a?($9(this),2==this.D.autonavState?g.T(this.o).experiments.g("fast_autonav_in_background")&&3==this.o.Bw()?this.B.select(!0):S9(this.B):3==this.D.autonavState&&
U9(this.B)):(g.mv(this.o,!0),$9(this))};
g.h.oa=function(){X9.N.oa.call(this);U9(this.B);$9(this)};
g.h.kH=function(a){g.Ui(a)==this.element&&this.ag()};
g.h.ag=function(){if(this.C&&this.C.length){var a=g.T(this.o).experiments.g("video_wall_moving_thumbnails_hover");g.M(this.element,"ytp-endscreen-paginate");var b=g.Ol(this.element),c=b.width/b.height,d=96/54,e=X9.g,f=X9.g,k=Math.max(b.width/96,2),l=Math.max(b.height/54,2),m=this.C.length,n=Math.pow(X9.g,2),r,u=Z9(this,0,l),x=Z9(this,1,l);r=m*n+(Math.pow(u,2)-n);r+=Math.pow(x,2)-n;for(r-=n;0<r&&(e<k||f<l);){var z=e/X9.g,C=f/X9.g,G=e<=k-X9.g&&r>=C*n,J=f<=l-X9.g&&r>=z*n;if((z+1)/C*d/c>c/(z/(C+1)*d)&&
J)r-=z*n,f+=X9.g;else if(G)r-=C*n,e+=X9.g;else if(J)r-=z*n,f+=X9.g;else break}d=!1;k=X9.g+u;r>=3*n&&6>=m*n-r&&(f>=k||e>=k)&&x<=X9.g&&(d=!0);r=96*e;n=54*f;c=r/n<c?b.height/n:b.width/r;c=Math.min(c,2);r*=c;n*=c;r*=g.oe(b.width/r||1,1,1.21);n*=g.oe(b.height/n||1,1,1.21);r=Math.floor(Math.min(b.width,r));n=Math.floor(Math.min(b.height,n));b=this.M.element;g.Nl(b,r,n);g.xl(b,{marginLeft:r/-2+"px",marginTop:n/-2+"px"});R9(this.B,this.C[0]);g.Nd(this.element,"ytp-endscreen-takeover",this.Wi());$9(this);
c=r+4;r=n+4;n=0;k=!this.Wi();l=!1;for(z=0;z<e;z++)for(C=0;C<f;C++){var J=x>X9.g&&1<=n&&!l?n+1:n,O=0;d&&z>=e-X9.g&&C>=f-X9.g?O=1:0==C%X9.g&&0==z%X9.g&&(C<u&&z<u?0==C&&0==z&&(O=u):x>X9.g&&C>=f-x&&z>=e-x?C==f-x&&z==e-x&&(l=!0,J=1,O=x):O=X9.g);J=g.pe(J+this.G,m);if(0!=O){G=this.A[n];G||(G=new N9(this.o),this.A[n]=G,b.appendChild(G.element));var Ra=Math.floor(r*C/f),bb=Math.floor(c*z/e),rb=Math.floor(r*(C+O)/f)-Ra-4,$c=Math.floor(c*(z+O)/e)-bb-4;g.Dl(G.element,bb,Ra);g.Nl(G.element,$c,rb);g.xl(G.element,
"transitionDelay",(C+z)/20+"s");g.Nd(G.element,"ytp-videowall-still-mini",1==O);g.Nd(G.element,"ytp-videowall-still-large",2<O);J=this.C[J];O=k&&!a;G.A=J;Ra=g.T(G.o);M9(G,J,Ra,g.Id(G.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");g.Ld(G.element,"ytp-videowall-moving-thumbnail-loaded");G.update({moving_thumbnail:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"});O?(g.M(G.element,"ytp-videowall-active"),O9(G)):Ra.experiments.g("video_wall_moving_thumbnails_hover")&&
!G.B&&(G.B=G.P("mouseover",G.aL));O=J.ad;J=G.o;g.T(J).experiments.g("player_interaction_logging")&&(J=J.app.ca,O=O&&O.itct,G=G.element.getAttribute("data-visual-id"),g.Kv(J,"onLogServerVeCreated",{id:G,tracking_params:O}));n++}}g.Nd(this.element,"ytp-endscreen-paginate",n<m);for(a=this.A.length-1;a>=n;a--)G=this.A[a],g.Se(G.element),g.Db(G);this.A.length=n}};
X9.A=2;X9.o=1.21;g.h=X9.prototype;g.h.YK=function(){var a=this.o.getVideoData();this.D!=a&&(this.G=0,this.C=Y9(a),this.D=a,this.ag())};
g.h.WK=function(){this.G+=this.A.length;this.ag()};
g.h.XK=function(){this.G-=this.A.length;this.ag()};
g.h.fD=function(){return!!this.B.A};
g.h.Rw=function(a){1==a?(this.J=!1,this.H=this.D.clientPlaybackNonce,T9(this.B),this.g&&this.ag()):(this.J=!0,this.g&&this.Wi()&&(2==a?S9(this.B):3==a&&U9(this.B)))};
g.h.VK=function(a){if(a){for(a=0;a<this.A.length;a++)g.Nv(this.ca,this.A[a],!0);this.Rw(1)}else this.H=null,this.J=!1;this.ag()};
g.A(a$,V9);a$.prototype.show=function(){a$.N.show.call(this);this.A.Ab(!0)};
a$.prototype.oa=function(){a$.N.oa.call(this);this.A.Ab(!1)};
g.A(b$,g.km);g.h=b$.prototype;g.h.Nw=function(){var a=this.g.getVideoData(),b=!W9(this.g)||!(!a.U||!a.U.length),a=g.im(a,"ypc_module"),c=g.a4(this.g.app);return(b||!1)&&!a&&!c};
g.h.ep=function(){return(this.o instanceof X9||!1)&&this.o.g&&this.o.Wi()};
g.h.dD=function(){return this.ep()?this.o.fD():!1};
g.h.S=function(){g.Di(this.g,"endscreen");b$.N.S.call(this)};
g.h.load=function(){b$.N.load.call(this);this.o.show();g.T(this.g).wa&&.01>Math.random()&&this.log({trailerEndscreenShow:1})};
g.h.log=function(a){g.sr(this.g,"end",a)};
g.h.unload=function(){b$.N.unload.call(this);this.o.oa();this.o.destroy();this.isAvailable=!1};
g.h.IK=function(a){this.Nw()&&(this.o.O||this.o.create(),"load"==a.getId()&&this.load())};
g.h.JK=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.Qu=function(){g.Di(this.g,"endscreen");var a=Math.max(1E3*(this.g.getVideoData().lengthSeconds-10),0),a=new g.xi(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.xi(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.Bi(this.g,[a,b])};
window._exportCheck==g.ya&&g.la("ytmod.player.endscreen",b$,void 0);})(_yt_player);
