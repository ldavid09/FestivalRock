function iniciarApp(){headerFijo(),crearGaleria(),darScrollNav()}function headerFijo(){const e=document.querySelector(".header"),t=document.querySelector(".seccion-festival"),n=document.querySelector("body");window.addEventListener("scroll",(function(){t.getBoundingClientRect().top<0?(e.classList.add("fijo"),n.classList.add("body-scroll")):(n.classList.remove("body-scroll"),e.classList.remove("fijo"))}))}function darScrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"}),console.log(t)}))})}function crearGaleria(){const e=document.querySelector(".contenido-galeria");for(let n=1;n<=12;n++){const i=document.createElement("picture");i.innerHTML=`\n        <source srcset="build/img/thumb/${n}.avif" type="image/avif">\n        <source srcset="build/img/thumb/${n}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/thumb/${n}.jpg"\n            alt="imagenes galeria"></img>\n        `,e.appendChild(i),i.onclick=function(){t(n)}}function t(e){const t=document.createElement("picture");t.innerHTML=`\n        <source srcset="build/img/grande/${e}.avif" type="image/avif">\n        <source srcset="build/img/grande/${e}.webp" type="image/webp">\n        <img loading="lazy" width="200" height="300" src="build/img/grande/${e}.jpg"\n            alt="imagenes galeria"></img>\n        `;const n=document.createElement("DIV");n.appendChild(t),n.onclick=function(){document.querySelector("body").classList.remove("fijar-body"),n.remove()},n.classList.add("overlay");const i=document.createElement("P");i.textContent="X",i.classList.add("boton-cerrar"),i.onclick=function(){n.remove()},n.appendChild(i);const o=document.querySelector("body");o.classList.add("fijar-body"),o.appendChild(n)}}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
