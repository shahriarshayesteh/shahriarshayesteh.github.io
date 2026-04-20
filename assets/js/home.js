(function () {
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.querySelectorAll('a[href*="#"]').forEach(function (link) {
    var url;

    try {
      url = new URL(link.href, window.location.href);
    } catch (error) {
      return;
    }

    if (!url.hash || url.hash.length < 2) {
      return;
    }

    var samePath =
      url.pathname.replace(/\/$/, "") === window.location.pathname.replace(/\/$/, "");

    if (!samePath) {
      return;
    }

    link.addEventListener("click", function (event) {
      var target = document.querySelector(url.hash);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
      window.history.pushState(null, "", url.hash);
    });
  });

  var revealItems = document.querySelectorAll(".reveal-on-scroll");

  if (!revealItems.length) {
    return;
  }

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealItems.forEach(function (item) {
    observer.observe(item);
  });
})();
