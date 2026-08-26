(function(){
var POP=7346651;
var SECTIONS=[
{label:'POPULAR',id:7346651,tagAll:1},
{label:'NEW',id:7346655,tagAll:1},
{label:'TURBO GT',id:6372100},
{label:'TURBO S',id:6401864},
{label:'TURBO LITE',id:6372101},
{label:'TURBO URBAN',id:6843536},
{label:'TURBO 2000',id:7077795},
{label:'OBOOT',id:6372102},
{label:'CANVAS',id:6372103},
{label:'SKATER 001',id:6372104},
{label:'SMILŌ',id:6372105},
{label:'ŌBREAD',id:6673166},
{label:'ŌGOAL',id:6681184},
{label:'RESCULPT',id:7050873},
{label:'DIVISION',id:7051116},
{label:'ONE WEEK',id:7270859},
{label:'TRACK',id:7377747},
{label:'SANRIO',id:6384968},
{label:'DISNEY',id:6861121},
{label:'OCAI',id:6372098},
{label:'BBIMP',id:6372099},
{label:'ACCESSORY',id:6630103}
];
function fetchDoc(u){return fetch(u).then(function(r){return r.text();}).then(function(h){return new DOMParser().parseFromString(h,'text/html');});}
function fetchCatDocs(id){
return fetchDoc('/categories/'+id).then(function(doc){
var t=doc.querySelector('#itemthumbs');
var mp=t?(parseInt(t.getAttribute('data-max-page'),10)||1):1;
if(mp>10)mp=10;
var ps=[];
for(var p=2;p<=mp;p++){(function(pp){ps.push(fetchDoc('/categories/'+id+'?page='+pp).catch(function(){return null;}));})(p);}
return Promise.all(ps).then(function(rest){return [doc].concat(rest.filter(Boolean));});
});
}
function boxesOf(docs){var out=[];docs.forEach(function(d){out=out.concat(Array.prototype.slice.call(d.querySelectorAll('#itemthumbs .item-box')));});return out;}
function build(){
var __L=document.querySelectorAll('a,span,p,div,b');for(var __i=0;__i<__L.length;__i++){var __e=__L[__i];if(__e.children.length===0&&__e.textContent.trim()==='店舗情報'){__e.textContent='JAPAN SHOP INFORMATION';}}
var __nb=document.createElement('div');__nb.id='ooNewsBar';
__nb.innerHTML='<div class="ooNewsItem on"><span>FIRST ORDER \u00a5500 OFF \u2014 CODE "oldorder001"</span></div><div class="ooNewsItem"><span>WORLDWIDE SHIPPING</span></div><div class="ooNewsItem"><span>OLD ORDER OFFICIAL ONLINE STORE</span></div><div class="ooNewsItem"><a href="https://oldorder.jp" target="_blank">LIVING IN JAPAN? VISIT OLDORDER.JP \u2192</a></div>';
document.body.insertBefore(__nb,document.body.firstChild);
var __nbIt=__nb.querySelectorAll('.ooNewsItem');var __nbX=0;
if(__nbIt.length>1){setInterval(function(){__nbIt[__nbX].classList.remove('on');__nbX=(__nbX+1)%__nbIt.length;__nbIt[__nbX].classList.add('on');},4000);}
var __NH=document.querySelectorAll('#newsbox h2');for(var __j=0;__j<__NH.length;__j++){if(__NH[__j].textContent.trim()==='お知らせ')__NH[__j].textContent='NEWS';}
var __NM=[['非正規販売','[IMPORTANT] Beware of unauthorized resale sites and counterfeit products.'],['営業時間','[Business Hours] Weekdays 10:00\u201318:00 JST (closed on weekends & holidays). Inquiries received outside business hours will be answered from the next business day.'],['ギフトラッピング','Gift wrapping is not available.']];
var __ND=document.querySelectorAll('#newsbox dd');
for(var __k=0;__k<__ND.length;__k++){var __dd=__ND[__k];for(var __m=0;__m<__NM.length;__m++){if(__dd.textContent.indexOf(__NM[__m][0])>-1){var __tgt=__dd.querySelector('a')||__dd;__tgt.textContent=__NM[__m][1];break;}}}
var __TD={
'メニュー':'MENU','カート':'CART','カートを見る':'View Cart',
'商品カテゴリー':'CATEGORY','ショップガイド':'SHOP GUIDE','新着ブログ記事':'LATEST BLOG POSTS',
'ブログ':'BLOG','お知らせ':'NEWS','ホーム':'HOME',
'プライバシーポリシー':'Privacy Policy','特定商取引法に基づく表記':'Legal Notice','会員規約':'Membership Terms',
'配送料について':'SHIPPING','お支払い方法について':'PAYMENT METHODS','通販営業日カレンダー':'BUSINESS DAY CALENDAR','営業日カレンダー':'BUSINESS DAY CALENDAR',
'全国一律送料 1,100円':'Flat-rate shipping ¥1,100','お買い物5,000円以上で送料無料':'Free shipping on orders over ¥5,000','お買い物30,000円以上で送料無料':'Free shipping on orders over ¥30,000','30,000円以上で送料無料':'Free shipping over ¥30,000',
'詳しい送料はこちら':'Shipping details','詳しいお支払方法のご案内':'Payment details',
'オンラインショップでは以下の決済方法がご利用いただけます。':'The following payment methods are available.',
'クレジットカード':'Credit Card','銀行振込':'Bank Transfer','キャリア決済':'Carrier Billing',
'コンビニ決済・Pay-easy':'Convenience Store / Pay-easy','コンビニ・Pay-easy':'Convenience Store / Pay-easy','PAY ID あと払い':'PAY ID (Pay Later)',
'ページトップへ':'PAGE TOP','もっと見る':'VIEW MORE',
'こちらの商品もおすすめ':'RECOMMENDED FOR YOU','セール中の商品':'ON SALE','最近見た商品':'RECENTLY VIEWED',
'マイページ':'MY PAGE','マイページ / ログイン':'My Page / Login','ログイン':'Login',
'メンバーシップ':'MEMBERSHIP','コミュニティ':'COMMUNITY','私たちについて':'ABOUT',
'ショップ紹介':'ABOUT US','店舗一覧':'STORES','よくあるご質問':'FAQ',
'所在地':'Address','営業時間':'Hours','定休日':'Closed',
'Sanrioコラボ':'Sanrio Collab','Disneyコラボ':'Disney Collab',
'登録する':'SUBSCRIBE','登録':'SUBSCRIBE','検索':'Search',
'キーワードで探す':'Search','税込':'tax incl.','(税込)':'(tax incl.)',
'LINE公式アカウント':'LINE Official','休業日':'Closed','本日':'Today',
'人気キーワード':'POPULAR KEYWORDS','ギフトラッピングは対応しておりません。':'Gift wrapping is not available.',
'商品カテゴリーから探す':'BROWSE BY CATEGORY','人気キーワードから探す':'POPULAR KEYWORDS',
'出品されている商品がありません。':'No products found.','ショップに質問する':'Chat with us','メッセージを入力する':'Type a message','送信':'Send','画像を送信':'Send image','サンリオ':'Sanrio','キーワードで探すから探す':'SEARCH'
};
var __TC=[
['2019年より','A high-end sneaker brand launched in 2019, born out of respect for street culture and skateboarding.'],
['全国一律','Flat-rate shipping \u00a51,100 \u2014 free shipping on orders over \u00a530,000.'],
['お問い合わせありがとうございます','Thank you for contacting us. To help us assist you smoothly, please include your order ID with your inquiry. Messages received outside business hours will be answered from the next business day. Business days: Mon–Fri 10:00–18:30 JST.'],
['カート','CART']
];
function __trAll(){
var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);var n;
while(n=w.nextNode()){var s=n.nodeValue;if(!s)continue;var t=s.trim();if(!t)continue;if(__TD[t]!==undefined){n.nodeValue=s.replace(t,__TD[t]);continue;}var __sr=t.match(/^(.+?)の検索結果$/);if(__sr){n.nodeValue='Search results for '+__sr[1];continue;}for(var __c=0;__c<__TC.length;__c++){if(t.indexOf(__TC[__c][0])>-1){n.nodeValue=__TC[__c][1];break;}}}
var si=document.querySelectorAll('input[type="search"],input[type="text"],textarea');
for(var i=0;i<si.length;i++){var ph=si[i].getAttribute('placeholder')||'';if(ph.indexOf('キーワード')>-1)si[i].setAttribute('placeholder','Search');else if(ph.indexOf('メッセージ')>-1)si[i].setAttribute('placeholder','Type a message');}
var lg=document.querySelectorAll('p.legend');
for(var j=0;j<lg.length;j++){var __h=lg[j].innerHTML;var __h2=__h.replace('：本日',' Today ').replace('：休業日',' Closed').replace(/　/g,' ');if(__h2!==__h)lg[j].innerHTML=__h2;}
}
__trAll();setTimeout(__trAll,1500);
var __trT=null;
var __trObs=new MutationObserver(function(){
if(__trT)return;
__trT=setTimeout(function(){__trT=null;__trObs.disconnect();__trAll();__trObs.observe(document.body,{childList:true,subtree:true,characterData:true});},300);
});
__trObs.observe(document.body,{childList:true,subtree:true,characterData:true});

if(document.body.id!=='TopPage')return;
var __cw=document.querySelector('.contentWrapper');
if(__cw&&!document.getElementById('ooHero')){
var __hh=document.createElement('div');__hh.id='ooHero';
__hh.innerHTML='<img src="https://omt-inc.com/assets/oldorder/brunch-drop.webp" alt="BRUNCH for OLD ORDER"><div class="ooHeroCap"><p>BRUNCH for OLD ORDER \u2014 NOW AVAILABLE</p></div>';
__cw.insertBefore(__hh,__cw.firstChild);
}
var anchor=document.getElementById('TopContentOrder');
var main=document.querySelector('.mainArea-inner');
if(!anchor&&!main)return;
var host=document.createElement('div');host.id='ooSections';
if(anchor){anchor.parentNode.insertBefore(host,anchor.nextSibling);}else{main.insertBefore(host,main.firstChild);}
var popP=fetchCatDocs(POP).catch(function(){return null;});
popP.then(function(popDocs){
var popSet={};
if(popDocs){boxesOf(popDocs).forEach(function(b){var a=b.querySelector('a');if(a)popSet[a.getAttribute('href')]=1;});}
SECTIONS.forEach(function(s){
var sec=document.createElement('section');sec.className='ooSec';
sec.innerHTML='<div class="ooSec__label">'+s.label+'</div><div class="ooSec__num"></div><div class="ooSec__grid"></div><div class="ooSec__more"><a href="/categories/'+s.id+'">VIEW ALL</a></div>';
host.appendChild(sec);
var dP=(s.id===POP&&popDocs)?Promise.resolve(popDocs):fetchCatDocs(s.id);
dP.then(function(docs){
var boxes=boxesOf(docs);
var grid=sec.querySelector('.ooSec__grid');var n=0;
boxes.forEach(function(b){
var a=b.querySelector('a');var img=b.querySelector('.item-img__primary img');
if(!a||!img)return;
var href=a.getAttribute('href');
var sold=!!b.querySelector('.soldout');
var tag=s.tagAll?s.label:(popSet[href]?'POPULAR':'');
var d=document.createElement('div');d.className='ooItem';
d.innerHTML='<a href="'+href+'"><figure'+(sold?' class="isSold"':'')+'><img loading="lazy" src="'+img.getAttribute('src')+'" alt="">'+(sold?'<span class="ooSoldOv">SOLD OUT</span>':'')+'</figure>'+(tag?'<div class="ooTag">'+tag+'</div>':'')+'</a>';
grid.appendChild(d);n++;
});
sec.querySelector('.ooSec__num').textContent=n;
if(!n)sec.style.display='none';
}).catch(function(){sec.style.display='none';});
});
});
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',build);}else{build();}
})();

