"use strict";
(self["webpackChunkweatherapp"] = self["webpackChunkweatherapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/material-symbol-rounded.woff2 */ "./src/assets/fonts/material-symbol-rounded.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{ 
    --background: #131214;
    --text-color: #EAE6F2;
    --dark-grey: #1D1C1F;
    --light-gray: #DDDAE5;
    --light-gray-variant: #7B7980; 
    --light-gray-variant-2: #B9B6BF;
    --outline: #3E3D40;
    --black-alpha: hsla(0, 0%, 0%, 0.1);
}
/*  ------------------ Reset ---------------------------------*/
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
li {
    list-style: none;
}
a,img,span,input,button{
    display:block;
}
a{
    color:inherit;
    text-decoration: none;
}
img{
    height:auto;
}
input,button{
    background:none;
    border:none;
    color:inherit;
    font:inherit;
}
input{
    width:100%;
}
button{
    cursor:pointer;
}
sub{
    vertical-align: baseline;
}
sup{
    vertical-align: top;
}
sub,sup{
    font-size:.8em;
}
html{
    scroll-behavior: smooth;
}
body{
    background-color: var(--background);
    color:var(--text-color);
    font-size: 18px;
    overflow: hidden;
}

/* ---------------------------------- styles -------------------------- */
@font-face{
    font-family: 'Material Icon';
    font-style:normal;
    font-weight:400;
    src:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff');
}
.m-icon{
    font-family:'Material Icon';
    font-weight: normal;
    font-style:normal;
    font-size:2.5rem;
    line-height:1;
    text-transform: none;
    white-space:nowrap;
    word-wrap:normal;
    direction: ltr;
    height:1em;
    width:1em;
    overflow:hidden;
}
.container{
    width:90%;
    margin-inline:auto;
    padding:1em;
}
.card {
    background-color: var(--dark-grey);
    color:var(--light-gray);   
}
.card-lg{
    padding:20px; 
}
.card-sm{
    padding:16px;
}

/* ----------------------------------- header -------------------------------*/
.header .container{
    display: flex;
    align-items:center;
    justify-content: space-between;
}
.search{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background-color: var(--dark-grey);
    color:var(--light-gray);
    z-index:4;
}
.search-container{
    position: relative;
    display: flex;
    gap:1em;
}
.search-btn,
.home-btn{
    background:var(--light-gray-variant);
    padding:.5em;
    border-radius: 10px;
}
.search-input{
    height:80px;
    line-height:80px;
    padding-inline:56px 16px;
    outline:none;
}
.search-input::placeholder{
    color:var(--light-gray-variant-2);
}
.search-container .search-icon {
    position:absolute;
    top:50%;
    left:28px;
    transform:translate(-50%,-50%);
}
.search-container > .m-icon{
    display: none;
}
.search-container .icon-btn {
    background-color:transparent;
    box-shadow:none;
}
.loading {
    position: relative;
    font-size: 20px;
    text-align: center;
    margin-top: 50px;
    font-weight: bold;
}

.loading::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    margin-left: -20px;
    border: 5px solid rgba(0, 0, 0, 0.1);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s infinite linear;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
/* ------------------------------------- Main --------------------------------- */
main{
    overflow: hidden;
}
article.container{
    position:relative;
    display: grid;
    grid-template-columns: minmax(0,1fr);
    gap:20px;
    height:100%;
    overflow-y:auto;/*firefox*/
    overflow-y:overlay;
    
}

/* ----------------------------------content left--------------------------------*/
.current-condition-card .wrapper{
    margin-block:12px;
    display:flex;
    gap:8px;
    align-items:center;
}
.current-condition-card .weather-icon{
    margin-inline:auto;
}
.current-condition-card .details-list{
    margin-block-start:16px;
    padding-block-start:16px;
    border-block-start:1px solid var(--outline);
}
.current-condition-card .detail-item{
    display: flex;
    align-items:center;
    gap:8px;
    margin:.5em;
}
.current-condition-card .detail-text{
    color: var(--light-gray-variant);
}
.forecast-card :is(.card-item,.icon-wrapper){
    display:flex;
    align-items: center;
}

.forecast-card .forecast-details{
    color:var(--light-gray-variant);
}
.forecast-card .card-item > .forecast-details{
    width:100%;
    text-align:right;
}

/* ----------------------------------content right--------------------------------*/
.highlight-list{
    display:grid;
    gap:20px;
}
.highlights .card-sm{
    background-color:var(--black-alpha);
    position:relative;
}
.highlight-card :is(.wrapper,.card-list,.card-item){
    display: flex;
    align-items:center;
}
.highlight-card .wrapper{
    justify-content: space-between;
    gap:16px;
}
.highlight-card .card-list{
    flex-wrap: wrap;
    flex-grow: 1;
    row-gap:8px;
}
.highlight-card .card-item{
    width:50%;
    justify-content:flex-end;
    gap:4px;
}

/* ---------------------------------------------Hourly forecast -------------------------*/
.slider-container{
    overflow-x:auto;
    margin-inline:-16px;
}
.slider-container::-webkit-scrollbar{
    display: none;
}
.slider-list{
    display:flex;
    gap:12px;
}
.slider-list:first-child{
    margin-block-end:16px;
}
.slider-list::before,
.slider-list::after{
    content:"";
    min-width:4px;
}
.slider-item{
    min-width:110px;
    flex:1 1 100%;   
}
.slider-card{
    text-align:center;
}
.slider-item .weather-icon{
    margin-inline:auto;
    margin-block:12px;
}
.footer,
.footer .body-3:last-child{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
}
.footer{
    color:var(--light-gray-variant);
    text-align:center;
    gap:12px 24px;
    margin-block-start:28px;
}
.api{
    color:green;
}
.fade-in .footer{
    display: flex;
}
.error{
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    height:100svh;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    display: none;
    z-index:8;
}

/* --------------------------------- media queries -------------------------------- */


@media screen and (min-width:768px){
    .container{
        padding:24px;
    }
    .card-lg{
        padding:.5rem;
    }
    .card-sm{
        padding:20px;
        display: grid;
        grid-template-rows: min-content 1fr;
    }  
    .search{
        clip-path: circle(3% at calc(100% - 273px) 6%);
    }
    main{
        height: calc(100vh -96px);
        height:calc(100svh - 96px);
    }
    article.container{
        padding-block-start: 0;
        grid-template-columns: 280px minmax(0,1fr);
        align-items:flex-start;
        gap:24px;
    }
    .content-left{
        position: sticky;
        top:0;
    }
    .section:not(:last-child){
        margin-block:20px;
    }
    .forecast-card .card-item:not(:last-child){
        margin-block-end: 16px;
    }
    .highlight-list{
        grid-template-columns: 1fr 1fr;
    }
    .highlight-card:nth-child(-n+2){
        grid-column:span 2;
        height:160px;
    }
    .highlight-card:nth-child(n+3){
        height:120px;
    }
    .highlights .m-icon{
        font-size:3.6rem;
    }
    .highlight-card.one .card-item{
        width:25%;
        flex-direction: column-reverse;
        gap:8px;
    }
    .slider-container{
        margin-inline:0 -24px;
        border-bottom-left-radius:var(--radius-16);
        border-top-left-radius:var(--radius-16);
    }
    .slider-list::before{
        display: none;
    }
    .slider-list::after{
        min-width:12px;
    }
    .hourly-forecast .card-sm{
        padding:16px;
    }
    .search{
        all:unset;
        display:block;
        position: relative;
        width:500px;
        animation:none;
    }
     .search-input{
        height:56px;
        border-radius: var(--radius-28);
        border:2px solid var(--outline);
    }

    

}

@media screen and (min-width:1200px){
    .container{
        padding:3rem;
    }
    .card-lg{
        padding:36px;
    }
    .card-sm{
        padding:24px;
    }    
    .header .icon-btn{
        display: none;
    }
    .logo img{
        width:200px;
    }
    .header{
        position: relative;
        height:120px;
        z-index:4;
    }
    .header .container{
        padding-block:0;
        height:100%;
    }
    .search-container{
        border-block-end:none;
    }
    .search-container > .m-icon{
        display:block;
    }
    .search-input{
        height:56px;
        border-radius: var(--radius-28);
        border:2px solid var(--outline);
    }
    .search .search-details{
        position:absolute;
        top:100%;
        left:0;
        width:100%;
        max-height:360px;
        border-radius: 0 0 var(--radius-28) var(--radius-28);
        border-block-start:1px solid var(--outline);
        overflow-y: auto;/*firefox*/
        overflow-y: overlay;
    }
    main{
        height:calc(100vh-120px);
        height:calc(100svh-120px);
    }
    article.container{
        grid-template-columns: 360px minmax(0, 1fr);
        gap:40px;
    }
    .current-condition .weather-icon{
        width:80px;
    }
    .highlight-card:nth-child(-n+2){
        height:200px;
    }
    .highlight-card:nth-child(n+3){
        height:150px;
    }
    .highlight-card .m-icon{
        font-size:4.8rem;
    }
    .slider-list{
        gap:16px;
    }
}
@media screen and (min-width:1400px) {
    .highlight-list{
        grid-template-columns: repeat(4, 1fr);
    }
}

@media screen and (max-width:768px) {
    body{
        font-size:.8rem;
    }
    .container,.card-lg,.card-sm{
        padding:.5rem;
    }   
    .card-sm{
        display: grid;
        grid-template-rows: min-content 1fr;
    }  
    main{
        height: calc(100vh -96px);
        height:calc(100svh - 96px);
    }
    .container{
        padding:.5rem 1.5rem;
        width:100vw;
    }
    .section:not(:last-child){
        margin-block:20px;
    }
    .forecast-card .card-item:not(:last-child){
        margin-block-end: 16px;
    }
    .highlight-list{
        grid-template-columns: 1fr 1fr;
    }
    .highlight-card:nth-child(-n+2){
        grid-column:span 2;
        height:160px;
    }
    .highlight-card:nth-child(n+3){
        height:120px;
    }

    .highlight-card.one .card-item{
        width:25%;
        flex-direction: column-reverse;
        gap:8px;
    }
    .slider-container{
        margin-inline:0 -24px;
        border-bottom-left-radius:var(--radius-16);
        border-top-left-radius:var(--radius-16);
    }
    .slider-list::before{
        display: none;
    }
    .slider-list::after{
        min-width:12px;
    }
    .hourly-forecast .card-sm{
        padding:16px;
    }
    .search{
        all:unset;
        display:block;
        position: relative;
        width:500px;
        animation:none;
    }
     .search-input{
        height:2rem;
        border-radius: var(--radius-28);
        border:2px solid var(--outline);
    }
    .logo h1{
        font-size:.8rem;
    }

    
}`, "",{"version":3,"sources":["webpack://./src/assets/css/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,6BAA6B;IAC7B,+BAA+B;IAC/B,kBAAkB;IAClB,mCAAmC;AACvC;AACA,+DAA+D;AAC/D;IACI,QAAQ;IACR,SAAS;IACT,qBAAqB;AACzB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,WAAW;AACf;AACA;IACI,eAAe;IACf,WAAW;IACX,aAAa;IACb,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;IACI,cAAc;AAClB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,mBAAmB;AACvB;AACA;IACI,cAAc;AAClB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,mCAAmC;IACnC,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA,yEAAyE;AACzE;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,eAAe;IACf,0DAA8D;AAClE;AACA;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,UAAU;IACV,SAAS;IACT,eAAe;AACnB;AACA;IACI,SAAS;IACT,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,kCAAkC;IAClC,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;;AAEA,8EAA8E;AAC9E;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,KAAK;IACL,MAAM;IACN,UAAU;IACV,YAAY;IACZ,kCAAkC;IAClC,uBAAuB;IACvB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,OAAO;AACX;AACA;;IAEI,oCAAoC;IACpC,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,gBAAgB;IAChB,wBAAwB;IACxB,YAAY;AAChB;AACA;IACI,iCAAiC;AACrC;AACA;IACI,iBAAiB;IACjB,OAAO;IACP,SAAS;IACT,8BAA8B;AAClC;AACA;IACI,aAAa;AACjB;AACA;IACI,4BAA4B;IAC5B,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;IACpC,uBAAuB;IACvB,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;AACJ;AACA,iFAAiF;AACjF;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,oCAAoC;IACpC,QAAQ;IACR,WAAW;IACX,eAAe,CAAC,UAAU;IAC1B,kBAAkB;;AAEtB;;AAEA,kFAAkF;AAClF;IACI,iBAAiB;IACjB,YAAY;IACZ,OAAO;IACP,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,2CAA2C;AAC/C;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,OAAO;IACP,WAAW;AACf;AACA;IACI,gCAAgC;AACpC;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;AACnC;AACA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA,mFAAmF;AACnF;IACI,YAAY;IACZ,QAAQ;AACZ;AACA;IACI,mCAAmC;IACnC,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,8BAA8B;IAC9B,QAAQ;AACZ;AACA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;AACf;AACA;IACI,SAAS;IACT,wBAAwB;IACxB,OAAO;AACX;;AAEA,0FAA0F;AAC1F;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,QAAQ;AACZ;AACA;IACI,qBAAqB;AACzB;AACA;;IAEI,UAAU;IACV,aAAa;AACjB;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;;IAEI,YAAY;IACZ,cAAc;IACd,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,+BAA+B;IAC/B,iBAAiB;IACjB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,eAAe;IACf,KAAK;IACL,MAAM;IACN,UAAU;IACV,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA,qFAAqF;;;AAGrF;IACI;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;QACZ,aAAa;QACb,mCAAmC;IACvC;IACA;QACI,8CAA8C;IAClD;IACA;QACI,yBAAyB;QACzB,0BAA0B;IAC9B;IACA;QACI,sBAAsB;QACtB,0CAA0C;QAC1C,sBAAsB;QACtB,QAAQ;IACZ;IACA;QACI,gBAAgB;QAChB,KAAK;IACT;IACA;QACI,iBAAiB;IACrB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,8BAA8B;IAClC;IACA;QACI,kBAAkB;QAClB,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,SAAS;QACT,8BAA8B;QAC9B,OAAO;IACX;IACA;QACI,qBAAqB;QACrB,0CAA0C;QAC1C,uCAAuC;IAC3C;IACA;QACI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,SAAS;QACT,aAAa;QACb,kBAAkB;QAClB,WAAW;QACX,cAAc;IAClB;KACC;QACG,WAAW;QACX,+BAA+B;QAC/B,+BAA+B;IACnC;;;;AAIJ;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,WAAW;IACf;IACA;QACI,kBAAkB;QAClB,YAAY;QACZ,SAAS;IACb;IACA;QACI,eAAe;QACf,WAAW;IACf;IACA;QACI,qBAAqB;IACzB;IACA;QACI,aAAa;IACjB;IACA;QACI,WAAW;QACX,+BAA+B;QAC/B,+BAA+B;IACnC;IACA;QACI,iBAAiB;QACjB,QAAQ;QACR,MAAM;QACN,UAAU;QACV,gBAAgB;QAChB,oDAAoD;QACpD,2CAA2C;QAC3C,gBAAgB,CAAC,UAAU;QAC3B,mBAAmB;IACvB;IACA;QACI,wBAAwB;QACxB,yBAAyB;IAC7B;IACA;QACI,2CAA2C;QAC3C,QAAQ;IACZ;IACA;QACI,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,QAAQ;IACZ;AACJ;AACA;IACI;QACI,qCAAqC;IACzC;AACJ;;AAEA;IACI;QACI,eAAe;IACnB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;QACb,mCAAmC;IACvC;IACA;QACI,yBAAyB;QACzB,0BAA0B;IAC9B;IACA;QACI,oBAAoB;QACpB,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,8BAA8B;IAClC;IACA;QACI,kBAAkB;QAClB,YAAY;IAChB;IACA;QACI,YAAY;IAChB;;IAEA;QACI,SAAS;QACT,8BAA8B;QAC9B,OAAO;IACX;IACA;QACI,qBAAqB;QACrB,0CAA0C;QAC1C,uCAAuC;IAC3C;IACA;QACI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,SAAS;QACT,aAAa;QACb,kBAAkB;QAClB,WAAW;QACX,cAAc;IAClB;KACC;QACG,WAAW;QACX,+BAA+B;QAC/B,+BAA+B;IACnC;IACA;QACI,eAAe;IACnB;;;AAGJ","sourcesContent":[":root{ \n    --background: #131214;\n    --text-color: #EAE6F2;\n    --dark-grey: #1D1C1F;\n    --light-gray: #DDDAE5;\n    --light-gray-variant: #7B7980; \n    --light-gray-variant-2: #B9B6BF;\n    --outline: #3E3D40;\n    --black-alpha: hsla(0, 0%, 0%, 0.1);\n}\n/*  ------------------ Reset ---------------------------------*/\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n}\nli {\n    list-style: none;\n}\na,img,span,input,button{\n    display:block;\n}\na{\n    color:inherit;\n    text-decoration: none;\n}\nimg{\n    height:auto;\n}\ninput,button{\n    background:none;\n    border:none;\n    color:inherit;\n    font:inherit;\n}\ninput{\n    width:100%;\n}\nbutton{\n    cursor:pointer;\n}\nsub{\n    vertical-align: baseline;\n}\nsup{\n    vertical-align: top;\n}\nsub,sup{\n    font-size:.8em;\n}\nhtml{\n    scroll-behavior: smooth;\n}\nbody{\n    background-color: var(--background);\n    color:var(--text-color);\n    font-size: 18px;\n    overflow: hidden;\n}\n\n/* ---------------------------------- styles -------------------------- */\n@font-face{\n    font-family: 'Material Icon';\n    font-style:normal;\n    font-weight:400;\n    src:url(../fonts/material-symbol-rounded.woff2) format('woff');\n}\n.m-icon{\n    font-family:'Material Icon';\n    font-weight: normal;\n    font-style:normal;\n    font-size:2.5rem;\n    line-height:1;\n    text-transform: none;\n    white-space:nowrap;\n    word-wrap:normal;\n    direction: ltr;\n    height:1em;\n    width:1em;\n    overflow:hidden;\n}\n.container{\n    width:90%;\n    margin-inline:auto;\n    padding:1em;\n}\n.card {\n    background-color: var(--dark-grey);\n    color:var(--light-gray);   \n}\n.card-lg{\n    padding:20px; \n}\n.card-sm{\n    padding:16px;\n}\n\n/* ----------------------------------- header -------------------------------*/\n.header .container{\n    display: flex;\n    align-items:center;\n    justify-content: space-between;\n}\n.search{\n    position:fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:100vh;\n    background-color: var(--dark-grey);\n    color:var(--light-gray);\n    z-index:4;\n}\n.search-container{\n    position: relative;\n    display: flex;\n    gap:1em;\n}\n.search-btn,\n.home-btn{\n    background:var(--light-gray-variant);\n    padding:.5em;\n    border-radius: 10px;\n}\n.search-input{\n    height:80px;\n    line-height:80px;\n    padding-inline:56px 16px;\n    outline:none;\n}\n.search-input::placeholder{\n    color:var(--light-gray-variant-2);\n}\n.search-container .search-icon {\n    position:absolute;\n    top:50%;\n    left:28px;\n    transform:translate(-50%,-50%);\n}\n.search-container > .m-icon{\n    display: none;\n}\n.search-container .icon-btn {\n    background-color:transparent;\n    box-shadow:none;\n}\n.loading {\n    position: relative;\n    font-size: 20px;\n    text-align: center;\n    margin-top: 50px;\n    font-weight: bold;\n}\n\n.loading::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 40px;\n    height: 40px;\n    margin-top: -20px;\n    margin-left: -20px;\n    border: 5px solid rgba(0, 0, 0, 0.1);\n    border-top-color: white;\n    border-radius: 50%;\n    animation: spin 1s infinite linear;\n}\n\n@keyframes spin {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n/* ------------------------------------- Main --------------------------------- */\nmain{\n    overflow: hidden;\n}\narticle.container{\n    position:relative;\n    display: grid;\n    grid-template-columns: minmax(0,1fr);\n    gap:20px;\n    height:100%;\n    overflow-y:auto;/*firefox*/\n    overflow-y:overlay;\n    \n}\n\n/* ----------------------------------content left--------------------------------*/\n.current-condition-card .wrapper{\n    margin-block:12px;\n    display:flex;\n    gap:8px;\n    align-items:center;\n}\n.current-condition-card .weather-icon{\n    margin-inline:auto;\n}\n.current-condition-card .details-list{\n    margin-block-start:16px;\n    padding-block-start:16px;\n    border-block-start:1px solid var(--outline);\n}\n.current-condition-card .detail-item{\n    display: flex;\n    align-items:center;\n    gap:8px;\n    margin:.5em;\n}\n.current-condition-card .detail-text{\n    color: var(--light-gray-variant);\n}\n.forecast-card :is(.card-item,.icon-wrapper){\n    display:flex;\n    align-items: center;\n}\n\n.forecast-card .forecast-details{\n    color:var(--light-gray-variant);\n}\n.forecast-card .card-item > .forecast-details{\n    width:100%;\n    text-align:right;\n}\n\n/* ----------------------------------content right--------------------------------*/\n.highlight-list{\n    display:grid;\n    gap:20px;\n}\n.highlights .card-sm{\n    background-color:var(--black-alpha);\n    position:relative;\n}\n.highlight-card :is(.wrapper,.card-list,.card-item){\n    display: flex;\n    align-items:center;\n}\n.highlight-card .wrapper{\n    justify-content: space-between;\n    gap:16px;\n}\n.highlight-card .card-list{\n    flex-wrap: wrap;\n    flex-grow: 1;\n    row-gap:8px;\n}\n.highlight-card .card-item{\n    width:50%;\n    justify-content:flex-end;\n    gap:4px;\n}\n\n/* ---------------------------------------------Hourly forecast -------------------------*/\n.slider-container{\n    overflow-x:auto;\n    margin-inline:-16px;\n}\n.slider-container::-webkit-scrollbar{\n    display: none;\n}\n.slider-list{\n    display:flex;\n    gap:12px;\n}\n.slider-list:first-child{\n    margin-block-end:16px;\n}\n.slider-list::before,\n.slider-list::after{\n    content:\"\";\n    min-width:4px;\n}\n.slider-item{\n    min-width:110px;\n    flex:1 1 100%;   \n}\n.slider-card{\n    text-align:center;\n}\n.slider-item .weather-icon{\n    margin-inline:auto;\n    margin-block:12px;\n}\n.footer,\n.footer .body-3:last-child{\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:center;\n    align-items:center;\n}\n.footer{\n    color:var(--light-gray-variant);\n    text-align:center;\n    gap:12px 24px;\n    margin-block-start:28px;\n}\n.api{\n    color:green;\n}\n.fade-in .footer{\n    display: flex;\n}\n.error{\n    position: fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:100vh;\n    height:100svh;\n    background-color: var(--background);\n    display: flex;\n    flex-direction: column;\n    justify-content:center;\n    align-items:center;\n    display: none;\n    z-index:8;\n}\n\n/* --------------------------------- media queries -------------------------------- */\n\n\n@media screen and (min-width:768px){\n    .container{\n        padding:24px;\n    }\n    .card-lg{\n        padding:.5rem;\n    }\n    .card-sm{\n        padding:20px;\n        display: grid;\n        grid-template-rows: min-content 1fr;\n    }  \n    .search{\n        clip-path: circle(3% at calc(100% - 273px) 6%);\n    }\n    main{\n        height: calc(100vh -96px);\n        height:calc(100svh - 96px);\n    }\n    article.container{\n        padding-block-start: 0;\n        grid-template-columns: 280px minmax(0,1fr);\n        align-items:flex-start;\n        gap:24px;\n    }\n    .content-left{\n        position: sticky;\n        top:0;\n    }\n    .section:not(:last-child){\n        margin-block:20px;\n    }\n    .forecast-card .card-item:not(:last-child){\n        margin-block-end: 16px;\n    }\n    .highlight-list{\n        grid-template-columns: 1fr 1fr;\n    }\n    .highlight-card:nth-child(-n+2){\n        grid-column:span 2;\n        height:160px;\n    }\n    .highlight-card:nth-child(n+3){\n        height:120px;\n    }\n    .highlights .m-icon{\n        font-size:3.6rem;\n    }\n    .highlight-card.one .card-item{\n        width:25%;\n        flex-direction: column-reverse;\n        gap:8px;\n    }\n    .slider-container{\n        margin-inline:0 -24px;\n        border-bottom-left-radius:var(--radius-16);\n        border-top-left-radius:var(--radius-16);\n    }\n    .slider-list::before{\n        display: none;\n    }\n    .slider-list::after{\n        min-width:12px;\n    }\n    .hourly-forecast .card-sm{\n        padding:16px;\n    }\n    .search{\n        all:unset;\n        display:block;\n        position: relative;\n        width:500px;\n        animation:none;\n    }\n     .search-input{\n        height:56px;\n        border-radius: var(--radius-28);\n        border:2px solid var(--outline);\n    }\n\n    \n\n}\n\n@media screen and (min-width:1200px){\n    .container{\n        padding:3rem;\n    }\n    .card-lg{\n        padding:36px;\n    }\n    .card-sm{\n        padding:24px;\n    }    \n    .header .icon-btn{\n        display: none;\n    }\n    .logo img{\n        width:200px;\n    }\n    .header{\n        position: relative;\n        height:120px;\n        z-index:4;\n    }\n    .header .container{\n        padding-block:0;\n        height:100%;\n    }\n    .search-container{\n        border-block-end:none;\n    }\n    .search-container > .m-icon{\n        display:block;\n    }\n    .search-input{\n        height:56px;\n        border-radius: var(--radius-28);\n        border:2px solid var(--outline);\n    }\n    .search .search-details{\n        position:absolute;\n        top:100%;\n        left:0;\n        width:100%;\n        max-height:360px;\n        border-radius: 0 0 var(--radius-28) var(--radius-28);\n        border-block-start:1px solid var(--outline);\n        overflow-y: auto;/*firefox*/\n        overflow-y: overlay;\n    }\n    main{\n        height:calc(100vh-120px);\n        height:calc(100svh-120px);\n    }\n    article.container{\n        grid-template-columns: 360px minmax(0, 1fr);\n        gap:40px;\n    }\n    .current-condition .weather-icon{\n        width:80px;\n    }\n    .highlight-card:nth-child(-n+2){\n        height:200px;\n    }\n    .highlight-card:nth-child(n+3){\n        height:150px;\n    }\n    .highlight-card .m-icon{\n        font-size:4.8rem;\n    }\n    .slider-list{\n        gap:16px;\n    }\n}\n@media screen and (min-width:1400px) {\n    .highlight-list{\n        grid-template-columns: repeat(4, 1fr);\n    }\n}\n\n@media screen and (max-width:768px) {\n    body{\n        font-size:.8rem;\n    }\n    .container,.card-lg,.card-sm{\n        padding:.5rem;\n    }   \n    .card-sm{\n        display: grid;\n        grid-template-rows: min-content 1fr;\n    }  \n    main{\n        height: calc(100vh -96px);\n        height:calc(100svh - 96px);\n    }\n    .container{\n        padding:.5rem 1.5rem;\n        width:100vw;\n    }\n    .section:not(:last-child){\n        margin-block:20px;\n    }\n    .forecast-card .card-item:not(:last-child){\n        margin-block-end: 16px;\n    }\n    .highlight-list{\n        grid-template-columns: 1fr 1fr;\n    }\n    .highlight-card:nth-child(-n+2){\n        grid-column:span 2;\n        height:160px;\n    }\n    .highlight-card:nth-child(n+3){\n        height:120px;\n    }\n\n    .highlight-card.one .card-item{\n        width:25%;\n        flex-direction: column-reverse;\n        gap:8px;\n    }\n    .slider-container{\n        margin-inline:0 -24px;\n        border-bottom-left-radius:var(--radius-16);\n        border-top-left-radius:var(--radius-16);\n    }\n    .slider-list::before{\n        display: none;\n    }\n    .slider-list::after{\n        min-width:12px;\n    }\n    .hourly-forecast .card-sm{\n        padding:16px;\n    }\n    .search{\n        all:unset;\n        display:block;\n        position: relative;\n        width:500px;\n        animation:none;\n    }\n     .search-input{\n        height:2rem;\n        border-radius: var(--radius-28);\n        border:2px solid var(--outline);\n    }\n    .logo h1{\n        font-size:.8rem;\n    }\n\n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/styles.css":
/*!***********************************!*\
  !*** ./src/assets/css/styles.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ "./src/assets/css/styles.css");

const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn')
const retryBtn = document.querySelector('.home-btn')

let API_KEY = "a96ea307d2b945c9acf54106241806"

searchBtn.addEventListener('click', async(e)=>{
    const searchLocation = searchInput.value;
    await apiCall(searchLocation)
});

retryBtn.addEventListener('click', (e)=>{
    document.querySelector('.error').style.display='none';
});

async function apiCall(location){
    try{
        document.querySelector('.loading').style.display = 'block';
        const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location || 'Nairobi'}&days=5`,{mode:'cors'})
        const data = await res.json()
        document.querySelector('.loading').style.display = 'none';
        //console.log(data)
        renderData(data)
    } catch (err) {
        document.querySelector('.error').style.display='flex';
        /*document.querySelector('.err-msg').textContent = err*/
        document.querySelector('.err-msg').textContent = "Something went wrong. Please try again"
    }
}


