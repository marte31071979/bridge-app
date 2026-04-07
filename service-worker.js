const CACHE_NAME = "bridge-app-v1";

const FILES_TO_CACHE = [
  "/bridge-app/",
  "/bridge-app/index.html",
  "/bridge-app/img/aperture.png",
  "/bridge-app/img/duefiori.png",
  "/bridge-app/img/sotto_aperture.png",
  "/bridge-app/img/risp_uno_nobile.png",
  "/bridge-app/img/risp_uno_minore.png",
  "/bridge-app/img/risp_uno_sa.png",
  "/bridge-app/img/intervento.png",
  "/bridge-app/img/p_m_s.png",
  "/bridge-app/img/risp_contro_avversa.png",
  "/bridge-app/img/avanzate.png",
  "/bridge-app/img/cue_bid.png",
  "/bridge-app/img/drury.png",
  "/bridge-app/img/rkcb.png",
  "/bridge-app/img/probabilita.png",
  "/bridge-app/img/attacco_di_asso.png",
  "/bridge-app/img/terzo_di_mano_morto_cartine.png",
  "/bridge-app/img/terzo_di_mano_morto_onore.png",
  "/bridge-app/img/terzo_di_mano_morto_singolo.png",
  "/bridge-app/img/smazzate_illustrative.png",
  "/bridge-app/img/correttivi_fit_conclamato.png",
  "/bridge-app/img/gazzilli.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});