/* ==== SIZE FILTER (grounds-style) ==== */
(function(){
if(!document.body||document.body.id!=='TopPage'){
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',arguments.callee);return;}
if(!document.body||document.body.id!=='TopPage')return;
}
var DATA='https://omt-inc.com/assets/oldorder/sizes.json';
function boot(){
var host=document.getElementById('ooSections');
if(!host){setTimeout(boot,300);return;}
fetch(DATA).then(function(r){return r.json();}).then(function(d){
var any=false;
d.sizes.forEach(function(s){if((d.instock[s]||[]).length)any=true;});
var useMap=any?d.instock:d.exists;
var st=document.createElement('style');
st.textContent='#ooSizeBar{position:relative;z-index:5;background:#141312;color:#fff;display:flex;align-items:center;gap:34px;padding:14px 30px;overflow-x:auto;scrollbar-width:none}#ooSizeBar::-webkit-scrollbar{display:none}#ooSizeBar .ooSB__head{flex:0 0 auto;line-height:1.4}#ooSizeBar .ooSB__head b{display:block;font-family:Jost,Montserrat,sans-serif;font-size:13px;font-weight:600;letter-spacing:.18em}#ooSBcount{font-size:12px;letter-spacing:.14em;color:#cfcfcf;font-family:Jost,sans-serif}.ooSB__sizes{display:flex;gap:6px;align-items:center;flex:1 1 auto}.ooSB__sizes button{background:none;border:2px solid transparent;color:#fff;font-family:Jost,Montserrat,sans-serif;font-weight:500;font-size:27px;min-width:54px;height:54px;border-radius:50%;cursor:pointer;flex:0 0 auto;padding:0 6px;letter-spacing:.01em}.ooSB__sizes button.on{border-color:#fff}.ooSB__x{background:none;border:0;color:#fff;font-size:22px;cursor:pointer;flex:0 0 auto;padding:0 4px;line-height:1}#ooSizeFab{position:fixed;right:22px;bottom:90px;z-index:46;width:58px;height:58px;border-radius:50%;background:#141312;color:#fff;border:0;cursor:pointer;font-family:Jost,sans-serif;font-size:11px;font-weight:600;letter-spacing:.12em;box-shadow:0 4px 14px rgba(0,0,0,.25)}#ooSizeFab .mag{display:block;font-size:17px;line-height:1;margin-bottom:2px}@media(max-width:760px){#ooSizeBar{gap:16px;padding:10px 14px}.ooSB__sizes button{font-size:19px;min-width:40px;height:40px}#ooSizeBar .ooSB__head b{font-size:10px}#ooSBcount{font-size:9px}#ooSizeFab{right:14px;bottom:76px;width:50px;height:50px}}';
document.head.appendChild(st);
var bar=document.createElement('div');bar.id='ooSizeBar';
bar.innerHTML='<div class="ooSB__head"><b>SELECT YOUR SIZE</b><span id="ooSBcount"></span></div><div class="ooSB__sizes">'+d.sizes.map(function(s){return '<button type="button" data-size="'+s+'">'+s+'</button>';}).join('')+'</div><button type="button" class="ooSB__x" aria-label="close">×</button>';
host.parentNode.insertBefore(bar,host);
var fab=document.createElement('button');fab.id='ooSizeFab';fab.type='button';
fab.innerHTML='<span class="mag">⌕</span>SIZE';
document.body.appendChild(fab);
bar.querySelector('.ooSB__x').addEventListener('click',function(){bar.style.display='none';fab.style.display='block';});
fab.addEventListener('click',function(){bar.style.display='flex';window.scrollTo({top:bar.offsetTop>140?bar.offsetTop-140:0,behavior:'smooth'});});
var sel={};
function apply(){
var act=Object.keys(sel).filter(function(k){return sel[k];});
var allow=null;
if(act.length){allow={};act.forEach(function(s){(useMap[s]||[]).forEach(function(h){allow[h]=1;});});}
var vis={};
var items=host.querySelectorAll('.ooItem');
for(var i=0;i<items.length;i++){
var a=items[i].querySelector('a');var h=a?a.getAttribute('href'):'';
h=h.replace(/^https?:\/\/[^\/]+/,'');
var show=!allow||!!allow[h];
items[i].style.display=show?'':'none';
if(show&&h)vis[h]=1;
}
var secs=host.querySelectorAll('.ooSec');
for(var j=0;j<secs.length;j++){
var n=0,its=secs[j].querySelectorAll('.ooItem');
for(var k=0;k<its.length;k++){if(its[k].style.display!=='none')n++;}
var ne=secs[j].querySelector('.ooSec__num');if(ne)ne.textContent=n;
secs[j].style.display=n?'':'none';
}
document.getElementById('ooSBcount').textContent=(allow?Object.keys(vis).length:d.total)+' RESULT';
var bs=bar.querySelectorAll('button');
for(var m=0;m<bs.length;m++){bs[m].classList.toggle('on',!!sel[bs[m].getAttribute('data-size')]);}
}
bar.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var s=b.getAttribute('data-size');sel[s]=!sel[s];apply();});
var t=null;
new MutationObserver(function(){if(t)return;t=setTimeout(function(){t=null;apply();},400);}).observe(host,{childList:true,subtree:true});
apply();
}).catch(function(){});
}
boot();
})();

