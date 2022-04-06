(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.data,r=e.userIdApi,o=e.templateCardSelector,i=e.handleCardClick,a=e.handleDeleteCard,u=e.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=n.link,this._title=n.name,this._likes=n.likes,this._cardId=n._id,this._ownerId=n.owner._id,this._userIdApi=r,this._templateCardSelector=o,this._handleCardClick=i,this._handleDeleteCard=a,this._handleLikeClick=u}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateCardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userIdApi}))}},{key:"likeCard",value:function(e){this._likes=e,this._likeCounter.textContent=this._likes.length,this.isLiked()?this._buttonLike.classList.add("element__button-like_active"):this._buttonLike.classList.remove("element__button-like_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_addListeners",value:function(){var e=this;this._buttonLike.addEventListener("click",(function(){return e._handleLikeClick(e._cardId)})),this._trashBin.addEventListener("click",(function(){return e._handleDeleteCard(e._cardId)})),this._elementImage.addEventListener("click",(function(){return e._handleCardClick(e._title,e._link)}))}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".element__image"),this._trashBin=this._element.querySelector(".element__trash"),this._buttonLike=this._element.querySelector(".element__button-like"),this._likeCounter=this._element.querySelector(".element__like-counter"),this._element.querySelector(".element__name").textContent=this._title,this._elementImage.src=this._link,this._elementImage.alt=this._title,this._likeCounter.textContent=this._likes.length,this._userIdApi!==this._ownerId&&(this._trashBin.style.display="none"),this.likeCard(this._likes),this._addListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._errorClass=t.errorClass,this._inputErrorClass=t.inputErrorClass,this._inactiveButtonClass=t.inactiveButtonClass,this._formElement=n}var t,r;return t=e,(r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput(this._inputList)?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.setAttribute("disabled","")):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.removeAttribute("disabled"))}},{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".popup__".concat(e.name,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".popup__".concat(e.name,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._buttonElement=this._formElement.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this.toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this._clear(),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),u(this,"_handleOverlayClose",(function(e){e.target===e.currentTarget&&n.close()})),this._popup=document.querySelector(t),this._popupCloseButton=this._popup.querySelector(".popup__close-icon"),this.close=this.close.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),this.setEventListeners()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this.removeEventListener()}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._handleOverlayClose),this._popupCloseButton.addEventListener("click",this.close)}},{key:"removeEventListener",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.removeEventListener("click",this._handleOverlayClose),this._popupCloseButton.removeEventListener("click",this.close)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},f.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).fullImg=t._popup.querySelector(".popup__img"),t.fullImgLabel=t._popup.querySelector(".popup__img-label"),t}return t=a,(n=[{key:"open",value:function(e,t){this.fullImg.src=t,this.fullImg.alt=e,this.fullImgLabel.textContent=e,f(_(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=C(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return S(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(r);if(o){var n=C(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),E(S(n=i.call(this,e)),"_getInputValues",(function(){return n._inputList.reduce((function(e,t){return e[t.name]=t.value,e}),{})})),E(S(n),"_handleSubmit",(function(e){e.preventDefault(),n._handleFormSubmit(n._getInputValues())})),n._handleFormSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._submitButton=n._form.querySelector(".popup__button"),n._tempSubmitButtonText=n._submitButton.textContent,n._inputList=Array.from(n._form.querySelectorAll(".popup__input")),n}return t=a,(n=[{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._tempSubmitButtonText}},{key:"setEventListeners",value:function(){b(C(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}},{key:"_removeEventListeners",value:function(){b(C(a.prototype),"_removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._handleSubmit)}},{key:"close",value:function(){b(C(a.prototype),"close",this).call(this),this._form.reset()}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}function R(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&A(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return R(this,e)});function a(e){var t,n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),o=function(e){e.preventDefault(),t._handleFormSubmit()},(r="_handleSubmit")in(n=B(t=i.call(this,e)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._submitButton=t._popup.querySelector(".popup__button"),t}return t=a,(n=[{key:"setHandleFormSubmit",value:function(e){this._handleFormSubmit=e}},{key:"_removeEventListeners",value:function(){I(T(a.prototype),"_removeEventListeners",this).call(this),this._submitButton.removeEventListener("click",this._handleSubmit)}},{key:"setEventListeners",value:function(){I(T(a.prototype),"setEventListeners",this).call(this),this._submitButton.addEventListener("click",this._handleSubmit)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t){var n=t.profileName,r=t.profileJob,o=t.profileAvatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=document.querySelector(n),this._profileJob=document.querySelector(r),this._profileAvatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,about:this._profileJob.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;this._profileName.textContent=t,this._profileJob.textContent=n,this._profileAvatar.src=r,this._profileAvatar.alt=t}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const N=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_checkRes",value:function(e){return e.ok?e.json():Promise.reject("Ошибка, статус: ".concat(e.status))}},{key:"getUserInfoApi",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkRes)}},{key:"getInitialCardsApi",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkRes)}},{key:"setUserInfoApi",value:function(e){var t=e.username,n=e.about;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._checkRes)}},{key:"addNewCardApi",value:function(e){var t=e.title,n=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then(this._checkRes)}},{key:"deleteCardApi",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkRes)}},{key:"addLikeApi",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkRes)}},{key:"deleteLikeApi",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkRes)}},{key:"editAvatarApi",value:function(e){var t=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._checkRes)}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"e68b1acd-e5bf-46c3-9f19-d62156ea5c7d","Content-Type":"application/json"}});var J,F,V,H=document.querySelector(".profile__button-edit"),M=document.querySelector('.popup__input[name="username"]'),z=document.querySelector('.popup__input[name="about"]'),G=document.querySelector(".profile__button-plus"),$=document.querySelector(".profile__avatar-wrap"),K={};function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}V={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",errorClass:"popup__error_visible",inputErrorClass:"popup__input_type_error",inactiveButtonClass:"popup__button_disabled"},Array.from(document.querySelectorAll(V.formSelector)).forEach((function(e){K["".concat(e.name)]=new r(V,e),K["".concat(e.name)].enableValidation()}));var W=new y(".popup_name_img"),X=new q(".popup_name_delete");function Y(e,t){W.open(e,t)}var Z=new x({profileName:".profile__name-text",profileJob:".profile__job",profileAvatar:".profile__avatar"});function ee(e){var n,r=(n=new t({data:e,userIdApi:J,templateCardSelector:".template-card",handleCardClick:Y,handleDeleteCard:function(e){X.open(),X.setHandleFormSubmit((function(){N.deleteCardApi(e).then((function(){n.deleteCard(),X.close()})).catch((function(e){console.log(e)}))}))},handleLikeClick:function(e){n.isLiked()?N.deleteLikeApi(e).then((function(e){n.likeCard(e.likes)})).catch((function(e){console.log(e)})):N.addLikeApi(e).then((function(e){n.likeCard(e.likes)})).catch((function(e){console.log(e)}))}})).createCard();F.addItem(r)}Promise.all([N.getUserInfoApi(),N.getInitialCardsApi()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];J=o._id,Z.setUserInfo(o),(F=new i({data:a,renderer:ee},".elements")).renderItems()})).catch((function(e){console.log(e)}));var te=new L(".popup_name_add",(function(e){te.renderLoading(!0),N.addNewCardApi(e).then((function(e){ee(e),te.close()})).catch((function(e){console.log(e)})).finally((function(){te.renderLoading(!1)}))}));G.addEventListener("click",(function(){K.add.toggleButtonState(),te.open()}));var ne=new L(".popup_name_profile",(function(e){ne.renderLoading(!0),N.setUserInfoApi(e).then((function(e){Z.setUserInfo(e),ne.close()})).catch((function(e){console.log(e)})).finally((function(){ne.renderLoading(!1)}))}));H.addEventListener("click",(function(){var e=Z.getUserInfo();M.value=e.name,z.value=e.about,K.profile.toggleButtonState(),ne.open()}));var re=new L(".popup_name_avatar",(function(e){re.renderLoading(!0),N.editAvatarApi(e).then((function(e){Z.setUserInfo(e),re.close()})).catch((function(e){console.log(e)})).finally((function(){re.renderLoading(!1)}))}));$.addEventListener("click",(function(){K.avatar.toggleButtonState(),re.open()}))})();