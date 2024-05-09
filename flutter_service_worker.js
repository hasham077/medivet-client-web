'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d1a197c7a011a5fac5fdcc26e23c363f",
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
".git/index": "b9a520b6d67fb9cf1ecedae291cbcf9b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e02f9c1d52b7990f0c424df1d54fa1d0",
".git/logs/refs/heads/main": "b1d0fd7af43ec6dfef9e0dc8eb6d87a4",
".git/logs/refs/remotes/origin/main": "3305f81afa260da48bbf74fa1cf3c823",
".git/objects/01/d43a8ccfba3c4097f3f4d22d6684ea9734e94e": "5fae733713f043590ef2014eb06c4aeb",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/c46170c8d5b1b87684bbb5f9bbcb8a64d6af67": "b3b8b6fedf44ea4f57cafca095c3635d",
".git/objects/0a/46cd88dab09fb4c91b8a43d0accde2012712a2": "89eb9a779f31e7c68e7bb803061d211d",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/b56da737ab1b2f6aac12c70d8e1fbacbf1f182": "658cb562355203627c2dd912cda2e42f",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/98debb73ebbf9c8ecba5393f2117fa4079cac3": "b71eef71defe27ab7e631a7487c51de4",
".git/objects/1b/a3ac7138d39c4a9b4d036539f3065bb11cd801": "b1e48a3bc602207deaae45de3b85f360",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/ec4fd727c96f837e977acf8a1b50b325ca3ff2": "542432690f6a91f80d70ece917653051",
".git/objects/2a/1019dfdd3f0fdd67e38f3603df3ced465930da": "bd4b48b96d7c571cb12627b8d001ff6f",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/4545ac52233016ef61f535802d60dc6339a688": "85bfdc2e11bb91cfa2610626f4e9ed38",
".git/objects/32/ab4eb5c9c2c2367f2fd08729f188dd0a2826d9": "7ed30080b260b0de7dc870380719ea2e",
".git/objects/37/10f6057e778ddcd91a4203ea4d3ce4947f7de0": "9c9a4d7179cbdc0eca2f06f4f6888e32",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/69166272c4e535dbecebbbc216ec27df04a5e0": "49a3a720a56a14ec64c268c1963e8b28",
".git/objects/41/eef5b0ca0ab99307fecd18d271e5de31068e34": "440b33710964f60152a143a0b2fdee5a",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/28f9a79867971189b129f5061abd75037173cc": "b38579723e7239eb42ba3d7b2fe60ab2",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/f4e2f0d2baf47e4650983350a2b05a336ffb48": "fc0b8ae96daf712a5530f4437205cef2",
".git/objects/50/00f39adf3d3798317cdc6b943fc8bee4b6ee9d": "dd587eb9041fa995d659e9d998749d82",
".git/objects/50/be29286a6d39a790c5f7ad2c261317344c36ac": "a0bc2cf6f86317863b74bf4690c7b067",
".git/objects/53/2134860282654f265cb4302e05fb2ca40b578b": "f42c752ab71a37e35758bf6df9a62f35",
".git/objects/58/2b3d97b1c260fde20b983f5ebc34e801316473": "4a15ea2e628f7607cc4ce3b92c3e365b",
".git/objects/58/d2f31dfa69f3905ee34a41c2b9d52900ca4ad1": "d503c7e89cd35c5189d6b9cb280ab7ff",
".git/objects/61/99cea088f03e2fd09955732157330b55718d91": "0040687e03b8dae5d7c4b92ff497c1dc",
".git/objects/68/04f18ec5b4292b88be28acdd11768ec77cf9d1": "7614742ee31031d56c062059052f042f",
".git/objects/69/2f18b655c08618b0075bae9e140335bec9a334": "23ebdfcb3e5b2335cbd2af8b60e6a4a6",
".git/objects/6d/7503b1b6a797a93f6d6e7f1279613fe0973938": "e903415df33b39f58c902fc11604f03d",
".git/objects/71/0e53f9d37410d0dc9b680fea89a903c26bf5cb": "2006ffca6e099d58a5a422f1eca39e92",
".git/objects/71/901ef38a290bddcc7ee47c2674a525c0e74a27": "2a7cc4df0b744ca53b7fa2aedac5fb83",
".git/objects/79/41f30a6cc137c6751485eb6ea5b7c95cd076cf": "5c9953652446ffc502cb4d5bf8036299",
".git/objects/7e/bfe9327a3cd657969b7b8cb05b43e6d2fc3104": "d4c212a9d90221ded36629f72033e03f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/ca539ad1859e82f51af0331d80da1efebeb4e2": "8857eb7ee43f08c53aba23f19a04bdc7",
".git/objects/9a/bc49dafca4522cccb05fa28deac34c5ca9b287": "4f9218682e3cd6621feb384995909659",
".git/objects/9c/f45f50fb80599a321d91bf734842b982efeb93": "5b709ea7375b0e42ddfd4603398a3423",
".git/objects/9d/a5796e0d60a61f4c6c85bddc52383f288c4434": "2c9492f5f1476cf0c83911c32dc4f6c0",
".git/objects/a0/469d0fb82198a0d3a9d947741a75a5864796f7": "b508cfd7f91d70952215eaf8b594b184",
".git/objects/a2/fbaa4e686d14461bef3311d4bd7a225ec3d400": "bdef3544bc72af91b333ced2b5e68c66",
".git/objects/a7/7a373cbe7d51836ee53290900648aefe147d31": "816a04481546fd274e9b895fbeae2dae",
".git/objects/ad/f2b5c563524150acb94061352c532705cdce8d": "8436413bd1834e109b78b36edef884ff",
".git/objects/b0/9d07e1a325f38f206ff8bdc24d9d2590274d9a": "2cfec6be4164e4863dd2c0de94ce9b7d",
".git/objects/b2/a083c3a89197d1688a0c5586d3cd888a0533b6": "a0064ef9a931867451b13be47c973780",
".git/objects/b4/7da2d744fb65a88fbad11751f79572dbdf4b7b": "9474c6c6415ebae026917c2850115924",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/a7d368a2df3d876c26a2111f43bb45ae5b0a7e": "27b21940eb9c8182b8ed24d241ed09b8",
".git/objects/ce/533d00c59c90c50596c01635addc92771f229c": "d2b195411fa4a1d4f05432fb6e75896f",
".git/objects/ce/ebe01cf2784f0a1f2708af525d3401cb81a8cf": "3ff52f88dc22f7eea84dbd40ed1850d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/9f5e8ca96dc990abdedc8c00d38f83703ddf2e": "dcd3f35d73546dea7c5912553b1ffd70",
".git/objects/e3/f3152beec068a5a589f9db48b93f75fae6e740": "2ac031feb16cac961da80d9b5f58d469",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b9f409652acf557968f1435255cf0e6b92c7db": "1d07920174ddd03ef86d8d6229717851",
".git/objects/f1/4191502d0e5967bef0f8d0edf1af7f82f2c6c9": "5bc0f3877a92ec99c833a8c453bf3d0a",
".git/objects/f5/17e915a47760875c38c5ce0c63d0b8c252b914": "f3abd452893c6d0ca1543ad56ea0fbe8",
".git/objects/f6/1ae02106487bb0de17b03ed41a57c610d4028d": "b9c13e59771fd1295c56575be0f9663d",
".git/objects/f9/7ec04fe22407de13222754fdd79b5dd9b560a8": "4c02c556594cae43ddcac9cfbff03ee2",
".git/refs/heads/main": "2a26f63c5e077f857d7a2086117603c6",
".git/refs/remotes/origin/main": "2a26f63c5e077f857d7a2086117603c6",
"assets/AssetManifest.bin": "bb6d281234fc7b50e638bfe1701aeaed",
"assets/AssetManifest.bin.json": "06dea6b04417bee2693a3b8d515e2e15",
"assets/AssetManifest.json": "047c8964a9fa240180a49549e76f5cf7",
"assets/assets/imgs/accessoriesImg.png": "b05d7d39695617b0915c2aea544b1db5",
"assets/assets/imgs/foodImg.png": "577877d3b09e46c51cb8126cb1bc7a1a",
"assets/assets/imgs/masterCardImg.png": "e8ad7cb84bd3966bcd0ca8dc5b4fd7c2",
"assets/assets/imgs/medicineImg.png": "caf8d3de3f3b78bc1f929ebe6820bdf3",
"assets/assets/imgs/offShapeImg.png": "9f6c5092a850ca3d9345dfd1623e2dee",
"assets/assets/imgs/splashImg.png": "38f5f16f3c9ba3243bbdae1ba704e8ad",
"assets/assets/svgs/bankSvg.svg": "ec5a74655716c7cb07933aef9cf0d411",
"assets/assets/svgs/bellSvg.svg": "b0836b5e16af943bcb358df333fd1275",
"assets/assets/svgs/cartSvg.svg": "f26a5c25f6006416a7f10fa3a82db13c",
"assets/assets/svgs/circularDollarSvg.svg": "a34cacb813342d93540a3bed80ebfbc6",
"assets/assets/svgs/dashboardSvg.svg": "b0a6581a7b6e52682fb3f4145fd2c86c",
"assets/assets/svgs/deleteSvg.svg": "e04c70fb9ab4f89e07b9686855c43557",
"assets/assets/svgs/filterSvg.svg": "d0b014926ff283ae9a364f0b7dca5fcd",
"assets/assets/svgs/homeSvg.svg": "18d46add640e1fe05749077c82ab4ea4",
"assets/assets/svgs/logoutSvg.svg": "3ca722bb7a98315fc057ead485989bb2",
"assets/assets/svgs/ordersSvg.svg": "49e8c73aeacb55d4893259776bebc2ae",
"assets/assets/svgs/paymentSvg.svg": "adf3857c732049df15dad1006459daf2",
"assets/assets/svgs/productsSvg.svg": "cb35309c3ff8f394421f3a7af21b732b",
"assets/assets/svgs/profileSvg.svg": "ce7ab779572f80b953046c17853a7803",
"assets/assets/svgs/shoppingBasketSvg.svg": "5c05343d0fddcaa3429344c38498ab56",
"assets/assets/svgs/wifiSvg.svg": "4088db22120d78edbe8641a7b3cd2b11",
"assets/FontManifest.json": "d1e68418f8e7c6ba38a16baa5c2dc076",
"assets/fonts/EncodeSans-Black.ttf": "c5d6d6bcfc6a87269cc0adbe81103e47",
"assets/fonts/EncodeSans-Bold.ttf": "7ba5dda3a88fbcfda405e74b4e5e502b",
"assets/fonts/EncodeSans-ExtraBold.ttf": "12be66c693224944fbf6b93f7f5e320c",
"assets/fonts/EncodeSans-ExtraLight.ttf": "abd0218fa7f203abc64ab4826e087973",
"assets/fonts/EncodeSans-Light.ttf": "637ffd9c789aa1f1b789bce660440d6c",
"assets/fonts/EncodeSans-Medium.ttf": "6271a1cbb04b090da20e409e4e253458",
"assets/fonts/EncodeSans-Regular.ttf": "d7426df9a3c611e03e2422fbdc206cb7",
"assets/fonts/EncodeSans-SemiBold.ttf": "5249a0f60a2d9d0e10bdce0b230ea5b3",
"assets/fonts/EncodeSans-Thin.ttf": "9bfecbed17b9b49e47cc41f14a056681",
"assets/fonts/MaterialIcons-Regular.otf": "8c1dc49aa965a9cf65334f8c1adb35be",
"assets/NOTICES": "c9e8f2c5878d358db3232919eb705a2c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "aab43e8ef69de60170b916539551f939",
"/": "aab43e8ef69de60170b916539551f939",
"main.dart.js": "3ebcbf01c19634f0c1ad8b74d59e26cf",
"manifest.json": "b219383d8b01f47ca70e5fdd5ee1e210",
"version.json": "36d179b0fd2e3ff8cf1a975cd348dc6c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
