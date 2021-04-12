(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /User/stuadmin/Desktop/GitHub/simranthomas.github.io/the-movie-db-hw8/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "8Fux":
/*!*********************************************************************!*\
  !*** ./src/app/components/media-details/media-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: MediaDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaDetailsComponent", function() { return MediaDetailsComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var src_app_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/fetch-data.service */ "mTci");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _carousel_cards_carousel_cards_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../carousel-cards/carousel-cards.component */ "P6f9");









const _c0 = ["watchlistAlert"];
function MediaDetailsComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Genres : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.genres);
} }
function MediaDetailsComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Spoken Languages : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.languages);
} }
function MediaDetailsComponent_div_0_ngb_alert_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function MediaDetailsComponent_div_0_ngb_alert_16_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.addedFlag = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Added to watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MediaDetailsComponent_div_0_ngb_alert_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-alert", 31, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("closed", function MediaDetailsComponent_div_0_ngb_alert_17_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.removedFlag = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Removed from watchlist. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MediaDetailsComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.mediaResults.media_details.overview);
} }
function MediaDetailsComponent_div_0_div_29_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MediaDetailsComponent_div_0_div_29_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const cast_r19 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2); return ctx_r20.open(_r1, cast_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "AS");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cast_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", cast_r19.profile_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cast_r19.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cast_r19.character);
} }
function MediaDetailsComponent_div_0_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Full Cast and Crew");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MediaDetailsComponent_div_0_div_29_div_6_Template, 11, 3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.castList);
} }
function MediaDetailsComponent_div_0_div_30_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r23.rating);
} }
function MediaDetailsComponent_div_0_div_30_div_7_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2605");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r23.rating);
} }
function MediaDetailsComponent_div_0_div_30_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MediaDetailsComponent_div_0_div_30_div_7_div_7_Template, 7, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MediaDetailsComponent_div_0_div_30_div_7_span_8_Template, 6, 1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Read the rest");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", review_r23.avatar_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("A review created by ", review_r23.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r22.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r22.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Written by ", review_r23.author, " on ", review_r23.created_at, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](review_r23.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", review_r23.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MediaDetailsComponent_div_0_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MediaDetailsComponent_div_0_div_30_div_7_Template, 16, 8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.numberOfReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.reviewList);
} }
function MediaDetailsComponent_div_0_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-carousel-cards", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Recommended ", ctx_r10.typeMedia, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mediaList", ctx_r10.recommendedMedia);
} }
function MediaDetailsComponent_div_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-carousel-cards", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Similar ", ctx_r11.typeMedia, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mediaList", ctx_r11.similarMedia);
} }
function MediaDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "youtube-player", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MediaDetailsComponent_div_0_div_11_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MediaDetailsComponent_div_0_div_12_Template, 5, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MediaDetailsComponent_div_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r28.updateWatchlist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MediaDetailsComponent_div_0_ngb_alert_16_Template, 3, 0, "ngb-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MediaDetailsComponent_div_0_ngb_alert_17_Template, 3, 0, "ngb-alert", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MediaDetailsComponent_div_0_div_18_Template, 6, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Share");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, MediaDetailsComponent_div_0_div_29_Template, 7, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, MediaDetailsComponent_div_0_div_30_Template, 8, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MediaDetailsComponent_div_0_div_31_Template, 6, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, MediaDetailsComponent_div_0_div_32_Template, 6, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("videoId", ctx_r0.mediaResults.media_video_details.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.mediaResults.media_details.tagline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", ctx_r0.releaseAirYear, " | \u2605 ", ctx_r0.mediaResults.media_details.vote_average, " | ", ctx_r0.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.genres.length != 0 && ctx_r0.genres != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.languages.length != 0 && ctx_r0.languages != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.buttonName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.addedFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.removedFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.mediaResults.media_details.overview.length != 0 && ctx_r0.mediaResults.media_details.overview != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.twitterURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.facebookURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.castList.length != 0 && ctx_r0.castList.length != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.numberOfReviews != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.recommendedMedia.length != 0 && ctx_r0.recommendedMedia != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.similarMedia.length != 0 && ctx_r0.similarMedia != null);
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth: ", ctx_r32.cast_result.birthday, "");
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Birth Place: ", ctx_r33.cast_result.place_of_birth, "");
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Gender: ", ctx_r34.cast_result.gender, "");
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Website: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r35.cast_result.homepage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r35.cast_result.homepage);
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Known For: ", ctx_r36.cast_result.known_for_department, "");
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Also Known As: ", ctx_r37.cast_result.also_known_as, "");
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://imdb.com/name/", ctx_r38.cast_result.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_a_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://imdb.com/name/", ctx_r39.cast_result.imdb_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_a_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://instagram.com/", ctx_r40.cast_result.instagram_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://facebook.com/", ctx_r41.cast_result.facebook_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://twitter.com/", ctx_r42.cast_result.twitter_id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r43.cast_result.biography);
} }
function MediaDetailsComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MediaDetailsComponent_ng_template_1_ng_container_0_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const modal_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; return modal_r30.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MediaDetailsComponent_ng_template_1_ng_container_0_div_12_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MediaDetailsComponent_ng_template_1_ng_container_0_div_13_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MediaDetailsComponent_ng_template_1_ng_container_0_div_14_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MediaDetailsComponent_ng_template_1_ng_container_0_div_15_Template, 4, 2, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MediaDetailsComponent_ng_template_1_ng_container_0_div_16_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MediaDetailsComponent_ng_template_1_ng_container_0_div_17_Template, 2, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, MediaDetailsComponent_ng_template_1_ng_container_0_a_19_Template, 2, 1, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MediaDetailsComponent_ng_template_1_ng_container_0_a_20_Template, 2, 1, "a", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, MediaDetailsComponent_ng_template_1_ng_container_0_a_21_Template, 2, 1, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, MediaDetailsComponent_ng_template_1_ng_container_0_a_22_Template, 2, 1, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MediaDetailsComponent_ng_template_1_ng_container_0_a_23_Template, 2, 1, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MediaDetailsComponent_ng_template_1_ng_container_0_div_24_Template, 6, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r31.cast_result.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w500/", ctx_r31.cast_result.profile_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_result.birthday != null && ctx_r31.cast_result.birthday != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_result.place_of_birth != null && ctx_r31.cast_result.place_of_birth != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_result.gender != null && ctx_r31.cast_result.gender != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_result.homepage != null && ctx_r31.cast_result.homepage != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_result.known_for_department != null && ctx_r31.cast_result.known_for_department != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_result.also_known_as != null && ctx_r31.cast_result.also_known_as != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_imdb && ctx_r31.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_imdb && !ctx_r31.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_instagram);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_facebook);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_twitter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r31.cast_result.biography != null && ctx_r31.cast_result.biography.length != 0);
} }
function MediaDetailsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MediaDetailsComponent_ng_template_1_ng_container_0_Template, 25, 14, "ng-container", 53);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isLoadingModal);
} }
class MediaDetailsComponent {
    constructor(breakpoint, service, route, _router, modalService) {
        this.breakpoint = breakpoint;
        this.service = service;
        this.route = route;
        this._router = _router;
        this.modalService = modalService;
        this.mediaType = "";
        this.genres = "";
        this.languages = "";
        this.castList = [];
        this.reviewList = [];
        this.recommendedMedia = [];
        this.similarMedia = [];
        this.twitterURL = "";
        this.facebookURL = "";
        this.posterPath = "";
        this.title = "";
        this.buttonName = "Add to Watchlist";
        this.isLoading = true;
        this.closeResult = '';
        this.cast_instagram = false;
        this.cast_imdb = false;
        this.cast_facebook = false;
        this.cast_twitter = false;
        this.isLoadingModal = true;
        this.addedFlag = false;
        this.removedFlag = false;
        this.isMobile = false;
        this._router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    addToContinueWatching() {
        let mediaObject = { 'id': this.mediaId, 'title': this.title, 'image_path': this.posterPath, 'media_type': this.mediaType };
        let continueWatching = JSON.parse(localStorage.getItem('ContinueWatching'));
        if (continueWatching == null) {
            let _temp = [];
            _temp.push(mediaObject);
            localStorage.setItem('ContinueWatching', JSON.stringify(_temp));
        }
        else {
            continueWatching.forEach((item, index) => {
                if (item.id == this.mediaId)
                    continueWatching.splice(index, 1);
            });
            continueWatching.push(mediaObject);
            continueWatching = continueWatching.splice(-24);
            localStorage.setItem('ContinueWatching', JSON.stringify(continueWatching));
        }
    }
    updateWatchlist() {
        setTimeout(() => this.watchlistAlert.close(), 5000);
        if (this.buttonName == "Add to Watchlist") {
            this.addedFlag = true;
            this.buttonName = "Remove from Watchlist";
            let toAdd = { 'id': this.mediaId, 'title': this.title, 'image_path': this.posterPath, 'media_type': this.mediaType };
            let watchList = JSON.parse(localStorage.getItem('WatchList'));
            if (watchList == null) {
                let _temp = [];
                _temp.push(toAdd);
                localStorage.setItem('WatchList', JSON.stringify(_temp));
            }
            else {
                watchList.push(toAdd);
                localStorage.setItem('WatchList', JSON.stringify(watchList));
            }
        }
        else {
            this.buttonName = "Add to Watchlist";
            this.removedFlag = true;
            let watchList = JSON.parse(localStorage.getItem('WatchList'));
            watchList.forEach((item, index) => {
                if (item.id == this.mediaId && item.media_type == this.mediaType)
                    watchList.splice(index, 1);
            });
            localStorage.setItem('WatchList', JSON.stringify(watchList));
        }
    }
    checkInWatchList() {
        let watchList = JSON.parse(localStorage.getItem('WatchList'));
        if (watchList != null) {
            watchList.forEach(item => {
                if (item.id == this.mediaId && item.media_type == this.mediaType)
                    this.buttonName = "Remove from Watchlist";
            });
        }
    }
    ngOnInit() {
        this.isMobile = this.breakpoint.isMatched('(max-width: 600px)');
        this.mediaType = this.route.snapshot.paramMap.get('mediaType');
        this.mediaId = this.route.snapshot.paramMap.get('id');
        this.checkInWatchList();
        this.service.getMediaDetailsData(this.mediaType, this.mediaId)
            .subscribe((data) => {
            this.mediaResults = data;
            this.title = data.media_details.title;
            this.posterPath = data.media_details.poster_path;
            // get the release air date
            this.releaseAirYear = new Date(data.media_details.release_air_date).getFullYear();
            // format the duration
            let minutes = data.media_details.runtime;
            let hours = 0;
            while (minutes / 60 > 1) {
                hours++;
                minutes -= 60;
            }
            this.duration = hours + "hrs ";
            if (minutes != 0)
                this.duration += minutes + "mins";
            // create genre list
            let genreList = data.media_details.genres;
            if (genreList.length != 0) {
                for (var i = 0; i < genreList.length - 1; i++)
                    this.genres += genreList[i].name + ', ';
                this.genres += genreList[i].name;
            }
            // create spoken languages
            let languageList = data.media_details.spoken_languages;
            if (languageList.length != 0) {
                for (var i = 0; i < languageList.length - 1; i++)
                    this.languages += languageList[i].english_name + ', ';
                this.languages += languageList[i].english_name;
            }
            // format twitter share message
            let twitterMessageTitle = "Watch " + data.media_details.title;
            let twitterMessageVideo = "https://www.youtube.com/watch?v=" + data.media_video_details.key;
            let twitterMessageHashTag = "#USC #CSCI571 #FightOn";
            this.twitterURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(twitterMessageTitle) + "%0A" + encodeURIComponent(twitterMessageVideo) + "%0A" + encodeURIComponent(twitterMessageHashTag);
            // format facebook vide url
            let facebook = "https://www.youtube.com/watch?v=" + data.media_video_details.key;
            this.facebookURL = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(facebook);
            // get cast data
            this.castList = data.cast_details;
            // get the number of reviews
            this.numberOfReviews = data.review_details.length;
            // get review data
            this.reviewList = data.review_details;
            // format created at date and rating
            this.reviewList.forEach((element) => {
                let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                var createdDate = new Date(element.created_at);
                var month = createdDate.getMonth();
                var _date = createdDate.getDate().toString();
                var year = createdDate.getFullYear();
                _date = _date.charAt(0) == '0' ? _date.charAt(1) : _date;
                var hours = createdDate.getHours() > 12 ? createdDate.getHours() - 12 : createdDate.getHours();
                var ampm = createdDate.getHours() >= 12 ? "PM" : "AM";
                hours = hours < 10 ? "0" + hours : hours;
                var minutes = createdDate.getMinutes() < 10 ? "0" + createdDate.getMinutes() : createdDate.getMinutes();
                var seconds = createdDate.getSeconds() < 10 ? "0" + createdDate.getSeconds() : createdDate.getSeconds();
                var _time = hours + ":" + minutes + ":" + seconds + " ";
                var text = monthList[month] + ' ' + _date + ', ' + year + ', ' + _time + ' ' + ampm;
                element.created_at = text;
                if (element.rating == null)
                    element.rating = 0;
            });
            this.typeMedia = (this.mediaType == "movie") ? "Movies" : "TV Shows";
            // get the recommended media list
            this.recommendedMedia = data.recommendations;
            // get the similar media list
            this.similarMedia = data.similar;
            this.addToContinueWatching();
            this.isLoading = false;
        });
    }
    open(content, id) {
        this.cast_instagram = false;
        this.cast_imdb = false;
        this.cast_twitter = false;
        this.cast_facebook = false;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
        this.service.getCastDetailsData(id)
            .subscribe((result) => {
            this.cast_result = result;
            if (this.cast_result.gender == "1") {
                this.cast_result.gender = 'Female';
            }
            else {
                this.cast_result.gender = "Male";
            }
            var aka = '';
            this.cast_result.also_known_as.forEach((element) => {
                aka += element + ', ';
            });
            this.cast_result.also_known_as = aka.slice(0, aka.length - 2);
            if (this.cast_result.instagram_id != "" && this.cast_result.instagram_id != null) {
                this.cast_instagram = true;
            }
            if (this.cast_result.imdb_id != "" && this.cast_result.imdb_id != null) {
                this.cast_imdb = true;
            }
            if (this.cast_result.facebook_id != "" && this.cast_result.facebook_id != null) {
                this.cast_facebook = true;
            }
            if (this.cast_result.twitter_id != "" && this.cast_result.twitter_id != null) {
                this.cast_twitter = true;
            }
            this.isLoadingModal = false;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
}
MediaDetailsComponent.ɵfac = function MediaDetailsComponent_Factory(t) { return new (t || MediaDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_3__["FetchDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbModal"])); };
MediaDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MediaDetailsComponent, selectors: [["app-media-details"]], viewQuery: function MediaDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.watchlistAlert = _t.first);
    } }, decls: 3, vars: 1, consts: [["class", "details-container mx-lg-5 px-lg-5 mx-4 px-3", 4, "ngIf"], ["content", ""], [1, "details-container", "mx-lg-5", "px-lg-5", "mx-4", "px-3"], [1, "row", "mt-5", "pt-5", "ml-lg-5", "mr-lg-0", "pl-lg-5", "pr-lg-0"], [1, "embed-responsive", "embed-responsive-16by9", "col-sm-8"], [1, "embed-responsi-item", "mx-lg-3", 3, "videoId"], [1, "col-sm-4", "px-lg-4", "px-0", "mt-3", "mt-lg-0"], ["id", "media_title"], ["id", "media_tagline"], ["id", "year-rating", 1, "mt-4"], ["class", "mt-3", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "success", "class", "mt-3", 3, "closed", 4, "ngIf"], ["type", "danger", "class", "mt-3", 3, "closed", 4, "ngIf"], ["class", "row mt-3 mx-lg-2", 4, "ngIf"], [1, "row", "mt-4", "mx-lg-2"], [1, "col-lg", "mx-lg-5", "px-lg-5", "mx-0", "px-0"], [1, "description-share-title", "mb-2"], ["target", "_blank", "rel", "noopener noreferrer", 1, "twitter-share-button", 3, "href"], [1, "fab", "fa-twitter", "fa-2x", "fa-fw", 2, "color", "#1DA1F2"], ["target", "_blank", "rel", "noopener noreferrer", 1, "fb-share-button", 3, "href"], [1, "fab", "fa-facebook-square", "fa-2x", "fa-fw", 2, "color", "#0027FC"], ["class", "row mt-5 px-lg-3", 4, "ngIf"], ["class", "row mx-lg-1 my-5", 4, "ngIf"], [1, "mt-3"], [2, "font-size", "14px"], [2, "color", "darkgrey", "font-size", "16px"], [1, "mb-3"], ["type", "success", 1, "mt-3", 3, "closed"], ["watchlistAlert", ""], ["type", "danger", 1, "mt-3", 3, "closed"], [1, "row", "mt-3", "mx-lg-2"], [1, "description-share-title"], ["id", "description", 1, "mt-2"], [1, "row", "mt-5", "px-lg-3"], [1, "col-lg-11", "mx-lg-5", "px-lg-5", "mx-0", "px-0"], [1, "cast-review-title", "mb-2"], [1, "pb-2", "d-flex", "flex-row", "flex-nowrap", "overflow-auto"], ["class", "card card-body p-0 cast-card border-0 mr-lg-4 mr-5", "style", "cursor:pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "card", "card-body", "p-0", "cast-card", "border-0", "mr-lg-4", "mr-5", 2, "cursor", "pointer", 3, "click"], [1, "btn", "cast-img", "p-0", "border-0", 3, "src"], [1, "cast-details", "my-auto"], [1, "pt-2"], [2, "font-weight", "300"], [1, "ml-3", 2, "color", "darkgrey"], ["class", "card card-body review-card mb-4", 4, "ngFor", "ngForOf"], [1, "card", "card-body", "review-card", "mb-4"], [1, "row"], [1, "col-lg-2"], [1, "avatar-img", "rounded-circle", 3, "src"], [1, "col"], [1, "created-by"], [4, "ngIf"], ["class", "rounded-pill rating-icon-div mx-auto pb-1", 4, "ngIf"], [1, "written-by", "mt-4"], [1, "line-clamp", "mt-3", "mb-3"], ["target", "_blank", "rel", "noopener noreferrer", 1, "read-rest-link", 3, "href"], [1, "rounded-pill", "rating-icon-div", "mx-auto", "pb-1"], [1, "rating-icon", "my-auto"], [1, "symbol", "mb-3", "p-2"], [1, "rating", "pr-2"], [1, "row", "mx-lg-1", "my-5"], [1, "col", "mx-lg-5", "my-2", "px-lg-4"], [1, "mx-lg-5", "px-lg-2", "category-title"], [1, "details-carousel", "mx-lg-5", "px-lg-2"], [3, "mediaList"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title", "modal-headings"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-lg-3", "col-12"], [1, "img-fluid", 3, "src"], ["target", "_blank", "rel", "noopener", "placement", "right", "triggers", "mouseenter:mouseleave", "ngbPopover", "Visit IMDB", "style", "color: #f0bd06", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "placement", "top", "triggers", "mouseenter:mouseleave", "ngbPopover", "Visit IMDB", "style", "color: #f0bd06", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "placement", "top", "triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Instagram", "style", "color: #ac4699", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "placement", "top", "triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Facebook", "style", "color:#0027FC", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "placement", "top", "triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Twitter", "style", "color:#1DA1F2", 3, "href", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["target", "_blank", 3, "href"], ["target", "_blank", "rel", "noopener", "placement", "right", "triggers", "mouseenter:mouseleave", "ngbPopover", "Visit IMDB", 2, "color", "#f0bd06", 3, "href"], [1, "icon", "fa-fw", "fab", "fa-imdb", "fa-2x"], ["target", "_blank", "rel", "noopener", "placement", "top", "triggers", "mouseenter:mouseleave", "ngbPopover", "Visit IMDB", 2, "color", "#f0bd06", 3, "href"], ["target", "_blank", "rel", "noopener", "placement", "top", "triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Instagram", 2, "color", "#ac4699", 3, "href"], [1, "icon", "fa-fw", "fab", "fa-instagram", "fa-2x"], ["target", "_blank", "rel", "noopener", "placement", "top", "triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Facebook", 2, "color", "#0027FC", 3, "href"], [1, "icon", "fa-fw", "fab", "fa-facebook-square", "fa-2x"], ["target", "_blank", "rel", "noopener", "placement", "top", "triggers", "mouseenter:mouseleave", "ngbPopover", "Visit Twitter", 2, "color", "#1DA1F2", 3, "href"], [1, "icon", "fa-fw", "fab", "fa-twitter", "fa-2x"], [1, "modal-headings"]], template: function MediaDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MediaDetailsComponent_div_0_Template, 33, 18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MediaDetailsComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayer"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbAlert"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _carousel_cards_carousel_cards_component__WEBPACK_IMPORTED_MODULE_7__["CarouselCardsComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbPopover"]], styles: [".details-container[_ngcontent-%COMP%] {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n}\n  .modal-title {\n  color:black;\n}\n  .modal-body {\n  color: rgb(110, 110, 110);\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 16px;\n}\n   .modal-headings {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 27px;\n  color: black;\n}\n#media_title[_ngcontent-%COMP%] {\n  font-size:45px;\n  line-height: 57px;\n}\n#media_tagline[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-style: italic;\n  color: lightgrey;\n}\n#year-rating[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: lightgrey;\n}\n.description-share-title[_ngcontent-%COMP%] {\n  color:white;\n  font-weight:400;\n  font-size:18px\n}\n  .modal, .modal-open[_ngcontent-%COMP%] {\n  padding-top: 9%;\n}\n#description[_ngcontent-%COMP%] {\n  color:darkgrey;\n  font-weight:300;\n  font-size:18px;\n  text-align:justify\n}\n.cast-review-title[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 400;\n}\n.cast-card[_ngcontent-%COMP%] {\n  background-color: white;\n  color:black;\n  border-radius: 14px 14px 14px 14px;\n  min-width: 165px;\n  max-width: 165px;\n  height: 340px;\n  width:165px;\n}\nimg.btn.cast-img.p-0.border-0[_ngcontent-%COMP%] {\n  border-radius: 14px 14px 0px 0px;\n  width:165px;\n}\n.card.card-body.p-0.card-bg.border-0.mr-4[_ngcontent-%COMP%] {\n  border-radius: 14px;\n  position:relative;\n}\n.cast-details[_ngcontent-%COMP%] {\n  color: black;\n  text-align: center;\n  font-weight: 700;\n  font-size: 13px;\n  position:absolute;\n  min-width: 165px;\n  width:165px;\n  bottom: 0;\n  background-color: white;\n  border-radius: 0px 0px 14px 14px;\n}\n.line-clamp[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  font-size: 15px;\n}\n.avatar-img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  max-height: 100px;\n}\n.created-by[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 400;\n}\n.written-by[_ngcontent-%COMP%] {\n  color: rgb(161, 159, 159);\n}\n.review-card[_ngcontent-%COMP%] {\n  background-color: white;\n  color:black;\n  border-radius: 14px 14px 14px 14px;\n}\n.rating-icon-div[_ngcontent-%COMP%] {\n  background-color: black;\n  font-size: 24px;\n}\n.rating-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n}\n.rating[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.read-rest-link[_ngcontent-%COMP%] {\n  color: #1D185A;\n  font-weight: 400;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 6px;\n  outline: 2px solid slategrey;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(175, 175, 175, 0.45);\n  border-radius: 10px;\n  outline: 2px solid slategrey;\n\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: darkgrey;\n  border-radius: 10px;\n}\n.category-title[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGlhLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QiwwQ0FBMEM7RUFDMUMsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsY0FBYztFQUNkO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxtREFBbUQ7RUFDbkQsbUJBQW1CO0VBQ25CLDRCQUE0Qjs7QUFFOUI7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoibWVkaWEtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZGV0YWlscy1jb250YWluZXIge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG46Om5nLWRlZXAgLm1vZGFsLXRpdGxlIHtcbiAgY29sb3I6YmxhY2s7XG59XG46Om5nLWRlZXAgLm1vZGFsLWJvZHkge1xuICBjb2xvcjogcmdiKDExMCwgMTEwLCAxMTApO1xuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbjo6bmctZGVlcCAgLm1vZGFsLWhlYWRpbmdzIHtcbiAgZm9udC1mYW1pbHk6ICdTb3VyY2UgU2FucyBQcm8nLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI3cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbiNtZWRpYV90aXRsZSB7XG4gIGZvbnQtc2l6ZTo0NXB4O1xuICBsaW5lLWhlaWdodDogNTdweDtcbn1cbiNtZWRpYV90YWdsaW5lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG59XG4jeWVhci1yYXRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG59XG4uZGVzY3JpcHRpb24tc2hhcmUtdGl0bGUge1xuICBjb2xvcjp3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6NDAwO1xuICBmb250LXNpemU6MThweFxufVxuOjpuZy1kZWVwIC5tb2RhbCwgLm1vZGFsLW9wZW4ge1xuICBwYWRkaW5nLXRvcDogOSU7XG59XG4jZGVzY3JpcHRpb24ge1xuICBjb2xvcjpkYXJrZ3JleTtcbiAgZm9udC13ZWlnaHQ6MzAwO1xuICBmb250LXNpemU6MThweDtcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5XG59XG4uY2FzdC1yZXZpZXctdGl0bGUge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uY2FzdC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOmJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxNHB4IDE0cHggMTRweCAxNHB4O1xuICBtaW4td2lkdGg6IDE2NXB4O1xuICBtYXgtd2lkdGg6IDE2NXB4O1xuICBoZWlnaHQ6IDM0MHB4O1xuICB3aWR0aDoxNjVweDtcbn1cbmltZy5idG4uY2FzdC1pbWcucC0wLmJvcmRlci0wIHtcbiAgYm9yZGVyLXJhZGl1czogMTRweCAxNHB4IDBweCAwcHg7XG4gIHdpZHRoOjE2NXB4O1xufVxuLmNhcmQuY2FyZC1ib2R5LnAtMC5jYXJkLWJnLmJvcmRlci0wLm1yLTQge1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbn1cbi5jYXN0LWRldGFpbHMge1xuICBjb2xvcjogYmxhY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgbWluLXdpZHRoOiAxNjVweDtcbiAgd2lkdGg6MTY1cHg7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTRweCAxNHB4O1xufVxuLmxpbmUtY2xhbXAge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uYXZhdGFyLWltZyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xufVxuLmNyZWF0ZWQtYnkge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4ud3JpdHRlbi1ieSB7XG4gIGNvbG9yOiByZ2IoMTYxLCAxNTksIDE1OSk7XG59XG4ucmV2aWV3LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6YmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHggMTRweCAxNHB4IDE0cHg7XG59XG4ucmF0aW5nLWljb24tZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5yYXRpbmctaWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnJhdGluZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5yZWFkLXJlc3QtbGluayB7XG4gIGNvbG9yOiAjMUQxODVBO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIG91dGxpbmU6IDJweCBzb2xpZCBzbGF0ZWdyZXk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMTc1LCAxNzUsIDE3NSwgMC40NSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG91dGxpbmU6IDJweCBzb2xpZCBzbGF0ZWdyZXk7XG5cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmNhdGVnb3J5LXRpdGxlIHtcbiAgZm9udC1zaXplOiAzNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cblxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "page-footer"], ["id", "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Powered by TMDB. Developed by Simran Thomas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%] {\n    background-color: #020B1D;\n    width: 100%;\n    margin:0;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxRQUFRO0lBQ1Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyMEIxRDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46MDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "P6f9":
/*!***********************************************************************!*\
  !*** ./src/app/components/carousel-cards/carousel-cards.component.ts ***!
  \***********************************************************************/
/*! exports provided: CarouselCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselCardsComponent", function() { return CarouselCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





const _c0 = ["carousel"];
function CarouselCardsComponent_ngb_carousel_1_2_ng_template_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselCardsComponent_ngb_carousel_1_2_ng_template_0_div_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const img_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r10.getDetails(img_r8.media_type, img_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r8.image_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r8.title);
} }
function CarouselCardsComponent_ngb_carousel_1_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselCardsComponent_ngb_carousel_1_2_ng_template_0_div_1_div_1_Template, 6, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r7.isMobile);
} }
function CarouselCardsComponent_ngb_carousel_1_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselCardsComponent_ngb_carousel_1_2_ng_template_0_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r4);
} }
function CarouselCardsComponent_ngb_carousel_1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselCardsComponent_ngb_carousel_1_2_ng_template_0_Template, 2, 1, "ng-template", 6);
} }
function CarouselCardsComponent_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselCardsComponent_ngb_carousel_1_2_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.groupMedia);
} }
function CarouselCardsComponent_ngb_carousel_2_2_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselCardsComponent_ngb_carousel_2_2_ng_template_0_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const img_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.getDetails(img_r17.media_type, img_r17.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r17.image_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](img_r17.title);
} }
function CarouselCardsComponent_ngb_carousel_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselCardsComponent_ngb_carousel_2_2_ng_template_0_div_0_Template, 6, 2, "div", 16);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.isMobile);
} }
function CarouselCardsComponent_ngb_carousel_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselCardsComponent_ngb_carousel_2_2_ng_template_0_Template, 1, 1, "ng-template", 6);
} }
function CarouselCardsComponent_ngb_carousel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 15, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselCardsComponent_ngb_carousel_2_2_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", 0)("showNavigationIndicators", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mediaList);
} }
class CarouselCardsComponent {
    constructor(breakpointObserver, _router) {
        this.breakpointObserver = breakpointObserver;
        this._router = _router;
        this.groupMedia = [];
        this.singleGroup = [];
        this.emptyMedia = { "id": 0, "title": "", "image_path": "" };
        this.isMobile = false;
    }
    ngOnChanges() {
        var j = 0;
        for (var i = 0; i < this.mediaList.length; i++) {
            if (i != 0 && j % 6 == 0) {
                this.groupMedia.push(this.singleGroup);
                this.singleGroup = [];
                this.singleGroup.push(this.mediaList[i]);
                j = 1;
            }
            else {
                this.singleGroup.push(this.mediaList[i]);
                j++;
            }
        }
        if (this.singleGroup.length != 0) {
            while (this.singleGroup.length != 6) {
                this.singleGroup.push(this.emptyMedia);
            }
            this.groupMedia.push(this.singleGroup);
        }
    }
    ngOnInit() {
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');
    }
    getDetails(mediaType, mediaId) {
        if (mediaType == "movie") {
            this._router.navigate(['/watch/movie/', mediaId]);
        }
        else if (mediaType == "tv") {
            this._router.navigate(['/watch/tv/', mediaId]);
        }
    }
}
CarouselCardsComponent.ɵfac = function CarouselCardsComponent_Factory(t) { return new (t || CarouselCardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CarouselCardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselCardsComponent, selectors: [["app-carousel-cards"]], viewQuery: function CarouselCardsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, inputs: { mediaList: "mediaList" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[1, "main-card-carousel", "m-4"], ["class", "carousel-main", 3, "interval", 4, "ngIf"], ["class", "carousel-mobile", 3, "interval", "showNavigationIndicators", 4, "ngIf"], [1, "carousel-main", 3, "interval"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "mb-2", "row", "pb-5"], ["ngbSlide", "", "class", "col px-1", "style", "cursor: pointer", 4, "ngFor", "ngForOf"], ["ngbSlide", "", 1, "col", "px-1", 2, "cursor", "pointer"], ["class", "card-item desktop-item", 3, "click", 4, "ngIf"], [1, "card-item", "desktop-item", 3, "click"], [1, "btn"], [1, "img-fluid", "poster-img", 3, "src"], [1, "carousel-caption", "caption-text"], [1, "carousel-mobile", 3, "interval", "showNavigationIndicators"], ["class", "row card-item mobile-item m-3 p-1", "style", "cursor: pointer", 3, "click", 4, "ngIf"], [1, "row", "card-item", "mobile-item", "m-3", "p-1", 2, "cursor", "pointer", 3, "click"]], template: function CarouselCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarouselCardsComponent_ngb_carousel_1_Template, 3, 2, "ngb-carousel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CarouselCardsComponent_ngb_carousel_2_Template, 3, 3, "ngb-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]], styles: [".card {\n  background-color: rgb(0,0,0,0);\n}\n[_nghost-%COMP%]     .carousel-control-prev {\n  left: -50px;\n  bottom: 50px;\n}\n[_nghost-%COMP%]     .carousel-control-next {\n  right: -50px;\n  bottom: 50px;\n}\n  a.carousel-control-prev {\n  width: 5%;\n}\n  a.carousel-control-next {\n  width: 5%;\n}\n*[_ngcontent-%COMP%] {\n  outline :none;\n}\n\n.card-item[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: relative;\n}\n.desktop-item[_ngcontent-%COMP%]:hover:before {\n  height: 90%;\n}\n.card-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.09);\n}\n.desktop-item[_ngcontent-%COMP%]:hover   .caption-text[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.desktop-item[_ngcontent-%COMP%]    > .caption-text[_ngcontent-%COMP%] {\n  opacity:0;\n}\n.carousel-caption[_ngcontent-%COMP%] {\n  bottom: -18px !important;\n  font-size: 15px;\n  text-align: left;\n}\n.mobile-item[_ngcontent-%COMP%]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  bottom: 1%;\n  background: linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 81%);\n  height: 90%;\n  width: 88%;\n  left: 5.7%;\n}\n.desktop-item[_ngcontent-%COMP%]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  background: linear-gradient(transparent, rgba(0,0,0,0.3) 45%, rgba(0,0,0,1) 81%);\n  width: 87.5%;\n  left: 6%;\n  bottom: 2%;\n}\n  .carousel-mobile > .carousel-control-prev {\n  left: -20px;\n  width: 7%;\n  bottom: -4px;\n}\n  .carousel-mobile > .carousel-control-next {\n  right: -20px;\n  width: 7%;\n  bottom: -4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLWNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0ZBQWdGO0VBQ2hGLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnRkFBZ0Y7RUFDaEYsWUFBWTtFQUNaLFFBQVE7RUFDUixVQUFVO0FBQ1o7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7QUFDZCIsImZpbGUiOiJjYXJvdXNlbC1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDApO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBsZWZ0OiAtNTBweDtcbiAgYm90dG9tOiA1MHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5jYXJvdXNlbC1jb250cm9sLW5leHQge1xuICByaWdodDogLTUwcHg7XG4gIGJvdHRvbTogNTBweDtcbn1cbjo6bmctZGVlcCBhLmNhcm91c2VsLWNvbnRyb2wtcHJldiB7XG4gIHdpZHRoOiA1JTtcbn1cbjo6bmctZGVlcCBhLmNhcm91c2VsLWNvbnRyb2wtbmV4dCB7XG4gIHdpZHRoOiA1JTtcbn1cblxuKiB7XG4gIG91dGxpbmUgOm5vbmU7XG59XG5cbi8qKioqKioqSE9WRVIgKioqKioqKi9cbi5jYXJkLWl0ZW0ge1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGVza3RvcC1pdGVtOmhvdmVyOmJlZm9yZSB7XG4gIGhlaWdodDogOTAlO1xufVxuLmNhcmQtaXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG59XG4uZGVza3RvcC1pdGVtOmhvdmVyIC5jYXB0aW9uLXRleHQge1xuICBvcGFjaXR5OiAxO1xufVxuLmRlc2t0b3AtaXRlbSA+IC5jYXB0aW9uLXRleHQge1xuICBvcGFjaXR5OjA7XG59XG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIGJvdHRvbTogLTE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1vYmlsZS1pdGVtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDElO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwwLDAsMC4zKSA0NSUsIHJnYmEoMCwwLDAsMSkgODElKTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA4OCU7XG4gIGxlZnQ6IDUuNyU7XG59XG4uZGVza3RvcC1pdGVtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwwLDAsMC4zKSA0NSUsIHJnYmEoMCwwLDAsMSkgODElKTtcbiAgd2lkdGg6IDg3LjUlO1xuICBsZWZ0OiA2JTtcbiAgYm90dG9tOiAyJTtcbn1cblxuOjpuZy1kZWVwIC5jYXJvdXNlbC1tb2JpbGUgPiAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgbGVmdDogLTIwcHg7XG4gIHdpZHRoOiA3JTtcbiAgYm90dG9tOiAtNHB4O1xufVxuOjpuZy1kZWVwIC5jYXJvdXNlbC1tb2JpbGUgPiAuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgcmlnaHQ6IC0yMHB4O1xuICB3aWR0aDogNyU7XG4gIGJvdHRvbTogLTRweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");




class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [[1, "main-class"], [1, "mt-4"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".main-class[_ngcontent-%COMP%]\n{\n  min-height: calc(100vh - 50px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNsYXNzXG57XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_navbar_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/search/search.component */ "bMUz");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "zcMl");
/* harmony import */ var _components_media_details_media_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/media-details/media-details.component */ "8Fux");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/carousel/carousel.component */ "qUJ1");
/* harmony import */ var _components_carousel_cards_carousel_cards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/carousel-cards/carousel-cards.component */ "P6f9");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__["YouTubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_navbar_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
        _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_8__["WatchlistComponent"],
        _components_media_details_media_details_component__WEBPACK_IMPORTED_MODULE_9__["MediaDetailsComponent"],
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"],
        _components_carousel_cards_carousel_cards_component__WEBPACK_IMPORTED_MODULE_13__["CarouselCardsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_14__["YouTubePlayerModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetComponentScope"](_components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"], [_components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_12__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _components_carousel_cards_carousel_cards_component__WEBPACK_IMPORTED_MODULE_13__["CarouselCardsComponent"]], []);


