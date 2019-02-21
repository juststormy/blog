/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [[
    [
        "pages\/2018-innovation-submission\/index.html",
        "Kc2F37KfgIli2WZc9tlS3w"
    ],
    [
        "pages\/item-c97a8e67-971e-4e92-8b38-e348c780d072\/index.html",
        "lwc5cBinwJAZd4RPoeTWgQ"
    ],
    [
        "pages\/common-web-component-state-question\/index.html",
        "rFpLKCMHcwl3UGblZHXhOA"
    ],
    [
        "pages\/ngdle-is-really-just-enigma-misspelled\/index.html",
        "lgGtYl3iFuNLHf4HRXPNQ"
    ],
    [
        "pages\/compartmentalizing\/index.html",
        "xHURumHXmUTuISmVNxG2w"
    ],
    [
        "pages\/occupy\/index.html",
        "G0G0eGGGkrJizkYJ5tOA"
    ],
    [
        "pages\/when-educators-left-the-lms\/index.html",
        "FYebpiMDks54DYbdki29rA"
    ],
    [
        "pages\/the-lms-is-cable-we-are-roku-expect-us\/index.html",
        "dwaqWP8VuNBrmI1pOo7sFw"
    ],
    [
        "pages\/innovations-four-ingredients\/index.html",
        "KXCSawGynZx4ackQ3aTBg"
    ],
    [
        "pages\/straddling-the-abyss\/index.html",
        "RiOK35hOWyDMxnTnLjChw"
    ],
    [
        "pages\/the-knowledge-decentralization-manifesto\/index.html",
        "c1qmrOSU3lV9YhS1V4b1A"
    ],
    [
        "pages\/the-knowledge-decentralization-manifesto-the-prolog\/index.html",
        "QXwqn1W8S3ndnrTHJsDlbQ"
    ],
    [
        "pages\/hax-apereo-piece\/index.html",
        "3wtIlp22rWc1r5c5Vtzqjw"
    ],
    [
        "pages\/the-perfect-cup-of-coffee\/index.html",
        "wW0yct2dnaMR4Sml59560w"
    ],
    [
        "pages\/watch-the-ripples-and-youll-miss-the-waves\/index.html",
        "i9F35KX26nL911LPIWPH9A"
    ],
    [
        "pages\/i-challenge-you-to-transform-education-together\/index.html",
        "RbjTdIJnGHlkCtztIPtXbA"
    ],
    [
        "pages\/ngdle-oer-cost-reduction-accessibility-and-decentralization-the-future-of-our-institutions\/index.html",
        "V7uGNfXakU0F8sykfPG7lg"
    ],
    [
        "pages\/actually-curing-edtech\/index.html",
        "0zDL2m3dUG7792zM8SBLhg"
    ],
    [
        "pages\/in-my-own-words-zero-cost-education\/index.html",
        "ygcsfxIF41gCzJOV3hM4tg"
    ],
    [
        "pages\/education-technology-action\/index.html",
        "MajD7feW4ezODj1rX82tg"
    ],
    [
        "pages\/pure-joy\/index.html",
        "3qQHzHd2zW7RfRY1bnjx9Q"
    ],
    [
        "pages\/creating-the-decentralized-instructional-experience-app\/index.html",
        "8UGRbB5yvswJrlVug5VRg"
    ],
    [
        "pages\/using-webcomponents-to-unearth-the-ngdle\/index.html",
        "m6cEkM77ivfqBpbwi9UzQ"
    ],
    [
        "pages\/this-is-not-reality\/index.html",
        "LLpQmeEv1qCaR0tsZ1Cs7Q"
    ],
    [
        "pages\/playing-for-40\/index.html",
        "ZRELyFWV2rx8gMWHoZ39BQ"
    ],
    [
        "pages\/dood\/index.html",
        "NGv4Jw5vc9azanQMtctnQ"
    ],
    [
        "pages\/generation-uine\/index.html",
        "fr6ZQdyULFkRmBRtsFesaA"
    ],
    [
        "pages\/birthday-party\/index.html",
        "PWK7cumYaiUmuwMLfPFIQ"
    ],
    [
        "pages\/alt-reality\/index.html",
        "Gq5rEmmHmYXsbJXhVqotxQ"
    ],
    [
        "pages\/end-of-summer\/index.html",
        "RcvDWozLMeZkiEqmaUPc0A"
    ],
    [
        "pages\/combating-the-rise-of-authoritarianism\/index.html",
        "0TKmgKtNBh7C10C1ho1nvQ"
    ],
    [
        "pages\/attacking-the-false-binary-of-politics\/index.html",
        "cwzxJzOAZrFyFd6jOKmA"
    ],
    [
        "pages\/singularity-digital-activism-and-saving-our-institutions\/index.html",
        "kCu4P5JYzYLI2XS0MMv9Xg"
    ],
    [
        "pages\/ddosa\/index.html",
        "lSLL0rkmGYEg9mA7qEpzEg"
    ],
    [
        "pages\/occutea-wallparty\/index.html",
        "MUUK3wT3UfuEPaQ2OgWyg"
    ],
    [
        "pages\/efficiency-as-activism\/index.html",
        "cTXr7xdS0Uj5DOdAoo5w"
    ],
    [
        "pages\/rate-of-perception\/index.html",
        "6h3rKMVw9XCpGgGQZ0mEDA"
    ],
    [
        "pages\/ministry-of-information\/index.html",
        "Om7DDLdfJ48z8XTgolO8Q"
    ],
    [
        "pages\/organic-deployment-architecture\/index.html",
        "qAGWhtMFizEFzG1hccSSaA"
    ],
    [
        "pages\/legacy-of-human-hierarchy\/index.html",
        "DtGTkHcPuMuuAeL7ZjeFQ"
    ],
    [
        "pages\/transform-control\/index.html",
        "JZ1ZWoVBCOLX7k5GfB9rlg"
    ],
    [
        "pages\/transforming-industry-through-information-altruism\/index.html",
        "N9hQaQ6qgxzZMp9NtZOLA"
    ],
    [
        "pages\/sustainable-systems-development-a-moral-issue\/index.html",
        "XF76Da3hA5YLOG2MdiQZQ"
    ],
    [
        ".\/",
        "2SjJLMMXALF1ctkJh9LD6g"
    ],
    [
        "\/",
        "bVndh2a7p9X3LJqTuhDw"
    ],
    [
        "index.html",
        "lZmlYRAXwEMH8nRnJlDa9g"
    ],
    [
        "manifest.json",
        "AGfHdezXINXD6lrtRwTEw"
    ],
    [
        "site.json",
        "t7gpKGID2Wt7jg2KWVifw"
    ],
    [
        "404.html",
        "dSqOj2FfwLtvzh03W3Gyg"
    ]
] ];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
  var url = new URL(originalUrl);
  if (url.pathname.slice(-1) === '/') {
    url.pathname += index;
  }
  return url.toString();
};

