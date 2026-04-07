const CACHE_NAME = "bridge-app-v1";

const FILES_TO_CACHE = [
  "index.html",
  "./img/aperture.png",
  "./img/duefiori.png",
  "./img/sotto_aperture.png",
  "./img/risp_uno_nobile.png",
  "./img/risp_uno_minore.png",
  "./img/risp_uno_sa.png",
  "./img/intervento.png",
  "./img/p_m_s.png",
  "./img/risp_contro_avversa.png",
  "./img/avanzate.png",
  "./img/cue_bid.png",
  "./img/drury.png",
  "./img/rkcb.png",
  "./img/probabilita.png",
  "./img/attacco_di_asso.png",
  "./img/terzo_di_mano_morto_cartine.png",
  "./img/terzo_di_mano_morto_onore.png",
  "./img/terzo_di_mano_morto_singolo.png",
  "./img/smazzate_illustrative.png",
  "./img/correttivi_fit_conclamato.png",
  "./img/gazzilli.png"
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