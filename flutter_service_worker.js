'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "976f910fc4c8c4e1cd6ba9966e56144f",
"assets/AssetManifest.bin.json": "3f8d0e424a3bb0aa69c563e76424c388",
"assets/AssetManifest.json": "9665b37c6da8882bf4244d28f8ef8360",
"assets/FontManifest.json": "1ac499b87a11ae66ab3c0c62aea30223",
"assets/fonts/GreatVibes-Regular.ttf": "f8ab2af266e7331cc085e495d82fecf8",
"assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/fonts/MaterialIcons-Regular.otf": "2e9d165fe72741f7900e4f5a42ec0ba0",
"assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/fonts/PlayfairDisplay-Bold.ttf": "49f1780c3b75c97c4066fcd3c92fa7c7",
"assets/fonts/PlayfairDisplay-Medium.ttf": "d9326bc208b6cd57333a4f40e79ea5fb",
"assets/fonts/PlayfairDisplay-Regular.ttf": "74011d563a281b7289399d618bfb606f",
"assets/fonts/PlayfairDisplay-SemiBold.ttf": "e79deeab54786aab128ce2abb2f20f0e",
"assets/icons/alert.json": "4ae873cf0f5da4910c2ccbe76b4b3637",
"assets/icons/bell.json": "c74c3647bffd29c94daaeb02e86a7f6b",
"assets/icons/bells.json": "bc09fa950052242b775d3eb3f992bda7",
"assets/icons/bellWhite.json": "b1dedcc4f04c87ba1d9faae1aa6bbf53",
"assets/icons/done_green.json": "5a8b16dcbc59861c5b35bd75dd8b3c3b",
"assets/icons/eyeDark.json": "290d7d7402bbf65faaacc907f135741c",
"assets/icons/eyeWhite%2520Off.json": "24c56fff53e1fc31df8cec8862e018b2",
"assets/icons/eyeWhite.json": "39e1e0174318a0cc9fc10663f8c4eb8b",
"assets/icons/refresh.json": "f2bd686998c226b75013b7e21a1e1d6e",
"assets/icons/refreshWhite.json": "f2bd686998c226b75013b7e21a1e1d6e",
"assets/icons/UploadDark.json": "68596d38a00bfc5c98ed4386faa7fa74",
"assets/icons/UploadWhite.json": "0f598183e3d221a793f18325e94cf77f",
"assets/images/404.png": "8f1956ee8d052bd4f6601ff3d7acb9ba",
"assets/images/Building.png": "a129be337062be8dbce3af231551d9d6",
"assets/images/Contract.png": "30d9075cc0ab28e92b4d882bbcec72cc",
"assets/images/DarkLogo.png": "1e4bf644bd1717b54acc25373406bb1d",
"assets/images/Edit.png": "67e2e3e51e933bc203f5e9585429cf27",
"assets/images/Elevo_HQ.png": "7e23d4ebf6c15e0a3c478394d20cbf3c",
"assets/images/emergency.png": "5fc648b50bc1376b10add9328288632f",
"assets/images/Faults.png": "85f4f47c17fbbc13397ae9d16b21d1c6",
"assets/images/folder.png": "723c30b71c49ba1831bfd85d8a738a05",
"assets/images/ic_launcher.png": "34149ebc0e866d8711427a858db0b56c",
"assets/images/ic_launcher_ios.png": "669b226c6a4e3ad66a310deefbca6371",
"assets/images/Logo.png": "d31f0a024193101c8b8413e2aa421fa6",
"assets/images/maintenance.png": "031c7278c34958f6d9ee46b2160ff404",
"assets/images/members.png": "3b7c84d54363ddd5949c704ea991284d",
"assets/images/milestone.png": "96def3debdeb702c6acf09d6184ed9d3",
"assets/images/milestones.png": "8c7b03fc78665988968bbd6497ecdf21",
"assets/images/Payment.png": "e32bfd17fb9e0dff87ca7a3207618435",
"assets/images/payments.png": "c2741cd0ca6eba1dbf8c88fdc1d004c5",
"assets/images/Requests.png": "51acef050ac501e2c3cad1491807c567",
"assets/images/search.png": "548e1cdbd34c902e94ca10be6fc151e4",
"assets/images/sign%2520contract.png": "4b1431584131eaf11f97cf338d0e74a0",
"assets/NOTICES": "e81b35b6a577751dbee37f4268725096",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "835b9f906feb94fc291e0cceb795433d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4a5197df2be7b9fa1df2719ed25b4b51",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/timezone/data/latest_all.tzf": "df0e82dd729bbaca78b2aa3fd4efd50d",
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
"favicon.png": "7fd4d5e3f746b180be3786f2769bb56b",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ec11f8de564683f46d3a00c00146e53c",
"icons/Icon-192.png": "aa525253c529696b2ee57ba5208231ad",
"icons/Icon-512.png": "cf5b3097b78b2655f70609507fa54ddf",
"icons/Icon-maskable-192.png": "09ebf98ba8c493e9b2f4234d2fe7ae3a",
"icons/Icon-maskable-512.png": "34149ebc0e866d8711427a858db0b56c",
"index.html": "ab0ac05d94bc91e446e235bbf37d1c6f",
"/": "ab0ac05d94bc91e446e235bbf37d1c6f",
"main.dart.js": "55f88d7c71d4eba1139b3ef64cc72906",
"manifest.json": "02655fbc5b4f12522b12e8dcb7613fbf",
"version.json": "fd33809db7dbc74b510d192be5bffa28"};
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
