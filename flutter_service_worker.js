'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5f1fb393d24719b32d8abd886b285c95",
"assets/AssetManifest.bin.json": "b885eb72a4d01766fad815753acdae51",
"assets/AssetManifest.json": "44d7051da010ccb2d20309e1ca18965f",
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
"assets/NOTICES": "812ec0110a9251c074158ed1516cc83c",
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
"flutter_bootstrap.js": "90384e3bea458a74cca78c720c96d66e",
"icons/Icon-192.png": "d145b3eb9fcc4b3d10dc08d78f13d37f",
"icons/Icon-512.png": "e1df97a57319e95d1809ddf5b93f571e",
"icons/Icon-maskable-192.png": "d145b3eb9fcc4b3d10dc08d78f13d37f",
"icons/Icon-maskable-512.png": "e1df97a57319e95d1809ddf5b93f571e",
"index.html": "6fe3d35197c87fe58c455c05e665f0a7",
"/": "6fe3d35197c87fe58c455c05e665f0a7",
"main.dart.js": "4996ef528613c940fb2f7cff761378a8",
"manifest.json": "8926c5296aa6e800e7a7bfee57e76316",
"splash/img/dark-1x.png": "824859a3315fd26afc3db4e87d96b2c5",
"splash/img/dark-2x.png": "0ef9def667f6e8da6f5aed03a9131354",
"splash/img/dark-3x.png": "acc243a1022e154b8291ffaa64fb5076",
"splash/img/dark-4x.png": "8d1d61197240ca1126eba246619bcfea",
"splash/img/light-1x.png": "824859a3315fd26afc3db4e87d96b2c5",
"splash/img/light-2x.png": "0ef9def667f6e8da6f5aed03a9131354",
"splash/img/light-3x.png": "acc243a1022e154b8291ffaa64fb5076",
"splash/img/light-4x.png": "8d1d61197240ca1126eba246619bcfea",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
