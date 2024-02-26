import{i as l}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(s){const o="https://pixabay.com/api/",i="42512842-e518c28c0b42a0fb4c46a85d3",r=new URLSearchParams({key:i,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${o}?${r}`).then(e=>{if(!e.ok)throw new Error("Image error");return e.json()})}const n=document.querySelector("#form");document.querySelector("div");const c=document.querySelector(".gallery");n.addEventListener("submit",f);function f(s){s.preventDefault();const o=n.elements.input.value.trim();o!==""&&(c.innerHTML="",n.elements.input.value="",u(o).then(i=>{i.hits.length===0&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML=i.hits.map(r=>`<li class="item-gallery">
          <a class="load-link" href="${r.largeImageURL}/${r.webformatURL}"
            ><img
            class="load-image"
              src="${r.webformatURL}"
              width="360"
              height="360"
              alt="${r.tags}"
              title="${r.tags}"
          /></a>
          <ul class="load-list">
            <li>
              <h1>Likes</h1>
              <p>${r.likes}</p>
            </li>
            <li>
              <h1>Views</h1>
              <p>${r.views}</p>
            </li>
            <li>
              <h1>Comments</h1>
              <p>${r.comments}</p>
            </li>
            <li>
              <h1>Downloads</h1>
              <p>${r.downloads}</p>
            </li>
          </ul>
        </li>`).join("")}).catch(i=>console.log(i)))}
//# sourceMappingURL=commonHelpers.js.map