var cleanResponse = function (originalResponse) {
  // If this is not a redirected response, then we don't have to do anything.
  if (!originalResponse.redirected) {
    return Promise.resolve(originalResponse);
  }

  // Firefox 50 and below doesn't support the Response.body stream, so we may
  // need to read the entire body to memory as a Blob.
  var bodyPromise = 'body' in originalResponse ?
    Promise.resolve(originalResponse.body) :
    originalResponse.blob();

  return bodyPromise.then(function (body) {
    // new Response() is happy when passed either a stream or a Blob.
    return new Response(body, {
      headers: originalResponse.headers,
      status: originalResponse.status,
      statusText: originalResponse.statusText
    });
  });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
  dontCacheBustUrlsMatching) {
  // Create a new URL object to avoid modifying originalUrl.
  var url = new URL(originalUrl);

  // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
  // then add in the extra cache-busting URL parameter.
  if (!dontCacheBustUrlsMatching ||
    !(url.pathname.match(dontCacheBustUrlsMatching))) {
    url.search += (url.search ? '&' : '') +
      encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
  }

  return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
  // If the whitelist is empty, then consider all URLs to be whitelisted.
  if (whitelist.length === 0) {
    return true;
  }

  // Otherwise compare each path regex to the path of the URL passed in.
  var path = (new URL(absoluteUrlString)).pathname;
  return whitelist.some(function (whitelistedPathRegex) {
    return path.match(whitelistedPathRegex);
  });
};

var stripIgnoredUrlParameters = function (originalUrl,
  ignoreUrlParametersMatching) {
  var url = new URL(originalUrl);
  // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
  url.hash = '';

  url.search = url.search.slice(1) // Exclude initial '?'
    .split('&') // Split into an array of 'key=value' strings
    .map(function (kv) {
      return kv.split('='); // Split each 'key=value' string into a [key, value] array
    })
    .filter(function (kv) {
      return ignoreUrlParametersMatching.every(function (ignoredRegex) {
        return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
      });
    })
    .map(function (kv) {
      return kv.join('='); // Join each [key, value] array into a 'key=value' string
    })
    .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

  return url.toString();
};


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function (item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function (requests) {
    return requests.map(function (request) {
      return request.url;
    });
  }).then(function (urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return setOfCachedUrls(cache).then(function (cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, { credentials: 'same-origin' });
              return fetch(request).then(function (response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function (responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function () {

      // Force the SW to transition from installing -> active state
      return self.skipWaiting();

    })
  );
});

self.addEventListener('activate', function (event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.keys().then(function (existingRequests) {
        return Promise.all(
          existingRequests.map(function (existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function () {

      return self.clients.claim();

    })
  );
});


self.addEventListener('fetch', function (event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
      navigateFallback &&
      (event.request.mode === 'navigate') &&
      isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function (cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function (e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});