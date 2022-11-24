(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, pageProps);
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/error */ "next/error");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\fcal\u0131s\\Desktop\\online infinity testcase\\my-project\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const MyApp = ({
  Component,
  pageProps
}) => {
  var _favicon$data, _favicon$data$attribu, _metadata$shareImage$;

  // Extract the data we need
  const {
    global
  } = pageProps;

  if (global == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_3___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, undefined);
  }

  const {
    metadata,
    favicon,
    metaTitleSuffix
  } = (global === null || global === void 0 ? void 0 : global.attributes) || {};
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: favicon && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,utils_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(favicon === null || favicon === void 0 ? void 0 : (_favicon$data = favicon.data) === null || _favicon$data === void 0 ? void 0 : (_favicon$data$attribu = _favicon$data.attributes) === null || _favicon$data$attribu === void 0 ? void 0 : _favicon$data$attribu.url)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), metadata && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_5__.DefaultSeo, _objectSpread(_objectSpread({
      titleTemplate: `%s | ${metaTitleSuffix}`,
      title: "Page",
      description: metadata.metaDescription
    }, metadata.shareImage.data && {
      openGraph: {
        images: Object.values((_metadata$shareImage$ = metadata.shareImage.data) === null || _metadata$shareImage$ === void 0 ? void 0 : _metadata$shareImage$.attributes.formats).map(image => {
          return {
            url: (0,utils_media__WEBPACK_IMPORTED_MODULE_6__.getStrapiMedia)(image.url),
            width: image.width,
            height: image.height
          };
        })
      }
    }), {}, {
      twitter: {
        cardType: metadata.twitterCardType,
        handle: metadata.twitterUsername
      }
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


MyApp.getInitialProps = async appContext => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(appContext);
  const globalLocale = await (0,utils_api__WEBPACK_IMPORTED_MODULE_7__.getGlobalData)(appContext.router.locale);
  return _objectSpread(_objectSpread({}, appProps), {}, {
    pageProps: {
      global: globalLocale
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; },
/* harmony export */   "getPageData": function() { return /* binding */ getPageData; },
/* harmony export */   "getGlobalData": function() { return /* binding */ getGlobalData; }
/* harmony export */ });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */

async function fetchAPI(path, urlParamsObject = {}, options = {}) {
  // Merge default and user options
  const mergedOptions = _objectSpread({
    headers: {
      "Content-Type": "application/json"
    }
  }, options); // Build request URL


  const queryString = qs__WEBPACK_IMPORTED_MODULE_0___default().stringify(urlParamsObject);
  const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ""}`)}`; // Trigger API call

  const response = await fetch(requestUrl, mergedOptions); // Handle response

  if (!response.ok) {
    console.error(response.statusText);
    throw new Error(`An error occured please try again`);
  }

  const data = await response.json();
  return data;
}
/**
 *
 * @param {Object} options
 * @param {string} options.slug The page's slug
 * @param {string} options.locale The current locale specified in router.locale
 * @param {boolean} options.preview router isPreview value
 */

async function getPageData({
  slug,
  locale,
  preview
}) {
  var _pagesData$data;

  // Find the pages that match this slug
  const gqlEndpoint = getStrapiURL("/graphql");
  const pagesRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        fragment FileParts on UploadFileEntityResponse {
          data {
            id
            attributes {
              alternativeText
              width
              height
              mime
              url
              formats
            }
          }
        }
        query GetPages(
          $slug: String
          $publicationState: PublicationState!
          $locale: I18NLocaleCode!
        ) {        
          pages(
            filters: { slug: { eq: $slug } }
            publicationState: $publicationState
            locale: $locale
          ) {
            data {
              id
              attributes {
                locale
                localizations {
                  data {
                    id
                    attributes {
                      locale
                    }
                  }
                }
                slug
                metadata {
                  metaTitle
                  metaDescription
                  shareImage {
                    ...FileParts
                  }
                  twitterCardType
                  twitterUsername
                }
                contentSections {
                  __typename
                  ... on ComponentSectionsBottomActions {
                    id
                    title
                    buttons {
                      id
                      newTab
                      text
                      type
                      url
                    }
                  }
                  ... on ComponentSectionsHero {
                    id
                    buttons {
                      id
                      newTab
                      text
                      type
                      url
                    }
                    title
                    description
                    label
                    picture {
                      ...FileParts
                    }
                  }
                  ... on ComponentSectionsFeatureColumnsGroup {
                    id
                    features {
                      id
                      description
                      icon {
                        ...FileParts
                      }
                      title
                    }
                  }
                  ... on ComponentSectionsFeatureRowsGroup {
                    id
                    features {
                      id
                      description
                      link {
                        id
                        newTab
                        text
                        url
                      }
                      media {
                        ...FileParts
                      }
                      title
                    }
                  }
                  ... on ComponentSectionsTestimonialsGroup {
                    id
                    description
                    link {
                      id
                      newTab
                      text
                      url
                    }
                    logos {
                      id
                      title
                      logo {
                        ...FileParts
                      }
                    }
                    testimonials {
                      id
                      logo {
                        ...FileParts
                      }
                      picture {
                        ...FileParts
                      }
                      text
                      authorName
                      authorTitle
                      link
                    }
                    title
                  }
                  ... on ComponentSectionsLargeVideo {
                    id
                    description
                    title
                    poster {
                      ...FileParts
                    }
                    video {
                      ...FileParts
                    }
                  }
                  ... on ComponentSectionsRichText {
                    id
                    content
                  }
                  ... on ComponentSectionsPricing {
                    id
                    title
                    plans {
                      description
                      features {
                        id
                        name
                      }
                      id
                      isRecommended
                      name
                      price
                      pricePeriod
                    }
                  }
                  ... on ComponentSectionsLeadForm {
                    id
                    emailPlaceholder
                    location
                    submitButton {
                      id
                      text
                      type
                    }
                    title
                  }
                }
              }
            }
          }
        }      
      `,
      variables: {
        slug: slug === "" ? null : slug,
        publicationState: preview ? "PREVIEW" : "LIVE",
        locale
      }
    })
  });
  const pagesData = await pagesRes.json(); // Make sure we found something, otherwise return null

  if (((_pagesData$data = pagesData.data) === null || _pagesData$data === void 0 ? void 0 : _pagesData$data.pages) == null || pagesData.data.pages.length === 0) {
    return null;
  } // Return the first item since there should only be one result per slug


  return pagesData.data.pages.data[0];
} // Get site data from Strapi (metadata, navbar, footer...)

async function getGlobalData(locale) {
  const gqlEndpoint = getStrapiURL("/graphql");
  const globalRes = await fetch(gqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `
        fragment FileParts on UploadFileEntityResponse {
          data {
            id
            attributes {
              alternativeText
              width
              height
              mime
              url
              formats
            }
          }
        }
        query GetGlobal($locale: I18NLocaleCode!) {
          global(locale: $locale) {
            data {
              id
              attributes {
                favicon {
                  ...FileParts
                }
                metadata {
                  metaTitle
                  metaDescription
                  shareImage {
                    ...FileParts
                  }
                  twitterCardType
                  twitterUsername
                }
                metaTitleSuffix
                notificationBanner {
                  type
                  text
                }
                navbar {
                  logo {
                    ...FileParts
                  }
                  links {
                    id
                    url
                    newTab
                    text
                  }
                  button {
                    id
                    url
                    newTab
                    text
                    type
                  }
                }
                footer {
                  logo {
                    ...FileParts
                  }
                  smallText
                  columns {
                    id
                    title
                    links {
                      id
                      url
                      newTab
                      text
                    }
                  }
                }
              }
            }
          }
        }      
      `,
      variables: {
        locale
      }
    })
  });
  const global = await globalRes.json();
  return global.data.global;
}

/***/ }),

/***/ "./utils/media.js":
/*!************************!*\
  !*** ./utils/media.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
function getStrapiMedia(url) {
  if (url == null) {
    return null;
  } // Return the full URL if the media is hosted on an external provider


  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  } // Otherwise prepend the URL path with the Strapi URL


  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${url}`;
}

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/error");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("qs");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvLi91dGlscy9hcGkuanMiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvLi91dGlscy9tZWRpYS5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS9leHRlcm5hbCBcIm5leHQtc2VvXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJuZXh0L2Vycm9yXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbXktbmV4dC1jb3Jwb3JhdGUvZXh0ZXJuYWwgXCJxc1wiIiwid2VicGFjazovL215LW5leHQtY29ycG9yYXRlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9teS1uZXh0LWNvcnBvcmF0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJDb21wb25lbnQiLCJjdHgiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiQXBwIiwiZGVmYXVsdCIsInJlbmRlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJNeUFwcCIsImdsb2JhbCIsIm1ldGFkYXRhIiwiZmF2aWNvbiIsIm1ldGFUaXRsZVN1ZmZpeCIsImF0dHJpYnV0ZXMiLCJnZXRTdHJhcGlNZWRpYSIsImRhdGEiLCJ1cmwiLCJtZXRhRGVzY3JpcHRpb24iLCJzaGFyZUltYWdlIiwib3BlbkdyYXBoIiwiaW1hZ2VzIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9ybWF0cyIsIm1hcCIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJjYXJkVHlwZSIsInR3aXR0ZXJDYXJkVHlwZSIsImhhbmRsZSIsInR3aXR0ZXJVc2VybmFtZSIsImFwcENvbnRleHQiLCJhcHBQcm9wcyIsImdsb2JhbExvY2FsZSIsImdldEdsb2JhbERhdGEiLCJyb3V0ZXIiLCJsb2NhbGUiLCJnZXRTdHJhcGlVUkwiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9BUElfVVJMIiwiZmV0Y2hBUEkiLCJ1cmxQYXJhbXNPYmplY3QiLCJvcHRpb25zIiwibWVyZ2VkT3B0aW9ucyIsImhlYWRlcnMiLCJxdWVyeVN0cmluZyIsInFzIiwicmVxdWVzdFVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJFcnJvciIsImpzb24iLCJnZXRQYWdlRGF0YSIsInNsdWciLCJwcmV2aWV3IiwiZ3FsRW5kcG9pbnQiLCJwYWdlc1JlcyIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJwdWJsaWNhdGlvblN0YXRlIiwicGFnZXNEYXRhIiwicGFnZXMiLCJsZW5ndGgiLCJnbG9iYWxSZXMiLCJzdGFydHNXaXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1R0FBNkM7Ozs7Ozs7Ozs7OztBQ0FoQzs7QUFBQSxJQUFJQSxzQkFBc0IsR0FBQ0MsbUJBQU8sQ0FBQyxzSUFBRCxDQUFsQzs7QUFBbUZDLGtCQUFBLEdBQW1CLElBQW5CO0FBQXdCQSxlQUFBLEdBQWdCLEtBQUssQ0FBckI7O0FBQXVCLElBQUlDLE1BQU0sR0FBQ0gsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFqQzs7QUFBb0QsSUFBSUcsTUFBTSxHQUFDSCxtQkFBTyxDQUFDLDBEQUFELENBQWxCOztBQUErQ0MsdUJBQUEsR0FBd0JFLE1BQU0sQ0FBQ0MsZUFBL0I7QUFBK0NILDJCQUFBLEdBQTRCRSxNQUFNLENBQUNFLG1CQUFuQztBQUF1RDtBQUN4VjtBQUNBO0FBQ0E7O0FBQUcsZUFBZUMsa0JBQWYsQ0FBa0M7QUFBQ0MsV0FBRDtBQUFXQztBQUFYLENBQWxDLEVBQWtEO0FBQUMsUUFBTUMsU0FBUyxHQUFDLE1BQUssQ0FBQyxHQUFFTixNQUFNLENBQUNPLG1CQUFWLEVBQStCSCxTQUEvQixFQUF5Q0MsR0FBekMsQ0FBckI7QUFBbUUsU0FBTTtBQUFDQztBQUFELEdBQU47QUFBbUI7O0FBQUEsTUFBTUUsR0FBTixTQUFrQlQsTUFBTSxDQUFDVSxPQUFQLENBQWVMLFNBQWpDLENBQTBDO0FBQUNNLFFBQU0sR0FBRTtBQUFDLFVBQUs7QUFBQ04sZUFBRDtBQUFXRTtBQUFYLFFBQXNCLEtBQUtLLEtBQWhDO0FBQXNDLFdBQU0sYUFBYVosTUFBTSxDQUFDVSxPQUFQLENBQWVHLGFBQWYsQ0FBNkJSLFNBQTdCLEVBQXVDRSxTQUF2QyxDQUFuQjtBQUFzRTs7QUFBdEg7O0FBQXVIUixlQUFBLEdBQWdCVSxHQUFoQjtBQUFvQkEsR0FBRyxDQUFDSyxtQkFBSixHQUF3QlYsa0JB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LEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUYrQjtBQUt4Q2tCLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLFdBQUssRUFBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wcztleHBvcnRzLk5leHRXZWJWaXRhbHNNZXRyaWM9X3V0aWxzLk5leHRXZWJWaXRhbHNNZXRyaWM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7Q29tcG9uZW50LGN0eH0pe2NvbnN0IHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e3JlbmRlcigpe2NvbnN0e0NvbXBvbmVudCxwYWdlUHJvcHN9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LHBhZ2VQcm9wcyk7fX1leHBvcnRzLmRlZmF1bHQ9QXBwO0FwcC5vcmlnR2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztBcHAuZ2V0SW5pdGlhbFByb3BzPWFwcEdldEluaXRpYWxQcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9hcHAuanMubWFwIiwiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgRGVmYXVsdFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwidXRpbHMvbWVkaWFcIjtcbmltcG9ydCB7IGdldEdsb2JhbERhdGEgfSBmcm9tIFwidXRpbHMvYXBpXCI7XG5pbXBvcnQgXCJAL3N0eWxlcy9pbmRleC5jc3NcIjtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIC8vIEV4dHJhY3QgdGhlIGRhdGEgd2UgbmVlZFxuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzO1xuICBpZiAoZ2xvYmFsID09IG51bGwpIHtcbiAgICByZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+O1xuICB9XG4gIGNvbnN0IHsgbWV0YWRhdGEsIGZhdmljb24sIG1ldGFUaXRsZVN1ZmZpeCB9ID0gZ2xvYmFsPy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHsvKiBGYXZpY29uICovfVxuICAgICAgPEhlYWQ+XG4gICAgICAgIHtmYXZpY29uICYmIChcbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXG4gICAgICAgICAgICBocmVmPXtnZXRTdHJhcGlNZWRpYShmYXZpY29uPy5kYXRhPy5hdHRyaWJ1dGVzPy51cmwpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L0hlYWQ+XG4gICAgICB7LyogR2xvYmFsIHNpdGUgbWV0YWRhdGEgKi99XG4gICAgICB7bWV0YWRhdGEgJiYgKFxuICAgICAgICA8RGVmYXVsdFNlb1xuICAgICAgICAgIHRpdGxlVGVtcGxhdGU9e2AlcyB8ICR7bWV0YVRpdGxlU3VmZml4fWB9XG4gICAgICAgICAgdGl0bGU9XCJQYWdlXCJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17bWV0YWRhdGEubWV0YURlc2NyaXB0aW9ufVxuICAgICAgICAgIHsuLi4obWV0YWRhdGEuc2hhcmVJbWFnZS5kYXRhICYmIHtcbiAgICAgICAgICAgIG9wZW5HcmFwaDoge1xuICAgICAgICAgICAgICBpbWFnZXM6IE9iamVjdC52YWx1ZXMoXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuc2hhcmVJbWFnZS5kYXRhPy5hdHRyaWJ1dGVzLmZvcm1hdHNcbiAgICAgICAgICAgICAgKS5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIHVybDogZ2V0U3RyYXBpTWVkaWEoaW1hZ2UudXJsKSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB0d2l0dGVyPXt7XG4gICAgICAgICAgICBjYXJkVHlwZTogbWV0YWRhdGEudHdpdHRlckNhcmRUeXBlLFxuICAgICAgICAgICAgaGFuZGxlOiBtZXRhZGF0YS50d2l0dGVyVXNlcm5hbWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICB7LyogRGlzcGxheSB0aGUgY29udGVudCAqL31cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gW1suLi5zbHVnXV0gcGFnZXMgc3RpbGwgZ2V0IFNTRy5cbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KTtcbiAgY29uc3QgZ2xvYmFsTG9jYWxlID0gYXdhaXQgZ2V0R2xvYmFsRGF0YShhcHBDb250ZXh0LnJvdXRlci5sb2NhbGUpO1xuXG4gIHJldHVybiB7XG4gICAgLi4uYXBwUHJvcHMsXG4gICAgcGFnZVByb3BzOiB7XG4gICAgICBnbG9iYWw6IGdsb2JhbExvY2FsZSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgcXMgZnJvbSBcInFzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCkge1xuICByZXR1cm4gYCR7XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICB9JHtwYXRofWA7XG59XG5cbi8qKlxuICogSGVscGVyIHRvIG1ha2UgR0VUIHJlcXVlc3RzIHRvIFN0cmFwaSBBUEkgZW5kcG9pbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBQYXRoIG9mIHRoZSBBUEkgcm91dGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB1cmxQYXJhbXNPYmplY3QgVVJMIHBhcmFtcyBvYmplY3QsIHdpbGwgYmUgc3RyaW5naWZpZWRcbiAqIEBwYXJhbSB7UmVxdWVzdEluaXR9IG9wdGlvbnMgT3B0aW9ucyBwYXNzZWQgdG8gZmV0Y2hcbiAqIEByZXR1cm5zIFBhcnNlZCBBUEkgY2FsbCByZXNwb25zZVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBUEkocGF0aCwgdXJsUGFyYW1zT2JqZWN0ID0ge30sIG9wdGlvbnMgPSB7fSkge1xuICAvLyBNZXJnZSBkZWZhdWx0IGFuZCB1c2VyIG9wdGlvbnNcbiAgY29uc3QgbWVyZ2VkT3B0aW9ucyA9IHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIC4uLm9wdGlvbnMsXG4gIH07XG5cbiAgLy8gQnVpbGQgcmVxdWVzdCBVUkxcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxcy5zdHJpbmdpZnkodXJsUGFyYW1zT2JqZWN0KTtcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcbiAgICBgL2FwaSR7cGF0aH0ke3F1ZXJ5U3RyaW5nID8gYD8ke3F1ZXJ5U3RyaW5nfWAgOiBcIlwifWBcbiAgKX1gO1xuXG4gIC8vIFRyaWdnZXIgQVBJIGNhbGxcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0VXJsLCBtZXJnZWRPcHRpb25zKTtcblxuICAvLyBIYW5kbGUgcmVzcG9uc2VcbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBBbiBlcnJvciBvY2N1cmVkIHBsZWFzZSB0cnkgYWdhaW5gKTtcbiAgfVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNsdWcgVGhlIHBhZ2UncyBzbHVnXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgVGhlIGN1cnJlbnQgbG9jYWxlIHNwZWNpZmllZCBpbiByb3V0ZXIubG9jYWxlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMucHJldmlldyByb3V0ZXIgaXNQcmV2aWV3IHZhbHVlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdlRGF0YSh7IHNsdWcsIGxvY2FsZSwgcHJldmlldyB9KSB7XG4gIC8vIEZpbmQgdGhlIHBhZ2VzIHRoYXQgbWF0Y2ggdGhpcyBzbHVnXG4gIGNvbnN0IGdxbEVuZHBvaW50ID0gZ2V0U3RyYXBpVVJMKFwiL2dyYXBocWxcIik7XG4gIGNvbnN0IHBhZ2VzUmVzID0gYXdhaXQgZmV0Y2goZ3FsRW5kcG9pbnQsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6IGBcbiAgICAgICAgZnJhZ21lbnQgRmlsZVBhcnRzIG9uIFVwbG9hZEZpbGVFbnRpdHlSZXNwb25zZSB7XG4gICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxuICAgICAgICAgICAgICB3aWR0aFxuICAgICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICAgICAgbWltZVxuICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgZm9ybWF0c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWVyeSBHZXRQYWdlcyhcbiAgICAgICAgICAkc2x1ZzogU3RyaW5nXG4gICAgICAgICAgJHB1YmxpY2F0aW9uU3RhdGU6IFB1YmxpY2F0aW9uU3RhdGUhXG4gICAgICAgICAgJGxvY2FsZTogSTE4TkxvY2FsZUNvZGUhXG4gICAgICAgICkgeyAgICAgICAgXG4gICAgICAgICAgcGFnZXMoXG4gICAgICAgICAgICBmaWx0ZXJzOiB7IHNsdWc6IHsgZXE6ICRzbHVnIH0gfVxuICAgICAgICAgICAgcHVibGljYXRpb25TdGF0ZTogJHB1YmxpY2F0aW9uU3RhdGVcbiAgICAgICAgICAgIGxvY2FsZTogJGxvY2FsZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbnMge1xuICAgICAgICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgICBtZXRhZGF0YSB7XG4gICAgICAgICAgICAgICAgICBtZXRhVGl0bGVcbiAgICAgICAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgc2hhcmVJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdHdpdHRlckNhcmRUeXBlXG4gICAgICAgICAgICAgICAgICB0d2l0dGVyVXNlcm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGVudFNlY3Rpb25zIHtcbiAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWVcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0JvdHRvbUFjdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBidXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0hlcm8ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0ZlYXR1cmVDb2x1bW5zR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0ZlYXR1cmVSb3dzR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNUZXN0aW1vbmlhbHNHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvZ29zIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVzdGltb25pYWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICBhdXRob3JOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aG9yVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0xhcmdlVmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zUmljaFRleHQge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNQcmljaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgcGxhbnMge1xuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBpc1JlY29tbWVuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgcHJpY2VQZXJpb2RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zTGVhZEZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBlbWFpbFBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgXG4gICAgICBgLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHNsdWc6IHNsdWcgPT09IFwiXCIgPyBudWxsIDogc2x1ZyxcbiAgICAgICAgcHVibGljYXRpb25TdGF0ZTogcHJldmlldyA/IFwiUFJFVklFV1wiIDogXCJMSVZFXCIsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0pO1xuXG4gIGNvbnN0IHBhZ2VzRGF0YSA9IGF3YWl0IHBhZ2VzUmVzLmpzb24oKTtcbiAgLy8gTWFrZSBzdXJlIHdlIGZvdW5kIHNvbWV0aGluZywgb3RoZXJ3aXNlIHJldHVybiBudWxsXG4gIGlmIChwYWdlc0RhdGEuZGF0YT8ucGFnZXMgPT0gbnVsbCB8fCBwYWdlc0RhdGEuZGF0YS5wYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgZmlyc3QgaXRlbSBzaW5jZSB0aGVyZSBzaG91bGQgb25seSBiZSBvbmUgcmVzdWx0IHBlciBzbHVnXG4gIHJldHVybiBwYWdlc0RhdGEuZGF0YS5wYWdlcy5kYXRhWzBdO1xufVxuXG4vLyBHZXQgc2l0ZSBkYXRhIGZyb20gU3RyYXBpIChtZXRhZGF0YSwgbmF2YmFyLCBmb290ZXIuLi4pXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2xvYmFsRGF0YShsb2NhbGUpIHtcbiAgY29uc3QgZ3FsRW5kcG9pbnQgPSBnZXRTdHJhcGlVUkwoXCIvZ3JhcGhxbFwiKTtcbiAgY29uc3QgZ2xvYmFsUmVzID0gYXdhaXQgZmV0Y2goZ3FsRW5kcG9pbnQsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcXVlcnk6IGBcbiAgICAgICAgZnJhZ21lbnQgRmlsZVBhcnRzIG9uIFVwbG9hZEZpbGVFbnRpdHlSZXNwb25zZSB7XG4gICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgIGFsdGVybmF0aXZlVGV4dFxuICAgICAgICAgICAgICB3aWR0aFxuICAgICAgICAgICAgICBoZWlnaHRcbiAgICAgICAgICAgICAgbWltZVxuICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgZm9ybWF0c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWVyeSBHZXRHbG9iYWwoJGxvY2FsZTogSTE4TkxvY2FsZUNvZGUhKSB7XG4gICAgICAgICAgZ2xvYmFsKGxvY2FsZTogJGxvY2FsZSkge1xuICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgIGZhdmljb24ge1xuICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1ldGFkYXRhIHtcbiAgICAgICAgICAgICAgICAgIG1ldGFUaXRsZVxuICAgICAgICAgICAgICAgICAgbWV0YURlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICBzaGFyZUltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB0d2l0dGVyQ2FyZFR5cGVcbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJVc2VybmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtZXRhVGl0bGVTdWZmaXhcbiAgICAgICAgICAgICAgICBub3RpZmljYXRpb25CYW5uZXIge1xuICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuYXZiYXIge1xuICAgICAgICAgICAgICAgICAgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGlua3Mge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICBuZXdUYWJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICAgICAgICBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzbWFsbFRleHRcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnMge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBsaW5rcyB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgICAgICAgICAgICBuZXdUYWJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gICAgICBcbiAgICAgIGAsXG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgbG9jYWxlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSk7XG5cbiAgY29uc3QgZ2xvYmFsID0gYXdhaXQgZ2xvYmFsUmVzLmpzb24oKTtcbiAgcmV0dXJuIGdsb2JhbC5kYXRhLmdsb2JhbDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlNZWRpYSh1cmwpIHtcbiAgaWYgKHVybCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8vIFJldHVybiB0aGUgZnVsbCBVUkwgaWYgdGhlIG1lZGlhIGlzIGhvc3RlZCBvbiBhbiBleHRlcm5hbCBwcm92aWRlclxuICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJodHRwXCIpIHx8IHVybC5zdGFydHNXaXRoKFwiLy9cIikpIHtcbiAgICByZXR1cm4gdXJsXG4gIH1cblxuICAvLyBPdGhlcndpc2UgcHJlcGVuZCB0aGUgVVJMIHBhdGggd2l0aCB0aGUgU3RyYXBpIFVSTFxuICByZXR1cm4gYCR7XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICB9JHt1cmx9YFxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9lcnJvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=