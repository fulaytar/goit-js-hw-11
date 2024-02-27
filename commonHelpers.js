import{i as u,S as p}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(s){const r="https://pixabay.com/api/",o="42512842-e518c28c0b42a0fb4c46a85d3",i=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${r}?${i}`).then(e=>{if(!e.ok)throw new Error("Image error");return e.json()})}const n=document.querySelector("#form"),l=document.querySelector("div"),c=document.querySelector(".gallery");n.addEventListener("submit",h);function h(s){s.preventDefault();const r=n.elements.input.value.trim();n.elements.input.value="",r!==""&&(c.innerHTML="",l.classList.add("spinner"),setTimeout(()=>{l.classList.remove("spinner"),f(r).then(o=>{o.hits.length===0&&u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML=o.hits.map(e=>`<li class="item-gallery">
          <a class="load-link" href="${e.largeImageURL}"
            ><img
            class="load-image"
              src="${e.webformatURL}"
              width="360"
              alt="${e.tags}"
              title="${e.tags}"
          /></a>
          <ul class="load-list">
            <li>
              <h2>Likes</h2>
              <p>${e.likes}</p>
            </li>
            <li>
              <h2>Views</h2>
              <p>${e.views}</p>
            </li>
            <li>
              <h2>Comments</h2>
              <p>${e.comments}</p>
            </li>
            <li>
              <h2>Downloads</h2>
              <p>${e.downloads}</p>
            </li>
          </ul>
        </li>`).join(""),new p(".gallery>.item-gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>console.log(o))},500))}
//# sourceMappingURL=commonHelpers.js.map
