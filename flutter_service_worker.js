'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "350d714f255ffe4b4c0fd99950844fa4",
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
".git/index": "fc8fb66f510d4cb2c49ec6a8f4c5ed66",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "52227f18ce9a53495fd39f9102c336ea",
".git/logs/refs/heads/main": "52227f18ce9a53495fd39f9102c336ea",
".git/logs/refs/remotes/origin/HEAD": "3558fd54c090621d602e6890cde2a24d",
".git/logs/refs/remotes/origin/main": "d29056982e12fde3fed80b51e1a456f5",
".git/objects/11/112247669b2bad086704324e34cefe6ca0a772": "f02385b3f6440e3a3728b0c5f47f431b",
".git/objects/1f/670e0cf1b5e9562d907f47e9748a6b29d6846f": "3e4f6b5bfcc0130c36df598021744ce2",
".git/objects/31/f9f5762935d519adc8b7f77b75c8239b38fb52": "98d3d497edd84a3c1405d260f34d3a8d",
".git/objects/34/b60069c061c001b8a0c46d3e1839fcf7659b83": "ee7c9cf4a62dea3e69aefc86ff7528d0",
".git/objects/54/893d1e48bad46d9be884a8ea7dde36715b6930": "53dd0b07bd3ea76829bfff9f2a3db073",
".git/objects/56/6a01bb0b8c771d55849c4d12ee4a79c37bc21c": "0cd3dd8e8da9aae564d0361bfabe60b2",
".git/objects/57/49ca907489d562e78e015f37c4ba5d0387b5fc": "ef3e6b7093005f9e05187228a74fc1c8",
".git/objects/64/7222601083607057782e8dfa7ec09e0030a777": "2ca9ef48f04ee6d7fff158413540a8e8",
".git/objects/65/e7e2ed9f9c4ce52f132feed3d1ffa9feabfe03": "6c09b578407716bcb83b57e1b965c6a0",
".git/objects/6b/e41cfb66f3240461dd1ee6c892240fb77ef693": "a56fd2e295a1c2fece2a0b77806636fc",
".git/objects/77/6b673b7ce74ea26e2f15621837b1fa35ebb942": "50a8e1cfcf2bb3b45e595e80c4f5102c",
".git/objects/81/2c9cf172ca6a69cf92427ff6d4de6701fa3ce1": "60705aab01cff3e0bf28e42016c1a0ab",
".git/objects/90/e1920cd3a6225a7de27d4b14f16446e34b83c5": "5f19795b769a47d4045dad62258ce2c3",
".git/objects/9a/acc7a4543cf1c840adfa60fc7abdca80f6524d": "196a391e2451a19c4f5ac5dd5ef93251",
".git/objects/a2/1b1d9f9f9b072019cb674d02923110369bcded": "970c0c12fc14e405d8ebf1235a0aaf8a",
".git/objects/a5/77ef4ca05eb3e95086de9ed9f562d6363c93b8": "e9d3a5ae5dddc00a02f389d0d79356c6",
".git/objects/ab/fddcd89c459ec388d1f5964e0f7549e82712af": "3ab98134d987e446f14324c770552615",
".git/objects/ae/7bfbfffcce2cf49204e16377c692be6acd0198": "80044933f955350cca286ba7cc20788f",
".git/objects/b2/c48d36829a4090e1ea5cf2f4e25cd376c49638": "fb7ee40f660710d821fe76cd36354e19",
".git/objects/b6/4890cd040db3c288a07cc5f6f2a587165c9162": "6866612d1588291c45bb897bcf72548e",
".git/objects/b9/23005271004c3c480be746272aa760b6ad705f": "6cfe2c571dec9dbe46274a99863f315a",
".git/objects/b9/e3aed9ebaf293e11a3a3cc5c2286d385ffa47c": "0bddd298bf2eff4c68df269312d62143",
".git/objects/c1/7f8efb29b33a14ddb530fb1836b44baf45864c": "142fb21313c095e376ae7f05e2e4af2c",
".git/objects/c8/5cbf936248f53e1aa9157621e5fbc4768bc184": "5d0c0e7ddd9bad4632ba474ba8533e25",
".git/objects/cf/fc22fdb9eba2ff099b25c30086f642a7e6b559": "b18ccbae65a5bb08ac1b687e6bc3e0fe",
".git/objects/d3/6b5da50167c5db66feb6d4b053896440e4e994": "b5afea587a7b97702f1ee5b8b7bb0103",
".git/objects/e2/f79639da9a3c59c167f0710cf2656c6c11eb21": "5ffe0c0725b7dfede6c09ccbedba294a",
".git/objects/e8/1d76952ebd69c5271200dca4215d520541963f": "7b3bdf220be97eff88d95d96bd6d1bca",
".git/objects/f3/f94ff3fa0717edafad3bc249e8ac94a0382341": "5b44bf7dbce6280413ca4b11c543271c",
".git/objects/fc/89c4e14aaf6d1be701b2391979203562d87d09": "065f8e6d3ad06e92b38a9705675699ae",
".git/objects/pack/pack-81967a9bd833a8eb24b76b91dfcd1827e921ed21.idx": "f568f102126400de5ea0a9077225a024",
".git/objects/pack/pack-81967a9bd833a8eb24b76b91dfcd1827e921ed21.pack": "a7a1cc87cc650cde0dc0d3424f4b5dfa",
".git/objects/pack/pack-81967a9bd833a8eb24b76b91dfcd1827e921ed21.rev": "a08ced10c54bc00d9fe7184d1bea1a54",
".git/packed-refs": "fa483fe78abf8fcafe8f89e800ec106f",
".git/refs/heads/main": "df2c5d6600815925665ab4ada4374372",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "df2c5d6600815925665ab4ada4374372",
"assets/AssetManifest.bin": "a9b7b787df30cce8cabd940565a46e39",
"assets/AssetManifest.bin.json": "515367fe0bd431f4a3f4d5d9ddb6198d",
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
"assets/assets/jahiz/1.svg": "889af3978d8678b37da6e4f2112424c4",
"assets/assets/jahiz/2.svg": "201020d0d1d6c14a78e9f648c9d049c5",
"assets/assets/jahiz/3.svg": "e12d1dbd93e3043ea11e4de8c580c6ff",
"assets/assets/jahiz/4.svg": "396e3eb8506b787f21d6adea7b334d2f",
"assets/assets/jahiz/5.svg": "d514e2eacdaefcf8e9e12fb2dce6bb3e",
"assets/assets/jahiz/6.svg": "f775b84b8630e2effbdfb48b62ec3e55",
"assets/assets/jahiz/7.svg": "07386857a2d1fc3b4abd7f4a67f39cbc",
"assets/assets/jahiz/8.svg": "f9744898f4af54dfa85cd6a658c8591a",
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
"assets/assets/wafrah/1.png": "b542b7dfe4c4cd5c7f23f004ceeb3ba9",
"assets/assets/wafrah/2.png": "4fac135e08222bea813a8956bafcd4d5",
"assets/assets/wafrah/3.png": "7d4ef8a39763f153492a102e6ddfa80a",
"assets/assets/wafrah/4.png": "2d024f7b02372770936f3ae6bca41b75",
"assets/assets/wafrah/5.png": "f90f4f748dd395b3d1abdb8dc9fcfebb",
"assets/assets/wafrah/6.png": "aa1d9ff78502636f6936bb594281ed20",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/fonts/MaterialIcons-Regular.otf": "dc875c5d7dbe7af5e81a162b62a9609d",
"assets/NOTICES": "f5b416237710ae4e7453d75ad10a92b0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2d3c7e919bcb605287fb2bda01315090",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0b8b7b1b69d1fc34e91666f19e7c08c5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "06f80f90c14a83bbd6dbb78bc9e0c05f",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "5fc9d70035e8ae3f69f0c6335b37e75b",
"icons/Icon-192.png": "d145b3eb9fcc4b3d10dc08d78f13d37f",
"icons/Icon-512.png": "e1df97a57319e95d1809ddf5b93f571e",
"icons/Icon-maskable-192.png": "d145b3eb9fcc4b3d10dc08d78f13d37f",
"icons/Icon-maskable-512.png": "e1df97a57319e95d1809ddf5b93f571e",
"index.html": "a0dcf5a8f1114dfb2543401a22d09078",
"/": "a0dcf5a8f1114dfb2543401a22d09078",
"main.dart.js": "f5b555a7aacd679f2ee93b820aa2e530",
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