function renderData(data){
    document.querySelector('.condition').textContent = data.current.condition.text;
    document.querySelector('.degree').textContent = data.current.temp_c + ' °C';
    document.querySelector('.date-today').textContent = data.location.localtime;
    document.querySelector('.curr-location').textContent = `${data.location.country}, ${data.location.name}`;
    document.querySelector('.sunrise-time').textContent = data.forecast.forecastday[0].astro.sunrise;
    document.querySelector('.sunset-time').textContent = data.forecast.forecastday[0].astro.sunset;
    document.querySelector('.humidity').textContent = data.current.humidity + '%';
    document.querySelector('.pressure').textContent = data.current.pressure_mb + ' mb';
    document.querySelector('.visibility').textContent = data.current.vis_km + ' km';
    document.querySelector('.feelslike_c').textContent = data.current.feelslike_c + ' °C';
    populate3dayForecast(data);
    populateHourlyForecast(data);

}
function populateHourlyForecast(data) {
    const hourlyForecast = data.forecast.forecastday[0].hour;
    const currentHour = new Date().getHours();
    const weatherSliderItems = document.querySelectorAll('ul.weather .slider-item');
    const windSliderItems = document.querySelectorAll('ul.wind .slider-item');

    for (let i = 0; i < weatherSliderItems.length; i++) {
        const hourData = hourlyForecast[(currentHour + i) % 24];
        const time = new Date(hourData.time).getHours();
        const formattedTime = time % 12 || 12;
        const amPm = time < 12 ? 'AM' : 'PM';

        const sliderCard = weatherSliderItems[i].querySelector('.slider-card');
        sliderCard.querySelector('p:first-child').textContent = `${formattedTime} ${amPm}`;
        sliderCard.querySelector('img').src = hourData.condition.icon;
        sliderCard.querySelector('img').alt = hourData.condition.text;
        sliderCard.querySelector('p:last-child').textContent = `${Math.round(hourData.temp_c)} °C`;
    }

    for (let i = 0; i < windSliderItems.length; i++) {
        const hourData = hourlyForecast[(currentHour + i) % 24];
        const time = new Date(hourData.time).getHours();
        const formattedTime = time % 12 || 12;
        const amPm = time < 12 ? 'AM' : 'PM';

        const sliderCard = windSliderItems[i].querySelector('.slider-card');
        sliderCard.querySelector('p:first-child').textContent = `${formattedTime} ${amPm}`;
        sliderCard.querySelector('img').src = hourData.condition.icon;
        sliderCard.querySelector('img').alt = hourData.condition.text;
        sliderCard.querySelector('p:last-child').textContent = `${Math.round(hourData.wind_kph)} km/h`;
    }
}
function populate3dayForecast(data) {
    const forecast = data.forecast.forecastday.slice(1, 4);
    const forecastList = document.querySelectorAll('ul.forecast-list .card-item');

    forecast.forEach((day, index) => {
        if (index < forecastList.length) {
            const date = new Date(day.date).toLocaleDateString();
            const weekday = new Date(day.date).toLocaleString('en-us', { weekday: 'long' });
            const condition = day.day.condition.text;
            const icon = day.day.condition.icon;

            const listItem = forecastList[index];
            const weatherIcon = listItem.querySelector('.weather-icon');
            const dateElement = listItem.querySelectorAll('.forecast-details')[0];
            const dayElement = listItem.querySelectorAll('.forecast-details')[1];

            weatherIcon.src = icon;
            weatherIcon.alt = condition;
            dateElement.textContent = date;
            dayElement.textContent = weekday;
        }
    });
}
apiCall();


