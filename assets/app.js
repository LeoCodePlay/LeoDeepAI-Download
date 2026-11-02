(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;
  root.classList.add("js");

  /* -------------------------------------------------------- 平台检测 */
  var ua = navigator.userAgent || "";
  var platform = "";
  var isIOS = /iPhone|iPad|iPod/i.test(ua) || (ua.indexOf("Macintosh") !== -1 && navigator.maxTouchPoints > 1);

  if (/Android/i.test(ua)) {
    platform = "android";
  } else if (!isIOS && /Macintosh|Mac OS X/i.test(ua)) {
    platform = "macos";
  } else if (/Windows/i.test(ua)) {
    platform = "windows";
  } else if (/Linux|X11/i.test(ua)) {
    platform = "linux";
  }

  var heroLink = doc.getElementById("hero-download");
  var heroLabel = doc.getElementById("hero-label");
  var heroMeta = doc.getElementById("hero-meta");

  var copy = {
    windows: { label: "下载 Windows 版", meta: "v0.5.3 · 47.1 MiB · x64" },
    macos: { label: "下载 macOS 版", meta: "v0.5.3 · Apple Silicon · 80.1 MiB" },
    linux: { label: "下载 Linux 版", meta: "v0.5.3 · AppImage · 152.6 MiB" },
    android: { label: "下载 Android 版", meta: "v0.1.3 · universal · 70.4 MiB" }
  };

  if (platform && copy[platform]) {
    var card = doc.querySelector('.platform[data-platform="' + platform + '"]');
    var primary = card && card.querySelector("[data-primary]");

    if (card) {
      card.classList.add("is-current");
      var tag = card.querySelector("[data-current-tag]");
      if (tag) tag.hidden = false;
    }

    if (primary && heroLink && heroLabel && heroMeta) {
      heroLink.href = primary.href;
      heroLabel.textContent = copy[platform].label;
      heroMeta.textContent = copy[platform].meta;
    }
  } else if (heroLink && heroLabel && heroMeta) {
    heroLink.href = "#downloads";
    heroLabel.textContent = "选择你的平台";
    heroMeta.textContent = "Windows · macOS · Linux · Android";
  }

  /* -------------------------------------------------------- 移动端菜单 */
  var menu = doc.getElementById("site-menu");
  var burger = doc.querySelector(".nav__burger");
  var mainEl = doc.querySelector("main");
  var footEl = doc.querySelector("footer");
  var lastFocus = null;

  function setMenu(open) {
    if (!menu || !burger) return;
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
    doc.body.classList.toggle("menu-open", open);
    if (mainEl) mainEl.inert = open;
    if (footEl) footEl.inert = open;

    if (open) {
      lastFocus = doc.activeElement;
      window.setTimeout(function () {
        var first = menu.querySelector(".menu__link");
        if (first && first.focus) first.focus({ preventScroll: true });
      }, 180);
    } else if (lastFocus && lastFocus.focus) {
      lastFocus.focus({ preventScroll: true });
      lastFocus = null;
    }
  }

  if (burger) {
    burger.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });
  }

  if (menu) {
    menu.addEventListener("click", function (event) {
      if (event.target.closest(".menu__link")) {
        setMenu(false);
        return;
      }
      if (event.target === menu || event.target.closest(".menu__inner") === null) {
        setMenu(false);
      }
    });
  }

  doc.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu && menu.classList.contains("is-open")) {
      setMenu(false);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 980 && menu && menu.classList.contains("is-open")) {
      setMenu(false);
    }
  });

  /* -------------------------------------------------------- 滚动揭示 */
  var revealEls = Array.prototype.slice.call(doc.querySelectorAll("[data-reveal]"));
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) {
        el.classList.add("is-in");
      });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

      revealEls.forEach(function (el) {
        io.observe(el);
      });
    }
  }

  /* -------------------------------------------------------- 复制校验值 */
  function flash(button, text) {
    if (!button) return;
    var original = button.getAttribute("data-original-label") || button.textContent;
    button.setAttribute("data-original-label", original);
    button.textContent = text;
    button.classList.add("is-done");
    window.setTimeout(function () {
      button.textContent = original;
      button.classList.remove("is-done");
    }, 1800);
  }

  function legacyCopy(text) {
    var area = doc.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "-1000px";
    area.style.opacity = "0";
    doc.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = doc.execCommand("copy");
    } catch (error) {
      ok = false;
    }
    doc.body.removeChild(area);
    return ok;
  }

  function copyText(text, button) {
    if (!text) return;
    if (legacyCopy(text)) {
      flash(button, "已复制");
      return;
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(
        function () {
          flash(button, "已复制");
        },
        function () {
          flash(button, "复制失败");
        }
      );
      return;
    }
    flash(button, "复制失败");
  }

  doc.addEventListener("click", function (event) {
    var copyButton = event.target.closest("[data-copy]");
    if (copyButton) {
      copyText(copyButton.getAttribute("data-copy"), copyButton);
      return;
    }
    var targetButton = event.target.closest("[data-copy-target]");
    if (targetButton) {
      var target = doc.getElementById(targetButton.getAttribute("data-copy-target"));
      if (target) copyText(target.textContent.trim(), targetButton);
    }
  });

  /* -------------------------------------------------------- 校验命令 */
  var snippets = {
    windows: {
      code: 'certutil -hashfile "LeoDeepAI_0.5.3_x64-setup.exe" SHA256',
      hint: "在安装包所在目录打开命令提示符后执行"
    },
    macos: {
      code: "shasum -a 256 ~/Downloads/LeoDeepAI_0.5.3_aarch64.dmg",
      hint: "在终端执行;文件名换成你实际下载的那个"
    },
    linux: {
      code: "sha256sum LeoDeepAI_0.5.3_amd64.AppImage",
      hint: "在终端执行;下的是 deb 就把文件名换成 .deb"
    },
    android: {
      code: "sha256sum LeoDeepAI_0.1.3_universal.apk",
      hint: "在 Termux 中执行,或把文件拷到电脑后用对应系统的命令"
    }
  };

  var codeEl = doc.getElementById("verify-code");
  var hintEl = doc.getElementById("verify-hint");
  var panelEl = doc.getElementById("verify-panel");
  var tabs = Array.prototype.slice.call(doc.querySelectorAll("[data-code-tab]"));

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var key = tab.getAttribute("data-code-tab");
      var snippet = snippets[key];
      if (!snippet) return;

      tabs.forEach(function (item) {
        var active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", active ? "true" : "false");
        item.tabIndex = active ? 0 : -1;
      });

      if (codeEl) codeEl.textContent = snippet.code;
      if (hintEl) hintEl.textContent = snippet.hint;
      if (panelEl) panelEl.setAttribute("aria-labelledby", tab.id);
    });

    tab.addEventListener("keydown", function (event) {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      var index = tabs.indexOf(tab);
      var next = tabs[(index + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      next.focus();
      next.click();
    });
  });
})();
