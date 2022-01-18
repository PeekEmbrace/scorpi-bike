"use strict";var copyrightYear=document.getElementById("copyright-year"),currentYear=(new Date).getFullYear();function initMap(){}function initSwiper(){new Swiper(".swiper  ",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,loop:!0,pagination:{el:".reviews-pagination",clickable:!0},autoplay:{delay:5e3,disableOnInteraction:!1}})}copyrightYear.innerText=2021<currentYear?"-".concat(currentYear):"",function(){var e=document.querySelector(".language-change"),t=document.querySelectorAll(".languages li"),n=window.location.pathname;e.addEventListener("click",function(){e.classList.toggle("active")}),t.forEach(function(e){n.includes(e.getAttribute("data-lang"))&&e.classList.add("active")})}(),initMap=function(){var e={lat:56.164506617622315,lng:10.202232602658677},t=new google.maps.Map(document.getElementById("map"),{zoom:19,center:e,styles:[{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]}]}),e=new google.maps.Marker({position:e,map:t,title:"Scorpio Cykelværksted",label:{text:"Scorpio Cykelværksted",color:"#2b2a28",fontWeight:"bold",fontSize:"16px"},icon:{labelOrigin:new google.maps.Point(20,60),scaledSize:new google.maps.Size(50,50),url:"images/icons/map-pin.svg"},url:"https://g.page/ScorpioBike01?share"});google.maps.event.addListener(e,"click",function(){window.open(this.url,"_blank")}),new google.maps.places.PlacesService(t).getDetails({placeId:"ChIJKflki78_TEYRUFf_TWF3nNM"},function(e){e&&e.reviews?setReviews(e.reviews):deleteOurClientsSection()})};var popupIcon=document.querySelector(".service-about-popup-icon"),popupText=document.querySelector(".service-about-popup-text"),popupClose=document.querySelector(".service-about-popup-close");function togglePopUpText(){popupText.classList.toggle("is-open")}function _createForOfIteratorHelper(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}document.addEventListener("click",function(e){e=e.target.parentNode.className;popupText.classList.contains("is-open")&&!e.includes("popup")&&togglePopUpText()}),popupIcon.addEventListener("click",function(e){e.stopPropagation(),togglePopUpText()}),popupClose.addEventListener("click",function(){popupText.classList.remove("is-open")});var placeId="ChIJKflki78_TEYRUFf_TWF3nNM",reviewsWrapper=document.querySelector(".reviews-wrapper"),ourClientsSection=document.querySelector(".our-clients");function getAuthorAccount(e){return e.split("/").slice(0,-1).join("/")}function getStars(e){for(var t="",n=0;n<e;n++)t+="\n      <img\n        src='images/star.png'\n        alt='Star icon used for the rating'\n        width='15'\n        height='14'\n      />\n    ";return t}function deleteOurClientsSection(){ourClientsSection.remove()}function setReviews(e){var t,n=_createForOfIteratorHelper(e);try{for(n.s();!(t=n.n()).done;){var r=t.value,o=getAuthorAccount(r.author_url)+"/place/".concat(placeId),i="\n        <article class='review swiper-slide'>\n            <img\n              class='reviewer-image'\n              src='".concat(r.profile_photo_url,"'\n              alt='Reviewer profile image'\n              width='99'\n              height='97'\n            />\n            <p class='reviewer-name'>").concat(r.author_name,"</p>\n            <section class='reviewer-rating'>\n               ").concat(getStars(r.rating),"\n            </section>\n            <p class='reviewer-comment'>\"").concat(r.text,"\"</p>\n            <a href='").concat(o,"' class='base-button' target='_blank' rel='noopener'>Read On Google</a>\n          </article>\n      ");reviewsWrapper.insertAdjacentHTML("beforeend",i)}}catch(e){n.e(e)}finally{n.f()}ourClientsSection.classList.add("has-reviews"),initSwiper()}
//# sourceMappingURL=all.js.map
