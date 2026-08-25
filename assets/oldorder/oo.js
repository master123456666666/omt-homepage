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
'人気キーワード':'POPULAR KEYWORDS','ギフトラッピングは対応しておりません。':'Gift wrapping is not available.'
};
var __TC=[
['2019年より','A high-end sneaker brand launched in 2019, born out of respect for street culture and skateboarding.'],
['全国一律','Flat-rate shipping \u00a51,100 \u2014 free shipping on orders over \u00a530,000.']
];
function __trAll(){
var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null,false);var n;
while(n=w.nextNode()){var s=n.nodeValue;if(!s)continue;var t=s.trim();if(!t)continue;if(__TD[t]!==undefined){n.nodeValue=s.replace(t,__TD[t]);continue;}for(var __c=0;__c<__TC.length;__c++){if(t.indexOf(__TC[__c][0])>-1){n.nodeValue=__TC[__c][1];break;}}}
var si=document.querySelectorAll('input[type="search"]');
for(var i=0;i<si.length;i++){var ph=si[i].getAttribute('placeholder')||'';if(ph.indexOf('キーワード')>-1)si[i].setAttribute('placeholder','Search');}
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
var bar=document.createElement('div');bar.id='ooSizeBar';
bar.innerHTML='<div class="ooSB__head"><b>SELECT YOUR SIZE</b><span id="ooSBcount"></span></div><div class="ooSB__sizes">'+d.sizes.map(function(s){return '<button type="button" data-size="'+s+'">'+s+'</button>';}).join('')+'</div>';
host.parentNode.insertBefore(bar,host);
var sel={};
function apply(){
var act=Object.keys(sel).filter(function(k){return sel[k];});
var allow=null;
if(act.length){allow={};act.forEach(function(s){(useMap[s]||[]).forEach(function(h){allow[h]=1;});});}
var vis={};
var items=host.querySelectorAll('.ooItem');
for(var i=0;i<items.length;i++){
var a=items[i].querySelector('a');var h=a?a.getAttribute('href'):'';
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
