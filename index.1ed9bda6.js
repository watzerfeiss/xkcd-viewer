!function(){const e=[],t=()=>e.forEach((e=>e()));window.addEventListener("DOMContentLoaded",t),window.addEventListener("popstate",t);let r=null,l=Date.now();const n=e=>fetch(`https://eigencors.herokuapp.com/${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})),a=()=>!r||Date.now()-l>3e5?n("https://xkcd.com/info.0.json").then((e=>(r=e,l=Date.now(),e))):Promise.resolve(r),o=document.querySelector("[data-strip-placeholder]"),s=document.querySelector("[data-strip-placeholder-message]"),i=document.querySelector(".strip"),c=i.querySelector("[data-strip-view-toggle]"),d=i.querySelector("[data-strip-image]"),p=i.querySelector("[data-strip-transcript]"),u=i.querySelector("[data-strip-number]"),h=i.querySelector("[data-strip-title]"),m=i.querySelector("[data-strip-date]"),g=i.querySelector("[data-strip-alt-text]"),y=i.querySelector("[data-strip-source-link]"),v=i.querySelector("[data-strip-explain-link]"),f=(e,t)=>{if(e)return o.style.display=null,i.style.display="none","404"===e.message?(o.classList.remove("strip-placeholder--loading"),o.classList.add("strip-placeholder--404"),void(s.textContent="Not Found")):(o.classList.remove("strip-placeholder--loading"),o.classList.add("strip-placeholder--error"),void(s.textContent="Error loading strip data"));o.style.display="none",i.style.display=null;const r=new Image;if(r.src=t.img,d.innerHTML="",t.link){const e=document.createElement("a");e.href=t.link,e.target="blank",e.appendChild(r),d.appendChild(e)}else d.appendChild(r);var l;p.innerHTML=(l=t.transcript)?l.replace(/{{[^{]*?([aA]lt|[tT]itle)[\ -]?([tT]ext)*:[^}]*?}}/,"").trim().replaceAll(/(?<!\<)\<(?!\<)/g,"&lt;").replaceAll(/(?<!\>)\>(?!\>)/g,"&gt;").replaceAll(/\<\<([\w\W]*?)\>\>/g,"<code>$1</code>").replaceAll(/\[\[([\w\W]*?)\]\]/g,"<strong>$1</strong>").replaceAll(/\(\(([\w\W]*?)\)\)/g,"<em>$1</em>").replaceAll(/\{\{([\w\W]*?)\}\}/g,"<em><strong>$1</strong></em>").split("\n\n").map((e=>`<p>${e.replaceAll("\n","<br>")}</p>`)).join(""):"<em>No transcript available</em>",u.textContent=`#${t.num}:`,h.innerHTML=`${t.title}`;const{year:n,month:a,day:c}=t,f=new Date(n,a-1,c);m.textContent=`Posted on ${f.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}`,g.textContent=t.alt,y.href=`https://xkcd.com/${t.num}`,v.href=`https://www.explainxkcd.com/wiki/index.php/${t.num}`};c.addEventListener("click",(()=>{d.classList.toggle("visually-hidden"),p.classList.toggle("visually-hidden"),c.classList.toggle("toggle-btn--image"),c.classList.toggle("toggle-btn--transcript")}));const S=document.querySelector(".navigation");S.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(r=>{var l;r.preventDefault(),e.hasAttribute("href")&&(l=e.href.split("#")[1],history.pushState(null,null,l?`#${encodeURIComponent(l)}`:"#"),t())}))}));const L=S.querySelector("[data-navlink-first]"),w=S.querySelector("[data-navlink-prev]"),k=S.querySelector("[data-navlink-next]"),q=S.querySelector("[data-navlink-latest]");(t=>{const r=()=>{const e=location.hash.slice(1)||"";t(e)};e.push(r)})((e=>{o.style.display=null,i.style.display="none",o.classList.add("strip-placeholder--loading"),o.classList.remove("strip-placeholder--error"),o.classList.remove("strip-placeholder--404"),s.textContent="Loading...",(e=>a().then((({num:t})=>{const r=parseInt(e);return!isNaN(r)&&r>=1&&r<=t?e:"random"===e?Math.floor(Math.random()*t+1).toString():""})))(e).then((r=>{if(e!==r)return(e=>{history.replaceState(null,null,e?`#${encodeURIComponent(e)}`:"#"),t()})(r);var l;a().then((e=>{var t,l;latestNum=e.num,displayedNum=parseInt(r)||latestNum,t=displayedNum,l=latestNum,1===t?(w.removeAttribute("href"),L.removeAttribute("href")):(w.href="#"+(t-1),L.href="#1"),t===l?(k.removeAttribute("href"),q.removeAttribute("href")):(k.href=`#${t+1}`,q.href="#")})),(l=r,l?n(`https://xkcd.com/${l}/info.0.json`):a()).then((e=>{f(null,e)})).catch((e=>{f(e,null)}))}))}))}();