/***/ }),

/***/ "./src/assets/fonts/material-symbol-rounded.woff2":
/*!********************************************************!*\
  !*** ./src/assets/fonts/material-symbol-rounded.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f00374d3e12087eeba65.woff2";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLE9BQU8sNEZBQTRGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssTUFBTSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsb0JBQW9CLGNBQWMsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sY0FBYyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLHVCQUF1QixhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZ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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwrQkFBK0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBbUUsZUFBZSxFQUFFLEtBQUs7QUFDekY7QUFDQTtBQUNBLGtFQUFrRSw2QkFBNkI7QUFDL0Y7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxlQUFlLEVBQUUsS0FBSztBQUN6RjtBQUNBO0FBQ0Esa0VBQWtFLCtCQUErQjtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxpQkFBaUI7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9hc3NldHMvY3NzL3N0eWxlcy5jc3M/ZmU1ZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXNzZXRzL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9tYXRlcmlhbC1zeW1ib2wtcm91bmRlZC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7IFxuICAgIC0tYmFja2dyb3VuZDogIzEzMTIxNDtcbiAgICAtLXRleHQtY29sb3I6ICNFQUU2RjI7XG4gICAgLS1kYXJrLWdyZXk6ICMxRDFDMUY7XG4gICAgLS1saWdodC1ncmF5OiAjREREQUU1O1xuICAgIC0tbGlnaHQtZ3JheS12YXJpYW50OiAjN0I3OTgwOyBcbiAgICAtLWxpZ2h0LWdyYXktdmFyaWFudC0yOiAjQjlCNkJGO1xuICAgIC0tb3V0bGluZTogIzNFM0Q0MDtcbiAgICAtLWJsYWNrLWFscGhhOiBoc2xhKDAsIDAlLCAwJSwgMC4xKTtcbn1cbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0gUmVzZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbip7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbn1cbmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuYSxpbWcsc3BhbixpbnB1dCxidXR0b257XG4gICAgZGlzcGxheTpibG9jaztcbn1cbmF7XG4gICAgY29sb3I6aW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5pbWd7XG4gICAgaGVpZ2h0OmF1dG87XG59XG5pbnB1dCxidXR0b257XG4gICAgYmFja2dyb3VuZDpub25lO1xuICAgIGJvcmRlcjpub25lO1xuICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgZm9udDppbmhlcml0O1xufVxuaW5wdXR7XG4gICAgd2lkdGg6MTAwJTtcbn1cbmJ1dHRvbntcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cbnN1YntcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5zdXB7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbnN1YixzdXB7XG4gICAgZm9udC1zaXplOi44ZW07XG59XG5odG1se1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbkBmb250LWZhY2V7XG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29uJztcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgc3JjOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoJ3dvZmYnKTtcbn1cbi5tLWljb257XG4gICAgZm9udC1mYW1pbHk6J01hdGVyaWFsIEljb24nO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTpub3JtYWw7XG4gICAgZm9udC1zaXplOjIuNXJlbTtcbiAgICBsaW5lLWhlaWdodDoxO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcbiAgICB3b3JkLXdyYXA6bm9ybWFsO1xuICAgIGRpcmVjdGlvbjogbHRyO1xuICAgIGhlaWdodDoxZW07XG4gICAgd2lkdGg6MWVtO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbn1cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6OTAlO1xuICAgIG1hcmdpbi1pbmxpbmU6YXV0bztcbiAgICBwYWRkaW5nOjFlbTtcbn1cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xuICAgIGNvbG9yOnZhcigtLWxpZ2h0LWdyYXkpOyAgIFxufVxuLmNhcmQtbGd7XG4gICAgcGFkZGluZzoyMHB4OyBcbn1cbi5jYXJkLXNte1xuICAgIHBhZGRpbmc6MTZweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmhlYWRlciAuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5zZWFyY2h7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheSk7XG4gICAgei1pbmRleDo0O1xufVxuLnNlYXJjaC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOjFlbTtcbn1cbi5zZWFyY2gtYnRuLFxuLmhvbWUtYnRue1xuICAgIGJhY2tncm91bmQ6dmFyKC0tbGlnaHQtZ3JheS12YXJpYW50KTtcbiAgICBwYWRkaW5nOi41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5zZWFyY2gtaW5wdXR7XG4gICAgaGVpZ2h0OjgwcHg7XG4gICAgbGluZS1oZWlnaHQ6ODBweDtcbiAgICBwYWRkaW5nLWlubGluZTo1NnB4IDE2cHg7XG4gICAgb3V0bGluZTpub25lO1xufVxuLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheS12YXJpYW50LTIpO1xufVxuLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1pY29uIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6NTAlO1xuICAgIGxlZnQ6MjhweDtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG4uc2VhcmNoLWNvbnRhaW5lciA+IC5tLWljb257XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWFyY2gtY29udGFpbmVyIC5pY29uLWJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93Om5vbmU7XG59XG4ubG9hZGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvYWRpbmc6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5tYWlue1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5hcnRpY2xlLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsMWZyKTtcbiAgICBnYXA6MjBweDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBvdmVyZmxvdy15OmF1dG87LypmaXJlZm94Ki9cbiAgICBvdmVyZmxvdy15Om92ZXJsYXk7XG4gICAgXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jb250ZW50IGxlZnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAud3JhcHBlcntcbiAgICBtYXJnaW4tYmxvY2s6MTJweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZ2FwOjhweDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAud2VhdGhlci1pY29ue1xuICAgIG1hcmdpbi1pbmxpbmU6YXV0bztcbn1cbi5jdXJyZW50LWNvbmRpdGlvbi1jYXJkIC5kZXRhaWxzLWxpc3R7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OjE2cHg7XG4gICAgcGFkZGluZy1ibG9jay1zdGFydDoxNnB4O1xuICAgIGJvcmRlci1ibG9jay1zdGFydDoxcHggc29saWQgdmFyKC0tb3V0bGluZSk7XG59XG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAuZGV0YWlsLWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgZ2FwOjhweDtcbiAgICBtYXJnaW46LjVlbTtcbn1cbi5jdXJyZW50LWNvbmRpdGlvbi1jYXJkIC5kZXRhaWwtdGV4dHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheS12YXJpYW50KTtcbn1cbi5mb3JlY2FzdC1jYXJkIDppcyguY2FyZC1pdGVtLC5pY29uLXdyYXBwZXIpe1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9yZWNhc3QtY2FyZCAuZm9yZWNhc3QtZGV0YWlsc3tcbiAgICBjb2xvcjp2YXIoLS1saWdodC1ncmF5LXZhcmlhbnQpO1xufVxuLmZvcmVjYXN0LWNhcmQgLmNhcmQtaXRlbSA+IC5mb3JlY2FzdC1kZXRhaWxze1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNvbnRlbnQgcmlnaHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGlnaGxpZ2h0LWxpc3R7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdhcDoyMHB4O1xufVxuLmhpZ2hsaWdodHMgLmNhcmQtc217XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ibGFjay1hbHBoYSk7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG4uaGlnaGxpZ2h0LWNhcmQgOmlzKC53cmFwcGVyLC5jYXJkLWxpc3QsLmNhcmQtaXRlbSl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG4uaGlnaGxpZ2h0LWNhcmQgLndyYXBwZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDoxNnB4O1xufVxuLmhpZ2hsaWdodC1jYXJkIC5jYXJkLWxpc3R7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICByb3ctZ2FwOjhweDtcbn1cbi5oaWdobGlnaHQtY2FyZCAuY2FyZC1pdGVte1xuICAgIHdpZHRoOjUwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG4gICAgZ2FwOjRweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSG91cmx5IGZvcmVjYXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnNsaWRlci1jb250YWluZXJ7XG4gICAgb3ZlcmZsb3cteDphdXRvO1xuICAgIG1hcmdpbi1pbmxpbmU6LTE2cHg7XG59XG4uc2xpZGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5zbGlkZXItbGlzdHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZ2FwOjEycHg7XG59XG4uc2xpZGVyLWxpc3Q6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDoxNnB4O1xufVxuLnNsaWRlci1saXN0OjpiZWZvcmUsXG4uc2xpZGVyLWxpc3Q6OmFmdGVye1xuICAgIGNvbnRlbnQ6XCJcIjtcbiAgICBtaW4td2lkdGg6NHB4O1xufVxuLnNsaWRlci1pdGVte1xuICAgIG1pbi13aWR0aDoxMTBweDtcbiAgICBmbGV4OjEgMSAxMDAlOyAgIFxufVxuLnNsaWRlci1jYXJke1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLnNsaWRlci1pdGVtIC53ZWF0aGVyLWljb257XG4gICAgbWFyZ2luLWlubGluZTphdXRvO1xuICAgIG1hcmdpbi1ibG9jazoxMnB4O1xufVxuLmZvb3Rlcixcbi5mb290ZXIgLmJvZHktMzpsYXN0LWNoaWxke1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LXdyYXA6d3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cbi5mb290ZXJ7XG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheS12YXJpYW50KTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBnYXA6MTJweCAyNHB4O1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDoyOHB4O1xufVxuLmFwaXtcbiAgICBjb2xvcjpncmVlbjtcbn1cbi5mYWRlLWluIC5mb290ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5lcnJvcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIGhlaWdodDoxMDBzdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgei1pbmRleDo4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWVkaWEgcXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xuICAgIC5jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6MjRweDtcbiAgICB9XG4gICAgLmNhcmQtbGd7XG4gICAgICAgIHBhZGRpbmc6LjVyZW07XG4gICAgfVxuICAgIC5jYXJkLXNte1xuICAgICAgICBwYWRkaW5nOjIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xuICAgIH0gIFxuICAgIC5zZWFyY2h7XG4gICAgICAgIGNsaXAtcGF0aDogY2lyY2xlKDMlIGF0IGNhbGMoMTAwJSAtIDI3M3B4KSA2JSk7XG4gICAgfVxuICAgIG1haW57XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtOTZweCk7XG4gICAgICAgIGhlaWdodDpjYWxjKDEwMHN2aCAtIDk2cHgpO1xuICAgIH1cbiAgICBhcnRpY2xlLmNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZy1ibG9jay1zdGFydDogMDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODBweCBtaW5tYXgoMCwxZnIpO1xuICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgICAgICBnYXA6MjRweDtcbiAgICB9XG4gICAgLmNvbnRlbnQtbGVmdHtcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOjA7XG4gICAgfVxuICAgIC5zZWN0aW9uOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgIG1hcmdpbi1ibG9jazoyMHB4O1xuICAgIH1cbiAgICAuZm9yZWNhc3QtY2FyZCAuY2FyZC1pdGVtOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE2cHg7XG4gICAgfVxuICAgIC5oaWdobGlnaHQtbGlzdHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWNhcmQ6bnRoLWNoaWxkKC1uKzIpe1xuICAgICAgICBncmlkLWNvbHVtbjpzcGFuIDI7XG4gICAgICAgIGhlaWdodDoxNjBweDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZChuKzMpe1xuICAgICAgICBoZWlnaHQ6MTIwcHg7XG4gICAgfVxuICAgIC5oaWdobGlnaHRzIC5tLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTozLjZyZW07XG4gICAgfVxuICAgIC5oaWdobGlnaHQtY2FyZC5vbmUgLmNhcmQtaXRlbXtcbiAgICAgICAgd2lkdGg6MjUlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIGdhcDo4cHg7XG4gICAgfVxuICAgIC5zbGlkZXItY29udGFpbmVye1xuICAgICAgICBtYXJnaW4taW5saW5lOjAgLTI0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tcmFkaXVzLTE2KTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1yYWRpdXMtMTYpO1xuICAgIH1cbiAgICAuc2xpZGVyLWxpc3Q6OmJlZm9yZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNsaWRlci1saXN0OjphZnRlcntcbiAgICAgICAgbWluLXdpZHRoOjEycHg7XG4gICAgfVxuICAgIC5ob3VybHktZm9yZWNhc3QgLmNhcmQtc217XG4gICAgICAgIHBhZGRpbmc6MTZweDtcbiAgICB9XG4gICAgLnNlYXJjaHtcbiAgICAgICAgYWxsOnVuc2V0O1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOjUwMHB4O1xuICAgICAgICBhbmltYXRpb246bm9uZTtcbiAgICB9XG4gICAgIC5zZWFyY2gtaW5wdXR7XG4gICAgICAgIGhlaWdodDo1NnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMjgpO1xuICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xuICAgIH1cblxuICAgIFxuXG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIwMHB4KXtcbiAgICAuY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOjNyZW07XG4gICAgfVxuICAgIC5jYXJkLWxne1xuICAgICAgICBwYWRkaW5nOjM2cHg7XG4gICAgfVxuICAgIC5jYXJkLXNte1xuICAgICAgICBwYWRkaW5nOjI0cHg7XG4gICAgfSAgICBcbiAgICAuaGVhZGVyIC5pY29uLWJ0bntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmxvZ28gaW1ne1xuICAgICAgICB3aWR0aDoyMDBweDtcbiAgICB9XG4gICAgLmhlYWRlcntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6MTIwcHg7XG4gICAgICAgIHotaW5kZXg6NDtcbiAgICB9XG4gICAgLmhlYWRlciAuY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nLWJsb2NrOjA7XG4gICAgICAgIGhlaWdodDoxMDAlO1xuICAgIH1cbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcbiAgICAgICAgYm9yZGVyLWJsb2NrLWVuZDpub25lO1xuICAgIH1cbiAgICAuc2VhcmNoLWNvbnRhaW5lciA+IC5tLWljb257XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgfVxuICAgIC5zZWFyY2gtaW5wdXR7XG4gICAgICAgIGhlaWdodDo1NnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMjgpO1xuICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xuICAgIH1cbiAgICAuc2VhcmNoIC5zZWFyY2gtZGV0YWlsc3tcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICAgIHRvcDoxMDAlO1xuICAgICAgICBsZWZ0OjA7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6MzYwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWRpdXMtMjgpIHZhcigtLXJhZGl1cy0yOCk7XG4gICAgICAgIGJvcmRlci1ibG9jay1zdGFydDoxcHggc29saWQgdmFyKC0tb3V0bGluZSk7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87LypmaXJlZm94Ki9cbiAgICAgICAgb3ZlcmZsb3cteTogb3ZlcmxheTtcbiAgICB9XG4gICAgbWFpbntcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwdmgtMTIwcHgpO1xuICAgICAgICBoZWlnaHQ6Y2FsYygxMDBzdmgtMTIwcHgpO1xuICAgIH1cbiAgICBhcnRpY2xlLmNvbnRhaW5lcntcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNjBweCBtaW5tYXgoMCwgMWZyKTtcbiAgICAgICAgZ2FwOjQwcHg7XG4gICAgfVxuICAgIC5jdXJyZW50LWNvbmRpdGlvbiAud2VhdGhlci1pY29ue1xuICAgICAgICB3aWR0aDo4MHB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWNhcmQ6bnRoLWNoaWxkKC1uKzIpe1xuICAgICAgICBoZWlnaHQ6MjAwcHg7XG4gICAgfVxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQobiszKXtcbiAgICAgICAgaGVpZ2h0OjE1MHB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWNhcmQgLm0taWNvbntcbiAgICAgICAgZm9udC1zaXplOjQuOHJlbTtcbiAgICB9XG4gICAgLnNsaWRlci1saXN0e1xuICAgICAgICBnYXA6MTZweDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDBweCkge1xuICAgIC5oaWdobGlnaHQtbGlzdHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcbiAgICBib2R5e1xuICAgICAgICBmb250LXNpemU6LjhyZW07XG4gICAgfVxuICAgIC5jb250YWluZXIsLmNhcmQtbGcsLmNhcmQtc217XG4gICAgICAgIHBhZGRpbmc6LjVyZW07XG4gICAgfSAgIFxuICAgIC5jYXJkLXNte1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICB9ICBcbiAgICBtYWlue1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLTk2cHgpO1xuICAgICAgICBoZWlnaHQ6Y2FsYygxMDBzdmggLSA5NnB4KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzouNXJlbSAxLjVyZW07XG4gICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgIH1cbiAgICAuc2VjdGlvbjpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICBtYXJnaW4tYmxvY2s6MjBweDtcbiAgICB9XG4gICAgLmZvcmVjYXN0LWNhcmQgLmNhcmQtaXRlbTpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxNnB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWxpc3R7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZCgtbisyKXtcbiAgICAgICAgZ3JpZC1jb2x1bW46c3BhbiAyO1xuICAgICAgICBoZWlnaHQ6MTYwcHg7XG4gICAgfVxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQobiszKXtcbiAgICAgICAgaGVpZ2h0OjEyMHB4O1xuICAgIH1cblxuICAgIC5oaWdobGlnaHQtY2FyZC5vbmUgLmNhcmQtaXRlbXtcbiAgICAgICAgd2lkdGg6MjUlO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG4gICAgICAgIGdhcDo4cHg7XG4gICAgfVxuICAgIC5zbGlkZXItY29udGFpbmVye1xuICAgICAgICBtYXJnaW4taW5saW5lOjAgLTI0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6dmFyKC0tcmFkaXVzLTE2KTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1yYWRpdXMtMTYpO1xuICAgIH1cbiAgICAuc2xpZGVyLWxpc3Q6OmJlZm9yZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnNsaWRlci1saXN0OjphZnRlcntcbiAgICAgICAgbWluLXdpZHRoOjEycHg7XG4gICAgfVxuICAgIC5ob3VybHktZm9yZWNhc3QgLmNhcmQtc217XG4gICAgICAgIHBhZGRpbmc6MTZweDtcbiAgICB9XG4gICAgLnNlYXJjaHtcbiAgICAgICAgYWxsOnVuc2V0O1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOjUwMHB4O1xuICAgICAgICBhbmltYXRpb246bm9uZTtcbiAgICB9XG4gICAgIC5zZWFyY2gtaW5wdXR7XG4gICAgICAgIGhlaWdodDoycmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMjgpO1xuICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xuICAgIH1cbiAgICAubG9nbyBoMXtcbiAgICAgICAgZm9udC1zaXplOi44cmVtO1xuICAgIH1cblxuICAgIFxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixtQ0FBbUM7QUFDdkM7QUFDQSwrREFBK0Q7QUFDL0Q7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBLHlFQUF5RTtBQUN6RTtJQUNJLDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBEQUE4RDtBQUNsRTtBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIs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QVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsOEJBQThCO1FBQzlCLE9BQU87SUFDWDtJQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLDBDQUEwQztRQUMxQyx1Q0FBdUM7SUFDM0M7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFNBQVM7UUFDVCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxjQUFjO0lBQ2xCO0tBQ0M7UUFDRyxXQUFXO1FBQ1gsK0JBQStCO1FBQy9CLCtCQUErQjtJQUNuQztJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7O0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7IFxcbiAgICAtLWJhY2tncm91bmQ6ICMxMzEyMTQ7XFxuICAgIC0tdGV4dC1jb2xvcjogI0VBRTZGMjtcXG4gICAgLS1kYXJrLWdyZXk6ICMxRDFDMUY7XFxuICAgIC0tbGlnaHQtZ3JheTogI0REREFFNTtcXG4gICAgLS1saWdodC1ncmF5LXZhcmlhbnQ6ICM3Qjc5ODA7IFxcbiAgICAtLWxpZ2h0LWdyYXktdmFyaWFudC0yOiAjQjlCNkJGO1xcbiAgICAtLW91dGxpbmU6ICMzRTNENDA7XFxuICAgIC0tYmxhY2stYWxwaGE6IGhzbGEoMCwgMCUsIDAlLCAwLjEpO1xcbn1cXG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tIFJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuKntcXG4gICAgbWFyZ2luOjA7XFxuICAgIHBhZGRpbmc6MDtcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcbn1cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmEsaW1nLHNwYW4saW5wdXQsYnV0dG9ue1xcbiAgICBkaXNwbGF5OmJsb2NrO1xcbn1cXG5he1xcbiAgICBjb2xvcjppbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbmltZ3tcXG4gICAgaGVpZ2h0OmF1dG87XFxufVxcbmlucHV0LGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgY29sb3I6aW5oZXJpdDtcXG4gICAgZm9udDppbmhlcml0O1xcbn1cXG5pbnB1dHtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuYnV0dG9ue1xcbiAgICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuc3Vie1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbnN1cHtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuc3ViLHN1cHtcXG4gICAgZm9udC1zaXplOi44ZW07XFxufVxcbmh0bWx7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzdHlsZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5AZm9udC1mYWNle1xcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb24nO1xcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6NDAwO1xcbiAgICBzcmM6dXJsKC4uL2ZvbnRzL21hdGVyaWFsLXN5bWJvbC1yb3VuZGVkLndvZmYyKSBmb3JtYXQoJ3dvZmYnKTtcXG59XFxuLm0taWNvbntcXG4gICAgZm9udC1mYW1pbHk6J01hdGVyaWFsIEljb24nO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcXG4gICAgZm9udC1zaXplOjIuNXJlbTtcXG4gICAgbGluZS1oZWlnaHQ6MTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcXG4gICAgd29yZC13cmFwOm5vcm1hbDtcXG4gICAgZGlyZWN0aW9uOiBsdHI7XFxuICAgIGhlaWdodDoxZW07XFxuICAgIHdpZHRoOjFlbTtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbn1cXG4uY29udGFpbmVye1xcbiAgICB3aWR0aDo5MCU7XFxuICAgIG1hcmdpbi1pbmxpbmU6YXV0bztcXG4gICAgcGFkZGluZzoxZW07XFxufVxcbi5jYXJkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheSk7ICAgXFxufVxcbi5jYXJkLWxne1xcbiAgICBwYWRkaW5nOjIwcHg7IFxcbn1cXG4uY2FyZC1zbXtcXG4gICAgcGFkZGluZzoxNnB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmhlYWRlciAuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNlYXJjaHtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIHRvcDowO1xcbiAgICBsZWZ0OjA7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcXG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheSk7XFxuICAgIHotaW5kZXg6NDtcXG59XFxuLnNlYXJjaC1jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjFlbTtcXG59XFxuLnNlYXJjaC1idG4sXFxuLmhvbWUtYnRue1xcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWxpZ2h0LWdyYXktdmFyaWFudCk7XFxuICAgIHBhZGRpbmc6LjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnNlYXJjaC1pbnB1dHtcXG4gICAgaGVpZ2h0OjgwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OjgwcHg7XFxuICAgIHBhZGRpbmctaW5saW5lOjU2cHggMTZweDtcXG4gICAgb3V0bGluZTpub25lO1xcbn1cXG4uc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlcntcXG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheS12YXJpYW50LTIpO1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWljb24ge1xcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgdG9wOjUwJTtcXG4gICAgbGVmdDoyOHB4O1xcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XFxufVxcbi5zZWFyY2gtY29udGFpbmVyID4gLm0taWNvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNlYXJjaC1jb250YWluZXIgLmljb24tYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcXG4gICAgYm94LXNoYWRvdzpub25lO1xcbn1cXG4ubG9hZGluZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubG9hZGluZzo6YmVmb3JlIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBhbmltYXRpb246IHNwaW4gMXMgaW5maW5pdGUgbGluZWFyO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICAgIH1cXG59XFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBNYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbm1haW57XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmFydGljbGUuY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwxZnIpO1xcbiAgICBnYXA6MjBweDtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG92ZXJmbG93LXk6YXV0bzsvKmZpcmVmb3gqL1xcbiAgICBvdmVyZmxvdy15Om92ZXJsYXk7XFxuICAgIFxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY29udGVudCBsZWZ0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5jdXJyZW50LWNvbmRpdGlvbi1jYXJkIC53cmFwcGVye1xcbiAgICBtYXJnaW4tYmxvY2s6MTJweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6OHB4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcbi5jdXJyZW50LWNvbmRpdGlvbi1jYXJkIC53ZWF0aGVyLWljb257XFxuICAgIG1hcmdpbi1pbmxpbmU6YXV0bztcXG59XFxuLmN1cnJlbnQtY29uZGl0aW9uLWNhcmQgLmRldGFpbHMtbGlzdHtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OjE2cHg7XFxuICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6MTZweDtcXG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0OjFweCBzb2xpZCB2YXIoLS1vdXRsaW5lKTtcXG59XFxuLmN1cnJlbnQtY29uZGl0aW9uLWNhcmQgLmRldGFpbC1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGdhcDo4cHg7XFxuICAgIG1hcmdpbjouNWVtO1xcbn1cXG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAuZGV0YWlsLXRleHR7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5LXZhcmlhbnQpO1xcbn1cXG4uZm9yZWNhc3QtY2FyZCA6aXMoLmNhcmQtaXRlbSwuaWNvbi13cmFwcGVyKXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtY2FyZCAuZm9yZWNhc3QtZGV0YWlsc3tcXG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheS12YXJpYW50KTtcXG59XFxuLmZvcmVjYXN0LWNhcmQgLmNhcmQtaXRlbSA+IC5mb3JlY2FzdC1kZXRhaWxze1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY29udGVudCByaWdodC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uaGlnaGxpZ2h0LWxpc3R7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOjIwcHg7XFxufVxcbi5oaWdobGlnaHRzIC5jYXJkLXNte1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJsYWNrLWFscGhhKTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcbi5oaWdobGlnaHQtY2FyZCA6aXMoLndyYXBwZXIsLmNhcmQtbGlzdCwuY2FyZC1pdGVtKXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG4uaGlnaGxpZ2h0LWNhcmQgLndyYXBwZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOjE2cHg7XFxufVxcbi5oaWdobGlnaHQtY2FyZCAuY2FyZC1saXN0e1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcm93LWdhcDo4cHg7XFxufVxcbi5oaWdobGlnaHQtY2FyZCAuY2FyZC1pdGVte1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgZ2FwOjRweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSG91cmx5IGZvcmVjYXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5zbGlkZXItY29udGFpbmVye1xcbiAgICBvdmVyZmxvdy14OmF1dG87XFxuICAgIG1hcmdpbi1pbmxpbmU6LTE2cHg7XFxufVxcbi5zbGlkZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNsaWRlci1saXN0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDoxMnB4O1xcbn1cXG4uc2xpZGVyLWxpc3Q6Zmlyc3QtY2hpbGR7XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6MTZweDtcXG59XFxuLnNsaWRlci1saXN0OjpiZWZvcmUsXFxuLnNsaWRlci1saXN0OjphZnRlcntcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgbWluLXdpZHRoOjRweDtcXG59XFxuLnNsaWRlci1pdGVte1xcbiAgICBtaW4td2lkdGg6MTEwcHg7XFxuICAgIGZsZXg6MSAxIDEwMCU7ICAgXFxufVxcbi5zbGlkZXItY2FyZHtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcbi5zbGlkZXItaXRlbSAud2VhdGhlci1pY29ue1xcbiAgICBtYXJnaW4taW5saW5lOmF1dG87XFxuICAgIG1hcmdpbi1ibG9jazoxMnB4O1xcbn1cXG4uZm9vdGVyLFxcbi5mb290ZXIgLmJvZHktMzpsYXN0LWNoaWxke1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtd3JhcDp3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcbi5mb290ZXJ7XFxuICAgIGNvbG9yOnZhcigtLWxpZ2h0LWdyYXktdmFyaWFudCk7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBnYXA6MTJweCAyNHB4O1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6MjhweDtcXG59XFxuLmFwaXtcXG4gICAgY29sb3I6Z3JlZW47XFxufVxcbi5mYWRlLWluIC5mb290ZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5lcnJvcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6MDtcXG4gICAgbGVmdDowO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGhlaWdodDoxMDBzdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHotaW5kZXg6ODtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lZGlhIHF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cXG5cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcXG4gICAgLmNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6MjRweDtcXG4gICAgfVxcbiAgICAuY2FyZC1sZ3tcXG4gICAgICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIH1cXG4gICAgLmNhcmQtc217XFxuICAgICAgICBwYWRkaW5nOjIwcHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIH0gIFxcbiAgICAuc2VhcmNoe1xcbiAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoMyUgYXQgY2FsYygxMDAlIC0gMjczcHgpIDYlKTtcXG4gICAgfVxcbiAgICBtYWlue1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC05NnB4KTtcXG4gICAgICAgIGhlaWdodDpjYWxjKDEwMHN2aCAtIDk2cHgpO1xcbiAgICB9XFxuICAgIGFydGljbGUuY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZy1ibG9jay1zdGFydDogMDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjgwcHggbWlubWF4KDAsMWZyKTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XFxuICAgICAgICBnYXA6MjRweDtcXG4gICAgfVxcbiAgICAuY29udGVudC1sZWZ0e1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDowO1xcbiAgICB9XFxuICAgIC5zZWN0aW9uOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgICAgICBtYXJnaW4tYmxvY2s6MjBweDtcXG4gICAgfVxcbiAgICAuZm9yZWNhc3QtY2FyZCAuY2FyZC1pdGVtOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxNnB4O1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtbGlzdHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0LWNhcmQ6bnRoLWNoaWxkKC1uKzIpe1xcbiAgICAgICAgZ3JpZC1jb2x1bW46c3BhbiAyO1xcbiAgICAgICAgaGVpZ2h0OjE2MHB4O1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQobiszKXtcXG4gICAgICAgIGhlaWdodDoxMjBweDtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0cyAubS1pY29ue1xcbiAgICAgICAgZm9udC1zaXplOjMuNnJlbTtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0LWNhcmQub25lIC5jYXJkLWl0ZW17XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgICBnYXA6OHB4O1xcbiAgICB9XFxuICAgIC5zbGlkZXItY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLWlubGluZTowIC0yNHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1yYWRpdXMtMTYpO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1yYWRpdXMtMTYpO1xcbiAgICB9XFxuICAgIC5zbGlkZXItbGlzdDo6YmVmb3Jle1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuc2xpZGVyLWxpc3Q6OmFmdGVye1xcbiAgICAgICAgbWluLXdpZHRoOjEycHg7XFxuICAgIH1cXG4gICAgLmhvdXJseS1mb3JlY2FzdCAuY2FyZC1zbXtcXG4gICAgICAgIHBhZGRpbmc6MTZweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoe1xcbiAgICAgICAgYWxsOnVuc2V0O1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOjUwMHB4O1xcbiAgICAgICAgYW5pbWF0aW9uOm5vbmU7XFxuICAgIH1cXG4gICAgIC5zZWFyY2gtaW5wdXR7XFxuICAgICAgICBoZWlnaHQ6NTZweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yOCk7XFxuICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xcbiAgICB9XFxuXFxuICAgIFxcblxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDBweCl7XFxuICAgIC5jb250YWluZXJ7XFxuICAgICAgICBwYWRkaW5nOjNyZW07XFxuICAgIH1cXG4gICAgLmNhcmQtbGd7XFxuICAgICAgICBwYWRkaW5nOjM2cHg7XFxuICAgIH1cXG4gICAgLmNhcmQtc217XFxuICAgICAgICBwYWRkaW5nOjI0cHg7XFxuICAgIH0gICAgXFxuICAgIC5oZWFkZXIgLmljb24tYnRue1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAubG9nbyBpbWd7XFxuICAgICAgICB3aWR0aDoyMDBweDtcXG4gICAgfVxcbiAgICAuaGVhZGVye1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgaGVpZ2h0OjEyMHB4O1xcbiAgICAgICAgei1pbmRleDo0O1xcbiAgICB9XFxuICAgIC5oZWFkZXIgLmNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmctYmxvY2s6MDtcXG4gICAgICAgIGhlaWdodDoxMDAlO1xcbiAgICB9XFxuICAgIC5zZWFyY2gtY29udGFpbmVye1xcbiAgICAgICAgYm9yZGVyLWJsb2NrLWVuZDpub25lO1xcbiAgICB9XFxuICAgIC5zZWFyY2gtY29udGFpbmVyID4gLm0taWNvbntcXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1pbnB1dHtcXG4gICAgICAgIGhlaWdodDo1NnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTI4KTtcXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tb3V0bGluZSk7XFxuICAgIH1cXG4gICAgLnNlYXJjaCAuc2VhcmNoLWRldGFpbHN7XFxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gICAgICAgIHRvcDoxMDAlO1xcbiAgICAgICAgbGVmdDowO1xcbiAgICAgICAgd2lkdGg6MTAwJTtcXG4gICAgICAgIG1heC1oZWlnaHQ6MzYwcHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tcmFkaXVzLTI4KSB2YXIoLS1yYWRpdXMtMjgpO1xcbiAgICAgICAgYm9yZGVyLWJsb2NrLXN0YXJ0OjFweCBzb2xpZCB2YXIoLS1vdXRsaW5lKTtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87LypmaXJlZm94Ki9cXG4gICAgICAgIG92ZXJmbG93LXk6IG92ZXJsYXk7XFxuICAgIH1cXG4gICAgbWFpbntcXG4gICAgICAgIGhlaWdodDpjYWxjKDEwMHZoLTEyMHB4KTtcXG4gICAgICAgIGhlaWdodDpjYWxjKDEwMHN2aC0xMjBweCk7XFxuICAgIH1cXG4gICAgYXJ0aWNsZS5jb250YWluZXJ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM2MHB4IG1pbm1heCgwLCAxZnIpO1xcbiAgICAgICAgZ2FwOjQwcHg7XFxuICAgIH1cXG4gICAgLmN1cnJlbnQtY29uZGl0aW9uIC53ZWF0aGVyLWljb257XFxuICAgICAgICB3aWR0aDo4MHB4O1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQoLW4rMil7XFxuICAgICAgICBoZWlnaHQ6MjAwcHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZChuKzMpe1xcbiAgICAgICAgaGVpZ2h0OjE1MHB4O1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtY2FyZCAubS1pY29ue1xcbiAgICAgICAgZm9udC1zaXplOjQuOHJlbTtcXG4gICAgfVxcbiAgICAuc2xpZGVyLWxpc3R7XFxuICAgICAgICBnYXA6MTZweDtcXG4gICAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjE0MDBweCkge1xcbiAgICAuaGlnaGxpZ2h0LWxpc3R7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzY4cHgpIHtcXG4gICAgYm9keXtcXG4gICAgICAgIGZvbnQtc2l6ZTouOHJlbTtcXG4gICAgfVxcbiAgICAuY29udGFpbmVyLC5jYXJkLWxnLC5jYXJkLXNte1xcbiAgICAgICAgcGFkZGluZzouNXJlbTtcXG4gICAgfSAgIFxcbiAgICAuY2FyZC1zbXtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgfSAgXFxuICAgIG1haW57XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLTk2cHgpO1xcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwc3ZoIC0gOTZweCk7XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6LjVyZW0gMS41cmVtO1xcbiAgICAgICAgd2lkdGg6MTAwdnc7XFxuICAgIH1cXG4gICAgLnNlY3Rpb246bm90KDpsYXN0LWNoaWxkKXtcXG4gICAgICAgIG1hcmdpbi1ibG9jazoyMHB4O1xcbiAgICB9XFxuICAgIC5mb3JlY2FzdC1jYXJkIC5jYXJkLWl0ZW06bm90KDpsYXN0LWNoaWxkKXtcXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE2cHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1saXN0e1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQoLW4rMil7XFxuICAgICAgICBncmlkLWNvbHVtbjpzcGFuIDI7XFxuICAgICAgICBoZWlnaHQ6MTYwcHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZChuKzMpe1xcbiAgICAgICAgaGVpZ2h0OjEyMHB4O1xcbiAgICB9XFxuXFxuICAgIC5oaWdobGlnaHQtY2FyZC5vbmUgLmNhcmQtaXRlbXtcXG4gICAgICAgIHdpZHRoOjI1JTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgIGdhcDo4cHg7XFxuICAgIH1cXG4gICAgLnNsaWRlci1jb250YWluZXJ7XFxuICAgICAgICBtYXJnaW4taW5saW5lOjAgLTI0cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLXJhZGl1cy0xNik7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLXJhZGl1cy0xNik7XFxuICAgIH1cXG4gICAgLnNsaWRlci1saXN0OjpiZWZvcmV7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5zbGlkZXItbGlzdDo6YWZ0ZXJ7XFxuICAgICAgICBtaW4td2lkdGg6MTJweDtcXG4gICAgfVxcbiAgICAuaG91cmx5LWZvcmVjYXN0IC5jYXJkLXNte1xcbiAgICAgICAgcGFkZGluZzoxNnB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2h7XFxuICAgICAgICBhbGw6dW5zZXQ7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgd2lkdGg6NTAwcHg7XFxuICAgICAgICBhbmltYXRpb246bm9uZTtcXG4gICAgfVxcbiAgICAgLnNlYXJjaC1pbnB1dHtcXG4gICAgICAgIGhlaWdodDoycmVtO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTI4KTtcXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tb3V0bGluZSk7XFxuICAgIH1cXG4gICAgLmxvZ28gaDF7XFxuICAgICAgICBmb250LXNpemU6LjhyZW07XFxuICAgIH1cXG5cXG4gICAgXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9jc3Mvc3R5bGVzLmNzcydcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idG4nKVxuY29uc3QgcmV0cnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1idG4nKVxuXG5sZXQgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkFQSV9LRVlcblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMoZSk9PntcbiAgICBjb25zdCBzZWFyY2hMb2NhdGlvbiA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGF3YWl0IGFwaUNhbGwoc2VhcmNoTG9jYXRpb24pXG59KTtcblxucmV0cnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKS5zdHlsZS5kaXNwbGF5PSdub25lJztcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBhcGlDYWxsKGxvY2F0aW9uKXtcbiAgICB0cnl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke0FQSV9LRVl9JnE9JHtsb2NhdGlvbiB8fCAnTmFpcm9iaSd9JmRheXM9NWAse21vZGU6J2NvcnMnfSlcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmcnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHJlbmRlckRhdGEoZGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJykuc3R5bGUuZGlzcGxheT0nZmxleCc7XG4gICAgICAgIC8qZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVyci1tc2cnKS50ZXh0Q29udGVudCA9IGVyciovXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnItbXNnJykudGV4dENvbnRlbnQgPSBcIlNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluXCJcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gcmVuZGVyRGF0YShkYXRhKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uJykudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlZ3JlZScpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnRlbXBfYyArICcgwrBDJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZS10b2RheScpLnRleHRDb250ZW50ID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnItbG9jYXRpb24nKS50ZXh0Q29udGVudCA9IGAke2RhdGEubG9jYXRpb24uY291bnRyeX0sICR7ZGF0YS5sb2NhdGlvbi5uYW1lfWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2UtdGltZScpLnRleHRDb250ZW50ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXQtdGltZScpLnRleHRDb250ZW50ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5zZXQ7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5JykudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyAnJSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXNzdXJlJykudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyAnIG1iJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudmlzaWJpbGl0eScpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnZpc19rbSArICcga20nO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVsc2xpa2VfYycpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jICsgJyDCsEMnO1xuICAgIHBvcHVsYXRlM2RheUZvcmVjYXN0KGRhdGEpO1xuICAgIHBvcHVsYXRlSG91cmx5Rm9yZWNhc3QoZGF0YSk7XG5cbn1cbmZ1bmN0aW9uIHBvcHVsYXRlSG91cmx5Rm9yZWNhc3QoZGF0YSkge1xuICAgIGNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyO1xuICAgIGNvbnN0IGN1cnJlbnRIb3VyID0gbmV3IERhdGUoKS5nZXRIb3VycygpO1xuICAgIGNvbnN0IHdlYXRoZXJTbGlkZXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLndlYXRoZXIgLnNsaWRlci1pdGVtJyk7XG4gICAgY29uc3Qgd2luZFNsaWRlckl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwud2luZCAuc2xpZGVyLWl0ZW0nKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VhdGhlclNsaWRlckl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGhvdXJEYXRhID0gaG91cmx5Rm9yZWNhc3RbKGN1cnJlbnRIb3VyICsgaSkgJSAyNF07XG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZShob3VyRGF0YS50aW1lKS5nZXRIb3VycygpO1xuICAgICAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gdGltZSAlIDEyIHx8IDEyO1xuICAgICAgICBjb25zdCBhbVBtID0gdGltZSA8IDEyID8gJ0FNJyA6ICdQTSc7XG5cbiAgICAgICAgY29uc3Qgc2xpZGVyQ2FyZCA9IHdlYXRoZXJTbGlkZXJJdGVtc1tpXS5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyLWNhcmQnKTtcbiAgICAgICAgc2xpZGVyQ2FyZC5xdWVyeVNlbGVjdG9yKCdwOmZpcnN0LWNoaWxkJykudGV4dENvbnRlbnQgPSBgJHtmb3JtYXR0ZWRUaW1lfSAke2FtUG19YDtcbiAgICAgICAgc2xpZGVyQ2FyZC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBob3VyRGF0YS5jb25kaXRpb24uaWNvbjtcbiAgICAgICAgc2xpZGVyQ2FyZC5xdWVyeVNlbGVjdG9yKCdpbWcnKS5hbHQgPSBob3VyRGF0YS5jb25kaXRpb24udGV4dDtcbiAgICAgICAgc2xpZGVyQ2FyZC5xdWVyeVNlbGVjdG9yKCdwOmxhc3QtY2hpbGQnKS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoaG91ckRhdGEudGVtcF9jKX0gwrBDYDtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbmRTbGlkZXJJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBob3VyRGF0YSA9IGhvdXJseUZvcmVjYXN0WyhjdXJyZW50SG91ciArIGkpICUgMjRdO1xuICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoaG91ckRhdGEudGltZSkuZ2V0SG91cnMoKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IHRpbWUgJSAxMiB8fCAxMjtcbiAgICAgICAgY29uc3QgYW1QbSA9IHRpbWUgPCAxMiA/ICdBTScgOiAnUE0nO1xuXG4gICAgICAgIGNvbnN0IHNsaWRlckNhcmQgPSB3aW5kU2xpZGVySXRlbXNbaV0ucXVlcnlTZWxlY3RvcignLnNsaWRlci1jYXJkJyk7XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcigncDpmaXJzdC1jaGlsZCcpLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0dGVkVGltZX0gJHthbVBtfWA7XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gaG91ckRhdGEuY29uZGl0aW9uLmljb247XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcignaW1nJykuYWx0ID0gaG91ckRhdGEuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcigncDpsYXN0LWNoaWxkJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGhvdXJEYXRhLndpbmRfa3BoKX0ga20vaGA7XG4gICAgfVxufVxuZnVuY3Rpb24gcG9wdWxhdGUzZGF5Rm9yZWNhc3QoZGF0YSkge1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheS5zbGljZSgxLCA0KTtcbiAgICBjb25zdCBmb3JlY2FzdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC5mb3JlY2FzdC1saXN0IC5jYXJkLWl0ZW0nKTtcblxuICAgIGZvcmVjYXN0LmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4IDwgZm9yZWNhc3RMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRheS5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgICAgIGNvbnN0IHdlZWtkYXkgPSBuZXcgRGF0ZShkYXkuZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywgeyB3ZWVrZGF5OiAnbG9uZycgfSk7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb24gPSBkYXkuZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRheS5kYXkuY29uZGl0aW9uLmljb247XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RJdGVtID0gZm9yZWNhc3RMaXN0W2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHdlYXRoZXJJY29uID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLndlYXRoZXItaWNvbicpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZUVsZW1lbnQgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3QtZGV0YWlscycpWzBdO1xuICAgICAgICAgICAgY29uc3QgZGF5RWxlbWVudCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5mb3JlY2FzdC1kZXRhaWxzJylbMV07XG5cbiAgICAgICAgICAgIHdlYXRoZXJJY29uLnNyYyA9IGljb247XG4gICAgICAgICAgICB3ZWF0aGVySWNvbi5hbHQgPSBjb25kaXRpb247XG4gICAgICAgICAgICBkYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgICAgICAgICBkYXlFbGVtZW50LnRleHRDb250ZW50ID0gd2Vla2RheTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuYXBpQ2FsbCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9