/***/ }),

/***/ "bMUz":
/*!**************************************************************!*\
  !*** ./src/app/components/navbar/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/fetch-data.service */ "mTci");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







function SearchComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngb-highlight", 5);
} if (rf & 2) {
    const r_r3 = ctx.result;
    const t_r4 = ctx.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://image.tmdb.org/t/p/w500" + r_r3["backdrop_path"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("result", r_r3.title)("term", t_r4);
} }
class SearchComponent {
    constructor(service, _router) {
        this.service = service;
        this._router = _router;
        this.searching = false;
        this.searchFailed = false;
        this.onSearching = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.search = (text$) => {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(200), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((searchText) => this.service.getAutocompleteData(searchText)));
        };
    }
    setMenuCollapsed() {
        this.onSearching.emit(true);
    }
    inputFormatBandListValue(value) {
        return '';
    }
    selectedItem(media) {
        let mediaId = media.item['id'];
        let mediaType = media.item['media_type'];
        this.setMenuCollapsed();
        this._router.navigate(['/watch/', mediaType, mediaId]);
    }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_2__["FetchDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], outputs: { onSearching: "onSearching" }, decls: 5, vars: 3, consts: [["searchResultTemplate", ""], [1, "form-inline"], ["id", "search-input", "type", "text", "placeholder", "Search", "aria-label", "Search", 1, "form-control", 3, "ngbTypeahead", "resultTemplate", "inputFormatter", "selectItem"], ["instance", "ngbTypeahead"], [1, "mr-1", 2, "width", "70px", 3, "src"], [3, "result", "term"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchComponent_ng_template_0_Template, 2, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectItem", function SearchComponent_Template_input_selectItem_3_listener($event) { return ctx.selectedItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTypeahead", ctx.search)("resultTemplate", _r0)("inputFormatter", ctx.inputFormatBandListValue);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbHighlight"]], styles: ["#search-input[_ngcontent-%COMP%] {\n  background-color: #020B1D;\n  border-width: 0 0 2px;\n  border-radius: 0px;\n  color:white;\n}\n\n  .dropdown-menu.show {\n  background-color: #040730;\n}\n\n  ngb-highlight {\n  color:white;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline :5px solid #020B1D;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlYXJjaC1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjBCMUQ7XG4gIGJvcmRlci13aWR0aDogMCAwIDJweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIC5kcm9wZG93bi1tZW51LnNob3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwNzMwO1xufVxuOjpuZy1kZWVwIG5nYi1oaWdobGlnaHQge1xuICBjb2xvcjp3aGl0ZTtcbn1cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZSA6NXB4IHNvbGlkICMwMjBCMUQ7XG59XG4iXX0= */"] });


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "bMUz");




