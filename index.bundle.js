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
        font-size:1rem;
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
        padding:1rem 2rem;
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
        height:2rem;
        border-radius: var(--radius-28);
        border:2px solid var(--outline);
    }

    
}`, "",{"version":3,"sources":["webpack://./src/assets/css/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,6BAA6B;IAC7B,+BAA+B;IAC/B,kBAAkB;IAClB,mCAAmC;AACvC;AACA,+DAA+D;AAC/D;IACI,QAAQ;IACR,SAAS;IACT,qBAAqB;AACzB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,WAAW;AACf;AACA;IACI,eAAe;IACf,WAAW;IACX,aAAa;IACb,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;IACI,cAAc;AAClB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,mBAAmB;AACvB;AACA;IACI,cAAc;AAClB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,mCAAmC;IACnC,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA,yEAAyE;AACzE;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,eAAe;IACf,0DAA8D;AAClE;AACA;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,UAAU;IACV,SAAS;IACT,eAAe;AACnB;AACA;IACI,SAAS;IACT,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,kCAAkC;IAClC,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;;AAEA,8EAA8E;AAC9E;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,KAAK;IACL,MAAM;IACN,UAAU;IACV,YAAY;IACZ,kCAAkC;IAClC,uBAAuB;IACvB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,OAAO;AACX;AACA;;IAEI,oCAAoC;IACpC,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,gBAAgB;IAChB,wBAAwB;IACxB,YAAY;AAChB;AACA;IACI,iCAAiC;AACrC;AACA;IACI,iBAAiB;IACjB,OAAO;IACP,SAAS;IACT,8BAA8B;AAClC;AACA;IACI,aAAa;AACjB;AACA;IACI,4BAA4B;IAC5B,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,oCAAoC;IACpC,uBAAuB;IACvB,kBAAkB;IAClB,kCAAkC;AACtC;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,yBAAyB;IAC7B;AACJ;AACA,iFAAiF;AACjF;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,oCAAoC;IACpC,QAAQ;IACR,WAAW;IACX,eAAe,CAAC,UAAU;IAC1B,kBAAkB;;AAEtB;;AAEA,kFAAkF;AAClF;IACI,iBAAiB;IACjB,YAAY;IACZ,OAAO;IACP,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,2CAA2C;AAC/C;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,OAAO;IACP,WAAW;AACf;AACA;IACI,gCAAgC;AACpC;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;AACnC;AACA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA,mFAAmF;AACnF;IACI,YAAY;IACZ,QAAQ;AACZ;AACA;IACI,mCAAmC;IACnC,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,8BAA8B;IAC9B,QAAQ;AACZ;AACA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;AACf;AACA;IACI,SAAS;IACT,wBAAwB;IACxB,OAAO;AACX;;AAEA,0FAA0F;AAC1F;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,QAAQ;AACZ;AACA;IACI,qBAAqB;AACzB;AACA;;IAEI,UAAU;IACV,aAAa;AACjB;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;;IAEI,YAAY;IACZ,cAAc;IACd,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,+BAA+B;IAC/B,iBAAiB;IACjB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,WAAW;AACf;AACA;IACI,aAAa;AACjB;AACA;IACI,eAAe;IACf,KAAK;IACL,MAAM;IACN,UAAU;IACV,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA,qFAAqF;;;AAGrF;IACI;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;QACZ,aAAa;QACb,mCAAmC;IACvC;IACA;QACI,8CAA8C;IAClD;IACA;QACI,yBAAyB;QACzB,0BAA0B;IAC9B;IACA;QACI,sBAAsB;QACtB,0CAA0C;QAC1C,sBAAsB;QACtB,QAAQ;IACZ;IACA;QACI,gBAAgB;QAChB,KAAK;IACT;IACA;QACI,iBAAiB;IACrB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,8BAA8B;IAClC;IACA;QACI,kBAAkB;QAClB,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,SAAS;QACT,8BAA8B;QAC9B,OAAO;IACX;IACA;QACI,qBAAqB;QACrB,0CAA0C;QAC1C,uCAAuC;IAC3C;IACA;QACI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,SAAS;QACT,aAAa;QACb,kBAAkB;QAClB,WAAW;QACX,cAAc;IAClB;KACC;QACG,WAAW;QACX,+BAA+B;QAC/B,+BAA+B;IACnC;;;;AAIJ;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,WAAW;IACf;IACA;QACI,kBAAkB;QAClB,YAAY;QACZ,SAAS;IACb;IACA;QACI,eAAe;QACf,WAAW;IACf;IACA;QACI,qBAAqB;IACzB;IACA;QACI,aAAa;IACjB;IACA;QACI,WAAW;QACX,+BAA+B;QAC/B,+BAA+B;IACnC;IACA;QACI,iBAAiB;QACjB,QAAQ;QACR,MAAM;QACN,UAAU;QACV,gBAAgB;QAChB,oDAAoD;QACpD,2CAA2C;QAC3C,gBAAgB,CAAC,UAAU;QAC3B,mBAAmB;IACvB;IACA;QACI,wBAAwB;QACxB,yBAAyB;IAC7B;IACA;QACI,2CAA2C;QAC3C,QAAQ;IACZ;IACA;QACI,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,QAAQ;IACZ;AACJ;AACA;IACI;QACI,qCAAqC;IACzC;AACJ;;AAEA;IACI;QACI,cAAc;IAClB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;QACb,mCAAmC;IACvC;IACA;QACI,yBAAyB;QACzB,0BAA0B;IAC9B;IACA;QACI,iBAAiB;QACjB,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,8BAA8B;IAClC;IACA;QACI,kBAAkB;QAClB,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,SAAS;QACT,8BAA8B;QAC9B,OAAO;IACX;IACA;QACI,qBAAqB;QACrB,0CAA0C;QAC1C,uCAAuC;IAC3C;IACA;QACI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,SAAS;QACT,aAAa;QACb,kBAAkB;QAClB,WAAW;QACX,cAAc;IAClB;KACC;QACG,WAAW;QACX,+BAA+B;QAC/B,+BAA+B;IACnC;;;AAGJ","sourcesContent":[":root{ \n    --background: #131214;\n    --text-color: #EAE6F2;\n    --dark-grey: #1D1C1F;\n    --light-gray: #DDDAE5;\n    --light-gray-variant: #7B7980; \n    --light-gray-variant-2: #B9B6BF;\n    --outline: #3E3D40;\n    --black-alpha: hsla(0, 0%, 0%, 0.1);\n}\n/*  ------------------ Reset ---------------------------------*/\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n}\nli {\n    list-style: none;\n}\na,img,span,input,button{\n    display:block;\n}\na{\n    color:inherit;\n    text-decoration: none;\n}\nimg{\n    height:auto;\n}\ninput,button{\n    background:none;\n    border:none;\n    color:inherit;\n    font:inherit;\n}\ninput{\n    width:100%;\n}\nbutton{\n    cursor:pointer;\n}\nsub{\n    vertical-align: baseline;\n}\nsup{\n    vertical-align: top;\n}\nsub,sup{\n    font-size:.8em;\n}\nhtml{\n    scroll-behavior: smooth;\n}\nbody{\n    background-color: var(--background);\n    color:var(--text-color);\n    font-size: 18px;\n    overflow: hidden;\n}\n\n/* ---------------------------------- styles -------------------------- */\n@font-face{\n    font-family: 'Material Icon';\n    font-style:normal;\n    font-weight:400;\n    src:url(../fonts/material-symbol-rounded.woff2) format('woff');\n}\n.m-icon{\n    font-family:'Material Icon';\n    font-weight: normal;\n    font-style:normal;\n    font-size:2.5rem;\n    line-height:1;\n    text-transform: none;\n    white-space:nowrap;\n    word-wrap:normal;\n    direction: ltr;\n    height:1em;\n    width:1em;\n    overflow:hidden;\n}\n.container{\n    width:90%;\n    margin-inline:auto;\n    padding:1em;\n}\n.card {\n    background-color: var(--dark-grey);\n    color:var(--light-gray);   \n}\n.card-lg{\n    padding:20px; \n}\n.card-sm{\n    padding:16px;\n}\n\n/* ----------------------------------- header -------------------------------*/\n.header .container{\n    display: flex;\n    align-items:center;\n    justify-content: space-between;\n}\n.search{\n    position:fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:100vh;\n    background-color: var(--dark-grey);\n    color:var(--light-gray);\n    z-index:4;\n}\n.search-container{\n    position: relative;\n    display: flex;\n    gap:1em;\n}\n.search-btn,\n.home-btn{\n    background:var(--light-gray-variant);\n    padding:.5em;\n    border-radius: 10px;\n}\n.search-input{\n    height:80px;\n    line-height:80px;\n    padding-inline:56px 16px;\n    outline:none;\n}\n.search-input::placeholder{\n    color:var(--light-gray-variant-2);\n}\n.search-container .search-icon {\n    position:absolute;\n    top:50%;\n    left:28px;\n    transform:translate(-50%,-50%);\n}\n.search-container > .m-icon{\n    display: none;\n}\n.search-container .icon-btn {\n    background-color:transparent;\n    box-shadow:none;\n}\n.loading {\n    position: relative;\n    font-size: 20px;\n    text-align: center;\n    margin-top: 50px;\n    font-weight: bold;\n}\n\n.loading::before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 40px;\n    height: 40px;\n    margin-top: -20px;\n    margin-left: -20px;\n    border: 5px solid rgba(0, 0, 0, 0.1);\n    border-top-color: white;\n    border-radius: 50%;\n    animation: spin 1s infinite linear;\n}\n\n@keyframes spin {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n/* ------------------------------------- Main --------------------------------- */\nmain{\n    overflow: hidden;\n}\narticle.container{\n    position:relative;\n    display: grid;\n    grid-template-columns: minmax(0,1fr);\n    gap:20px;\n    height:100%;\n    overflow-y:auto;/*firefox*/\n    overflow-y:overlay;\n    \n}\n\n/* ----------------------------------content left--------------------------------*/\n.current-condition-card .wrapper{\n    margin-block:12px;\n    display:flex;\n    gap:8px;\n    align-items:center;\n}\n.current-condition-card .weather-icon{\n    margin-inline:auto;\n}\n.current-condition-card .details-list{\n    margin-block-start:16px;\n    padding-block-start:16px;\n    border-block-start:1px solid var(--outline);\n}\n.current-condition-card .detail-item{\n    display: flex;\n    align-items:center;\n    gap:8px;\n    margin:.5em;\n}\n.current-condition-card .detail-text{\n    color: var(--light-gray-variant);\n}\n.forecast-card :is(.card-item,.icon-wrapper){\n    display:flex;\n    align-items: center;\n}\n\n.forecast-card .forecast-details{\n    color:var(--light-gray-variant);\n}\n.forecast-card .card-item > .forecast-details{\n    width:100%;\n    text-align:right;\n}\n\n/* ----------------------------------content right--------------------------------*/\n.highlight-list{\n    display:grid;\n    gap:20px;\n}\n.highlights .card-sm{\n    background-color:var(--black-alpha);\n    position:relative;\n}\n.highlight-card :is(.wrapper,.card-list,.card-item){\n    display: flex;\n    align-items:center;\n}\n.highlight-card .wrapper{\n    justify-content: space-between;\n    gap:16px;\n}\n.highlight-card .card-list{\n    flex-wrap: wrap;\n    flex-grow: 1;\n    row-gap:8px;\n}\n.highlight-card .card-item{\n    width:50%;\n    justify-content:flex-end;\n    gap:4px;\n}\n\n/* ---------------------------------------------Hourly forecast -------------------------*/\n.slider-container{\n    overflow-x:auto;\n    margin-inline:-16px;\n}\n.slider-container::-webkit-scrollbar{\n    display: none;\n}\n.slider-list{\n    display:flex;\n    gap:12px;\n}\n.slider-list:first-child{\n    margin-block-end:16px;\n}\n.slider-list::before,\n.slider-list::after{\n    content:\"\";\n    min-width:4px;\n}\n.slider-item{\n    min-width:110px;\n    flex:1 1 100%;   \n}\n.slider-card{\n    text-align:center;\n}\n.slider-item .weather-icon{\n    margin-inline:auto;\n    margin-block:12px;\n}\n.footer,\n.footer .body-3:last-child{\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:center;\n    align-items:center;\n}\n.footer{\n    color:var(--light-gray-variant);\n    text-align:center;\n    gap:12px 24px;\n    margin-block-start:28px;\n}\n.api{\n    color:green;\n}\n.fade-in .footer{\n    display: flex;\n}\n.error{\n    position: fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:100vh;\n    height:100svh;\n    background-color: var(--background);\n    display: flex;\n    flex-direction: column;\n    justify-content:center;\n    align-items:center;\n    display: none;\n    z-index:8;\n}\n\n/* --------------------------------- media queries -------------------------------- */\n\n\n@media screen and (min-width:768px){\n    .container{\n        padding:24px;\n    }\n    .card-lg{\n        padding:.5rem;\n    }\n    .card-sm{\n        padding:20px;\n        display: grid;\n        grid-template-rows: min-content 1fr;\n    }  \n    .search{\n        clip-path: circle(3% at calc(100% - 273px) 6%);\n    }\n    main{\n        height: calc(100vh -96px);\n        height:calc(100svh - 96px);\n    }\n    article.container{\n        padding-block-start: 0;\n        grid-template-columns: 280px minmax(0,1fr);\n        align-items:flex-start;\n        gap:24px;\n    }\n    .content-left{\n        position: sticky;\n        top:0;\n    }\n    .section:not(:last-child){\n        margin-block:20px;\n    }\n    .forecast-card .card-item:not(:last-child){\n        margin-block-end: 16px;\n    }\n    .highlight-list{\n        grid-template-columns: 1fr 1fr;\n    }\n    .highlight-card:nth-child(-n+2){\n        grid-column:span 2;\n        height:160px;\n    }\n    .highlight-card:nth-child(n+3){\n        height:120px;\n    }\n    .highlights .m-icon{\n        font-size:3.6rem;\n    }\n    .highlight-card.one .card-item{\n        width:25%;\n        flex-direction: column-reverse;\n        gap:8px;\n    }\n    .slider-container{\n        margin-inline:0 -24px;\n        border-bottom-left-radius:var(--radius-16);\n        border-top-left-radius:var(--radius-16);\n    }\n    .slider-list::before{\n        display: none;\n    }\n    .slider-list::after{\n        min-width:12px;\n    }\n    .hourly-forecast .card-sm{\n        padding:16px;\n    }\n    .search{\n        all:unset;\n        display:block;\n        position: relative;\n        width:500px;\n        animation:none;\n    }\n     .search-input{\n        height:56px;\n        border-radius: var(--radius-28);\n        border:2px solid var(--outline);\n    }\n\n    \n\n}\n\n@media screen and (min-width:1200px){\n    .container{\n        padding:3rem;\n    }\n    .card-lg{\n        padding:36px;\n    }\n    .card-sm{\n        padding:24px;\n    }    \n    .header .icon-btn{\n        display: none;\n    }\n    .logo img{\n        width:200px;\n    }\n    .header{\n        position: relative;\n        height:120px;\n        z-index:4;\n    }\n    .header .container{\n        padding-block:0;\n        height:100%;\n    }\n    .search-container{\n        border-block-end:none;\n    }\n    .search-container > .m-icon{\n        display:block;\n    }\n    .search-input{\n        height:56px;\n        border-radius: var(--radius-28);\n        border:2px solid var(--outline);\n    }\n    .search .search-details{\n        position:absolute;\n        top:100%;\n        left:0;\n        width:100%;\n        max-height:360px;\n        border-radius: 0 0 var(--radius-28) var(--radius-28);\n        border-block-start:1px solid var(--outline);\n        overflow-y: auto;/*firefox*/\n        overflow-y: overlay;\n    }\n    main{\n        height:calc(100vh-120px);\n        height:calc(100svh-120px);\n    }\n    article.container{\n        grid-template-columns: 360px minmax(0, 1fr);\n        gap:40px;\n    }\n    .current-condition .weather-icon{\n        width:80px;\n    }\n    .highlight-card:nth-child(-n+2){\n        height:200px;\n    }\n    .highlight-card:nth-child(n+3){\n        height:150px;\n    }\n    .highlight-card .m-icon{\n        font-size:4.8rem;\n    }\n    .slider-list{\n        gap:16px;\n    }\n}\n@media screen and (min-width:1400px) {\n    .highlight-list{\n        grid-template-columns: repeat(4, 1fr);\n    }\n}\n\n@media screen and (max-width:768px) {\n    body{\n        font-size:1rem;\n    }\n    .container,.card-lg,.card-sm{\n        padding:.5rem;\n    }   \n    .card-sm{\n        display: grid;\n        grid-template-rows: min-content 1fr;\n    }  \n    main{\n        height: calc(100vh -96px);\n        height:calc(100svh - 96px);\n    }\n    .container{\n        padding:1rem 2rem;\n        width:100vw;\n    }\n    .section:not(:last-child){\n        margin-block:20px;\n    }\n    .forecast-card .card-item:not(:last-child){\n        margin-block-end: 16px;\n    }\n    .highlight-list{\n        grid-template-columns: 1fr 1fr;\n    }\n    .highlight-card:nth-child(-n+2){\n        grid-column:span 2;\n        height:160px;\n    }\n    .highlight-card:nth-child(n+3){\n        height:120px;\n    }\n    .highlights .m-icon{\n        font-size:3.6rem;\n    }\n    .highlight-card.one .card-item{\n        width:25%;\n        flex-direction: column-reverse;\n        gap:8px;\n    }\n    .slider-container{\n        margin-inline:0 -24px;\n        border-bottom-left-radius:var(--radius-16);\n        border-top-left-radius:var(--radius-16);\n    }\n    .slider-list::before{\n        display: none;\n    }\n    .slider-list::after{\n        min-width:12px;\n    }\n    .hourly-forecast .card-sm{\n        padding:16px;\n    }\n    .search{\n        all:unset;\n        display:block;\n        position: relative;\n        width:500px;\n        animation:none;\n    }\n     .search-input{\n        height:2rem;\n        border-radius: var(--radius-28);\n        border:2px solid var(--outline);\n    }\n\n    \n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxvQkFBb0IsY0FBYyxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxjQUFjLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsTUFBTSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsdUJBQXVCLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVks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QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsK0JBQStCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUVBQW1FLGVBQWUsRUFBRSxLQUFLO0FBQ3pGO0FBQ0E7QUFDQSxrRUFBa0UsNkJBQTZCO0FBQy9GOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBbUUsZUFBZSxFQUFFLEtBQUs7QUFDekY7QUFDQTtBQUNBLGtFQUFrRSwrQkFBK0I7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsaUJBQWlCO0FBQzFGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9hc3NldHMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzP2ZlNWUiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2Fzc2V0cy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvbWF0ZXJpYWwtc3ltYm9sLXJvdW5kZWQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290eyBcbiAgICAtLWJhY2tncm91bmQ6ICMxMzEyMTQ7XG4gICAgLS10ZXh0LWNvbG9yOiAjRUFFNkYyO1xuICAgIC0tZGFyay1ncmV5OiAjMUQxQzFGO1xuICAgIC0tbGlnaHQtZ3JheTogI0REREFFNTtcbiAgICAtLWxpZ2h0LWdyYXktdmFyaWFudDogIzdCNzk4MDsgXG4gICAgLS1saWdodC1ncmF5LXZhcmlhbnQtMjogI0I5QjZCRjtcbiAgICAtLW91dGxpbmU6ICMzRTNENDA7XG4gICAgLS1ibGFjay1hbHBoYTogaHNsYSgwLCAwJSwgMCUsIDAuMSk7XG59XG4vKiAgLS0tLS0tLS0tLS0tLS0tLS0tIFJlc2V0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4qe1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG5saSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmEsaW1nLHNwYW4saW5wdXQsYnV0dG9ue1xuICAgIGRpc3BsYXk6YmxvY2s7XG59XG5he1xuICAgIGNvbG9yOmluaGVyaXQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaW1ne1xuICAgIGhlaWdodDphdXRvO1xufVxuaW5wdXQsYnV0dG9ue1xuICAgIGJhY2tncm91bmQ6bm9uZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIGZvbnQ6aW5oZXJpdDtcbn1cbmlucHV0e1xuICAgIHdpZHRoOjEwMCU7XG59XG5idXR0b257XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG5zdWJ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuc3Vwe1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5zdWIsc3Vwe1xuICAgIGZvbnQtc2l6ZTouOGVtO1xufVxuaHRtbHtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AZm9udC1mYWNle1xuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbic7XG4gICAgZm9udC1zdHlsZTpub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIHNyYzp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd3b2ZmJyk7XG59XG4ubS1pY29ue1xuICAgIGZvbnQtZmFtaWx5OidNYXRlcmlhbCBJY29uJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xuICAgIGZvbnQtc2l6ZToyLjVyZW07XG4gICAgbGluZS1oZWlnaHQ6MTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgd29yZC13cmFwOm5vcm1hbDtcbiAgICBkaXJlY3Rpb246IGx0cjtcbiAgICBoZWlnaHQ6MWVtO1xuICAgIHdpZHRoOjFlbTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG59XG4uY29udGFpbmVye1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW4taW5saW5lOmF1dG87XG4gICAgcGFkZGluZzoxZW07XG59XG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcbiAgICBjb2xvcjp2YXIoLS1saWdodC1ncmF5KTsgICBcbn1cbi5jYXJkLWxne1xuICAgIHBhZGRpbmc6MjBweDsgXG59XG4uY2FyZC1zbXtcbiAgICBwYWRkaW5nOjE2cHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5oZWFkZXIgLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2VhcmNoe1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xuICAgIGNvbG9yOnZhcigtLWxpZ2h0LWdyYXkpO1xuICAgIHotaW5kZXg6NDtcbn1cbi5zZWFyY2gtY29udGFpbmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDoxZW07XG59XG4uc2VhcmNoLWJ0bixcbi5ob21lLWJ0bntcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWxpZ2h0LWdyYXktdmFyaWFudCk7XG4gICAgcGFkZGluZzouNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uc2VhcmNoLWlucHV0e1xuICAgIGhlaWdodDo4MHB4O1xuICAgIGxpbmUtaGVpZ2h0OjgwcHg7XG4gICAgcGFkZGluZy1pbmxpbmU6NTZweCAxNnB4O1xuICAgIG91dGxpbmU6bm9uZTtcbn1cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVye1xuICAgIGNvbG9yOnZhcigtLWxpZ2h0LWdyYXktdmFyaWFudC0yKTtcbn1cbi5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtaWNvbiB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjUwJTtcbiAgICBsZWZ0OjI4cHg7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuLnNlYXJjaC1jb250YWluZXIgPiAubS1pY29ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uc2VhcmNoLWNvbnRhaW5lciAuaWNvbi1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzpub25lO1xufVxuLmxvYWRpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sb2FkaW5nOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBNYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xubWFpbntcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuYXJ0aWNsZS5jb250YWluZXJ7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLDFmcik7XG4gICAgZ2FwOjIwcHg7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgb3ZlcmZsb3cteTphdXRvOy8qZmlyZWZveCovXG4gICAgb3ZlcmZsb3cteTpvdmVybGF5O1xuICAgIFxufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY29udGVudCBsZWZ0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmN1cnJlbnQtY29uZGl0aW9uLWNhcmQgLndyYXBwZXJ7XG4gICAgbWFyZ2luLWJsb2NrOjEycHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGdhcDo4cHg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xufVxuLmN1cnJlbnQtY29uZGl0aW9uLWNhcmQgLndlYXRoZXItaWNvbntcbiAgICBtYXJnaW4taW5saW5lOmF1dG87XG59XG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAuZGV0YWlscy1saXN0e1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDoxNnB4O1xuICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6MTZweDtcbiAgICBib3JkZXItYmxvY2stc3RhcnQ6MXB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xufVxuLmN1cnJlbnQtY29uZGl0aW9uLWNhcmQgLmRldGFpbC1pdGVte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGdhcDo4cHg7XG4gICAgbWFyZ2luOi41ZW07XG59XG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAuZGV0YWlsLXRleHR7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXktdmFyaWFudCk7XG59XG4uZm9yZWNhc3QtY2FyZCA6aXMoLmNhcmQtaXRlbSwuaWNvbi13cmFwcGVyKXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcmVjYXN0LWNhcmQgLmZvcmVjYXN0LWRldGFpbHN7XG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheS12YXJpYW50KTtcbn1cbi5mb3JlY2FzdC1jYXJkIC5jYXJkLWl0ZW0gPiAuZm9yZWNhc3QtZGV0YWlsc3tcbiAgICB3aWR0aDoxMDAlO1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jb250ZW50IHJpZ2h0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmhpZ2hsaWdodC1saXN0e1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBnYXA6MjBweDtcbn1cbi5oaWdobGlnaHRzIC5jYXJkLXNte1xuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYmxhY2stYWxwaGEpO1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xufVxuLmhpZ2hsaWdodC1jYXJkIDppcygud3JhcHBlciwuY2FyZC1saXN0LC5jYXJkLWl0ZW0pe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xufVxuLmhpZ2hsaWdodC1jYXJkIC53cmFwcGVye1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6MTZweDtcbn1cbi5oaWdobGlnaHQtY2FyZCAuY2FyZC1saXN0e1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcm93LWdhcDo4cHg7XG59XG4uaGlnaGxpZ2h0LWNhcmQgLmNhcmQtaXRlbXtcbiAgICB3aWR0aDo1MCU7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgIGdhcDo0cHg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUhvdXJseSBmb3JlY2FzdCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5zbGlkZXItY29udGFpbmVye1xuICAgIG92ZXJmbG93LXg6YXV0bztcbiAgICBtYXJnaW4taW5saW5lOi0xNnB4O1xufVxuLnNsaWRlci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFye1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uc2xpZGVyLWxpc3R7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGdhcDoxMnB4O1xufVxuLnNsaWRlci1saXN0OmZpcnN0LWNoaWxke1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6MTZweDtcbn1cbi5zbGlkZXItbGlzdDo6YmVmb3JlLFxuLnNsaWRlci1saXN0OjphZnRlcntcbiAgICBjb250ZW50OlwiXCI7XG4gICAgbWluLXdpZHRoOjRweDtcbn1cbi5zbGlkZXItaXRlbXtcbiAgICBtaW4td2lkdGg6MTEwcHg7XG4gICAgZmxleDoxIDEgMTAwJTsgICBcbn1cbi5zbGlkZXItY2FyZHtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5zbGlkZXItaXRlbSAud2VhdGhlci1pY29ue1xuICAgIG1hcmdpbi1pbmxpbmU6YXV0bztcbiAgICBtYXJnaW4tYmxvY2s6MTJweDtcbn1cbi5mb290ZXIsXG4uZm9vdGVyIC5ib2R5LTM6bGFzdC1jaGlsZHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC13cmFwOndyYXA7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG4uZm9vdGVye1xuICAgIGNvbG9yOnZhcigtLWxpZ2h0LWdyYXktdmFyaWFudCk7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgZ2FwOjEycHggMjRweDtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6MjhweDtcbn1cbi5hcGl7XG4gICAgY29sb3I6Z3JlZW47XG59XG4uZmFkZS1pbiAuZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZXJyb3J7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDB2aDtcbiAgICBoZWlnaHQ6MTAwc3ZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHotaW5kZXg6ODtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1lZGlhIHF1ZXJpZXMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcbiAgICAuY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOjI0cHg7XG4gICAgfVxuICAgIC5jYXJkLWxne1xuICAgICAgICBwYWRkaW5nOi41cmVtO1xuICAgIH1cbiAgICAuY2FyZC1zbXtcbiAgICAgICAgcGFkZGluZzoyMHB4O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICB9ICBcbiAgICAuc2VhcmNoe1xuICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgzJSBhdCBjYWxjKDEwMCUgLSAyNzNweCkgNiUpO1xuICAgIH1cbiAgICBtYWlue1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLTk2cHgpO1xuICAgICAgICBoZWlnaHQ6Y2FsYygxMDBzdmggLSA5NnB4KTtcbiAgICB9XG4gICAgYXJ0aWNsZS5jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6IDA7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjgwcHggbWlubWF4KDAsMWZyKTtcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOjI0cHg7XG4gICAgfVxuICAgIC5jb250ZW50LWxlZnR7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDowO1xuICAgIH1cbiAgICAuc2VjdGlvbjpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICBtYXJnaW4tYmxvY2s6MjBweDtcbiAgICB9XG4gICAgLmZvcmVjYXN0LWNhcmQgLmNhcmQtaXRlbTpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxNnB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWxpc3R7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZCgtbisyKXtcbiAgICAgICAgZ3JpZC1jb2x1bW46c3BhbiAyO1xuICAgICAgICBoZWlnaHQ6MTYwcHg7XG4gICAgfVxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQobiszKXtcbiAgICAgICAgaGVpZ2h0OjEyMHB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0cyAubS1pY29ue1xuICAgICAgICBmb250LXNpemU6My42cmVtO1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWNhcmQub25lIC5jYXJkLWl0ZW17XG4gICAgICAgIHdpZHRoOjI1JTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBnYXA6OHB4O1xuICAgIH1cbiAgICAuc2xpZGVyLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLWlubGluZTowIC0yNHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLXJhZGl1cy0xNik7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tcmFkaXVzLTE2KTtcbiAgICB9XG4gICAgLnNsaWRlci1saXN0OjpiZWZvcmV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zbGlkZXItbGlzdDo6YWZ0ZXJ7XG4gICAgICAgIG1pbi13aWR0aDoxMnB4O1xuICAgIH1cbiAgICAuaG91cmx5LWZvcmVjYXN0IC5jYXJkLXNte1xuICAgICAgICBwYWRkaW5nOjE2cHg7XG4gICAgfVxuICAgIC5zZWFyY2h7XG4gICAgICAgIGFsbDp1bnNldDtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDo1MDBweDtcbiAgICAgICAgYW5pbWF0aW9uOm5vbmU7XG4gICAgfVxuICAgICAuc2VhcmNoLWlucHV0e1xuICAgICAgICBoZWlnaHQ6NTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTI4KTtcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1vdXRsaW5lKTtcbiAgICB9XG5cbiAgICBcblxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEyMDBweCl7XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzozcmVtO1xuICAgIH1cbiAgICAuY2FyZC1sZ3tcbiAgICAgICAgcGFkZGluZzozNnB4O1xuICAgIH1cbiAgICAuY2FyZC1zbXtcbiAgICAgICAgcGFkZGluZzoyNHB4O1xuICAgIH0gICAgXG4gICAgLmhlYWRlciAuaWNvbi1idG57XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5sb2dvIGltZ3tcbiAgICAgICAgd2lkdGg6MjAwcHg7XG4gICAgfVxuICAgIC5oZWFkZXJ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OjEyMHB4O1xuICAgICAgICB6LWluZGV4OjQ7XG4gICAgfVxuICAgIC5oZWFkZXIgLmNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZy1ibG9jazowO1xuICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICB9XG4gICAgLnNlYXJjaC1jb250YWluZXJ7XG4gICAgICAgIGJvcmRlci1ibG9jay1lbmQ6bm9uZTtcbiAgICB9XG4gICAgLnNlYXJjaC1jb250YWluZXIgPiAubS1pY29ue1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cbiAgICAuc2VhcmNoLWlucHV0e1xuICAgICAgICBoZWlnaHQ6NTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTI4KTtcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1vdXRsaW5lKTtcbiAgICB9XG4gICAgLnNlYXJjaCAuc2VhcmNoLWRldGFpbHN7XG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICB0b3A6MTAwJTtcbiAgICAgICAgbGVmdDowO1xuICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICBtYXgtaGVpZ2h0OjM2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tcmFkaXVzLTI4KSB2YXIoLS1yYWRpdXMtMjgpO1xuICAgICAgICBib3JkZXItYmxvY2stc3RhcnQ6MXB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvOy8qZmlyZWZveCovXG4gICAgICAgIG92ZXJmbG93LXk6IG92ZXJsYXk7XG4gICAgfVxuICAgIG1haW57XG4gICAgICAgIGhlaWdodDpjYWxjKDEwMHZoLTEyMHB4KTtcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwc3ZoLTEyMHB4KTtcbiAgICB9XG4gICAgYXJ0aWNsZS5jb250YWluZXJ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzYwcHggbWlubWF4KDAsIDFmcik7XG4gICAgICAgIGdhcDo0MHB4O1xuICAgIH1cbiAgICAuY3VycmVudC1jb25kaXRpb24gLndlYXRoZXItaWNvbntcbiAgICAgICAgd2lkdGg6ODBweDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZCgtbisyKXtcbiAgICAgICAgaGVpZ2h0OjIwMHB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWNhcmQ6bnRoLWNoaWxkKG4rMyl7XG4gICAgICAgIGhlaWdodDoxNTBweDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1jYXJkIC5tLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTo0LjhyZW07XG4gICAgfVxuICAgIC5zbGlkZXItbGlzdHtcbiAgICAgICAgZ2FwOjE2cHg7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxNDAwcHgpIHtcbiAgICAuaGlnaGxpZ2h0LWxpc3R7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KSB7XG4gICAgYm9keXtcbiAgICAgICAgZm9udC1zaXplOjFyZW07XG4gICAgfVxuICAgIC5jb250YWluZXIsLmNhcmQtbGcsLmNhcmQtc217XG4gICAgICAgIHBhZGRpbmc6LjVyZW07XG4gICAgfSAgIFxuICAgIC5jYXJkLXNte1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcbiAgICB9ICBcbiAgICBtYWlue1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLTk2cHgpO1xuICAgICAgICBoZWlnaHQ6Y2FsYygxMDBzdmggLSA5NnB4KTtcbiAgICB9XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzoxcmVtIDJyZW07XG4gICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgIH1cbiAgICAuc2VjdGlvbjpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICBtYXJnaW4tYmxvY2s6MjBweDtcbiAgICB9XG4gICAgLmZvcmVjYXN0LWNhcmQgLmNhcmQtaXRlbTpub3QoOmxhc3QtY2hpbGQpe1xuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxNnB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWxpc3R7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZCgtbisyKXtcbiAgICAgICAgZ3JpZC1jb2x1bW46c3BhbiAyO1xuICAgICAgICBoZWlnaHQ6MTYwcHg7XG4gICAgfVxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQobiszKXtcbiAgICAgICAgaGVpZ2h0OjEyMHB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0cyAubS1pY29ue1xuICAgICAgICBmb250LXNpemU6My42cmVtO1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWNhcmQub25lIC5jYXJkLWl0ZW17XG4gICAgICAgIHdpZHRoOjI1JTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICAgICAgICBnYXA6OHB4O1xuICAgIH1cbiAgICAuc2xpZGVyLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLWlubGluZTowIC0yNHB4O1xuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLXJhZGl1cy0xNik7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6dmFyKC0tcmFkaXVzLTE2KTtcbiAgICB9XG4gICAgLnNsaWRlci1saXN0OjpiZWZvcmV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5zbGlkZXItbGlzdDo6YWZ0ZXJ7XG4gICAgICAgIG1pbi13aWR0aDoxMnB4O1xuICAgIH1cbiAgICAuaG91cmx5LWZvcmVjYXN0IC5jYXJkLXNte1xuICAgICAgICBwYWRkaW5nOjE2cHg7XG4gICAgfVxuICAgIC5zZWFyY2h7XG4gICAgICAgIGFsbDp1bnNldDtcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDo1MDBweDtcbiAgICAgICAgYW5pbWF0aW9uOm5vbmU7XG4gICAgfVxuICAgICAuc2VhcmNoLWlucHV0e1xuICAgICAgICBoZWlnaHQ6MnJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTI4KTtcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1vdXRsaW5lKTtcbiAgICB9XG5cbiAgICBcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUNBQW1DO0FBQ3ZDO0FBQ0EsK0RBQStEO0FBQy9EO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQSx5RUFBeUU7QUFDekU7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwREFBOEQ7QUFDbEU7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsaUJBQWlC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QUNqQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFNBQVM7UUFDVCw4QkFBOEI7UUFDOUIsT0FBTztJQUNYO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsMENBQTBDO1FBQzFDLHVDQUF1QztJQUMzQztJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGNBQWM7SUFDbEI7S0FDQztRQUNHLFdBQVc7UUFDWCwrQkFBK0I7UUFDL0IsK0JBQStCO0lBQ25DOzs7QUFHSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHsgXFxuICAgIC0tYmFja2dyb3VuZDogIzEzMTIxNDtcXG4gICAgLS10ZXh0LWNvbG9yOiAjRUFFNkYyO1xcbiAgICAtLWRhcmstZ3JleTogIzFEMUMxRjtcXG4gICAgLS1saWdodC1ncmF5OiAjREREQUU1O1xcbiAgICAtLWxpZ2h0LWdyYXktdmFyaWFudDogIzdCNzk4MDsgXFxuICAgIC0tbGlnaHQtZ3JheS12YXJpYW50LTI6ICNCOUI2QkY7XFxuICAgIC0tb3V0bGluZTogIzNFM0Q0MDtcXG4gICAgLS1ibGFjay1hbHBoYTogaHNsYSgwLCAwJSwgMCUsIDAuMSk7XFxufVxcbi8qICAtLS0tLS0tLS0tLS0tLS0tLS0gUmVzZXQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4qe1xcbiAgICBtYXJnaW46MDtcXG4gICAgcGFkZGluZzowO1xcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxufVxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYSxpbWcsc3BhbixpbnB1dCxidXR0b257XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxufVxcbmF7XFxuICAgIGNvbG9yOmluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuaW1ne1xcbiAgICBoZWlnaHQ6YXV0bztcXG59XFxuaW5wdXQsYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBjb2xvcjppbmhlcml0O1xcbiAgICBmb250OmluaGVyaXQ7XFxufVxcbmlucHV0e1xcbiAgICB3aWR0aDoxMDAlO1xcbn1cXG5idXR0b257XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5zdWJ7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuc3Vwe1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5zdWIsc3Vwe1xcbiAgICBmb250LXNpemU6LjhlbTtcXG59XFxuaHRtbHtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcbiAgICBjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbic7XFxuICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xcbiAgICBmb250LXdlaWdodDo0MDA7XFxuICAgIHNyYzp1cmwoLi4vZm9udHMvbWF0ZXJpYWwtc3ltYm9sLXJvdW5kZWQud29mZjIpIGZvcm1hdCgnd29mZicpO1xcbn1cXG4ubS1pY29ue1xcbiAgICBmb250LWZhbWlseTonTWF0ZXJpYWwgSWNvbic7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xcbiAgICBmb250LXNpemU6Mi41cmVtO1xcbiAgICBsaW5lLWhlaWdodDoxO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xcbiAgICB3b3JkLXdyYXA6bm9ybWFsO1xcbiAgICBkaXJlY3Rpb246IGx0cjtcXG4gICAgaGVpZ2h0OjFlbTtcXG4gICAgd2lkdGg6MWVtO1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxufVxcbi5jb250YWluZXJ7XFxuICAgIHdpZHRoOjkwJTtcXG4gICAgbWFyZ2luLWlubGluZTphdXRvO1xcbiAgICBwYWRkaW5nOjFlbTtcXG59XFxuLmNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBjb2xvcjp2YXIoLS1saWdodC1ncmF5KTsgICBcXG59XFxuLmNhcmQtbGd7XFxuICAgIHBhZGRpbmc6MjBweDsgXFxufVxcbi5jYXJkLXNte1xcbiAgICBwYWRkaW5nOjE2cHg7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlYWRlciAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uaGVhZGVyIC5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uc2VhcmNoe1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgdG9wOjA7XFxuICAgIGxlZnQ6MDtcXG4gICAgd2lkdGg6MTAwJTtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpO1xcbiAgICBjb2xvcjp2YXIoLS1saWdodC1ncmF5KTtcXG4gICAgei1pbmRleDo0O1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lcntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6MWVtO1xcbn1cXG4uc2VhcmNoLWJ0bixcXG4uaG9tZS1idG57XFxuICAgIGJhY2tncm91bmQ6dmFyKC0tbGlnaHQtZ3JheS12YXJpYW50KTtcXG4gICAgcGFkZGluZzouNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uc2VhcmNoLWlucHV0e1xcbiAgICBoZWlnaHQ6ODBweDtcXG4gICAgbGluZS1oZWlnaHQ6ODBweDtcXG4gICAgcGFkZGluZy1pbmxpbmU6NTZweCAxNnB4O1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVye1xcbiAgICBjb2xvcjp2YXIoLS1saWdodC1ncmF5LXZhcmlhbnQtMik7XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtaWNvbiB7XFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICB0b3A6NTAlO1xcbiAgICBsZWZ0OjI4cHg7XFxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcXG59XFxuLnNlYXJjaC1jb250YWluZXIgPiAubS1pY29ue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuaWNvbi1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xcbiAgICBib3gtc2hhZG93Om5vbmU7XFxufVxcbi5sb2FkaW5nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2FkaW5nOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG4gICAgfVxcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxubWFpbntcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuYXJ0aWNsZS5jb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLDFmcik7XFxuICAgIGdhcDoyMHB4O1xcbiAgICBoZWlnaHQ6MTAwJTtcXG4gICAgb3ZlcmZsb3cteTphdXRvOy8qZmlyZWZveCovXFxuICAgIG92ZXJmbG93LXk6b3ZlcmxheTtcXG4gICAgXFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jb250ZW50IGxlZnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLmN1cnJlbnQtY29uZGl0aW9uLWNhcmQgLndyYXBwZXJ7XFxuICAgIG1hcmdpbi1ibG9jazoxMnB4O1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDo4cHg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuLmN1cnJlbnQtY29uZGl0aW9uLWNhcmQgLndlYXRoZXItaWNvbntcXG4gICAgbWFyZ2luLWlubGluZTphdXRvO1xcbn1cXG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAuZGV0YWlscy1saXN0e1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6MTZweDtcXG4gICAgcGFkZGluZy1ibG9jay1zdGFydDoxNnB4O1xcbiAgICBib3JkZXItYmxvY2stc3RhcnQ6MXB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xcbn1cXG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAuZGV0YWlsLWl0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgZ2FwOjhweDtcXG4gICAgbWFyZ2luOi41ZW07XFxufVxcbi5jdXJyZW50LWNvbmRpdGlvbi1jYXJkIC5kZXRhaWwtdGV4dHtcXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LWdyYXktdmFyaWFudCk7XFxufVxcbi5mb3JlY2FzdC1jYXJkIDppcyguY2FyZC1pdGVtLC5pY29uLXdyYXBwZXIpe1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1jYXJkIC5mb3JlY2FzdC1kZXRhaWxze1xcbiAgICBjb2xvcjp2YXIoLS1saWdodC1ncmF5LXZhcmlhbnQpO1xcbn1cXG4uZm9yZWNhc3QtY2FyZCAuY2FyZC1pdGVtID4gLmZvcmVjYXN0LWRldGFpbHN7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIHRleHQtYWxpZ246cmlnaHQ7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jb250ZW50IHJpZ2h0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5oaWdobGlnaHQtbGlzdHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBnYXA6MjBweDtcXG59XFxuLmhpZ2hsaWdodHMgLmNhcmQtc217XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tYmxhY2stYWxwaGEpO1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG59XFxuLmhpZ2hsaWdodC1jYXJkIDppcygud3JhcHBlciwuY2FyZC1saXN0LC5jYXJkLWl0ZW0pe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcbi5oaWdobGlnaHQtY2FyZCAud3JhcHBlcntcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6MTZweDtcXG59XFxuLmhpZ2hsaWdodC1jYXJkIC5jYXJkLWxpc3R7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICByb3ctZ2FwOjhweDtcXG59XFxuLmhpZ2hsaWdodC1jYXJkIC5jYXJkLWl0ZW17XFxuICAgIHdpZHRoOjUwJTtcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbiAgICBnYXA6NHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1Ib3VybHkgZm9yZWNhc3QgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXFxuLnNsaWRlci1jb250YWluZXJ7XFxuICAgIG92ZXJmbG93LXg6YXV0bztcXG4gICAgbWFyZ2luLWlubGluZTotMTZweDtcXG59XFxuLnNsaWRlci1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc2xpZGVyLWxpc3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZ2FwOjEycHg7XFxufVxcbi5zbGlkZXItbGlzdDpmaXJzdC1jaGlsZHtcXG4gICAgbWFyZ2luLWJsb2NrLWVuZDoxNnB4O1xcbn1cXG4uc2xpZGVyLWxpc3Q6OmJlZm9yZSxcXG4uc2xpZGVyLWxpc3Q6OmFmdGVye1xcbiAgICBjb250ZW50OlxcXCJcXFwiO1xcbiAgICBtaW4td2lkdGg6NHB4O1xcbn1cXG4uc2xpZGVyLWl0ZW17XFxuICAgIG1pbi13aWR0aDoxMTBweDtcXG4gICAgZmxleDoxIDEgMTAwJTsgICBcXG59XFxuLnNsaWRlci1jYXJke1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuLnNsaWRlci1pdGVtIC53ZWF0aGVyLWljb257XFxuICAgIG1hcmdpbi1pbmxpbmU6YXV0bztcXG4gICAgbWFyZ2luLWJsb2NrOjEycHg7XFxufVxcbi5mb290ZXIsXFxuLmZvb3RlciAuYm9keS0zOmxhc3QtY2hpbGR7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC13cmFwOndyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG59XFxuLmZvb3RlcntcXG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheS12YXJpYW50KTtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICAgIGdhcDoxMnB4IDI0cHg7XFxuICAgIG1hcmdpbi1ibG9jay1zdGFydDoyOHB4O1xcbn1cXG4uYXBpe1xcbiAgICBjb2xvcjpncmVlbjtcXG59XFxuLmZhZGUtaW4gLmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmVycm9ye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDowO1xcbiAgICBsZWZ0OjA7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgaGVpZ2h0OjEwMHN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDo4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWVkaWEgcXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xcbiAgICAuY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzoyNHB4O1xcbiAgICB9XFxuICAgIC5jYXJkLWxne1xcbiAgICAgICAgcGFkZGluZzouNXJlbTtcXG4gICAgfVxcbiAgICAuY2FyZC1zbXtcXG4gICAgICAgIHBhZGRpbmc6MjBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgfSAgXFxuICAgIC5zZWFyY2h7XFxuICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgzJSBhdCBjYWxjKDEwMCUgLSAyNzNweCkgNiUpO1xcbiAgICB9XFxuICAgIG1haW57XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLTk2cHgpO1xcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwc3ZoIC0gOTZweCk7XFxuICAgIH1cXG4gICAgYXJ0aWNsZS5jb250YWluZXJ7XFxuICAgICAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODBweCBtaW5tYXgoMCwxZnIpO1xcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcXG4gICAgICAgIGdhcDoyNHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50LWxlZnR7XFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgICAgdG9wOjA7XFxuICAgIH1cXG4gICAgLnNlY3Rpb246bm90KDpsYXN0LWNoaWxkKXtcXG4gICAgICAgIG1hcmdpbi1ibG9jazoyMHB4O1xcbiAgICB9XFxuICAgIC5mb3JlY2FzdC1jYXJkIC5jYXJkLWl0ZW06bm90KDpsYXN0LWNoaWxkKXtcXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE2cHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1saXN0e1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQoLW4rMil7XFxuICAgICAgICBncmlkLWNvbHVtbjpzcGFuIDI7XFxuICAgICAgICBoZWlnaHQ6MTYwcHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZChuKzMpe1xcbiAgICAgICAgaGVpZ2h0OjEyMHB4O1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHRzIC5tLWljb257XFxuICAgICAgICBmb250LXNpemU6My42cmVtO1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtY2FyZC5vbmUgLmNhcmQtaXRlbXtcXG4gICAgICAgIHdpZHRoOjI1JTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgIGdhcDo4cHg7XFxuICAgIH1cXG4gICAgLnNsaWRlci1jb250YWluZXJ7XFxuICAgICAgICBtYXJnaW4taW5saW5lOjAgLTI0cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLXJhZGl1cy0xNik7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLXJhZGl1cy0xNik7XFxuICAgIH1cXG4gICAgLnNsaWRlci1saXN0OjpiZWZvcmV7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5zbGlkZXItbGlzdDo6YWZ0ZXJ7XFxuICAgICAgICBtaW4td2lkdGg6MTJweDtcXG4gICAgfVxcbiAgICAuaG91cmx5LWZvcmVjYXN0IC5jYXJkLXNte1xcbiAgICAgICAgcGFkZGluZzoxNnB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2h7XFxuICAgICAgICBhbGw6dW5zZXQ7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgd2lkdGg6NTAwcHg7XFxuICAgICAgICBhbmltYXRpb246bm9uZTtcXG4gICAgfVxcbiAgICAgLnNlYXJjaC1pbnB1dHtcXG4gICAgICAgIGhlaWdodDo1NnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTI4KTtcXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tb3V0bGluZSk7XFxuICAgIH1cXG5cXG4gICAgXFxuXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIwMHB4KXtcXG4gICAgLmNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6M3JlbTtcXG4gICAgfVxcbiAgICAuY2FyZC1sZ3tcXG4gICAgICAgIHBhZGRpbmc6MzZweDtcXG4gICAgfVxcbiAgICAuY2FyZC1zbXtcXG4gICAgICAgIHBhZGRpbmc6MjRweDtcXG4gICAgfSAgICBcXG4gICAgLmhlYWRlciAuaWNvbi1idG57XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5sb2dvIGltZ3tcXG4gICAgICAgIHdpZHRoOjIwMHB4O1xcbiAgICB9XFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBoZWlnaHQ6MTIwcHg7XFxuICAgICAgICB6LWluZGV4OjQ7XFxuICAgIH1cXG4gICAgLmhlYWRlciAuY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZy1ibG9jazowO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1jb250YWluZXJ7XFxuICAgICAgICBib3JkZXItYmxvY2stZW5kOm5vbmU7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1jb250YWluZXIgPiAubS1pY29ue1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0e1xcbiAgICAgICAgaGVpZ2h0OjU2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMjgpO1xcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1vdXRsaW5lKTtcXG4gICAgfVxcbiAgICAuc2VhcmNoIC5zZWFyY2gtZGV0YWlsc3tcXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgdG9wOjEwMCU7XFxuICAgICAgICBsZWZ0OjA7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDozNjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWRpdXMtMjgpIHZhcigtLXJhZGl1cy0yOCk7XFxuICAgICAgICBib3JkZXItYmxvY2stc3RhcnQ6MXB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsvKmZpcmVmb3gqL1xcbiAgICAgICAgb3ZlcmZsb3cteTogb3ZlcmxheTtcXG4gICAgfVxcbiAgICBtYWlue1xcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwdmgtMTIwcHgpO1xcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwc3ZoLTEyMHB4KTtcXG4gICAgfVxcbiAgICBhcnRpY2xlLmNvbnRhaW5lcntcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzYwcHggbWlubWF4KDAsIDFmcik7XFxuICAgICAgICBnYXA6NDBweDtcXG4gICAgfVxcbiAgICAuY3VycmVudC1jb25kaXRpb24gLndlYXRoZXItaWNvbntcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZCgtbisyKXtcXG4gICAgICAgIGhlaWdodDoyMDBweDtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0LWNhcmQ6bnRoLWNoaWxkKG4rMyl7XFxuICAgICAgICBoZWlnaHQ6MTUwcHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1jYXJkIC5tLWljb257XFxuICAgICAgICBmb250LXNpemU6NC44cmVtO1xcbiAgICB9XFxuICAgIC5zbGlkZXItbGlzdHtcXG4gICAgICAgIGdhcDoxNnB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwMHB4KSB7XFxuICAgIC5oaWdobGlnaHQtbGlzdHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgZm9udC1zaXplOjFyZW07XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciwuY2FyZC1sZywuY2FyZC1zbXtcXG4gICAgICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIH0gICBcXG4gICAgLmNhcmQtc217XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIH0gIFxcbiAgICBtYWlue1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC05NnB4KTtcXG4gICAgICAgIGhlaWdodDpjYWxjKDEwMHN2aCAtIDk2cHgpO1xcbiAgICB9XFxuICAgIC5jb250YWluZXJ7XFxuICAgICAgICBwYWRkaW5nOjFyZW0gMnJlbTtcXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xcbiAgICB9XFxuICAgIC5zZWN0aW9uOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgICAgICBtYXJnaW4tYmxvY2s6MjBweDtcXG4gICAgfVxcbiAgICAuZm9yZWNhc3QtY2FyZCAuY2FyZC1pdGVtOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxNnB4O1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtbGlzdHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0LWNhcmQ6bnRoLWNoaWxkKC1uKzIpe1xcbiAgICAgICAgZ3JpZC1jb2x1bW46c3BhbiAyO1xcbiAgICAgICAgaGVpZ2h0OjE2MHB4O1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQobiszKXtcXG4gICAgICAgIGhlaWdodDoxMjBweDtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0cyAubS1pY29ue1xcbiAgICAgICAgZm9udC1zaXplOjMuNnJlbTtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0LWNhcmQub25lIC5jYXJkLWl0ZW17XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgICBnYXA6OHB4O1xcbiAgICB9XFxuICAgIC5zbGlkZXItY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLWlubGluZTowIC0yNHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1yYWRpdXMtMTYpO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1yYWRpdXMtMTYpO1xcbiAgICB9XFxuICAgIC5zbGlkZXItbGlzdDo6YmVmb3Jle1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuc2xpZGVyLWxpc3Q6OmFmdGVye1xcbiAgICAgICAgbWluLXdpZHRoOjEycHg7XFxuICAgIH1cXG4gICAgLmhvdXJseS1mb3JlY2FzdCAuY2FyZC1zbXtcXG4gICAgICAgIHBhZGRpbmc6MTZweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoe1xcbiAgICAgICAgYWxsOnVuc2V0O1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOjUwMHB4O1xcbiAgICAgICAgYW5pbWF0aW9uOm5vbmU7XFxuICAgIH1cXG4gICAgIC5zZWFyY2gtaW5wdXR7XFxuICAgICAgICBoZWlnaHQ6MnJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yOCk7XFxuICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xcbiAgICB9XFxuXFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vY3NzL3N0eWxlcy5jc3MnXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnRuJylcbmNvbnN0IHJldHJ5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUtYnRuJylcblxubGV0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5BUElfS0VZXG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jKGUpPT57XG4gICAgY29uc3Qgc2VhcmNoTG9jYXRpb24gPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICBhd2FpdCBhcGlDYWxsKHNlYXJjaExvY2F0aW9uKVxufSk7XG5cbnJldHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJykuc3R5bGUuZGlzcGxheT0nbm9uZSc7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gYXBpQ2FsbChsb2NhdGlvbil7XG4gICAgdHJ5e1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9JHtBUElfS0VZfSZxPSR7bG9jYXRpb24gfHwgJ05haXJvYmknfSZkYXlzPTVgLHttb2RlOidjb3JzJ30pXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICByZW5kZXJEYXRhKGRhdGEpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpLnN0eWxlLmRpc3BsYXk9J2ZsZXgnO1xuICAgICAgICAvKmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnItbXNnJykudGV4dENvbnRlbnQgPSBlcnIqL1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyLW1zZycpLnRleHRDb250ZW50ID0gXCJTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2FpblwiXG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHJlbmRlckRhdGEoZGF0YSl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbicpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWdyZWUnKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2MgKyAnIMKwQyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtdG9kYXknKS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyLWxvY2F0aW9uJykudGV4dENvbnRlbnQgPSBgJHtkYXRhLmxvY2F0aW9uLmNvdW50cnl9LCAke2RhdGEubG9jYXRpb24ubmFtZX1gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5yaXNlLXRpbWUnKS50ZXh0Q29udGVudCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vuc2V0LXRpbWUnKS50ZXh0Q29udGVudCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgJyUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZScpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgJyBtYic7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHknKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC52aXNfa20gKyAnIGttJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHNsaWtlX2MnKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyArICcgwrBDJztcbiAgICBwb3B1bGF0ZTNkYXlGb3JlY2FzdChkYXRhKTtcbiAgICBwb3B1bGF0ZUhvdXJseUZvcmVjYXN0KGRhdGEpO1xuXG59XG5mdW5jdGlvbiBwb3B1bGF0ZUhvdXJseUZvcmVjYXN0KGRhdGEpIHtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cjtcbiAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCB3ZWF0aGVyU2xpZGVySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC53ZWF0aGVyIC5zbGlkZXItaXRlbScpO1xuICAgIGNvbnN0IHdpbmRTbGlkZXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLndpbmQgLnNsaWRlci1pdGVtJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJTbGlkZXJJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBob3VyRGF0YSA9IGhvdXJseUZvcmVjYXN0WyhjdXJyZW50SG91ciArIGkpICUgMjRdO1xuICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoaG91ckRhdGEudGltZSkuZ2V0SG91cnMoKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IHRpbWUgJSAxMiB8fCAxMjtcbiAgICAgICAgY29uc3QgYW1QbSA9IHRpbWUgPCAxMiA/ICdBTScgOiAnUE0nO1xuXG4gICAgICAgIGNvbnN0IHNsaWRlckNhcmQgPSB3ZWF0aGVyU2xpZGVySXRlbXNbaV0ucXVlcnlTZWxlY3RvcignLnNsaWRlci1jYXJkJyk7XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcigncDpmaXJzdC1jaGlsZCcpLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0dGVkVGltZX0gJHthbVBtfWA7XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gaG91ckRhdGEuY29uZGl0aW9uLmljb247XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcignaW1nJykuYWx0ID0gaG91ckRhdGEuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcigncDpsYXN0LWNoaWxkJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGhvdXJEYXRhLnRlbXBfYyl9IMKwQ2A7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kU2xpZGVySXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91ckRhdGEgPSBob3VybHlGb3JlY2FzdFsoY3VycmVudEhvdXIgKyBpKSAlIDI0XTtcbiAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKGhvdXJEYXRhLnRpbWUpLmdldEhvdXJzKCk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSB0aW1lICUgMTIgfHwgMTI7XG4gICAgICAgIGNvbnN0IGFtUG0gPSB0aW1lIDwgMTIgPyAnQU0nIDogJ1BNJztcblxuICAgICAgICBjb25zdCBzbGlkZXJDYXJkID0gd2luZFNsaWRlckl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY2FyZCcpO1xuICAgICAgICBzbGlkZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJ3A6Zmlyc3QtY2hpbGQnKS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdHRlZFRpbWV9ICR7YW1QbX1gO1xuICAgICAgICBzbGlkZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGhvdXJEYXRhLmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBzbGlkZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmFsdCA9IGhvdXJEYXRhLmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBzbGlkZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJ3A6bGFzdC1jaGlsZCcpLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChob3VyRGF0YS53aW5kX2twaCl9IGttL2hgO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBvcHVsYXRlM2RheUZvcmVjYXN0KGRhdGEpIHtcbiAgICBjb25zdCBmb3JlY2FzdCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuc2xpY2UoMSwgNCk7XG4gICAgY29uc3QgZm9yZWNhc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZm9yZWNhc3QtbGlzdCAuY2FyZC1pdGVtJyk7XG5cbiAgICBmb3JlY2FzdC5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA8IGZvcmVjYXN0TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXkuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB3ZWVrZGF5ID0gbmV3IERhdGUoZGF5LmRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHsgd2Vla2RheTogJ2xvbmcnIH0pO1xuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uID0gZGF5LmRheS5jb25kaXRpb24udGV4dDtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkYXkuZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGZvcmVjYXN0TGlzdFtpbmRleF07XG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWljb24nKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVjYXN0LWRldGFpbHMnKVswXTtcbiAgICAgICAgICAgIGNvbnN0IGRheUVsZW1lbnQgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3QtZGV0YWlscycpWzFdO1xuXG4gICAgICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBpY29uO1xuICAgICAgICAgICAgd2VhdGhlckljb24uYWx0ID0gY29uZGl0aW9uO1xuICAgICAgICAgICAgZGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICAgICAgZGF5RWxlbWVudC50ZXh0Q29udGVudCA9IHdlZWtkYXk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmFwaUNhbGwoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==