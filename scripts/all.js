"use strict";var copyrightYear=document.getElementById("copyright-year"),currentYear=(new Date).getFullYear();function createSchema(e){var t={"@context":"https://schema.org","@type":"ProfessionalService",image:["https://scorpiobike.dk/images/logo.png"],name:"Scorpio Bike",address:{"@type":"PostalAddress",streetAddress:"Fynsgade 6",addressLocality:"Aarhus",addressRegion:"Central Denmark Region (Midtjylland)",postalCode:"8000",addressCountry:"DK"},map:"https://g.page/ScorpioBike01?share",geo:{"@type":"GeoCoordinates",latitude:56.164506617622315,longitude:10.202232602658677},url:"https://scorpiobike.dk/",telephone:"+4591548718",email:"scorpiobike01@gmail.com",openingHoursSpecification:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Monday","Tuesday","Wednesday","Thursday"],opens:"8:30",closes:"17:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:"Friday",opens:"8:30",closes:"16:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:"Saturday",opens:"9:00",closes:"13:00"}],priceRange:"$",review:e},e=document.createElement("script");e.setAttribute("type","application/ld+json"),e.textContent=JSON.stringify(t),document.head.appendChild(e)}function initMap(){}function initSwiper(){new Swiper(".swiper  ",{slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,loop:!0,pagination:{el:".reviews-pagination",clickable:!0},autoplay:{delay:5e3,disableOnInteraction:!1}})}copyrightYear.innerText=2021<currentYear?"-".concat(currentYear):"",initMap=function(){var e={lat:56.164506617622315,lng:10.202232602658677},t=new google.maps.Map(document.getElementById("map"),{zoom:19,center:e,styles:[{featureType:"administrative",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]}]}),e=new google.maps.Marker({position:e,map:t,title:"Scorpio Cykelværksted",label:{text:"Scorpio Cykelværksted",color:"#2b2a28",fontWeight:"bold",fontSize:"16px"},icon:{labelOrigin:new google.maps.Point(20,60),scaledSize:new google.maps.Size(50,50),url:"images/icons/map-pin.svg"},url:"https://g.page/ScorpioBike01?share"});google.maps.event.addListener(e,"click",function(){window.open(this.url,"_blank")}),new google.maps.places.PlacesService(t).getDetails({placeId:"ChIJKflki78_TEYRUFf_TWF3nNM"},function(e){e&&e.reviews?setReviews(e.reviews):deleteOurClientsSection()})};var popupIcon=document.querySelector(".service-about-popup-icon"),popupText=document.querySelector(".service-about-popup-text"),popupClose=document.querySelector(".service-about-popup-close");function togglePopUpText(){popupText.classList.toggle("is-open")}function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){a=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(r="Object"===r&&e.constructor?e.constructor.name:r)||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}document.addEventListener("click",function(e){e=e.target.parentNode.className;popupText.classList.contains("is-open")&&!e.includes("popup")&&togglePopUpText()}),popupIcon.addEventListener("click",function(e){e.stopPropagation(),togglePopUpText()}),popupClose.addEventListener("click",function(){popupText.classList.remove("is-open")});var placeId="ChIJKflki78_TEYRUFf_TWF3nNM",reviewsWrapper=document.querySelector(".reviews-wrapper"),ourClientsSection=document.querySelector(".our-clients"),reviewsSchema=[];function getAuthorAccount(e){return e.split("/").slice(0,-1).join("/")}function getStars(e){for(var t="",r=0;r<e;r++)t+="\n      <img\n        src='images/star.png'\n        alt='Star icon used for the rating'\n        width='15'\n        height='14'\n      />\n    ";return t}function deleteOurClientsSection(){ourClientsSection.remove()}function setReviews(e){var t,r=_createForOfIteratorHelper(e);try{for(r.s();!(t=r.n()).done;){var n=t.value,o=getAuthorAccount(n.author_url)+"/place/".concat(placeId),i="\n        <article class='review swiper-slide'>\n            <img\n              class='reviewer-image'\n              src='".concat(n.profile_photo_url,"'\n              alt='Reviewer profile image'\n              width='99'\n              height='97'\n            />\n            <p class='reviewer-name'>").concat(n.author_name,"</p>\n            <section class='reviewer-rating'>\n               ").concat(getStars(n.rating),"\n            </section>\n            <p class='reviewer-comment'>\"").concat(n.text,"\"</p>\n            <a href='").concat(o,"' class='base-button' target='_blank' rel='noopener'>Read On Google</a>\n          </article>\n      ");reviewsSchema.push({"@type":"Review",reviewBody:n.text,author:{"@type":"Person",name:n.author_name},reviewRating:{"@type":"Rating",ratingValue:n.rating}}),reviewsWrapper.insertAdjacentHTML("beforeend",i)}}catch(e){r.e(e)}finally{r.f()}createSchema(reviewsSchema),ourClientsSection.classList.add("has-reviews"),initSwiper()}
//# sourceMappingURL=all.js.map
