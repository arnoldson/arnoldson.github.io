// Click-to-load YouTube embeds. Each <button class="yt" data-yt="VIDEO_ID">
// shows a thumbnail. The heavy YouTube player only loads after a click.
document.querySelectorAll("button.yt[data-yt]").forEach(function (btn) {
  var id = btn.getAttribute("data-yt");
  if (!id || id.indexOf("YOUTUBE_ID") === 0) return; // placeholder: no video yet
  var img = document.createElement("img");
  img.src = "https://i.ytimg.com/vi/" + id + "/hqdefault.jpg";
  img.alt = "";
  img.loading = "lazy";
  img.decoding = "async";
  btn.prepend(img);
  btn.addEventListener("click", function () {
    var f = document.createElement("iframe");
    f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
    f.title = btn.getAttribute("aria-label") || "Video";
    f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    f.allowFullscreen = true;
    var box = document.createElement("div");
    box.className = "yt";
    box.appendChild(f);
    btn.replaceWith(box);
  }, { once: true });
});

// Autoplaying loops stay still for people who ask for reduced motion;
// they get the poster frame and normal controls instead.
if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video[autoplay]").forEach(function (v) {
    v.removeAttribute("autoplay");
    v.pause();
    v.controls = true;
  });
}
