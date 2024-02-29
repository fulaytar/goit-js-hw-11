import{S as p,i as l}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(s){const i="https://pixabay.com/api/",o="42512842-e518c28c0b42a0fb4c46a85d3",r=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:30});return fetch(`${i}?${r}`).then(e=>{if(!e.ok)throw new Error("Image error");return e.json()})}const n=document.querySelector("#form"),c=document.querySelector("div"),u=document.querySelector(".gallery"),f=new p(".gallery>.item-gallery a",{backgroundColor:"#EF4040",captionsData:"alt",captionDelay:250});n.addEventListener("submit",h);function m(s,i,o,r,e,t,a){return`
  <li class="item-gallery">
    <a class="load-link" href="${s}">
      <img class="load-image" src="${i}" width="360" alt="${o}" title="${o}">
    </a>
    <ul class="load-list">
      <li>
        <h2>Likes</h2>
        <p>${r}</p>
      </li>
      <li>
        <h2>Views</h2>
        <p>${e}</p>
      </li>
      <li>
        <h2>Comments</h2>
        <p>${t}</p>
      </li>
      <li>
        <h2>Downloads</h2>
        <p>${a}</p>
      </li>
    </ul>
  </li>
`}function h(s){s.preventDefault();const i=n.elements.input.value.trim();if(n.elements.input.value="",i===""){l.error({title:"Error",message:"Enter a value",position:"topRight"});return}u.innerHTML="",c.classList.add("spinner"),d(i).then(o=>{o.hits.length===0&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),u.innerHTML=o.hits.map(r=>m(r.largeImageURL,r.webformatURL,r.tags,r.likes,r.views,r.comments,r.downloads)).join(""),f.refresh()}).catch(o=>console.log(o)).finally(()=>{c.classList.remove("spinner")})}
//# sourceMappingURL=commonHelpers.js.map
