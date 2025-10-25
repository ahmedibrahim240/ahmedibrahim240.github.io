'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "350d714f255ffe4b4c0fd99950844fa4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "95a3eac203ad6172baa029f33db8353b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3558fd54c090621d602e6890cde2a24d",
".git/logs/refs/heads/main": "3558fd54c090621d602e6890cde2a24d",
".git/logs/refs/remotes/origin/HEAD": "3558fd54c090621d602e6890cde2a24d",
".git/objects/pack/pack-81967a9bd833a8eb24b76b91dfcd1827e921ed21.idx": "f568f102126400de5ea0a9077225a024",
".git/objects/pack/pack-81967a9bd833a8eb24b76b91dfcd1827e921ed21.pack": "a7a1cc87cc650cde0dc0d3424f4b5dfa",
".git/objects/pack/pack-81967a9bd833a8eb24b76b91dfcd1827e921ed21.rev": "a08ced10c54bc00d9fe7184d1bea1a54",
".git/packed-refs": "fa483fe78abf8fcafe8f89e800ec106f",
".git/refs/heads/main": "8f2f978e446d0743e2419221d98d0f58",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"assets/AssetManifest.bin": "6ffa76c81093df5c39c16302a14a254a",
"assets/AssetManifest.bin.json": "5f4ffd3f987791e18d6b2fa7e6996e37",
"assets/AssetManifest.json": "b17a937bc106c00c5919362956a3da7a",
"assets/assets/elite/1.svg": "bc1c4a8dc93bc196d5dbd88577e309f6",
"assets/assets/elite/2.svg": "dbf7834734b8a0d9f966e1ac551f6dee",
"assets/assets/elite/3.svg": "9927dd28a025f6834e1876f48e76a9b4",
"assets/assets/elite/4.svg": "e8bc1043b6c881a21728f7345a0c2656",
"assets/assets/elite/5.svg": "f88546515201d3c4f1e5b5bebfaaaa75",
"assets/assets/elite/6.svg": "32b71c13d3b8c68344233c665f6f3967",
"assets/assets/elite/7.svg": "5beca81b18c9bc2d0311b08d33bec019",
"assets/assets/ikhar/1.png": "f07d79e6cef0c62bc5a238a5a2d200e3",
"assets/assets/ikhar/2.png": "45d5c60c18c791691d7928b8ed2340e3",
"assets/assets/ikhar/3.png": "ac5616b0072e473465b6e545c143b37c",
"assets/assets/ikhar/4.png": "16a43178631c820d4bd1e32efa7a963e",
"assets/assets/ikhar/5.png": "9ab04edc3b77495cfb6e676f56f7e93b",
"assets/assets/ikhar/6.png": "9b2786ce5f3630ede2ed17e0f9f42f3b",
"assets/assets/ikhar/7.png": "b9041b1de380dd43394e3a211b4e5a10",
"assets/assets/ikhar/8.png": "d4b75b2e3e8eb322e7ea6fb32814d205",
"assets/assets/lite/1.svg": "b5f3dffab656e3b456cd6a9b6ff6e0f2",
"assets/assets/lite/2.svg": "f17a320c3dce16847ebccf263fc190b2",
"assets/assets/lite/3.svg": "85f3efd521172cadfef0ac11a7a78efb",
"assets/assets/lite/4.svg": "3bdc9e0464650a187d77afe67c947bfe",
"assets/assets/lite/5.svg": "0e69db6b217cd28e8a85b0cf2e51b650",
"assets/assets/lite/6.svg": "7e33b9e406c56b992f82ff3df6d67f9f",
"assets/assets/lite/7.svg": "1709f0dfb87da5cc1c8bbab6ee5837d5",
"assets/assets/lite/8.svg": "433423eb832ef34c675be8cea547d922",
"assets/assets/me.jpeg": "1058263c7ea4ba95fbfaeaff8cd39967",
"assets/assets/mylogo.png": "458767145c07971245b8717c1d9fe4bb",
"assets/assets/mylogo2.png": "dc1bcca286527c74f8c6dec3ffc37f8c",
"assets/assets/tayaar/1.svg": "e148f476e2d41cfddca7cee35d621934",
"assets/assets/tayaar/2.svg": "0bdd550336f66e22743db620e63da7ff",
"assets/assets/tayaar/3.svg": "382221625b10c5c62f0400284db7159e",
"assets/assets/tayaar/4.svg": "9d92fead8540b2df92621097953584d2",
"assets/assets/tayaar/5.svg": "12d641539cc921fb20c9d91c2732db36",
"assets/assets/tayaar/6.svg": "620dcf730d2a9574b7895f75548699f5",
"assets/assets/tayaar/7.svg": "8e012fd4b85478004cce06f131fc1cc7",
"assets/assets/trygc/1.svg": "9f42779097d632aa7bba05430ac1a1f6",
"assets/assets/trygc/2.svg": "0679bfd6b30812732fc5be95f5fad375",
"assets/assets/trygc/3.svg": "8e443858f2f96062ace302f6fa0c8df9",
"assets/assets/trygc/4.svg": "7b6049fc829538a387d9ce8b15b5b864",
"assets/assets/trygc/5.svg": "459a52cae621d8206a8b131f6620fdb3",
"assets/assets/trygc/6.svg": "0e5bd67fe21e9720fd93ba0c668fc119",
"assets/assets/trygc/7.svg": "6ed04d81d8fa20ed090a2d1bf9dc9595",
"assets/assets/trygc/8.svg": "d6f0879b5eb0cb878828f1770f8f5c56",
"assets/assets/trygc/9.svg": "04badfc93852ab180d7060353bbfb429",
"assets/assets/tyasart_clinet/1.png": "0136f13445c23fa229bde670ecf93677",
"assets/assets/tyasart_clinet/2.png": "2ee1544f0b0daace16cee26fa5b078dd",
"assets/assets/tyasart_clinet/3.png": "dabb850fcd720d19e3bc9675eafcc3b0",
"assets/assets/tyasart_clinet/4.svg": "3d24e99576fd091b47908eece820fe78",
"assets/assets/tyasart_clinet/5.svg": "0f8b76e14e0cf979dbe32d210159ae25",
"assets/assets/tyasart_clinet/6.svg": "db24def74d60d03ce91c9f192c4b846d",
"assets/assets/tyasart_clinet/7.svg": "a06ffa663aa87dcc2ae7404551c9c25c",
"assets/assets/tyasart_clinet/8.png": "55d2ec66dc086e9af6d8ecdf478d0f9d",
"assets/assets/tyasart_clinet/9.png": "966a5cfe798d351ea845c3c08fc80176",
"assets/assets/tyasart_com/1.png": "64d5c8d66b3d41a457ed67f7dccc5380",
"assets/assets/tyasart_com/2.png": "79b6aff526007f07c9263031fa643df8",
"assets/assets/tyasart_com/3.png": "e6c3c75da66c532b75347f29a26a92cc",
"assets/assets/tyasart_com/4.svg": "7a946dbd620c8a6c241d7fbd82bf2304",
"assets/assets/tyasart_com/5.svg": "16bffb1f47c637169b78cb5114708778",
"assets/assets/tyasart_com/6.svg": "8614732deba8cdba32d8d8c68caabd40",
"assets/assets/tyasart_com/7.svg": "3cec180222d20a34b144ae943318db39",
"assets/assets/tyasart_com/8.svg": "e21a8be4cd7ee0ea491b17c7dce5de8a",
"assets/assets/tyasart_com/9.svg": "075c15b801ebd92e87e3c82d016d8c5c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "dc875c5d7dbe7af5e81a162b62a9609d",
"assets/NOTICES": "67ca946612016a00393d460ce1020d10",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2d3c7e919bcb605287fb2bda01315090",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0b8b7b1b69d1fc34e91666f19e7c08c5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "06f80f90c14a83bbd6dbb78bc9e0c05f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "6dfc649ee600909e7654ebbb6dead95a",
"icons/Icon-192.png": "d145b3eb9fcc4b3d10dc08d78f13d37f",
"icons/Icon-512.png": "e1df97a57319e95d1809ddf5b93f571e",
"icons/Icon-maskable-192.png": "d145b3eb9fcc4b3d10dc08d78f13d37f",
"icons/Icon-maskable-512.png": "e1df97a57319e95d1809ddf5b93f571e",
"index.html": "a0dcf5a8f1114dfb2543401a22d09078",
"/": "a0dcf5a8f1114dfb2543401a22d09078",
"main.dart.js": "b4b2695b65dd30db78a9a87514588e49",
"manifest.json": "8926c5296aa6e800e7a7bfee57e76316",
"splash/img/dark-1x.png": "04da0cb8b3b6c6f63a78877967ec3739",
"splash/img/dark-2x.png": "6b74c1892809d78f241bcb1667a0b591",
"splash/img/dark-3x.png": "c28a0d36a9dd8f3f6dc4d089218442a5",
"splash/img/dark-4x.png": "0edf16f0244c7c93a7617d923bff5abd",
"splash/img/light-1x.png": "04da0cb8b3b6c6f63a78877967ec3739",
"splash/img/light-2x.png": "6b74c1892809d78f241bcb1667a0b591",
"splash/img/light-3x.png": "c28a0d36a9dd8f3f6dc4d089218442a5",
"splash/img/light-4x.png": "0edf16f0244c7c93a7617d923bff5abd",
"version.json": "754606db2b8b2c081a5ea16723ff35e8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