const _c0 = function () { return { exact: true }; };
class NavbarComponent {
    constructor() {
        this.isMenuCollapsed = true;
    }
    toggleNavbar() {
        this.isMenuCollapsed = !this.isMenuCollapsed;
    }
    setMenuCollapsedNav(val) {
        this.isMenuCollapsed = true;
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 14, vars: 6, consts: [[1, "navbar", "fixed-top", "navbar-expand-lg", "navbar-dark", "justify-content-between"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active current", 1, "nav-item", 3, "routerLinkActiveOptions"], [1, "nav-link", 3, "routerLink", "click"], ["routerLinkActive", "active current", 1, "nav-item"], [3, "onSearching"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "USC Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_8_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() { return ctx.isMenuCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-search", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSearching", function NavbarComponent_Template_app_search_onSearching_13_listener() { return ctx.setMenuCollapsedNav(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isMenuCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/mylist");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n    background-color: #020B1D;\n    padding: 10px 50px 10px 50px;\n    outline: none;\n    font-size: 90%;\n}\n.nav-item[_ngcontent-%COMP%] {\n    text-align: right;\n    margin: 0px 10px 0px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjBCMUQ7XG4gICAgcGFkZGluZzogMTBweCA1MHB4IDEwcHggNTBweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGZvbnQtc2l6ZTogOTAlO1xufVxuLm5hdi1pdGVtIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "kHmC":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/fetch-data.service */ "mTci");


function HomepageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue Watching");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-carousel-cards", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaList", ctx_r0.continueWatchingLRU);
} }
class HomepageComponent {
    constructor(service) {
        this.service = service;
        this.carouselMovies = [];
        this.popularTv = [];
        this.popularMovies = [];
        this.topRatedTv = [];
        this.topRatedMovies = [];
        this.trendingTv = [];
        this.trendingMovies = [];
        this.continueWatchingLRU = [];
        this.isContinueWatchingEmpty = true;
        this.isLoading = true;
    }
    ngOnInit() {
        this.continueWatching = JSON.parse(localStorage.getItem('ContinueWatching'));
        if (this.continueWatching == null)
            this.isContinueWatchingEmpty = true;
        else {
            this.isContinueWatchingEmpty = false;
            this.continueWatchingLRU = this.continueWatching.reverse();
        }
        this.service.getHomepageData()
            .subscribe((data) => {
            this.carouselMovies = data['carousel_movies'].slice(0, 5);
            this.popularTv = data['popular_tv'];
            this.popularMovies = data['popular_movies'];
            this.topRatedTv = data['top_rated_tv'];
            this.topRatedMovies = data['top_rated_movies'];
            this.trendingTv = data['trending_tv'];
            this.trendingMovies = data['trending_movies'];
        });
        this.isLoading = false;
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_fetch_data_service__WEBPACK_IMPORTED_MODULE_1__["FetchDataService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 26, vars: 8, consts: [[3, "mediaList"], ["class", "category-carousel-container mt-1", 4, "ngIf"], [1, "category-carousel-container"], [1, "category-title", "mx-4", "px-2", "mt-4"], [1, "category-carousel-container", "mt-1"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomepageComponent_div_1_Template, 4, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Popular Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-carousel-cards", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Top Rated Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-carousel-cards", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Trending Movies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-carousel-cards", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Popular TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-carousel-cards", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Top Rated TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-carousel-cards", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Trending TV Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-carousel-cards", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaList", ctx.carouselMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isContinueWatchingEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaList", ctx.popularMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaList", ctx.topRatedMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaList", ctx.trendingMovies);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaList", ctx.popularTv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaList", ctx.topRatedTv);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mediaList", ctx.trendingTv);
    } }, styles: [".category-title[_ngcontent-%COMP%] {\n  font-size: 33px;\n  font-weight: 600;\n}\n\n.category-carousel-container[_ngcontent-%COMP%] {\n  margin: 1% 8% 1% 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnktdGl0bGUge1xuICBmb250LXNpemU6IDMzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jYXRlZ29yeS1jYXJvdXNlbC1jb250YWluZXIge1xuICBtYXJnaW46IDElIDglIDElIDglO1xufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ "mTci":
/*!************************************************!*\
  !*** ./src/app/services/fetch-data.service.ts ***!
  \************************************************/
/*! exports provided: FetchDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataService", function() { return FetchDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class FetchDataService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.apiURLHomepage = "https://the-movie-db-simranthomas.wl.r.appspot.com/api/homepage";
        this.apiURLMediaDetails = "https://the-movie-db-simranthomas.wl.r.appspot.com/api/media_details?mediaType=";
        this.apiURLCastDetails = "https://the-movie-db-simranthomas.wl.r.appspot.com/api/cast_details?personId=";
        this.apiURLAutocomplete = "https://the-movie-db-simranthomas.wl.r.appspot.com/api/autocomplete?searchQuery=";
    }
    getHomepageData() {
        var response = this.httpclient.get(this.apiURLHomepage);
        return response;
    }
    getMediaDetailsData(mediaType, mediaId) {
        var response = this.httpclient.get(this.apiURLMediaDetails + mediaType + '&id=' + mediaId);
        return response;
    }
    getCastDetailsData(personId) {
        var response = this.httpclient.get(this.apiURLCastDetails + personId);
        return response;
    }
    getAutocompleteData(query) {
        var response = this.httpclient.get(this.apiURLAutocomplete + query);
        return response;
    }
}
FetchDataService.ɵfac = function FetchDataService_Factory(t) { return new (t || FetchDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FetchDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FetchDataService, factory: FetchDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qUJ1":
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






const _c0 = ["carousel"];
function CarouselComponent_div_0_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", img_r4.media_type, "/", img_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](img_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", img_r4.media_type, "/", img_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r4.image_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_div_0_3_ng_template_0_Template, 6, 6, "ng-template", 6);
} }
function CarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-carousel", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function CarouselComponent_div_0_Template_ngb_carousel_slide_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_div_0_3_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("interval", 5000)("pauseOnHover", ctx_r0.pauseOnHover)("pauseOnFocus", ctx_r0.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.mediaList);
} }
function CarouselComponent_div_1_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", img_r11.media_type, "/", img_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](img_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/watch/", img_r11.media_type, "/", img_r11.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", img_r11.image_path, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_div_1_3_ng_template_0_Template, 6, 6, "ng-template", 6);
} }
function CarouselComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ngb-carousel", 13, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("slide", function CarouselComponent_div_1_Template_ngb_carousel_slide_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.onSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CarouselComponent_div_1_3_Template, 1, 0, undefined, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", false)("interval", 5000)("pauseOnHover", ctx_r1.pauseOnHover)("pauseOnFocus", ctx_r1.pauseOnFocus);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.mediaList);
} }
class CarouselComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.paused = false;
        this.unpauseOnArrow = false;
        this.pauseOnIndicator = false;
        this.pauseOnHover = true;
        this.pauseOnFocus = true;
        this.isMobile = false;
    }
    togglePaused() {
        if (this.paused) {
            this.carousel.cycle();
        }
        else {
            this.carousel.pause();
        }
        this.paused = !this.paused;
    }
    onSlide(slideEvent) {
        if (this.unpauseOnArrow && slideEvent.paused &&
            (slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_LEFT || slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].ARROW_RIGHT)) {
            this.togglePaused();
        }
        if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlideEventSource"].INDICATOR) {
            this.togglePaused();
        }
    }
    ngOnInit() {
        this.isMobile = this.breakpointObserver.isMatched('(max-width: 599px)');
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"])); };
CarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], viewQuery: function CarouselComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.carousel = _t.first);
    } }, inputs: { mediaList: "mediaList" }, decls: 2, vars: 2, consts: [["class", "main-carousel mx-auto mt-5 pt-lg-4 pt-5", 4, "ngIf"], ["class", "main-carousel-mobile mt-5 pt-4 mr-2 ml-4 pl-2", 4, "ngIf"], [1, "main-carousel", "mx-auto", "mt-5", "pt-lg-4", "pt-5"], [3, "interval", "pauseOnHover", "pauseOnFocus", "slide"], ["carousel", ""], [4, "ngFor", "ngForOf"], ["ngbSlide", ""], [1, "carousel-caption", "caption-text-desktop", 2, "cursor", "pointer", 3, "routerLink"], [1, "text-desktop"], [2, "cursor", "pointer", 3, "routerLink"], [1, "picsum-img-wrapper"], [1, "main-carousel-backdrop-img", 3, "src"], [1, "main-carousel-mobile", "mt-5", "pt-4", "mr-2", "ml-4", "pl-2"], [3, "showNavigationIndicators", "interval", "pauseOnHover", "pauseOnFocus", "slide"], [1, "carousel-caption", "caption-text-mobile", 2, "cursor", "pointer", 3, "routerLink"], [1, "picsum-img-wrapper", "mt-3"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 4, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarouselComponent_div_1_Template, 4, 5, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_0__["NgbSlide"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".main-carousel[_ngcontent-%COMP%] {\n  width: 70%;\n  height:360px;\n  overflow: hidden;\n}\n.main-carousel-mobile[_ngcontent-%COMP%] {\n  width: 85%;\n  height: 100%;\n  overflow: hidden;\n}\n.main-carousel-mobile[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\n  transform: scale(1.1);\n}\n.main-carousel-mobile[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%]{\n  transform: scale(1.1);\n}\n.carousel-caption[_ngcontent-%COMP%] {\n  opacity: 0;\n  background: linear-gradient(to top, black 36%,rgb(0,0,0,0));\n  margin-left: -9.5em;\n  width: 101%;\n  padding: 13% 0% 0% 6%;\n  margin-bottom: 11em;\n  height: 36%;\n  \n}\n.caption-text-desktop[_ngcontent-%COMP%] {\n  bottom: 35px;\n}\n.caption-text-mobile[_ngcontent-%COMP%] {\n  opacity: 1;\n  background: linear-gradient(to top, black 36%,rgb(0,0,0,0));\n  margin-left: -3.5em;\n  width: 105%;\n  padding: 11% 4% 4% 13%;\n  margin-bottom: -20px;\n  height: 42%;\n  text-align: left;\n}\np[_ngcontent-%COMP%] {\n  text-align:left;\n}\n.main-carousel-backdrop-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.main-carousel[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.main-carousel[_ngcontent-%COMP%]:hover   .carousel-caption[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n  ngb-carousel {\n  max-height: 100%;\n  outline: none;\n}\n  a.carousel-control-prev {\n  width: 5%;\n}\n  a.carousel-control-next {\n  width: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMkRBQTJEO0VBQzNELG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXOztBQUViO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDViwyREFBMkQ7RUFDM0QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6ImNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jYXJvdXNlbCB7XG4gIHdpZHRoOiA3MCU7XG4gIGhlaWdodDozNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLWNhcm91c2VsLW1vYmlsZSB7XG4gIHdpZHRoOiA4NSU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5tYWluLWNhcm91c2VsLW1vYmlsZTpob3ZlciBpbWd7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cbi5tYWluLWNhcm91c2VsLW1vYmlsZTpob3ZlciAuY2Fyb3VzZWwtY2FwdGlvbntcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuLmNhcm91c2VsLWNhcHRpb24ge1xuICBvcGFjaXR5OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjayAzNiUscmdiKDAsMCwwLDApKTtcbiAgbWFyZ2luLWxlZnQ6IC05LjVlbTtcbiAgd2lkdGg6IDEwMSU7XG4gIHBhZGRpbmc6IDEzJSAwJSAwJSA2JTtcbiAgbWFyZ2luLWJvdHRvbTogMTFlbTtcbiAgaGVpZ2h0OiAzNiU7XG4gIFxufVxuLmNhcHRpb24tdGV4dC1kZXNrdG9wIHtcbiAgYm90dG9tOiAzNXB4O1xufVxuLmNhcHRpb24tdGV4dC1tb2JpbGUge1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjayAzNiUscmdiKDAsMCwwLDApKTtcbiAgbWFyZ2luLWxlZnQ6IC0zLjVlbTtcbiAgd2lkdGg6IDEwNSU7XG4gIHBhZGRpbmc6IDExJSA0JSA0JSAxMyU7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xuICBoZWlnaHQ6IDQyJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbnAge1xuICB0ZXh0LWFsaWduOmxlZnQ7XG59XG5cbi5tYWluLWNhcm91c2VsLWJhY2tkcm9wLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbi1jYXJvdXNlbDpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuLm1haW4tY2Fyb3VzZWw6aG92ZXIgLmNhcm91c2VsLWNhcHRpb24ge1xuICBvcGFjaXR5OiAxO1xufVxuXG46Om5nLWRlZXAgbmdiLWNhcm91c2VsIHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuOjpuZy1kZWVwIGEuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgd2lkdGg6IDUlO1xufVxuOjpuZy1kZWVwIGEuY2Fyb3VzZWwtY29udHJvbC1uZXh0IHtcbiAgd2lkdGg6IDUlO1xufVxuIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_media_details_media_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/media-details/media-details.component */ "8Fux");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "zcMl");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "kHmC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__["HomepageComponent"] },
    { path: 'watch/:mediaType/:id', component: _components_media_details_media_details_component__WEBPACK_IMPORTED_MODULE_0__["MediaDetailsComponent"] },
    { path: 'mylist', component: _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_1__["WatchlistComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zcMl":
/*!*************************************************************!*\
  !*** ./src/app/components/watchlist/watchlist.component.ts ***!
  \*************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function WatchlistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My WatchList");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No items found in Watchlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WatchlistComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchlistComponent_div_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.getDetails(item_r3.media_type, item_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
} }
function WatchlistComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WatchlistComponent_div_5_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.getDetails(item_r3.media_type, item_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r3.image_path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.title);
} }
function WatchlistComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchlistComponent_div_5_div_1_Template, 6, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchlistComponent_div_5_div_2_Template, 6, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isMobile);
} }
class WatchlistComponent {
    constructor(breakpoint, _router) {
        this.breakpoint = breakpoint;
        this._router = _router;
        this.isWatchListEmpty = true;
        this.isMobile = false;
    }
    ngOnInit() {
        this.isMobile = this.breakpoint.isMatched('(max-width: 600px)');
        this.watchList = JSON.parse(localStorage.getItem("WatchList"));
        if (this.watchList == null || this.watchList.length == 0)
            this.isWatchListEmpty = true;
        else {
            this.watchlistLRU = this.watchList.reverse();
            this.isWatchListEmpty = false;
        }
    }
    updateWatchList(mediaId) {
        let watchlist = JSON.parse(localStorage.getItem('WatchList'));
        let mediaObject;
        watchlist.forEach((item, index) => {
            if (item.id == mediaId) {
                mediaObject = item;
                watchlist.splice(index, 1);
            }
        });
        watchlist.push(mediaObject);
        localStorage.setItem('WatchList', JSON.stringify(watchlist));
    }
    getDetails(mediaType, mediaId) {
        this.updateWatchList(mediaId);
        if (mediaType == "movie") {
            this._router.navigate(['/watch/movie/', mediaId]);
        }
        else if (mediaType == "tv") {
            this._router.navigate(['/watch/tv/', mediaId]);
        }
    }
}
WatchlistComponent.ɵfac = function WatchlistComponent_Factory(t) { return new (t || WatchlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
WatchlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchlistComponent, selectors: [["app-watchlist"]], decls: 6, vars: 3, consts: [[1, "container", "mt-5", "pt-5"], ["class", "watchlist-heading pt-lg-4 pt-2", 4, "ngIf"], ["style", "text-align:center", "class", "watchlist-heading pt-lg-4 pt-2", 4, "ngIf"], [1, "container", "mx-0", "px-5", "px-lg-0"], [1, "row", "mx-auto"], ["class", "col-lg-2 px-2 py-5", "style", "cursor: pointer", 4, "ngFor", "ngForOf"], [1, "watchlist-heading", "pt-lg-4", "pt-2"], [1, "watchlist-heading", "pt-lg-4", "pt-2", 2, "text-align", "center"], [1, "col-lg-2", "px-2", "py-5", 2, "cursor", "pointer"], ["class", "watchlist-item mobile-item", 3, "click", 4, "ngIf"], ["class", "watchlist-item desktop-item", 3, "click", 4, "ngIf"], [1, "watchlist-item", "mobile-item", 3, "click"], [1, "btn"], [1, "img-fluid", "poster-img", 3, "src"], [1, "carousel-caption", "caption-text"], [1, "watchlist-item", "desktop-item", 3, "click"]], template: function WatchlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchlistComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchlistComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WatchlistComponent_div_5_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isWatchListEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isWatchListEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.watchlistLRU);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".watchlist-heading[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.watchlist-item[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: relative;\n}\n.desktop-item[_ngcontent-%COMP%]:hover:before {\n  height: 90%;\n}\n.watchlist-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.09);\n}\n.desktop-item[_ngcontent-%COMP%]:hover   .caption-text[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.desktop-item[_ngcontent-%COMP%]    > .caption-text[_ngcontent-%COMP%] {\n  opacity:0;\n}\n.carousel-caption[_ngcontent-%COMP%] {\n  bottom: -18px !important;\n  font-size: 15px;\n}\n.mobile-item[_ngcontent-%COMP%]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 90%;\n  width: 92%;\n  left: 4%;\n  bottom: 1%;\n  background: linear-gradient(transparent, rgba(0,0,0,0.3) 47%, rgba(0,0,0,1) 81%);\n}\n.desktop-item[_ngcontent-%COMP%]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  height: 0%;\n  width: 86%;\n  left: 7%;\n  bottom: 3%;\n  background: linear-gradient(transparent, rgba(0,0,0,0.3) 47%, rgba(0,0,0,1) 81%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGNobGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdGQUFnRjtBQUNsRjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdGQUFnRjtBQUNsRiIsImZpbGUiOiJ3YXRjaGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXRjaGxpc3QtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cbi53YXRjaGxpc3QtaXRlbSB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kZXNrdG9wLWl0ZW06aG92ZXI6YmVmb3JlIHtcbiAgaGVpZ2h0OiA5MCU7XG59XG4ud2F0Y2hsaXN0LWl0ZW06aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xufVxuLmRlc2t0b3AtaXRlbTpob3ZlciAuY2FwdGlvbi10ZXh0IHtcbiAgb3BhY2l0eTogMTtcbn1cbi5kZXNrdG9wLWl0ZW0gPiAuY2FwdGlvbi10ZXh0IHtcbiAgb3BhY2l0eTowO1xufVxuLmNhcm91c2VsLWNhcHRpb24ge1xuICBib3R0b206IC0xOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tb2JpbGUtaXRlbTpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHdpZHRoOiA5MiU7XG4gIGxlZnQ6IDQlO1xuICBib3R0b206IDElO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwwLDAsMC4zKSA0NyUsIHJnYmEoMCwwLDAsMSkgODElKTtcbn1cbi5kZXNrdG9wLWl0ZW06YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMCU7XG4gIHdpZHRoOiA4NiU7XG4gIGxlZnQ6IDclO1xuICBib3R0b206IDMlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQsIHJnYmEoMCwwLDAsMC4zKSA0NyUsIHJnYmEoMCwwLDAsMSkgODElKTtcbn1cblxuIl19 */"] });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map