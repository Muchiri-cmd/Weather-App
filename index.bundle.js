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

    
}`, "",{"version":3,"sources":["webpack://./src/assets/css/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;IACrB,6BAA6B;IAC7B,+BAA+B;IAC/B,kBAAkB;IAClB,mCAAmC;AACvC;AACA,+DAA+D;AAC/D;IACI,QAAQ;IACR,SAAS;IACT,qBAAqB;AACzB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,aAAa;AACjB;AACA;IACI,aAAa;IACb,qBAAqB;AACzB;AACA;IACI,WAAW;AACf;AACA;IACI,eAAe;IACf,WAAW;IACX,aAAa;IACb,YAAY;AAChB;AACA;IACI,UAAU;AACd;AACA;IACI,cAAc;AAClB;AACA;IACI,wBAAwB;AAC5B;AACA;IACI,mBAAmB;AACvB;AACA;IACI,cAAc;AAClB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,mCAAmC;IACnC,uBAAuB;IACvB,eAAe;IACf,gBAAgB;AACpB;;AAEA,yEAAyE;AACzE;IACI,4BAA4B;IAC5B,iBAAiB;IACjB,eAAe;IACf,0DAA8D;AAClE;AACA;IACI,2BAA2B;IAC3B,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;IACd,UAAU;IACV,SAAS;IACT,eAAe;AACnB;AACA;IACI,SAAS;IACT,kBAAkB;IAClB,WAAW;AACf;AACA;IACI,kCAAkC;IAClC,uBAAuB;AAC3B;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;;AAEA,8EAA8E;AAC9E;IACI,aAAa;IACb,kBAAkB;IAClB,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,KAAK;IACL,MAAM;IACN,UAAU;IACV,YAAY;IACZ,kCAAkC;IAClC,uBAAuB;IACvB,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,OAAO;AACX;AACA;;IAEI,oCAAoC;IACpC,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,gBAAgB;IAChB,wBAAwB;IACxB,YAAY;AAChB;AACA;IACI,iCAAiC;AACrC;AACA;IACI,iBAAiB;IACjB,OAAO;IACP,SAAS;IACT,8BAA8B;AAClC;AACA;IACI,aAAa;AACjB;AACA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;;AAGA,iFAAiF;AACjF;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;IACjB,aAAa;IACb,oCAAoC;IACpC,QAAQ;IACR,WAAW;IACX,eAAe,CAAC,UAAU;IAC1B,kBAAkB;;AAEtB;;AAEA,kFAAkF;AAClF;IACI,iBAAiB;IACjB,YAAY;IACZ,OAAO;IACP,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,2CAA2C;AAC/C;AACA;IACI,aAAa;IACb,kBAAkB;IAClB,OAAO;IACP,WAAW;AACf;AACA;IACI,gCAAgC;AACpC;AACA;IACI,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;AACnC;AACA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA,mFAAmF;AACnF;IACI,YAAY;IACZ,QAAQ;AACZ;AACA;IACI,mCAAmC;IACnC,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,8BAA8B;IAC9B,QAAQ;AACZ;AACA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;AACf;AACA;IACI,SAAS;IACT,wBAAwB;IACxB,OAAO;AACX;;AAEA,0FAA0F;AAC1F;IACI,eAAe;IACf,mBAAmB;AACvB;AACA;IACI,aAAa;AACjB;AACA;IACI,YAAY;IACZ,QAAQ;AACZ;AACA;IACI,qBAAqB;AACzB;AACA;;IAEI,UAAU;IACV,aAAa;AACjB;AACA;IACI,eAAe;IACf,aAAa;AACjB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;AACA;;IAEI,YAAY;IACZ,cAAc;IACd,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,+BAA+B;IAC/B,iBAAiB;IACjB,aAAa;IACb,uBAAuB;AAC3B;AACA;IACI,aAAa;AACjB;AACA;IACI,eAAe;IACf,KAAK;IACL,MAAM;IACN,UAAU;IACV,YAAY;IACZ,aAAa;IACb,mCAAmC;IACnC,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA,qFAAqF;;;AAGrF;IACI;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;QACZ,aAAa;QACb,mCAAmC;IACvC;IACA;QACI,8CAA8C;IAClD;IACA;QACI,yBAAyB;QACzB,0BAA0B;IAC9B;IACA;QACI,sBAAsB;QACtB,0CAA0C;QAC1C,sBAAsB;QACtB,QAAQ;IACZ;IACA;QACI,gBAAgB;QAChB,KAAK;IACT;IACA;QACI,iBAAiB;IACrB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,8BAA8B;IAClC;IACA;QACI,kBAAkB;QAClB,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,SAAS;QACT,8BAA8B;QAC9B,OAAO;IACX;IACA;QACI,qBAAqB;QACrB,0CAA0C;QAC1C,uCAAuC;IAC3C;IACA;QACI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,SAAS;QACT,aAAa;QACb,kBAAkB;QAClB,WAAW;QACX,cAAc;IAClB;KACC;QACG,WAAW;QACX,+BAA+B;QAC/B,+BAA+B;IACnC;;;;AAIJ;;AAEA;IACI;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,aAAa;IACjB;IACA;QACI,WAAW;IACf;IACA;QACI,kBAAkB;QAClB,YAAY;QACZ,SAAS;IACb;IACA;QACI,eAAe;QACf,WAAW;IACf;IACA;QACI,qBAAqB;IACzB;IACA;QACI,aAAa;IACjB;IACA;QACI,WAAW;QACX,+BAA+B;QAC/B,+BAA+B;IACnC;IACA;QACI,iBAAiB;QACjB,QAAQ;QACR,MAAM;QACN,UAAU;QACV,gBAAgB;QAChB,oDAAoD;QACpD,2CAA2C;QAC3C,gBAAgB,CAAC,UAAU;QAC3B,mBAAmB;IACvB;IACA;QACI,wBAAwB;QACxB,yBAAyB;IAC7B;IACA;QACI,2CAA2C;QAC3C,QAAQ;IACZ;IACA;QACI,UAAU;IACd;IACA;QACI,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,QAAQ;IACZ;AACJ;AACA;IACI;QACI,qCAAqC;IACzC;AACJ;;AAEA;IACI;QACI,cAAc;IAClB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;QACb,mCAAmC;IACvC;IACA;QACI,yBAAyB;QACzB,0BAA0B;IAC9B;IACA;QACI,iBAAiB;QACjB,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,sBAAsB;IAC1B;IACA;QACI,8BAA8B;IAClC;IACA;QACI,kBAAkB;QAClB,YAAY;IAChB;IACA;QACI,YAAY;IAChB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,SAAS;QACT,8BAA8B;QAC9B,OAAO;IACX;IACA;QACI,qBAAqB;QACrB,0CAA0C;QAC1C,uCAAuC;IAC3C;IACA;QACI,aAAa;IACjB;IACA;QACI,cAAc;IAClB;IACA;QACI,YAAY;IAChB;IACA;QACI,SAAS;QACT,aAAa;QACb,kBAAkB;QAClB,WAAW;QACX,cAAc;IAClB;KACC;QACG,WAAW;QACX,+BAA+B;QAC/B,+BAA+B;IACnC;;;AAGJ","sourcesContent":[":root{ \n    --background: #131214;\n    --text-color: #EAE6F2;\n    --dark-grey: #1D1C1F;\n    --light-gray: #DDDAE5;\n    --light-gray-variant: #7B7980; \n    --light-gray-variant-2: #B9B6BF;\n    --outline: #3E3D40;\n    --black-alpha: hsla(0, 0%, 0%, 0.1);\n}\n/*  ------------------ Reset ---------------------------------*/\n*{\n    margin:0;\n    padding:0;\n    box-sizing:border-box;\n}\nli {\n    list-style: none;\n}\na,img,span,input,button{\n    display:block;\n}\na{\n    color:inherit;\n    text-decoration: none;\n}\nimg{\n    height:auto;\n}\ninput,button{\n    background:none;\n    border:none;\n    color:inherit;\n    font:inherit;\n}\ninput{\n    width:100%;\n}\nbutton{\n    cursor:pointer;\n}\nsub{\n    vertical-align: baseline;\n}\nsup{\n    vertical-align: top;\n}\nsub,sup{\n    font-size:.8em;\n}\nhtml{\n    scroll-behavior: smooth;\n}\nbody{\n    background-color: var(--background);\n    color:var(--text-color);\n    font-size: 18px;\n    overflow: hidden;\n}\n\n/* ---------------------------------- styles -------------------------- */\n@font-face{\n    font-family: 'Material Icon';\n    font-style:normal;\n    font-weight:400;\n    src:url(../fonts/material-symbol-rounded.woff2) format('woff');\n}\n.m-icon{\n    font-family:'Material Icon';\n    font-weight: normal;\n    font-style:normal;\n    font-size:2.5rem;\n    line-height:1;\n    text-transform: none;\n    white-space:nowrap;\n    word-wrap:normal;\n    direction: ltr;\n    height:1em;\n    width:1em;\n    overflow:hidden;\n}\n.container{\n    width:90%;\n    margin-inline:auto;\n    padding:1em;\n}\n.card {\n    background-color: var(--dark-grey);\n    color:var(--light-gray);   \n}\n.card-lg{\n    padding:20px; \n}\n.card-sm{\n    padding:16px;\n}\n\n/* ----------------------------------- header -------------------------------*/\n.header .container{\n    display: flex;\n    align-items:center;\n    justify-content: space-between;\n}\n.search{\n    position:fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:100vh;\n    background-color: var(--dark-grey);\n    color:var(--light-gray);\n    z-index:4;\n}\n.search-container{\n    position: relative;\n    display: flex;\n    gap:1em;\n}\n.search-btn,\n.home-btn{\n    background:var(--light-gray-variant);\n    padding:.5em;\n    border-radius: 10px;\n}\n.search-input{\n    height:80px;\n    line-height:80px;\n    padding-inline:56px 16px;\n    outline:none;\n}\n.search-input::placeholder{\n    color:var(--light-gray-variant-2);\n}\n.search-container .search-icon {\n    position:absolute;\n    top:50%;\n    left:28px;\n    transform:translate(-50%,-50%);\n}\n.search-container > .m-icon{\n    display: none;\n}\n.search-container .icon-btn {\n    background-color:transparent;\n    box-shadow:none;\n}\n\n\n/* ------------------------------------- Main --------------------------------- */\nmain{\n    overflow: hidden;\n}\narticle.container{\n    position:relative;\n    display: grid;\n    grid-template-columns: minmax(0,1fr);\n    gap:20px;\n    height:100%;\n    overflow-y:auto;/*firefox*/\n    overflow-y:overlay;\n    \n}\n\n/* ----------------------------------content left--------------------------------*/\n.current-condition-card .wrapper{\n    margin-block:12px;\n    display:flex;\n    gap:8px;\n    align-items:center;\n}\n.current-condition-card .weather-icon{\n    margin-inline:auto;\n}\n.current-condition-card .details-list{\n    margin-block-start:16px;\n    padding-block-start:16px;\n    border-block-start:1px solid var(--outline);\n}\n.current-condition-card .detail-item{\n    display: flex;\n    align-items:center;\n    gap:8px;\n    margin:.5em;\n}\n.current-condition-card .detail-text{\n    color: var(--light-gray-variant);\n}\n.forecast-card :is(.card-item,.icon-wrapper){\n    display:flex;\n    align-items: center;\n}\n\n.forecast-card .forecast-details{\n    color:var(--light-gray-variant);\n}\n.forecast-card .card-item > .forecast-details{\n    width:100%;\n    text-align:right;\n}\n\n/* ----------------------------------content right--------------------------------*/\n.highlight-list{\n    display:grid;\n    gap:20px;\n}\n.highlights .card-sm{\n    background-color:var(--black-alpha);\n    position:relative;\n}\n.highlight-card :is(.wrapper,.card-list,.card-item){\n    display: flex;\n    align-items:center;\n}\n.highlight-card .wrapper{\n    justify-content: space-between;\n    gap:16px;\n}\n.highlight-card .card-list{\n    flex-wrap: wrap;\n    flex-grow: 1;\n    row-gap:8px;\n}\n.highlight-card .card-item{\n    width:50%;\n    justify-content:flex-end;\n    gap:4px;\n}\n\n/* ---------------------------------------------Hourly forecast -------------------------*/\n.slider-container{\n    overflow-x:auto;\n    margin-inline:-16px;\n}\n.slider-container::-webkit-scrollbar{\n    display: none;\n}\n.slider-list{\n    display:flex;\n    gap:12px;\n}\n.slider-list:first-child{\n    margin-block-end:16px;\n}\n.slider-list::before,\n.slider-list::after{\n    content:\"\";\n    min-width:4px;\n}\n.slider-item{\n    min-width:110px;\n    flex:1 1 100%;   \n}\n.slider-card{\n    text-align:center;\n}\n.slider-item .weather-icon{\n    margin-inline:auto;\n    margin-block:12px;\n}\n.footer,\n.footer .body-3:last-child{\n    display:flex;\n    flex-wrap:wrap;\n    justify-content:center;\n    align-items:center;\n}\n.footer{\n    color:var(--light-gray-variant);\n    text-align:center;\n    gap:12px 24px;\n    margin-block-start:28px;\n}\n.fade-in .footer{\n    display: flex;\n}\n.error{\n    position: fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:100vh;\n    height:100svh;\n    background-color: var(--background);\n    display: flex;\n    flex-direction: column;\n    justify-content:center;\n    align-items:center;\n    display: none;\n    z-index:8;\n}\n\n/* --------------------------------- media queries -------------------------------- */\n\n\n@media screen and (min-width:768px){\n    .container{\n        padding:24px;\n    }\n    .card-lg{\n        padding:.5rem;\n    }\n    .card-sm{\n        padding:20px;\n        display: grid;\n        grid-template-rows: min-content 1fr;\n    }  \n    .search{\n        clip-path: circle(3% at calc(100% - 273px) 6%);\n    }\n    main{\n        height: calc(100vh -96px);\n        height:calc(100svh - 96px);\n    }\n    article.container{\n        padding-block-start: 0;\n        grid-template-columns: 280px minmax(0,1fr);\n        align-items:flex-start;\n        gap:24px;\n    }\n    .content-left{\n        position: sticky;\n        top:0;\n    }\n    .section:not(:last-child){\n        margin-block:20px;\n    }\n    .forecast-card .card-item:not(:last-child){\n        margin-block-end: 16px;\n    }\n    .highlight-list{\n        grid-template-columns: 1fr 1fr;\n    }\n    .highlight-card:nth-child(-n+2){\n        grid-column:span 2;\n        height:160px;\n    }\n    .highlight-card:nth-child(n+3){\n        height:120px;\n    }\n    .highlights .m-icon{\n        font-size:3.6rem;\n    }\n    .highlight-card.one .card-item{\n        width:25%;\n        flex-direction: column-reverse;\n        gap:8px;\n    }\n    .slider-container{\n        margin-inline:0 -24px;\n        border-bottom-left-radius:var(--radius-16);\n        border-top-left-radius:var(--radius-16);\n    }\n    .slider-list::before{\n        display: none;\n    }\n    .slider-list::after{\n        min-width:12px;\n    }\n    .hourly-forecast .card-sm{\n        padding:16px;\n    }\n    .search{\n        all:unset;\n        display:block;\n        position: relative;\n        width:500px;\n        animation:none;\n    }\n     .search-input{\n        height:56px;\n        border-radius: var(--radius-28);\n        border:2px solid var(--outline);\n    }\n\n    \n\n}\n\n@media screen and (min-width:1200px){\n    .container{\n        padding:3rem;\n    }\n    .card-lg{\n        padding:36px;\n    }\n    .card-sm{\n        padding:24px;\n    }    \n    .header .icon-btn{\n        display: none;\n    }\n    .logo img{\n        width:200px;\n    }\n    .header{\n        position: relative;\n        height:120px;\n        z-index:4;\n    }\n    .header .container{\n        padding-block:0;\n        height:100%;\n    }\n    .search-container{\n        border-block-end:none;\n    }\n    .search-container > .m-icon{\n        display:block;\n    }\n    .search-input{\n        height:56px;\n        border-radius: var(--radius-28);\n        border:2px solid var(--outline);\n    }\n    .search .search-details{\n        position:absolute;\n        top:100%;\n        left:0;\n        width:100%;\n        max-height:360px;\n        border-radius: 0 0 var(--radius-28) var(--radius-28);\n        border-block-start:1px solid var(--outline);\n        overflow-y: auto;/*firefox*/\n        overflow-y: overlay;\n    }\n    main{\n        height:calc(100vh-120px);\n        height:calc(100svh-120px);\n    }\n    article.container{\n        grid-template-columns: 360px minmax(0, 1fr);\n        gap:40px;\n    }\n    .current-condition .weather-icon{\n        width:80px;\n    }\n    .highlight-card:nth-child(-n+2){\n        height:200px;\n    }\n    .highlight-card:nth-child(n+3){\n        height:150px;\n    }\n    .highlight-card .m-icon{\n        font-size:4.8rem;\n    }\n    .slider-list{\n        gap:16px;\n    }\n}\n@media screen and (min-width:1400px) {\n    .highlight-list{\n        grid-template-columns: repeat(4, 1fr);\n    }\n}\n\n@media screen and (max-width:768px) {\n    body{\n        font-size:1rem;\n    }\n    .container,.card-lg,.card-sm{\n        padding:.5rem;\n    }   \n    .card-sm{\n        display: grid;\n        grid-template-rows: min-content 1fr;\n    }  \n    main{\n        height: calc(100vh -96px);\n        height:calc(100svh - 96px);\n    }\n    .container{\n        padding:1rem 2rem;\n        width:100vw;\n    }\n    .section:not(:last-child){\n        margin-block:20px;\n    }\n    .forecast-card .card-item:not(:last-child){\n        margin-block-end: 16px;\n    }\n    .highlight-list{\n        grid-template-columns: 1fr 1fr;\n    }\n    .highlight-card:nth-child(-n+2){\n        grid-column:span 2;\n        height:160px;\n    }\n    .highlight-card:nth-child(n+3){\n        height:120px;\n    }\n    .highlights .m-icon{\n        font-size:3.6rem;\n    }\n    .highlight-card.one .card-item{\n        width:25%;\n        flex-direction: column-reverse;\n        gap:8px;\n    }\n    .slider-container{\n        margin-inline:0 -24px;\n        border-bottom-left-radius:var(--radius-16);\n        border-top-left-radius:var(--radius-16);\n    }\n    .slider-list::before{\n        display: none;\n    }\n    .slider-list::after{\n        min-width:12px;\n    }\n    .hourly-forecast .card-sm{\n        padding:16px;\n    }\n    .search{\n        all:unset;\n        display:block;\n        position: relative;\n        width:500px;\n        animation:none;\n    }\n     .search-input{\n        height:2rem;\n        border-radius: var(--radius-28);\n        border:2px solid var(--outline);\n    }\n\n    \n}"],"sourceRoot":""}]);
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


async function apiCall(){
    try{
        const location = 'Nyeri'
        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a96ea307d2b945c9acf54106241806&q=${location}&days=5`,{mode:'cors'})
        //http://api.weatherapi.com/v1/forecast.json
        const data = await res.json()
        console.log(data)
        renderData(data)
    } catch (err) {
        console.log(err)
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
console.log("Working")

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNqQjtBQUNPO0FBQ3RHLDRDQUE0QywrSkFBeUQ7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxtQ0FBbUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQyxPQUFPLDRGQUE0RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxRQUFRLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsb0JBQW9CLGNBQWMsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sY0FBYyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLHVCQUF1QixhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLGdDQUFnQyw0QkFBNEIsNEJBQTRCLDJCQUEyQiw0QkFBNEIscUNBQXFDLHNDQUFzQyx5QkFBeUIsMENBQTBDLEdBQUcsc0VBQXNFLGVBQWUsZ0JBQWdCLDRCQUE0QixH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YjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDYjBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQSxtSEFBbUgsU0FBUyxVQUFVLFlBQVk7QUFDbEo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsc0JBQXNCLElBQUksbUJBQW1CO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwrQkFBK0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtRUFBbUUsZUFBZSxFQUFFLEtBQUs7QUFDekY7QUFDQTtBQUNBLGtFQUFrRSw2QkFBNkI7QUFDL0Y7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSxlQUFlLEVBQUUsS0FBSztBQUN6RjtBQUNBO0FBQ0Esa0VBQWtFLCtCQUErQjtBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxpQkFBaUI7QUFDMUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGVzLmNzcz9mZTVlIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy9hc3NldHMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL21hdGVyaWFsLXN5bWJvbC1yb3VuZGVkLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHsgXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTMxMjE0O1xuICAgIC0tdGV4dC1jb2xvcjogI0VBRTZGMjtcbiAgICAtLWRhcmstZ3JleTogIzFEMUMxRjtcbiAgICAtLWxpZ2h0LWdyYXk6ICNERERBRTU7XG4gICAgLS1saWdodC1ncmF5LXZhcmlhbnQ6ICM3Qjc5ODA7IFxuICAgIC0tbGlnaHQtZ3JheS12YXJpYW50LTI6ICNCOUI2QkY7XG4gICAgLS1vdXRsaW5lOiAjM0UzRDQwO1xuICAgIC0tYmxhY2stYWxwaGE6IGhzbGEoMCwgMCUsIDAlLCAwLjEpO1xufVxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLSBSZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuKntcbiAgICBtYXJnaW46MDtcbiAgICBwYWRkaW5nOjA7XG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xufVxubGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5hLGltZyxzcGFuLGlucHV0LGJ1dHRvbntcbiAgICBkaXNwbGF5OmJsb2NrO1xufVxuYXtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmltZ3tcbiAgICBoZWlnaHQ6YXV0bztcbn1cbmlucHV0LGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgY29sb3I6aW5oZXJpdDtcbiAgICBmb250OmluaGVyaXQ7XG59XG5pbnB1dHtcbiAgICB3aWR0aDoxMDAlO1xufVxuYnV0dG9ue1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuc3Vie1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbnN1cHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuc3ViLHN1cHtcbiAgICBmb250LXNpemU6LjhlbTtcbn1cbmh0bWx7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5ib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHN0eWxlcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb24nO1xuICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgICBzcmM6dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZicpO1xufVxuLm0taWNvbntcbiAgICBmb250LWZhbWlseTonTWF0ZXJpYWwgSWNvbic7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcbiAgICBmb250LXNpemU6Mi41cmVtO1xuICAgIGxpbmUtaGVpZ2h0OjE7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIHdvcmQtd3JhcDpub3JtYWw7XG4gICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgaGVpZ2h0OjFlbTtcbiAgICB3aWR0aDoxZW07XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xufVxuLmNvbnRhaW5lcntcbiAgICB3aWR0aDo5MCU7XG4gICAgbWFyZ2luLWlubGluZTphdXRvO1xuICAgIHBhZGRpbmc6MWVtO1xufVxuLmNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheSk7ICAgXG59XG4uY2FyZC1sZ3tcbiAgICBwYWRkaW5nOjIwcHg7IFxufVxuLmNhcmQtc217XG4gICAgcGFkZGluZzoxNnB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWFkZXIgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGVhZGVyIC5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNlYXJjaHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcbiAgICBjb2xvcjp2YXIoLS1saWdodC1ncmF5KTtcbiAgICB6LWluZGV4OjQ7XG59XG4uc2VhcmNoLWNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6MWVtO1xufVxuLnNlYXJjaC1idG4sXG4uaG9tZS1idG57XG4gICAgYmFja2dyb3VuZDp2YXIoLS1saWdodC1ncmF5LXZhcmlhbnQpO1xuICAgIHBhZGRpbmc6LjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnNlYXJjaC1pbnB1dHtcbiAgICBoZWlnaHQ6ODBweDtcbiAgICBsaW5lLWhlaWdodDo4MHB4O1xuICAgIHBhZGRpbmctaW5saW5lOjU2cHggMTZweDtcbiAgICBvdXRsaW5lOm5vbmU7XG59XG4uc2VhcmNoLWlucHV0OjpwbGFjZWhvbGRlcntcbiAgICBjb2xvcjp2YXIoLS1saWdodC1ncmF5LXZhcmlhbnQtMik7XG59XG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWljb24ge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDoyOHB4O1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn1cbi5zZWFyY2gtY29udGFpbmVyID4gLm0taWNvbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnNlYXJjaC1jb250YWluZXIgLmljb24tYnRuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbn1cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIE1haW4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5tYWlue1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5hcnRpY2xlLmNvbnRhaW5lcntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsMWZyKTtcbiAgICBnYXA6MjBweDtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBvdmVyZmxvdy15OmF1dG87LypmaXJlZm94Ki9cbiAgICBvdmVyZmxvdy15Om92ZXJsYXk7XG4gICAgXG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jb250ZW50IGxlZnQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAud3JhcHBlcntcbiAgICBtYXJnaW4tYmxvY2s6MTJweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZ2FwOjhweDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAud2VhdGhlci1pY29ue1xuICAgIG1hcmdpbi1pbmxpbmU6YXV0bztcbn1cbi5jdXJyZW50LWNvbmRpdGlvbi1jYXJkIC5kZXRhaWxzLWxpc3R7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OjE2cHg7XG4gICAgcGFkZGluZy1ibG9jay1zdGFydDoxNnB4O1xuICAgIGJvcmRlci1ibG9jay1zdGFydDoxcHggc29saWQgdmFyKC0tb3V0bGluZSk7XG59XG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAuZGV0YWlsLWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgZ2FwOjhweDtcbiAgICBtYXJnaW46LjVlbTtcbn1cbi5jdXJyZW50LWNvbmRpdGlvbi1jYXJkIC5kZXRhaWwtdGV4dHtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JheS12YXJpYW50KTtcbn1cbi5mb3JlY2FzdC1jYXJkIDppcyguY2FyZC1pdGVtLC5pY29uLXdyYXBwZXIpe1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9yZWNhc3QtY2FyZCAuZm9yZWNhc3QtZGV0YWlsc3tcbiAgICBjb2xvcjp2YXIoLS1saWdodC1ncmF5LXZhcmlhbnQpO1xufVxuLmZvcmVjYXN0LWNhcmQgLmNhcmQtaXRlbSA+IC5mb3JlY2FzdC1kZXRhaWxze1xuICAgIHdpZHRoOjEwMCU7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLWNvbnRlbnQgcmlnaHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4uaGlnaGxpZ2h0LWxpc3R7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdhcDoyMHB4O1xufVxuLmhpZ2hsaWdodHMgLmNhcmQtc217XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ibGFjay1hbHBoYSk7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG59XG4uaGlnaGxpZ2h0LWNhcmQgOmlzKC53cmFwcGVyLC5jYXJkLWxpc3QsLmNhcmQtaXRlbSl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG4uaGlnaGxpZ2h0LWNhcmQgLndyYXBwZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDoxNnB4O1xufVxuLmhpZ2hsaWdodC1jYXJkIC5jYXJkLWxpc3R7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICByb3ctZ2FwOjhweDtcbn1cbi5oaWdobGlnaHQtY2FyZCAuY2FyZC1pdGVte1xuICAgIHdpZHRoOjUwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG4gICAgZ2FwOjRweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSG91cmx5IGZvcmVjYXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLnNsaWRlci1jb250YWluZXJ7XG4gICAgb3ZlcmZsb3cteDphdXRvO1xuICAgIG1hcmdpbi1pbmxpbmU6LTE2cHg7XG59XG4uc2xpZGVyLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5zbGlkZXItbGlzdHtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZ2FwOjEycHg7XG59XG4uc2xpZGVyLWxpc3Q6Zmlyc3QtY2hpbGR7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDoxNnB4O1xufVxuLnNsaWRlci1saXN0OjpiZWZvcmUsXG4uc2xpZGVyLWxpc3Q6OmFmdGVye1xuICAgIGNvbnRlbnQ6XCJcIjtcbiAgICBtaW4td2lkdGg6NHB4O1xufVxuLnNsaWRlci1pdGVte1xuICAgIG1pbi13aWR0aDoxMTBweDtcbiAgICBmbGV4OjEgMSAxMDAlOyAgIFxufVxuLnNsaWRlci1jYXJke1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLnNsaWRlci1pdGVtIC53ZWF0aGVyLWljb257XG4gICAgbWFyZ2luLWlubGluZTphdXRvO1xuICAgIG1hcmdpbi1ibG9jazoxMnB4O1xufVxuLmZvb3Rlcixcbi5mb290ZXIgLmJvZHktMzpsYXN0LWNoaWxke1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LXdyYXA6d3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cbi5mb290ZXJ7XG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheS12YXJpYW50KTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICBnYXA6MTJweCAyNHB4O1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDoyOHB4O1xufVxuLmZhZGUtaW4gLmZvb3RlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmVycm9ye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MDtcbiAgICBsZWZ0OjA7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgaGVpZ2h0OjEwMHN2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB6LWluZGV4Ojg7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtZWRpYSBxdWVyaWVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzoyNHB4O1xuICAgIH1cbiAgICAuY2FyZC1sZ3tcbiAgICAgICAgcGFkZGluZzouNXJlbTtcbiAgICB9XG4gICAgLmNhcmQtc217XG4gICAgICAgIHBhZGRpbmc6MjBweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgfSAgXG4gICAgLnNlYXJjaHtcbiAgICAgICAgY2xpcC1wYXRoOiBjaXJjbGUoMyUgYXQgY2FsYygxMDAlIC0gMjczcHgpIDYlKTtcbiAgICB9XG4gICAgbWFpbntcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC05NnB4KTtcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwc3ZoIC0gOTZweCk7XG4gICAgfVxuICAgIGFydGljbGUuY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4MHB4IG1pbm1heCgwLDFmcik7XG4gICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XG4gICAgICAgIGdhcDoyNHB4O1xuICAgIH1cbiAgICAuY29udGVudC1sZWZ0e1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6MDtcbiAgICB9XG4gICAgLnNlY3Rpb246bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgbWFyZ2luLWJsb2NrOjIwcHg7XG4gICAgfVxuICAgIC5mb3JlY2FzdC1jYXJkIC5jYXJkLWl0ZW06bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMTZweDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1saXN0e1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgfVxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQoLW4rMil7XG4gICAgICAgIGdyaWQtY29sdW1uOnNwYW4gMjtcbiAgICAgICAgaGVpZ2h0OjE2MHB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWNhcmQ6bnRoLWNoaWxkKG4rMyl7XG4gICAgICAgIGhlaWdodDoxMjBweDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodHMgLm0taWNvbntcbiAgICAgICAgZm9udC1zaXplOjMuNnJlbTtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1jYXJkLm9uZSAuY2FyZC1pdGVte1xuICAgICAgICB3aWR0aDoyNSU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgZ2FwOjhweDtcbiAgICB9XG4gICAgLnNsaWRlci1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi1pbmxpbmU6MCAtMjRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1yYWRpdXMtMTYpO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLXJhZGl1cy0xNik7XG4gICAgfVxuICAgIC5zbGlkZXItbGlzdDo6YmVmb3Jle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuc2xpZGVyLWxpc3Q6OmFmdGVye1xuICAgICAgICBtaW4td2lkdGg6MTJweDtcbiAgICB9XG4gICAgLmhvdXJseS1mb3JlY2FzdCAuY2FyZC1zbXtcbiAgICAgICAgcGFkZGluZzoxNnB4O1xuICAgIH1cbiAgICAuc2VhcmNoe1xuICAgICAgICBhbGw6dW5zZXQ7XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6NTAwcHg7XG4gICAgICAgIGFuaW1hdGlvbjpub25lO1xuICAgIH1cbiAgICAgLnNlYXJjaC1pbnB1dHtcbiAgICAgICAgaGVpZ2h0OjU2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yOCk7XG4gICAgICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tb3V0bGluZSk7XG4gICAgfVxuXG4gICAgXG5cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMjAwcHgpe1xuICAgIC5jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6M3JlbTtcbiAgICB9XG4gICAgLmNhcmQtbGd7XG4gICAgICAgIHBhZGRpbmc6MzZweDtcbiAgICB9XG4gICAgLmNhcmQtc217XG4gICAgICAgIHBhZGRpbmc6MjRweDtcbiAgICB9ICAgIFxuICAgIC5oZWFkZXIgLmljb24tYnRue1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubG9nbyBpbWd7XG4gICAgICAgIHdpZHRoOjIwMHB4O1xuICAgIH1cbiAgICAuaGVhZGVye1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDoxMjBweDtcbiAgICAgICAgei1pbmRleDo0O1xuICAgIH1cbiAgICAuaGVhZGVyIC5jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmctYmxvY2s6MDtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgfVxuICAgIC5zZWFyY2gtY29udGFpbmVye1xuICAgICAgICBib3JkZXItYmxvY2stZW5kOm5vbmU7XG4gICAgfVxuICAgIC5zZWFyY2gtY29udGFpbmVyID4gLm0taWNvbntcbiAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICB9XG4gICAgLnNlYXJjaC1pbnB1dHtcbiAgICAgICAgaGVpZ2h0OjU2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yOCk7XG4gICAgICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tb3V0bGluZSk7XG4gICAgfVxuICAgIC5zZWFyY2ggLnNlYXJjaC1kZXRhaWxze1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjEwMCU7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDozNjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLXJhZGl1cy0yOCkgdmFyKC0tcmFkaXVzLTI4KTtcbiAgICAgICAgYm9yZGVyLWJsb2NrLXN0YXJ0OjFweCBzb2xpZCB2YXIoLS1vdXRsaW5lKTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsvKmZpcmVmb3gqL1xuICAgICAgICBvdmVyZmxvdy15OiBvdmVybGF5O1xuICAgIH1cbiAgICBtYWlue1xuICAgICAgICBoZWlnaHQ6Y2FsYygxMDB2aC0xMjBweCk7XG4gICAgICAgIGhlaWdodDpjYWxjKDEwMHN2aC0xMjBweCk7XG4gICAgfVxuICAgIGFydGljbGUuY29udGFpbmVye1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM2MHB4IG1pbm1heCgwLCAxZnIpO1xuICAgICAgICBnYXA6NDBweDtcbiAgICB9XG4gICAgLmN1cnJlbnQtY29uZGl0aW9uIC53ZWF0aGVyLWljb257XG4gICAgICAgIHdpZHRoOjgwcHg7XG4gICAgfVxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQoLW4rMil7XG4gICAgICAgIGhlaWdodDoyMDBweDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZChuKzMpe1xuICAgICAgICBoZWlnaHQ6MTUwcHg7XG4gICAgfVxuICAgIC5oaWdobGlnaHQtY2FyZCAubS1pY29ue1xuICAgICAgICBmb250LXNpemU6NC44cmVtO1xuICAgIH1cbiAgICAuc2xpZGVyLWxpc3R7XG4gICAgICAgIGdhcDoxNnB4O1xuICAgIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwMHB4KSB7XG4gICAgLmhpZ2hsaWdodC1saXN0e1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xuICAgIGJvZHl7XG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xuICAgIH1cbiAgICAuY29udGFpbmVyLC5jYXJkLWxnLC5jYXJkLXNte1xuICAgICAgICBwYWRkaW5nOi41cmVtO1xuICAgIH0gICBcbiAgICAuY2FyZC1zbXtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gICAgfSAgXG4gICAgbWFpbntcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC05NnB4KTtcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwc3ZoIC0gOTZweCk7XG4gICAgfVxuICAgIC5jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6MXJlbSAycmVtO1xuICAgICAgICB3aWR0aDoxMDB2dztcbiAgICB9XG4gICAgLnNlY3Rpb246bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgbWFyZ2luLWJsb2NrOjIwcHg7XG4gICAgfVxuICAgIC5mb3JlY2FzdC1jYXJkIC5jYXJkLWl0ZW06bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMTZweDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1saXN0e1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgfVxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQoLW4rMil7XG4gICAgICAgIGdyaWQtY29sdW1uOnNwYW4gMjtcbiAgICAgICAgaGVpZ2h0OjE2MHB4O1xuICAgIH1cbiAgICAuaGlnaGxpZ2h0LWNhcmQ6bnRoLWNoaWxkKG4rMyl7XG4gICAgICAgIGhlaWdodDoxMjBweDtcbiAgICB9XG4gICAgLmhpZ2hsaWdodHMgLm0taWNvbntcbiAgICAgICAgZm9udC1zaXplOjMuNnJlbTtcbiAgICB9XG4gICAgLmhpZ2hsaWdodC1jYXJkLm9uZSAuY2FyZC1pdGVte1xuICAgICAgICB3aWR0aDoyNSU7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgZ2FwOjhweDtcbiAgICB9XG4gICAgLnNsaWRlci1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi1pbmxpbmU6MCAtMjRweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1yYWRpdXMtMTYpO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLXJhZGl1cy0xNik7XG4gICAgfVxuICAgIC5zbGlkZXItbGlzdDo6YmVmb3Jle1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuc2xpZGVyLWxpc3Q6OmFmdGVye1xuICAgICAgICBtaW4td2lkdGg6MTJweDtcbiAgICB9XG4gICAgLmhvdXJseS1mb3JlY2FzdCAuY2FyZC1zbXtcbiAgICAgICAgcGFkZGluZzoxNnB4O1xuICAgIH1cbiAgICAuc2VhcmNoe1xuICAgICAgICBhbGw6dW5zZXQ7XG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6NTAwcHg7XG4gICAgICAgIGFuaW1hdGlvbjpub25lO1xuICAgIH1cbiAgICAgLnNlYXJjaC1pbnB1dHtcbiAgICAgICAgaGVpZ2h0OjJyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yOCk7XG4gICAgICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tb3V0bGluZSk7XG4gICAgfVxuXG4gICAgXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0lB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QVU7SUFDZDtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7QUFDSjtBQUNBO0lBQ0k7UUFDSSxxQ0FBcUM7SUFDekM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLG1DQUFtQztJQUN2QztJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7SUFDaEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksU0FBUztRQUNULDhCQUE4QjtRQUM5QixPQUFPO0lBQ1g7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQiwwQ0FBMEM7UUFDMUMsdUNBQXVDO0lBQzNDO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsY0FBYztJQUNsQjtLQUNDO1FBQ0csV0FBVztRQUNYLCtCQUErQjtRQUMvQiwrQkFBK0I7SUFDbkM7OztBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290eyBcXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTMxMjE0O1xcbiAgICAtLXRleHQtY29sb3I6ICNFQUU2RjI7XFxuICAgIC0tZGFyay1ncmV5OiAjMUQxQzFGO1xcbiAgICAtLWxpZ2h0LWdyYXk6ICNERERBRTU7XFxuICAgIC0tbGlnaHQtZ3JheS12YXJpYW50OiAjN0I3OTgwOyBcXG4gICAgLS1saWdodC1ncmF5LXZhcmlhbnQtMjogI0I5QjZCRjtcXG4gICAgLS1vdXRsaW5lOiAjM0UzRDQwO1xcbiAgICAtLWJsYWNrLWFscGhhOiBoc2xhKDAsIDAlLCAwJSwgMC4xKTtcXG59XFxuLyogIC0tLS0tLS0tLS0tLS0tLS0tLSBSZXNldCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbip7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXG59XFxubGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5hLGltZyxzcGFuLGlucHV0LGJ1dHRvbntcXG4gICAgZGlzcGxheTpibG9jaztcXG59XFxuYXtcXG4gICAgY29sb3I6aW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5pbWd7XFxuICAgIGhlaWdodDphdXRvO1xcbn1cXG5pbnB1dCxidXR0b257XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGNvbG9yOmluaGVyaXQ7XFxuICAgIGZvbnQ6aW5oZXJpdDtcXG59XFxuaW5wdXR7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcbmJ1dHRvbntcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxufVxcbnN1YntcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5zdXB7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbnN1YixzdXB7XFxuICAgIGZvbnQtc2l6ZTouOGVtO1xcbn1cXG5odG1se1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc3R5bGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuQGZvbnQtZmFjZXtcXG4gICAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29uJztcXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcXG4gICAgc3JjOnVybCguLi9mb250cy9tYXRlcmlhbC1zeW1ib2wtcm91bmRlZC53b2ZmMikgZm9ybWF0KCd3b2ZmJyk7XFxufVxcbi5tLWljb257XFxuICAgIGZvbnQtZmFtaWx5OidNYXRlcmlhbCBJY29uJztcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XFxuICAgIGZvbnQtc2l6ZToyLjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OjE7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XFxuICAgIHdvcmQtd3JhcDpub3JtYWw7XFxuICAgIGRpcmVjdGlvbjogbHRyO1xcbiAgICBoZWlnaHQ6MWVtO1xcbiAgICB3aWR0aDoxZW07XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuLmNvbnRhaW5lcntcXG4gICAgd2lkdGg6OTAlO1xcbiAgICBtYXJnaW4taW5saW5lOmF1dG87XFxuICAgIHBhZGRpbmc6MWVtO1xcbn1cXG4uY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGNvbG9yOnZhcigtLWxpZ2h0LWdyYXkpOyAgIFxcbn1cXG4uY2FyZC1sZ3tcXG4gICAgcGFkZGluZzoyMHB4OyBcXG59XFxuLmNhcmQtc217XFxuICAgIHBhZGRpbmc6MTZweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVhZGVyIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5oZWFkZXIgLmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zZWFyY2h7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB0b3A6MDtcXG4gICAgbGVmdDowO1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstZ3JleSk7XFxuICAgIGNvbG9yOnZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgICB6LWluZGV4OjQ7XFxufVxcbi5zZWFyY2gtY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoxZW07XFxufVxcbi5zZWFyY2gtYnRuLFxcbi5ob21lLWJ0bntcXG4gICAgYmFja2dyb3VuZDp2YXIoLS1saWdodC1ncmF5LXZhcmlhbnQpO1xcbiAgICBwYWRkaW5nOi41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5zZWFyY2gtaW5wdXR7XFxuICAgIGhlaWdodDo4MHB4O1xcbiAgICBsaW5lLWhlaWdodDo4MHB4O1xcbiAgICBwYWRkaW5nLWlubGluZTo1NnB4IDE2cHg7XFxuICAgIG91dGxpbmU6bm9uZTtcXG59XFxuLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXJ7XFxuICAgIGNvbG9yOnZhcigtLWxpZ2h0LWdyYXktdmFyaWFudC0yKTtcXG59XFxuLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1pY29uIHtcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgIHRvcDo1MCU7XFxuICAgIGxlZnQ6MjhweDtcXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciA+IC5tLWljb257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIC5pY29uLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XFxuICAgIGJveC1zaGFkb3c6bm9uZTtcXG59XFxuXFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBNYWluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbm1haW57XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbmFydGljbGUuY29udGFpbmVye1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwxZnIpO1xcbiAgICBnYXA6MjBweDtcXG4gICAgaGVpZ2h0OjEwMCU7XFxuICAgIG92ZXJmbG93LXk6YXV0bzsvKmZpcmVmb3gqL1xcbiAgICBvdmVyZmxvdy15Om92ZXJsYXk7XFxuICAgIFxcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY29udGVudCBsZWZ0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5jdXJyZW50LWNvbmRpdGlvbi1jYXJkIC53cmFwcGVye1xcbiAgICBtYXJnaW4tYmxvY2s6MTJweDtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBnYXA6OHB4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcbi5jdXJyZW50LWNvbmRpdGlvbi1jYXJkIC53ZWF0aGVyLWljb257XFxuICAgIG1hcmdpbi1pbmxpbmU6YXV0bztcXG59XFxuLmN1cnJlbnQtY29uZGl0aW9uLWNhcmQgLmRldGFpbHMtbGlzdHtcXG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OjE2cHg7XFxuICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6MTZweDtcXG4gICAgYm9yZGVyLWJsb2NrLXN0YXJ0OjFweCBzb2xpZCB2YXIoLS1vdXRsaW5lKTtcXG59XFxuLmN1cnJlbnQtY29uZGl0aW9uLWNhcmQgLmRldGFpbC1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxuICAgIGdhcDo4cHg7XFxuICAgIG1hcmdpbjouNWVtO1xcbn1cXG4uY3VycmVudC1jb25kaXRpb24tY2FyZCAuZGV0YWlsLXRleHR7XFxuICAgIGNvbG9yOiB2YXIoLS1saWdodC1ncmF5LXZhcmlhbnQpO1xcbn1cXG4uZm9yZWNhc3QtY2FyZCA6aXMoLmNhcmQtaXRlbSwuaWNvbi13cmFwcGVyKXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtY2FyZCAuZm9yZWNhc3QtZGV0YWlsc3tcXG4gICAgY29sb3I6dmFyKC0tbGlnaHQtZ3JheS12YXJpYW50KTtcXG59XFxuLmZvcmVjYXN0LWNhcmQgLmNhcmQtaXRlbSA+IC5mb3JlY2FzdC1kZXRhaWxze1xcbiAgICB3aWR0aDoxMDAlO1xcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tY29udGVudCByaWdodC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cXG4uaGlnaGxpZ2h0LWxpc3R7XFxuICAgIGRpc3BsYXk6Z3JpZDtcXG4gICAgZ2FwOjIwcHg7XFxufVxcbi5oaWdobGlnaHRzIC5jYXJkLXNte1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJsYWNrLWFscGhhKTtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxufVxcbi5oaWdobGlnaHQtY2FyZCA6aXMoLndyYXBwZXIsLmNhcmQtbGlzdCwuY2FyZC1pdGVtKXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xcbn1cXG4uaGlnaGxpZ2h0LWNhcmQgLndyYXBwZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOjE2cHg7XFxufVxcbi5oaWdobGlnaHQtY2FyZCAuY2FyZC1saXN0e1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgcm93LWdhcDo4cHg7XFxufVxcbi5oaWdobGlnaHQtY2FyZCAuY2FyZC1pdGVte1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgZ2FwOjRweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tSG91cmx5IGZvcmVjYXN0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xcbi5zbGlkZXItY29udGFpbmVye1xcbiAgICBvdmVyZmxvdy14OmF1dG87XFxuICAgIG1hcmdpbi1pbmxpbmU6LTE2cHg7XFxufVxcbi5zbGlkZXItY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuLnNsaWRlci1saXN0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGdhcDoxMnB4O1xcbn1cXG4uc2xpZGVyLWxpc3Q6Zmlyc3QtY2hpbGR7XFxuICAgIG1hcmdpbi1ibG9jay1lbmQ6MTZweDtcXG59XFxuLnNsaWRlci1saXN0OjpiZWZvcmUsXFxuLnNsaWRlci1saXN0OjphZnRlcntcXG4gICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgbWluLXdpZHRoOjRweDtcXG59XFxuLnNsaWRlci1pdGVte1xcbiAgICBtaW4td2lkdGg6MTEwcHg7XFxuICAgIGZsZXg6MSAxIDEwMCU7ICAgXFxufVxcbi5zbGlkZXItY2FyZHtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcbi5zbGlkZXItaXRlbSAud2VhdGhlci1pY29ue1xcbiAgICBtYXJnaW4taW5saW5lOmF1dG87XFxuICAgIG1hcmdpbi1ibG9jazoxMnB4O1xcbn1cXG4uZm9vdGVyLFxcbi5mb290ZXIgLmJvZHktMzpsYXN0LWNoaWxke1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtd3JhcDp3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XFxufVxcbi5mb290ZXJ7XFxuICAgIGNvbG9yOnZhcigtLWxpZ2h0LWdyYXktdmFyaWFudCk7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgICBnYXA6MTJweCAyNHB4O1xcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6MjhweDtcXG59XFxuLmZhZGUtaW4gLmZvb3RlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLmVycm9ye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDowO1xcbiAgICBsZWZ0OjA7XFxuICAgIHdpZHRoOjEwMCU7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgaGVpZ2h0OjEwMHN2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgei1pbmRleDo4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWVkaWEgcXVlcmllcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xcbiAgICAuY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzoyNHB4O1xcbiAgICB9XFxuICAgIC5jYXJkLWxne1xcbiAgICAgICAgcGFkZGluZzouNXJlbTtcXG4gICAgfVxcbiAgICAuY2FyZC1zbXtcXG4gICAgICAgIHBhZGRpbmc6MjBweDtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcXG4gICAgfSAgXFxuICAgIC5zZWFyY2h7XFxuICAgICAgICBjbGlwLXBhdGg6IGNpcmNsZSgzJSBhdCBjYWxjKDEwMCUgLSAyNzNweCkgNiUpO1xcbiAgICB9XFxuICAgIG1haW57XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLTk2cHgpO1xcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwc3ZoIC0gOTZweCk7XFxuICAgIH1cXG4gICAgYXJ0aWNsZS5jb250YWluZXJ7XFxuICAgICAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAwO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyODBweCBtaW5tYXgoMCwxZnIpO1xcbiAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcXG4gICAgICAgIGdhcDoyNHB4O1xcbiAgICB9XFxuICAgIC5jb250ZW50LWxlZnR7XFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgICAgdG9wOjA7XFxuICAgIH1cXG4gICAgLnNlY3Rpb246bm90KDpsYXN0LWNoaWxkKXtcXG4gICAgICAgIG1hcmdpbi1ibG9jazoyMHB4O1xcbiAgICB9XFxuICAgIC5mb3JlY2FzdC1jYXJkIC5jYXJkLWl0ZW06bm90KDpsYXN0LWNoaWxkKXtcXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE2cHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1saXN0e1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQoLW4rMil7XFxuICAgICAgICBncmlkLWNvbHVtbjpzcGFuIDI7XFxuICAgICAgICBoZWlnaHQ6MTYwcHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZChuKzMpe1xcbiAgICAgICAgaGVpZ2h0OjEyMHB4O1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHRzIC5tLWljb257XFxuICAgICAgICBmb250LXNpemU6My42cmVtO1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtY2FyZC5vbmUgLmNhcmQtaXRlbXtcXG4gICAgICAgIHdpZHRoOjI1JTtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG4gICAgICAgIGdhcDo4cHg7XFxuICAgIH1cXG4gICAgLnNsaWRlci1jb250YWluZXJ7XFxuICAgICAgICBtYXJnaW4taW5saW5lOjAgLTI0cHg7XFxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOnZhcigtLXJhZGl1cy0xNik7XFxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOnZhcigtLXJhZGl1cy0xNik7XFxuICAgIH1cXG4gICAgLnNsaWRlci1saXN0OjpiZWZvcmV7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5zbGlkZXItbGlzdDo6YWZ0ZXJ7XFxuICAgICAgICBtaW4td2lkdGg6MTJweDtcXG4gICAgfVxcbiAgICAuaG91cmx5LWZvcmVjYXN0IC5jYXJkLXNte1xcbiAgICAgICAgcGFkZGluZzoxNnB4O1xcbiAgICB9XFxuICAgIC5zZWFyY2h7XFxuICAgICAgICBhbGw6dW5zZXQ7XFxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgd2lkdGg6NTAwcHg7XFxuICAgICAgICBhbmltYXRpb246bm9uZTtcXG4gICAgfVxcbiAgICAgLnNlYXJjaC1pbnB1dHtcXG4gICAgICAgIGhlaWdodDo1NnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLTI4KTtcXG4gICAgICAgIGJvcmRlcjoycHggc29saWQgdmFyKC0tb3V0bGluZSk7XFxuICAgIH1cXG5cXG4gICAgXFxuXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTIwMHB4KXtcXG4gICAgLmNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6M3JlbTtcXG4gICAgfVxcbiAgICAuY2FyZC1sZ3tcXG4gICAgICAgIHBhZGRpbmc6MzZweDtcXG4gICAgfVxcbiAgICAuY2FyZC1zbXtcXG4gICAgICAgIHBhZGRpbmc6MjRweDtcXG4gICAgfSAgICBcXG4gICAgLmhlYWRlciAuaWNvbi1idG57XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5sb2dvIGltZ3tcXG4gICAgICAgIHdpZHRoOjIwMHB4O1xcbiAgICB9XFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBoZWlnaHQ6MTIwcHg7XFxuICAgICAgICB6LWluZGV4OjQ7XFxuICAgIH1cXG4gICAgLmhlYWRlciAuY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZy1ibG9jazowO1xcbiAgICAgICAgaGVpZ2h0OjEwMCU7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1jb250YWluZXJ7XFxuICAgICAgICBib3JkZXItYmxvY2stZW5kOm5vbmU7XFxuICAgIH1cXG4gICAgLnNlYXJjaC1jb250YWluZXIgPiAubS1pY29ue1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgfVxcbiAgICAuc2VhcmNoLWlucHV0e1xcbiAgICAgICAgaGVpZ2h0OjU2cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtMjgpO1xcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCB2YXIoLS1vdXRsaW5lKTtcXG4gICAgfVxcbiAgICAuc2VhcmNoIC5zZWFyY2gtZGV0YWlsc3tcXG4gICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgICAgICAgdG9wOjEwMCU7XFxuICAgICAgICBsZWZ0OjA7XFxuICAgICAgICB3aWR0aDoxMDAlO1xcbiAgICAgICAgbWF4LWhlaWdodDozNjBweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWRpdXMtMjgpIHZhcigtLXJhZGl1cy0yOCk7XFxuICAgICAgICBib3JkZXItYmxvY2stc3RhcnQ6MXB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bzsvKmZpcmVmb3gqL1xcbiAgICAgICAgb3ZlcmZsb3cteTogb3ZlcmxheTtcXG4gICAgfVxcbiAgICBtYWlue1xcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwdmgtMTIwcHgpO1xcbiAgICAgICAgaGVpZ2h0OmNhbGMoMTAwc3ZoLTEyMHB4KTtcXG4gICAgfVxcbiAgICBhcnRpY2xlLmNvbnRhaW5lcntcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzYwcHggbWlubWF4KDAsIDFmcik7XFxuICAgICAgICBnYXA6NDBweDtcXG4gICAgfVxcbiAgICAuY3VycmVudC1jb25kaXRpb24gLndlYXRoZXItaWNvbntcXG4gICAgICAgIHdpZHRoOjgwcHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1jYXJkOm50aC1jaGlsZCgtbisyKXtcXG4gICAgICAgIGhlaWdodDoyMDBweDtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0LWNhcmQ6bnRoLWNoaWxkKG4rMyl7XFxuICAgICAgICBoZWlnaHQ6MTUwcHg7XFxuICAgIH1cXG4gICAgLmhpZ2hsaWdodC1jYXJkIC5tLWljb257XFxuICAgICAgICBmb250LXNpemU6NC44cmVtO1xcbiAgICB9XFxuICAgIC5zbGlkZXItbGlzdHtcXG4gICAgICAgIGdhcDoxNnB4O1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6MTQwMHB4KSB7XFxuICAgIC5oaWdobGlnaHQtbGlzdHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjhweCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgZm9udC1zaXplOjFyZW07XFxuICAgIH1cXG4gICAgLmNvbnRhaW5lciwuY2FyZC1sZywuY2FyZC1zbXtcXG4gICAgICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIH0gICBcXG4gICAgLmNhcmQtc217XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICAgIH0gIFxcbiAgICBtYWlue1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC05NnB4KTtcXG4gICAgICAgIGhlaWdodDpjYWxjKDEwMHN2aCAtIDk2cHgpO1xcbiAgICB9XFxuICAgIC5jb250YWluZXJ7XFxuICAgICAgICBwYWRkaW5nOjFyZW0gMnJlbTtcXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xcbiAgICB9XFxuICAgIC5zZWN0aW9uOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgICAgICBtYXJnaW4tYmxvY2s6MjBweDtcXG4gICAgfVxcbiAgICAuZm9yZWNhc3QtY2FyZCAuY2FyZC1pdGVtOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAxNnB4O1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtbGlzdHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0LWNhcmQ6bnRoLWNoaWxkKC1uKzIpe1xcbiAgICAgICAgZ3JpZC1jb2x1bW46c3BhbiAyO1xcbiAgICAgICAgaGVpZ2h0OjE2MHB4O1xcbiAgICB9XFxuICAgIC5oaWdobGlnaHQtY2FyZDpudGgtY2hpbGQobiszKXtcXG4gICAgICAgIGhlaWdodDoxMjBweDtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0cyAubS1pY29ue1xcbiAgICAgICAgZm9udC1zaXplOjMuNnJlbTtcXG4gICAgfVxcbiAgICAuaGlnaGxpZ2h0LWNhcmQub25lIC5jYXJkLWl0ZW17XFxuICAgICAgICB3aWR0aDoyNSU7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XFxuICAgICAgICBnYXA6OHB4O1xcbiAgICB9XFxuICAgIC5zbGlkZXItY29udGFpbmVye1xcbiAgICAgICAgbWFyZ2luLWlubGluZTowIC0yNHB4O1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czp2YXIoLS1yYWRpdXMtMTYpO1xcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czp2YXIoLS1yYWRpdXMtMTYpO1xcbiAgICB9XFxuICAgIC5zbGlkZXItbGlzdDo6YmVmb3Jle1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAuc2xpZGVyLWxpc3Q6OmFmdGVye1xcbiAgICAgICAgbWluLXdpZHRoOjEycHg7XFxuICAgIH1cXG4gICAgLmhvdXJseS1mb3JlY2FzdCAuY2FyZC1zbXtcXG4gICAgICAgIHBhZGRpbmc6MTZweDtcXG4gICAgfVxcbiAgICAuc2VhcmNoe1xcbiAgICAgICAgYWxsOnVuc2V0O1xcbiAgICAgICAgZGlzcGxheTpibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOjUwMHB4O1xcbiAgICAgICAgYW5pbWF0aW9uOm5vbmU7XFxuICAgIH1cXG4gICAgIC5zZWFyY2gtaW5wdXR7XFxuICAgICAgICBoZWlnaHQ6MnJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy0yOCk7XFxuICAgICAgICBib3JkZXI6MnB4IHNvbGlkIHZhcigtLW91dGxpbmUpO1xcbiAgICB9XFxuXFxuICAgIFxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi4vY3NzL3N0eWxlcy5jc3MnXG5cbmFzeW5jIGZ1bmN0aW9uIGFwaUNhbGwoKXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gJ055ZXJpJ1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1hOTZlYTMwN2QyYjk0NWM5YWNmNTQxMDYyNDE4MDYmcT0ke2xvY2F0aW9ufSZkYXlzPTVgLHttb2RlOidjb3JzJ30pXG4gICAgICAgIC8vaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgIHJlbmRlckRhdGEoZGF0YSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cbmZ1bmN0aW9uIHJlbmRlckRhdGEoZGF0YSl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbmRpdGlvbicpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWdyZWUnKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC50ZW1wX2MgKyAnIMKwQyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUtdG9kYXknKS50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubG9jYWx0aW1lO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyLWxvY2F0aW9uJykudGV4dENvbnRlbnQgPSBgJHtkYXRhLmxvY2F0aW9uLmNvdW50cnl9LCAke2RhdGEubG9jYXRpb24ubmFtZX1gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5yaXNlLXRpbWUnKS50ZXh0Q29udGVudCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vuc2V0LXRpbWUnKS50ZXh0Q29udGVudCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgJyUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVzc3VyZScpLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnByZXNzdXJlX21iICsgJyBtYic7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHknKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC52aXNfa20gKyAnIGttJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHNsaWtlX2MnKS50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyArICcgwrBDJztcbiAgICBwb3B1bGF0ZTNkYXlGb3JlY2FzdChkYXRhKTtcbiAgICBwb3B1bGF0ZUhvdXJseUZvcmVjYXN0KGRhdGEpO1xuXG59XG5mdW5jdGlvbiBwb3B1bGF0ZUhvdXJseUZvcmVjYXN0KGRhdGEpIHtcbiAgICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cjtcbiAgICBjb25zdCBjdXJyZW50SG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCB3ZWF0aGVyU2xpZGVySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd1bC53ZWF0aGVyIC5zbGlkZXItaXRlbScpO1xuICAgIGNvbnN0IHdpbmRTbGlkZXJJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3VsLndpbmQgLnNsaWRlci1pdGVtJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJTbGlkZXJJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBob3VyRGF0YSA9IGhvdXJseUZvcmVjYXN0WyhjdXJyZW50SG91ciArIGkpICUgMjRdO1xuICAgICAgICBjb25zdCB0aW1lID0gbmV3IERhdGUoaG91ckRhdGEudGltZSkuZ2V0SG91cnMoKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IHRpbWUgJSAxMiB8fCAxMjtcbiAgICAgICAgY29uc3QgYW1QbSA9IHRpbWUgPCAxMiA/ICdBTScgOiAnUE0nO1xuXG4gICAgICAgIGNvbnN0IHNsaWRlckNhcmQgPSB3ZWF0aGVyU2xpZGVySXRlbXNbaV0ucXVlcnlTZWxlY3RvcignLnNsaWRlci1jYXJkJyk7XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcigncDpmaXJzdC1jaGlsZCcpLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0dGVkVGltZX0gJHthbVBtfWA7XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gaG91ckRhdGEuY29uZGl0aW9uLmljb247XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcignaW1nJykuYWx0ID0gaG91ckRhdGEuY29uZGl0aW9uLnRleHQ7XG4gICAgICAgIHNsaWRlckNhcmQucXVlcnlTZWxlY3RvcigncDpsYXN0LWNoaWxkJykudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGhvdXJEYXRhLnRlbXBfYyl9IMKwQ2A7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5kU2xpZGVySXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgaG91ckRhdGEgPSBob3VybHlGb3JlY2FzdFsoY3VycmVudEhvdXIgKyBpKSAlIDI0XTtcbiAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKGhvdXJEYXRhLnRpbWUpLmdldEhvdXJzKCk7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSB0aW1lICUgMTIgfHwgMTI7XG4gICAgICAgIGNvbnN0IGFtUG0gPSB0aW1lIDwgMTIgPyAnQU0nIDogJ1BNJztcblxuICAgICAgICBjb25zdCBzbGlkZXJDYXJkID0gd2luZFNsaWRlckl0ZW1zW2ldLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXItY2FyZCcpO1xuICAgICAgICBzbGlkZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJ3A6Zmlyc3QtY2hpbGQnKS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdHRlZFRpbWV9ICR7YW1QbX1gO1xuICAgICAgICBzbGlkZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGhvdXJEYXRhLmNvbmRpdGlvbi5pY29uO1xuICAgICAgICBzbGlkZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLmFsdCA9IGhvdXJEYXRhLmNvbmRpdGlvbi50ZXh0O1xuICAgICAgICBzbGlkZXJDYXJkLnF1ZXJ5U2VsZWN0b3IoJ3A6bGFzdC1jaGlsZCcpLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChob3VyRGF0YS53aW5kX2twaCl9IGttL2hgO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHBvcHVsYXRlM2RheUZvcmVjYXN0KGRhdGEpIHtcbiAgICBjb25zdCBmb3JlY2FzdCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuc2xpY2UoMSwgNCk7XG4gICAgY29uc3QgZm9yZWNhc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndWwuZm9yZWNhc3QtbGlzdCAuY2FyZC1pdGVtJyk7XG5cbiAgICBmb3JlY2FzdC5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCA8IGZvcmVjYXN0TGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXkuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCB3ZWVrZGF5ID0gbmV3IERhdGUoZGF5LmRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHsgd2Vla2RheTogJ2xvbmcnIH0pO1xuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uID0gZGF5LmRheS5jb25kaXRpb24udGV4dDtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBkYXkuZGF5LmNvbmRpdGlvbi5pY29uO1xuXG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbSA9IGZvcmVjYXN0TGlzdFtpbmRleF07XG4gICAgICAgICAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWljb24nKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVFbGVtZW50ID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcmVjYXN0LWRldGFpbHMnKVswXTtcbiAgICAgICAgICAgIGNvbnN0IGRheUVsZW1lbnQgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yQWxsKCcuZm9yZWNhc3QtZGV0YWlscycpWzFdO1xuXG4gICAgICAgICAgICB3ZWF0aGVySWNvbi5zcmMgPSBpY29uO1xuICAgICAgICAgICAgd2VhdGhlckljb24uYWx0ID0gY29uZGl0aW9uO1xuICAgICAgICAgICAgZGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRlO1xuICAgICAgICAgICAgZGF5RWxlbWVudC50ZXh0Q29udGVudCA9IHdlZWtkYXk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmFwaUNhbGwoKTtcbmNvbnNvbGUubG9nKFwiV29ya2luZ1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==