(function () {
  "use strict";

  var ua = navigator.userAgent || "";
  var platform = "";
  var isIOS = /iPhone|iPad|iPod/i.test(ua) || (ua.indexOf("Macintosh") !== -1 && navigator.maxTouchPoints > 1);

  if (/Android/i.test(ua)) {
    platform = "android";
  } else if (!isIOS && /Macintosh|Mac OS X/i.test(ua)) {
    platform = "macos";
  } else if (/Windows/i.test(ua)) {
    platform = "windows";
  }

  var heroLink = document.getElementById("hero-download");
  var heroLabel = document.getElementById("hero-label");
  var heroMeta = document.getElementById("hero-meta");

  var copy = {
    windows: {
      label: "下载 Windows 版",
      meta: "v0.5.2 · 47.1 MiB · x64"
    },
    macos: {
      label: "下载 macOS 版",
      meta: "v0.5.0 · Apple Silicon · 80.0 MiB"
    },
    android: {
      label: "下载 Android Debug 版",
      meta: "v0.1.2 · universal · 173.3 MiB"
    }
  };

  if (platform && copy[platform]) {
    var card = document.querySelector('.platform[data-platform="' + platform + '"]');
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
    heroMeta.textContent = "Windows · macOS · Android";
  }

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
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "-1000px";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    var ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (error) {
      ok = false;
    }
    document.body.removeChild(area);
    return ok;
  }

  function copyText(text, button) {
    if (!text) return;

    // 先走同步复制:它不需要权限、不依赖 Promise 何时 settle,
    // 在本地预览、旧浏览器和 file:// 下都能给出即时反馈。
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

  document.addEventListener("click", function (event) {
    var copyButton = event.target.closest("[data-copy]");
    if (copyButton) {
      copyText(copyButton.getAttribute("data-copy"), copyButton);
      return;
    }

    var targetButton = event.target.closest("[data-copy-target]");
    if (targetButton) {
      var target = document.getElementById(targetButton.getAttribute("data-copy-target"));
      if (target) copyText(target.textContent.trim(), targetButton);
    }
  });

  var snippets = {
    windows: {
      code: 'certutil -hashfile "LeoDeepAI_0.5.2_x64-setup.exe" SHA256',
      hint: "在安装包所在目录打开命令提示符后执行"
    },
    macos: {
      code: "shasum -a 256 ~/Downloads/LeoDeepAI_0.5.0_aarch64.dmg",
      hint: "在终端执行;文件名换成你实际下载的那个"
    },
    android: {
      code: "sha256sum LeoDeepAI_0.1.2_universal-debug.apk",
      hint: "在 Termux 中执行,或把文件拷到电脑后用对应系统的命令"
    }
  };

  var codeEl = document.getElementById("verify-code");
  var hintEl = document.getElementById("verify-hint");
  var panelEl = document.getElementById("verify-panel");
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-code-tab]"));

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