/* ==== EMAIL SIGNUP POPUP (¥500 OFF) ==== */
(function(){
function ready(f){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',f);}else{f();}}
ready(function(){
if(!document.body||document.body.id!=='TopPage')return;
var KEY='ooPop_v1';var st='';
try{st=localStorage.getItem(KEY)||'';}catch(e){}
if(st==='sub'||st==='close2')return;
if(st.indexOf('close1:')===0){var ts=parseInt(st.slice(7),10);if(Date.now()-ts<3*86400000)return;}
var css=document.createElement('style');
css.textContent='#ooPop{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99990;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.55)}#ooPop .card{display:flex;width:min(680px,92vw);max-height:88vh;background:#fff;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.35)}#ooPop .side{flex:0 0 45%;background:#eee center 30%/cover no-repeat}#ooPop .bodyc{flex:1 1 auto;padding:36px 28px;display:flex;flex-direction:column;justify-content:center;text-align:center;position:relative}#ooPop h2{font-family:Jost,Montserrat,sans-serif;font-size:30px;font-weight:600;letter-spacing:.04em;color:#141312;margin:0 0 10px}#ooPop p{font-size:12.5px;line-height:1.7;color:#444;margin:0 0 16px}#ooPop input{border:1px solid #bbb;padding:12px;font-size:14px;width:100%;margin-bottom:10px;text-align:center;box-sizing:border-box}#ooPop .go{background:#141312;color:#fff;border:0;padding:13px;font-family:Jost,sans-serif;font-weight:600;letter-spacing:.18em;font-size:12px;cursor:pointer;width:100%}#ooPop .no{background:none;border:0;color:#999;font-size:11px;margin-top:12px;cursor:pointer;text-decoration:underline}#ooPop .x{position:absolute;top:8px;right:12px;background:none;border:0;font-size:24px;color:#666;cursor:pointer}#ooPop .code{border:2px dashed #141312;padding:12px;font-family:Jost,sans-serif;font-size:20px;font-weight:600;letter-spacing:.14em;margin:8px 0 12px;-webkit-user-select:all;user-select:all}@media(max-width:560px){#ooPop .side{display:none}}';
document.head.appendChild(css);
var w=document.createElement('div');w.id='ooPop';
w.innerHTML='<div class="card"><div class="side" style="background-image:url(https://omt-inc.com/assets/oldorder/brunch-hero.jpg)"></div><div class="bodyc"><button type="button" class="x">×</button><h2>GET 5% OFF</h2><p>Sign up for our newsletter and get 5% off your first order.</p><input type="email" placeholder="Email"><button type="button" class="go">CONTINUE</button><button type="button" class="no">No thanks</button></div></div>';
function shut(){try{var s=localStorage.getItem(KEY)||'';if(s.indexOf('close1:')===0){localStorage.setItem(KEY,'close2');}else{localStorage.setItem(KEY,'close1:'+Date.now());}}catch(e){}if(w.parentNode)w.parentNode.removeChild(w);}
w.addEventListener('click',function(e){if(e.target===w)shut();});
setTimeout(function(){
document.body.appendChild(w);
w.querySelector('.x').addEventListener('click',shut);
w.querySelector('.no').addEventListener('click',shut);
w.querySelector('.go').addEventListener('click',function(){
var inp=w.querySelector('input');var em=inp.value.trim();
if(!/^[^@]+@[^@]+[.][^@]+$/.test(em)){inp.style.borderColor='#c33';return;}
try{
var c=document.querySelector('.x_mailMagazineSubscribe');
if(c){var fi=c.querySelector('input[type="email"],input[type="text"]');var fb=c.querySelector('button,input[type="submit"]');
if(fi&&fb){fi.value=em;fi.dispatchEvent(new Event('input',{bubbles:true}));fb.click();}}
}catch(e){}
try{localStorage.setItem(KEY,'sub');}catch(e){}
var b=w.querySelector('.bodyc');
b.innerHTML='<h2>WELCOME!</h2><p>Use this code at checkout for 5% off your first order:</p><div class="code">Q9XTUMEK</div><p>A confirmation email is on its way — please confirm your subscription.</p><button type="button" class="go">DONE</button>';
b.querySelector('.go').addEventListener('click',function(){if(w.parentNode)w.parentNode.removeChild(w);});
});
},2500);
});
})();

/* ==== INSTAGRAM SECTION ==== */
(function(){
function ready(f){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',f);}else{f();}}
ready(function(){
if(!document.body||document.body.id!=='TopPage')return;
function boot(){
var host=document.getElementById('ooSections');
if(!host){setTimeout(boot,400);return;}
fetch('https://omt-inc.com/assets/oldorder/ig.json').then(function(r){return r.json();}).then(function(d){
if(!d.posts||!d.posts.length)return;
var css=document.createElement('style');
css.textContent='.ooSecIG .ooSec__grid{grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:14px}.ooSecIG figure{aspect-ratio:1/1;overflow:hidden;margin:0;background:#f4f4f4}.ooSecIG img{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}.ooSecIG a:hover img{transform:scale(1.05)}.ooIGfollow{display:flex;justify-content:center;margin:30px 0 6px}.ooIGfollow a{border:1px solid #1c1b1b;padding:11px 34px;font-family:Jost,Montserrat,sans-serif;font-size:11px;font-weight:600;letter-spacing:.2em;color:#1c1b1b;text-transform:uppercase}.ooIGfollow a:hover{background:#1c1b1b;color:#fff}@media(max-width:760px){.ooSecIG .ooSec__grid{grid-template-columns:repeat(3,1fr);gap:6px}}';
document.head.appendChild(css);
var sec=document.createElement('section');sec.className='ooSec ooSecIG';
var g='';
d.posts.forEach(function(p){g+='<div class="ooItem"><a href="'+p.link+'" target="_blank" rel="noopener"><figure><img loading="lazy" src="'+p.img+'" alt="Instagram post"></figure></a></div>';});
sec.innerHTML='<div class="ooSec__label">INSTAGRAM</div><div class="ooSec__num">'+d.posts.length+'</div><div class="ooSec__grid">'+g+'</div><div class="ooIGfollow"><a href="https://instagram.com/'+d.username+'" target="_blank" rel="noopener">FOLLOW @'+d.username+'</a></div>';
host.appendChild(sec);
}).catch(function(){});
}
boot();
});
})();

/* ==== HEADER NAV ROW RESTYLE (black, clear search) ==== */
(function(){
var s=document.createElement('style');
s.textContent='#headNavwrap{background:#141312!important;padding:10px 16px!important}'
+'#headNavwrap .widthfix{align-items:center}'
+'#headNavwrap .headCatNav .navOpen .filler{background:transparent!important;border:1px solid rgba(255,255,255,.55);padding:9px 16px;border-radius:2px}'
+'#headNavwrap .navOpen span,#headNavwrap .navOpen span::before,#headNavwrap .navOpen span::after{background:#fff!important}'
+'#headNavwrap .navOpen b{color:#fff!important;font-family:Jost,Montserrat,sans-serif;letter-spacing:.14em}'
+'#headNavwrap .searchbar input{background:rgba(255,255,255,.14)!important;border:1px solid rgba(255,255,255,.45)!important;color:#fff!important;border-radius:2px!important;padding:10px 14px!important}'
+'#headNavwrap .searchbar input::placeholder{color:rgba(255,255,255,.75)!important}'
+'#headNavwrap .navIcons a,#headNavwrap .navIcons span,#headNavwrap .cartIcon,#headNavwrap .cartIcon a,#headNavwrap .memberIcon a,#headNavwrap .memberIcon a span{color:#fff!important}'
+'#headNavwrap .cartIcon::before,#headNavwrap .cartIcon a::before{color:#fff!important}'
+'#headNavwrap #baseMenu a{color:#fff!important}';
document.head.appendChild(s);
})();

/* ==== DRAWER SEARCH BAR ==== */
(function(){
function ready(f){if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',f);}else{f();}}
ready(function(){
if(document.getElementById('ooDrawerSearch'))return;
var nav=document.querySelector('.drawerWrapper .drawerIconNav');
if(!nav)return;
var s=document.createElement('style');
s.textContent='#ooDrawerSearch{display:flex;margin:14px 10px 6px}#ooDrawerSearch input{flex:1 1 auto;border:1px solid #bbb;padding:11px 12px;font-size:14px;border-radius:2px 0 0 2px;min-width:0}#ooDrawerSearch button{flex:0 0 auto;background:#141312;color:#fff;border:0;padding:0 16px;font-size:16px;border-radius:0 2px 2px 0;cursor:pointer}';
document.head.appendChild(s);
var f=document.createElement('form');
f.id='ooDrawerSearch';f.action='/search';f.method='get';f.setAttribute('role','search');
f.innerHTML='<input type="search" name="q" placeholder="Search"><button type="submit" aria-label="Search">⌕</button>';
nav.parentNode.insertBefore(f,nav.nextSibling);
});
})();

/* ==== HEADER NAV FIXUPS (menu chip / search icon overlap) ==== */
(function(){
var s=document.createElement('style');
s.textContent='#headNavwrap .headCatNav,#headNavwrap .headCatNav .menu,#headNavwrap .navOpen,#headNavwrap .navOpen .filler{background:transparent!important;box-shadow:none!important}'
+'#headNavwrap .navOpen .filler{border:1px solid rgba(255,255,255,.6)!important;border-radius:2px!important;padding:9px 16px!important}'
+'#headNavwrap .navOpen span,#headNavwrap .navOpen span::before,#headNavwrap .navOpen span::after{background:#fff!important}'
+'#headNavwrap .searchbar input{padding-left:44px!important}'
+'#headNavwrap .searchbar .material-icons,#headNavwrap .searchbar svg{color:#fff!important;fill:#fff!important}';
document.head.appendChild(s);
})();

/* ==== HEADER NAV FIXUPS 2 (cart pseudo label / menu bars / spacing) ==== */
(function(){
var s=document.createElement('style');
s.textContent='#baseMenu li.cart a::before{content:"CART"!important}'
+'#headNavwrap .navOpen span{display:none!important}'
+'#headNavwrap .navOpen .filler{padding:11px 22px!important}'
+'#headNavwrap .navOpen b{font-size:12px!important;letter-spacing:.2em!important}'
+'#headNavwrap .navIcons{display:flex!important;gap:24px!important;align-items:center!important}'
+'#headNavwrap .navIcons a,#headNavwrap .cartIcon{white-space:nowrap}';
document.head.appendChild(s);
})();

/* ==== HEADER ICON BRIGHTNESS (white icons on black bar) ==== */
(function(){
var s=document.createElement('style');
s.textContent='#headNavwrap #baseMenu img,#headNavwrap .cartIcon img{filter:invert(1) brightness(1.6)!important}'
+'#headNavwrap .searchbar form div{color:#fff!important}'
+'#headNavwrap .searchbar form div::before,#headNavwrap .searchbar form::before,#headNavwrap .searchbar div::before{color:#fff!important;opacity:1!important}'
+'#headNavwrap .memberIcon a::before,#headNavwrap .memberIcon a::after,#headNavwrap .memberIcon a span::before{color:#fff!important;opacity:1!important}'
+'#baseMenu li.cart a::before{color:#fff!important}';
document.head.appendChild(s);
})();
