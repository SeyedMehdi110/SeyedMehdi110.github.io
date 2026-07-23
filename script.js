/**
 * Larki Apps website — minimal progressive enhancement.
 * Mobile navigation toggle and graceful image placeholders.
 */
(function () {
  "use strict";

  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    setOpen(false);

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(event.target) || toggle.contains(event.target)) return;
      setOpen(false);
    });
  }

  function initImageFallbacks() {
    document.querySelectorAll("img[data-fallback]").forEach(function (img) {
      function showFallback() {
        var label = img.getAttribute("data-fallback") || "Image unavailable";
        var placeholder = document.createElement("div");
        placeholder.className =
          img.getAttribute("data-fallback-class") || "image-placeholder";
        placeholder.setAttribute("role", "img");
        placeholder.setAttribute("aria-label", label);
        placeholder.textContent = label;

        if (img.classList.contains("app-icon") || img.classList.contains("brand-mark-img")) {
          placeholder.className = "app-icon-placeholder";
          if (img.classList.contains("brand-mark-img")) {
            placeholder.style.width = "2rem";
            placeholder.style.height = "2rem";
            placeholder.style.borderRadius = "0.4rem";
            placeholder.textContent = "LA";
          }
        }

        if (img.parentNode) {
          img.parentNode.replaceChild(placeholder, img);
        }
      }

      img.addEventListener("error", showFallback);

      // Handle already-broken cached images
      if (img.complete && img.naturalWidth === 0) {
        showFallback();
      }
    });
  }

  function initFaviconFallback() {
    var link = document.querySelector('link[rel="icon"]');
    if (!link) return;

    var test = new Image();
    test.onerror = function () {
      // Keep a simple data-URI mark if the app icon is missing
      link.href =
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='12' fill='%230f5c4c'/%3E%3Ctext x='32' y='40' text-anchor='middle' font-family='Segoe UI,Arial,sans-serif' font-size='22' font-weight='700' fill='white'%3ELA%3C/text%3E%3C/svg%3E";
    };
    test.src = link.href;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initNav();
      initImageFallbacks();
      initFaviconFallback();
    });
  } else {
    initNav();
    initImageFallbacks();
    initFaviconFallback();
  }
})();
